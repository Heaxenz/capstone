import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Houses = ({ pageNumber, prevPage, nextPage }) => {

    const [houses, setHouses] = useState('')
    const [pageSize, setPageSize] = useState(10)
    const [Loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchHouses() {
            try {
                let res = await axios.get(`https://anapioficeandfire.com/api/houses?page=${pageNumber}&pagesize=${pageSize}`)
                setHouses(res.data)
                setLoading(false)
            } catch (e) {
                console.log(e)
            }



        }

        fetchHouses()

    }, [pageNumber, Loading, pageSize])

    const navigateToHouse = (url) => {
        try {
            const houseId = url.split('/').pop();
            navigate(`/houses/${houseId}`);

        } catch (e) {
            console.log(e)
        }

    }

    async function getCharacter(currentLord) {
        try {
            let res = await axios.get(currentLord);
            console.log(res.data.name)
            return (
                <>
                    {res.data.name}
                </>


            )
        } catch (e) {
            console.log(e)
        }



    }




    if (Loading) {
        return (
            <div>
                ...Loading
            </div>
        )
    }
    return (
        <div>

            <div className="main-div">
                <h1 className="header">Houses</h1>
                <div className="select-div">
                    <p>Page Size:</p>
                    <select className="selector" onChange={(e) => setPageSize(e.target.value)}>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                    </select>
                </div>
                {houses.map(data => (
                    <div style={{ textAlign: 'center', margin: '20px' }} className="character-details" key={data.url}>

                        <div className="character-details">
                            Name: {data.name === "" ? 'Unknown' : data.name}
                            <ul>

                                <li> Titles: {data.titles[0] === '' ? 'None' : ` ${data.titles}`}</li>

                                {data.currentLord === '' ? '' : <li>Current Lord: {data.currentLord}</li>}
                                <p>
                                    Sworn Members: {console.log(data.currentLord)}
                                </p>
                            </ul>
                        </div>
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

export default Houses;