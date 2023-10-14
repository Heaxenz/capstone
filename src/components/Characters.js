import React, { useState, useEffect, useParams } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Character from './Character';
import CharacterContext from './CharacterContext';
import './Characters.css'

const Characters = ({pageNumber, nextPage, character}) => {
    
//    console.log(character)
//     const [character, setCharacters] = useState('');
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         async function fetchCharacters() {
//             let res = await axios.get(`https://anapioficeandfire.com/api/characters?page=${pageNumber}&pagesize=10`)
//             if (character.length < 10)
//                 setCharacters(res.data)
//             setLoading(false)
//         }
//         fetchCharacters();
//     }, [loading, pageNumber, character])

//     const navigate = useNavigate();

//     const navigateToCharacter = ({ data }) => {
//         try {
//             const url = data.url.split('').splice(45).join('')
//             navigate(`/character/${url}`)

//         } catch (e) {

//         }

//     }
    
//     if (loading) {
//         return (
//             <div>Loading...</div>
//         )
//     }

//     // const next = () => {
//     //     // setPageNumber(pageNumber + 1)
//     //     setLoading(true)
//     //     setCharacters('');
//     // }
//     // const prev = () => {
//     //     if (pageNumber === 1) {
//     //         // setPageNumber(1)
//     //     } else {
//     //         // setPageNumber(pageNumber - 1)
//     //         setLoading(true)
//     //         setCharacters('');
//     //     }
        
//     // }




//     return (

//         <div>

//             {character.map(data => (
//                 <div className="character-details">

//                     <button className="character-details"
//                         onClick={() => navigateToCharacter({ data })}>
//                         {data.name === "" ? data.aliases : data.name}
//                         {data.culture === '' ? '' : `, ${data.culture}`},
//                         {data.gender === 'Female' ? ' ♀️' : ' ♂️'}
//                     </button>
                    

//                 </div>
                

//             ))}
//             <button >Prev</button>
//             <button onClick={() => nextPage}>Next</button>

           

//         </div>
//     )
 }

export default Characters;

//https://www.reddit.com/r/reactjs/comments/z3ue4o/useeffect_and_map_function_not_working_well/