import React from 'react';
import '../../App.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer/Footer';
import Player from '../../components/player/Player';
import {useState, useEffect} from 'react';

import IMG1 from '../../interactive assets/goose.jpg'
import IMG2 from '../../interactive assets/40oz.jpg'

import MUSIC1 from '../../interactive assets/music/Polyphia_Goose.mp3'
import MUSIC2 from '../../interactive assets/music/Polyphia_40oz.mp3'

export default function Music() {

const [songs] = useState([
    {
        title: "Goose",
        artist: "Poliphya",
        img_src: IMG1,
        src: MUSIC1
    },
    {
        title: "40oz",
        artist: "Poliphya",
        img_src: IMG2,
        src: MUSIC2
    }
    ])


    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    useEffect(() => {
        setNextSongIndex(() => {
            if(currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex])

    return (
        <>
            <Navbar />
            <div className='Music'>
                <Player 
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
                />
            </div>
            <Footer />
        </>
      )
}
