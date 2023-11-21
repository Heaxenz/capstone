import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "../components/Home";
import Character from "../components/Character";
import CharactersFilterPage from '../components/CharactersFilterPage';
import HouseFilter from "../components/HouseFilter";
const AppRoute = () => {
    return (
    
        <Routes>
            <Route path='/capstoneofthrones/home' element={<Home />}/>
            <Route path='*' element={<Navigate to='/capstoneofthrones/home' />}/>
            <Route path='/capstoneofthrones/characters/page/:num' element={<CharactersFilterPage />}/>
            <Route path='/capstoneofthrones/houses/page/:num' element={<HouseFilter />}/>
            
            <Route path='/capstoneofthrones/character/:characterId' element={<Character />}/>

        </Routes>
      
    )
}

export default AppRoute;