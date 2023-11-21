import React, { useState, useEffect } from  'react';
import axios from 'axios';
import Houses from './Houses';
import { useNavigate } from 'react-router-dom';

const HouseFilter = () => {
        const [pageNumber, setPageNumber] = useState(1);
    
        let navigate = useNavigate();
        useEffect(() => {
    
            const navigateToPage = () => {
                try {
                navigate(`/capstoneofthrones/houses/page/${pageNumber}`)
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
                <Houses pageNumber={pageNumber} nextPage={() => nextPage()} prevPage={() => prevPage()} buttonVal={(e) => buttonVal(e)}/>
            </div>
        )
}

export default HouseFilter;

