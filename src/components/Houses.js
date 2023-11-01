import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Houses.css'

const Houses = ({ pageNumber, prevPage, nextPage }) => {
    const [houses, setHouses] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                let res = await axios.get(`https://anapioficeandfire.com/api/houses?page=${pageNumber}&pagesize=${pageSize}`);
                const data = res.data;
                const updatedHouses = [];

                for (const house of data) {
                    const updatedHouse = { ...house };

                    if (house.currentLord) {
                        const lordRes = await axios.get(house.currentLord);
                        const lordName = lordRes.data.name;
                        const lordUrl = lordRes.data.url;
                        updatedHouse.currentLord = { lordName, lordUrl } || "Unknown";
                    }

                    if (house.swornMembers) {
                        const mem = [];
                        for (const member of house.swornMembers) {
                            const memberRes = await axios.get(member);
                            const memberName = memberRes.data.name;
                            const memberUrl = member;
                            mem.push({ name: memberName, url: memberUrl });
                        }
                        updatedHouse.swornMembers = mem;
                    }

                    updatedHouses.push(updatedHouse);
                }

                setHouses(updatedHouses);
                setLoading(false);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [pageNumber, pageSize]);

    const navigateToMemberPage = (memberUrl) => {
        const memberId = memberUrl.split('/').pop();
        navigate(`/capstone/character/${memberId}`);
    };

    if (loading) {
        return <div>...Loading</div>;
    }

    return (
        <div>
            <div className="main-div">
                <h1 className="header">Houses</h1>
                <div className="select-div">
                    <p>Houses per Page:</p>
                    <select className="selector" onChange={(e) => setPageSize(e.target.value)}>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                    </select>
                </div>
                {houses.map((data) => (
                    <div style={{ textAlign: "center", margin: "20px" }} className="character-details" key={data.url}>
                        <div className="character-details">
                            <p>House Name: {data.name === "" ? 'Unknown' : data.name}</p>
                            <p>Titles: {data.titles[0] === '' ? "None" : ` ${data.titles}`}</p>
                            <p> Current Lord: {data.currentLord === "" ? "None" : (
                                <>
                                    {data.currentLord.lordName}
                                    <button onClick={() => navigateToMemberPage(data.currentLord.lordUrl)}>👑</button>
                                </>
                            )}</p>
                            <div> Sworn Members: {data.swornMembers.length > 0 ? (
                                <ul className='mem-list'>
                                    {data.swornMembers.map((mem, index) => (
                                        <li key={index}>
                                            <span>{mem.name}</span>
                                            {console.log(index)}
                                            
                                            <button onClick={() => navigateToMemberPage(mem.url)}>⚔️</button>
                                        </li>
                                    ))}
                                </ul>
                            ) : "None"}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pages-div">
                {pageNumber > 1 ? <button className="buttons" onClick={prevPage}>Prev</button> : null}
                <button className="buttons main-button">{pageNumber}</button>
                <button className="buttons" onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export default Houses;