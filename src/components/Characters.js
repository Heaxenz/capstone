import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import './Characters.css'

const Characters = ({ pageNumber, nextPage, prevPage, buttonVal}) => {
    let navigate = useNavigate();
    
    const [character, setCharacters] = useState('');
    const [loading, setLoading] = useState(true)
    const [pageSize, setPageSize] = useState(10)

  

    useEffect(() => {
        async function fetchCharacters() {
            try{
            let res = await axios.get(`https://anapioficeandfire.com/api/characters?page=${pageNumber}&pagesize=${pageSize}`)
                setCharacters(res.data)
                setLoading(false)
            } catch(e){
                console.log(e)
            }
        }

        fetchCharacters();
    }, [pageNumber, loading])



    const navigateToCharacter = (url) => {
        try {
            const characterId = url.split('/').pop();
            navigate(`/character/${characterId}`);

        } catch (e) {
            console.log(e)
        }

    }


    if (loading) {
        return (
            <div>Loading...</div>
        )
    }


    return (

        <div>
            
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
            {pageNumber > 1 ? <button onClick={prevPage} >Prev</button> : null  }
            
                <button>{pageNumber}</button>
            <button onClick={nextPage}>Next</button>



        </div>
    )
}

export default Characters;

//https://www.reddit.com/r/reactjs/comments/z3ue4o/useeffect_and_map_function_not_working_well/