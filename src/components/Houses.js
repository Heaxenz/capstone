
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Houses = ({ pageNumber, prevPage, nextPage }) => {
    const [houses, setHouses] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [loading, setLoading] = useState(true);
    const [currentLordNames, setCurrentLordNames] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        // get data from api based on the pageNumber & pageSize given from HouseFilter.js to set the state for houses
        async function fetchData() {
            try {
                let res = await axios.get(`https://anapioficeandfire.com/api/houses?page=${pageNumber}&pagesize=${pageSize}`);
                const data = res.data;
                const updatedHouses = [];
                
                //loop to get the current lord url and use it as an axios get 
                // I also made an object to store the lord name along with the lord url
                for (const house of data) {
                    const updatedHouse = { ...house };
                    if (house.currentLord) {
                        const lordRes = await axios.get(house.currentLord);
                        const lordName = lordRes.data.name
                        const lordUrl = lordRes.data.url
                        updatedHouse.currentLord = ({lordName, lordUrl}) || "Unknown";
                    }
                    // I also did the same with the sworn members
                    if(house.swornMembers){
                        const mem = []
                        const memUrls = []
                       for(const member of house.swornMembers){
                        const memberRes = await axios.get(member)
                        const Member = memberRes.data.name
                        const urls = memberRes.data.url
                        mem.push({Member, urls})
                        
                        
                       }
                       updatedHouse.swornMembers = mem
                       
                    }
                    
                    updatedHouses.push(updatedHouse);
                
                }
                // for (const houses of updatedHouses) {
                //     if(houses.swornMembers){
                //         for(const member of houses.swornMembers){
                //            const res = await axios.get(member)
                //           houses.swornMembers = res.data.name
                //           console.log(houses.swornMembers)
                //         }
                        
                //     }
                   
                // }

                setHouses(updatedHouses);
                setLoading(false);
            } catch (e) {
                console.error(e);
            }
        }
        
        fetchData();
    }, [pageNumber, pageSize]);

   const sendTocharacter = (data) => {
    const url = data.currentLord.lordUrl
    const characterId = url.split('/').pop();
    navigate(`/character/${characterId}`)

   }


    if (loading) {
        return <div>...Loading</div>;
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
                {houses.map((data) => (
                    <div style={{ textAlign: "center", margin: "20px" }} className="character-details" key={data.url}>
                        <div className="character-details">
                            <p>House Name: {data.name === "" ? 'Unknown' : data.name}</p>
                            <p>Titles: {data.titles[0] === '' ? "None" : ` ${data.titles}`}</p>
                            {data.currentLord === "" ? "" : (
                                <p>
                                    Current Lord: {data.currentLord.lordName}
                                    <button onClick={() => sendTocharacter(data)}>👑</button>
                                </p>
                            )}
                            {/* Sworn Members: {data.swornMembers.map((character => {   
                                {character.member}
                                
                            }))} */}
    
                          
                            

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
