import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "../components/Home";
import Character from "../components/Character";
import CharactersFilterPage from '../components/CharactersFilterPage';
import HouseFilter from "../components/HouseFilter";
const AppRoute = () => {
    return (
    
        <Routes>
            <Route path='/capstone/home' element={<Home />}/>
            {/* <Route path='*' element={<Navigate to='/capstone/home' />}/> */}
            <Route path='/capstone/characters/page/:num' element={<CharactersFilterPage />}/>
            <Route path='/capstone/houses/page/:num' element={<HouseFilter />}/>
            
            <Route path='/capstone/character/:characterId' element={<Character />}/>

        </Routes>
      
    )
}

export default AppRoute;