import React, { useState, useEffect } from "react";
import Characters from "./Characters";
import { useNavigate } from "react-router-dom";

const CharacterFilter = () => {
    const [pageNumber, setPageNumber] = useState(1);
    
    let navigate = useNavigate();
    
    useEffect(() => {

        const navigateToPage = () => {
            try {
            navigate(`/capstoneofthrones/characters/page/${pageNumber}`)
            } catch(e) {
                console.log(e)
            }
        }
        navigateToPage()

    }, [pageNumber])



    const nextPage = () => {
        setPageNumber(pageNumber + 1)
    }
    
    const prevPage = () => {
        if(pageNumber > 1) {
            setPageNumber(pageNumber - 1)
        } else {
            setPageNumber(1)
        }
    }
    


    return (
        <div>
            <Characters pageNumber={pageNumber} nextPage={() => nextPage()} prevPage={() => prevPage()}/>
        </div>
    )
}

export default CharacterFilter;