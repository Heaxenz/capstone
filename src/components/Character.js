import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";
import './Character.css'

const Character = () => {
const {characterId} = useParams();
const [character, setCharacter] = useState('')
const [Loading, setLoading] = useState(true)
const [characterAllegiances, setCharacterAllegiances] = useState([])
const [characterSpouse, setCharacterSpouse] = useState('')

    useEffect(() => {
        async function getCharacter(){
            try {
            let res = await axios.get(`https://anapioficeandfire.com/api/characters/${characterId}`)
            setCharacter(res.data)
            setLoading(false)
            } catch(e){
                console.log(e)
            }
        }
        
        async function getAddAllegiances(){
            let empty = character.allegiances
            let ray = []
            try{
                for(let em of empty){
                    let res = await axios.get(em)
                    ray.push(res.data.name)
                }
                
            } catch(e) {
                
            } 
            setCharacterAllegiances(ray);
            
        
        }

        async function getAddCharacters(){
            try{
           let spouse = character.spouse 
           let res = await axios.get(spouse)
           setCharacterSpouse(res.data.name)
            } catch(e){
                console.log(e)
            }
        }

       
        getCharacter();
        getAddCharacters();
        getAddAllegiances();
       
    }, [characterId, Loading])

    if(Loading){
        return <div>... Loading</div>
    }

    

    const {name, aliases, gender, culture, born, died, titles, father, mother, allegiances, spouse} = character;


    

    
   

return (
    <div className="main-div">
  
        <ul className='main-list'> 
            <h1 className="header">Character</h1>
            <li>
                Name: {name === '' ? 'Unknown' : name} 
            </li> 
            <li>
                Aliases: {aliases[0] === '' ? 'No Aliases' : aliases.map(data => (
                    <ul>
                        <li>{data}</li>
                    </ul>
                ))}
            </li>
            <li>
                Gender: {gender === '' ? 'Unknown' : gender}
            </li>
            <li>
                Culture: {culture === '' ? 'Unknown' : culture}
            </li>
            <li>
                Born: {born === '' ? 'Unknown' : born}
            </li>
            <li>
                Died: {died === '' ? 'Unknown' : died}
            </li>
            <li>
                Titles: {titles[0] === '' ? 'Unknown' : titles.map(data => (
                    <ul>
                        <li>{data}</li>
                    </ul>
                ))}
            </li>
            <li>
                Father: {father === '' ? 'Unknown' : father}
            </li>
            <li>
                Mother: {mother === '' ? 'Unknown' : father}
            </li>
            <li>
                Spouse: {characterSpouse === '' ? 'None' : characterSpouse}   
            </li>
            <li>
                Allegiances: {characterAllegiances.length === 0 ? 'None' : 
                characterAllegiances.map(data => (
                    <ul>
                        <li>{data}</li>
                    </ul>
                ))
                }
                
                
            </li>
        </ul>
    </div>
)
    
}

export default Character;