import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "../components/Home";
import Character from "../components/Character";
import CharactersFilterPage from '../components/CharactersFilterPage';
import HouseFilter from "../components/HouseFilter";
import House from "../components/House";
const AppRoute = () => {
    return (
    
        <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='*' element={<Navigate to='/home' />}/>
            <Route path='/characters/page/:num' element={<CharactersFilterPage />}/>
            <Route path='/houses/page/:num' element={<HouseFilter />}/>
            
            <Route path='/character/:characterId' element={<Character />}/>

        </Routes>
      
    )
}

export default AppRoute;