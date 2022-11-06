import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>CHECK OUT OUR OTHER ALBUMS!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src='../../assets/ab67616d00001e02e65b2a729914445d34777d23.jpg' text='Remember That You Will Die' label='album' path='/music'/>
                    <CardItem src='../../assets/ab67616d0000b2737a799cc62e624fd6432779e3.jpg' text='New Levels New Devils' label='album' path='/music'/>
                    <CardItem src='../../assets/ab67616d0000b2732a2d11880ce5489ccc1d1a37.jpg' text='Renaissance' label='album' path='/music'/>
                    <CardItem src='../../assets/ab67616d0000b2735530a953e5c00afb3650b21e.jpg' text='Muse' label='album' path='/music'/>
                    <CardItem src='../../assets/ab67616d0000b273c87f0133365b6e731ce4fb6f.jpg' text='The Most Hated' label='album' path='/music'/>
                    <CardItem src='../../assets/a3281393018_65.jpg' text='Inspire' label='album' path='/music'/>
                    <CardItem src='../../assets/a2998576452_10.jpg' text='Resurrect' label='album' path='/music'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards