import React from 'react';
import '../../App.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer/Footer';
import './Merch.css'

import IMG1 from '../../interactive assets/image1.jpg'
import IMG2 from '../../interactive assets/image2.jpg'
import IMG3 from '../../interactive assets/image3.jpg'
import IMG4 from '../../interactive assets/image4.jpg'
import IMG5 from '../../interactive assets/image5.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        productName: 'Neurotica Tee',
        price: '$50.00 USD',
    },
    {
        id: 2,
        image: IMG2,
        productName: 'Figure Tee',
        price: '$30.00 USD',
    },
    {
        id: 3,
        image: IMG3,
        productName: 'Headless Holy Man Black T-Shirt',
        price: '$22.00 USD',
    },
    {
        id: 4,
        image: IMG4,
        productName: 'Headless Holy Man Black T-Shirt',
        price: '$22.00 USD',
    },
    {
        id: 5,
        image: IMG5,
        productName: 'Figure Hoodie',
        price: '$65.00 USD',
    },
]

export default function Merch() {
    return (
        <>
            <Navbar />
            <section id='merch'>
                    <h2>MERCH</h2>
                        {data.map(({id, image, productName, price}) => {
                                return (
                                    <div className="cards__merch" key={id}>
                                        <div className="merch_components">
                                            <img src={image} />
                                            <p>{productName}</p>
                                            <h3>{price}</h3>
                                            <button className='merch_button'><i className="fas fa-shopping-cart">BUY</i></button>
                                        </div>
                                </div>
                                )
                            })}
            </section>        
            <Footer />
        </>
      );
}