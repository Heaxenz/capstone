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
    }, [pageNumber, Loading])

    const navigateToHouse = (url) => {
        try {
            const houseId = url.split('/').pop();
            navigate(`/houses/${houseId}`);

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

            {houses.map(data => (
                <div className="character-details" key={data.url}>
                    <button className="character-details"
                        onClick={() => navigateToHouse(data.url)}>
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

export default Houses;