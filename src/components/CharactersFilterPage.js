import React, { useState, useEffect } from "react";
import Characters from "./Characters";
import { useNavigate, useParams } from "react-router-dom";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";


const CharacterFilter = () => {

    const [pageNumber, setPageNumber] = useState(1);
    
    let navigate = useNavigate();
    useEffect(() => {

        const navigateToPage = () => {
            try {
            navigate(`/characters/page/${pageNumber}`)
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
    
    const buttonVal = (e) => {
        setPageNumber(Number(e.target.value))
    }

    return (
        <div>
            <Characters pageNumber={pageNumber} nextPage={() => nextPage()} prevPage={() => prevPage()} buttonVal={(e) => buttonVal(e)}/>
        </div>
    )
}

export default CharacterFilter;