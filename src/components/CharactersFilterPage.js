import React, { useState, useEffect } from "react";
import Characters from "./Characters";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CharacterFilter = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true)
    const [character, setCharacters] = useState('');
console.log(character)
    let navigate = useNavigate();
    useEffect(() => {

        const navigateToPage = () => {
            navigate(`/characters/page/${pageNumber}`)
        }
        navigateToPage()

        async function fetchCharacters() {
            let res = await axios.get(`https://anapioficeandfire.com/api/characters?page=${pageNumber}&pagesize=10`)
            setCharacters(res.data)
            setLoading(false)
        }
        fetchCharacters();


    }, [pageNumber])

    const nextPage = () => {
        setPageNumber(pageNumber + 1)
        console.log('page')
    }

    return (
        <Characters pageNumber={pageNumber} nextPage={() => nextPage()} characters={character} />
    )
}

export default CharacterFilter;