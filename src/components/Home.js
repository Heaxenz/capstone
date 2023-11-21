import React from 'react';
import axios from 'axios';
import './Home.css'

const Home = () => {

    return (

        <div className="home-div">
            <img src='https://freepngimg.com/thumb/game_of_thrones/6-2-game-of-thrones-logo-transparent.png' className="image-home" />
            <h1 className="header">Welcome!</h1>
            <div className='desc-div'>
                <p className="desc">Hello there welcome to Capstone of Thrones.
                    Capstone of Thrones is a website dedicated to Game Of Thrones.
                    Here you will find everything you need to know about the characters and their relationships in the world of Game of Thrones.
                    Click on Characters to start learning more about characters, or Houses to learn more about the allegiances, and their members.
                    If you would like to reach out to us please do!
                    Head to the contact page and let us know what we can do to help you. Thank you
                </p>

                <div className='anchor-div'>
                    <a className="anchor" href='#'>Contact Us</a>

                    <a className="anchor"href='https://anapioficeandfire.com/'>Api</a>

                    <a className='anchor' href="#">Review</a>
                </div>
                
            </div>

        </div>

    )
}

export default Home;