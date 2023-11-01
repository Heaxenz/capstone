import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import './Characters.css'

const Characters = ({ pageNumber, nextPage, prevPage, buttonVal }) => {
    let navigate = useNavigate();
    const {num} = useParams();
    console.log(num)
    const [character, setCharacters] = useState('');
    const [loading, setLoading] = useState(true)
    const [pageSize, setPageSize] = useState(10)



    useEffect(() => {
        async function fetchCharacters() {
            try {
                let res = await axios.get(`https://anapioficeandfire.com/api/characters?page=${pageNumber}&pagesize=${pageSize}`)
                setCharacters(res.data)
                setLoading(false)
            } catch (e) {
                console.log(e)
            }
        }

        fetchCharacters();
    }, [num, pageNumber, loading, pageSize])


    const navigateToCharacter = (url) => {
        try {
            const characterId = url.split('/').pop();
            navigate(`/character/${characterId}`);

        } catch (e) {
            console.log(e)
        }

    }

    // const selectOption = ()

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }


    return (

        <div>
            <div className="main-div">
                <h1 className="header">Characters</h1>
                <div className='select-div'>
                    <p>Characters per Page: </p>
                    <select className="selector" onChange={(e) => setPageSize(e.target.value)}>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                    </select>
                </div>
                {character.map(data => (
                    <div className="character-details" key={data.url}>

                        <button className="character-details"
                            onClick={() => navigateToCharacter(data.url)}>
                            {data.name === "" ? data.aliases : data.name}
                            {data.culture === '' ? '' : `, ${data.culture}`},
                            {data.gender === 'Female' ? ' ♀️' : ' ♂️'}

                        </button>
                    </div>
                ))}

            </div>

            <div className="pages-div">
                {pageNumber > 1 ? <button className="buttons" onClick={prevPage} >Prev</button> : null}
                <button className="buttons main-button" >{pageNumber}</button>
                <button className="buttons" onClick={nextPage}>Next</button>
            </div>


        </div>
    )
}

export default Characters;

//https://www.reddit.com/r/reactjs/comments/z3ue4o/useeffect_and_map_function_not_working_well/