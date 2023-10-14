import React from "react";
import {useState , useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "../components/Home";
import Characters from "../components/Characters";
import App from "../App";
import Houses from "../components/Houses";
import Character from "../components/Character";
import CharacterContext from "../components/CharacterContext";
import CharactersFilterPage from '../components/CharactersFilterPage';


const AppRoute = () => {
    return (
    
        <Routes>
            
            <Route path='/home' element={<Home />}/>
            {/* <Route path='*' element={<Navigate to='/home' />}/> */}
            <Route path='/characters/page/:num' element={<CharactersFilterPage />}/>
            <Route path='/houses' element={<Houses />}/>
            <Route path='/character/:characterId' element={<Character />}/>

        </Routes>
      
    )
}

export default AppRoute;