import React from 'react';
import axios from 'axios';
import './Home.css'

const Home = () => {

    return (

        <div className="home-div">
            <img src='https://freepngimg.com/thumb/game_of_thrones/6-2-game-of-thrones-logo-transparent.png' className="image-home" />
            <h1 className="header">Welcome!</h1>
            <div className='desc-div'>
                <p className="desc">Hello there welcome to Ice & Fire.
                    Ice & Fire is a website deticated to Game Of Thrones.
                    Here you will find everything you need to know about the Characters.
                    If you would like to reach out to us please do!
                    Head to the contact page and let us know what we can do to help you. Thank you
                </p>
                <div className='anchor-div'>
                    <a className="anchor" href='#'>Contact Us</a>

                    <a className="anchor"href='#'>Api</a>

                    <a className='anchor' href="#">Hello</a>
                </div>
                
            </div>

        </div>

    )
}

export default Home;