import React from 'react';
import '../../App.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer/Footer';
import './Tour.css';
import { Link } from 'react-router-dom';

const data = [
    {
        id: 1,
        date: 'May. 11, 2023',
        location: "London, United Kingdom, The Crown & Sceptre, Shepherd's Bush",
    },
    {
        id: 2,
        date: 'May. 12, 2023',
        location: "Birmingham, United Kingdom, O2 Institute",
    },
    {
        id: 3,
        date: 'May. 13, 2023',
        location: "Manchester, United Kingdom, O2 Ritz",
    },
    {
        id: 4,
        date: 'May. 15, 2023',
        location: "Antwerpen, Belgium, Trix",
    },
    {
        id: 5,
        date: 'May. 16, 2023',
        location: "Amsterdam, Netherlands, Melkweg",
    },
    {
        id: 6,
        date: 'May. 17, 2023',
        location: "Hamburg, Germany, Fabrik",
    },
    {
        id: 7,
        date: 'May. 31, 2023',
        location: "London, United Kingdom, O2 Shepherds Bush Empire",
    }
]

export default function Tour() {
    return (
        <>
            <Navbar />
                <section id='tour'>
                    <h2>UPCOMING TOURS</h2>
                        <div className='tour_container'>
                            {data.map(({id, date, location}) => {
                                return (
                                    <Link to='/buy-tickets' className='container_buy_tickets'>
                                    <div className='container' key={id}>
                                        <div className='tour'>
                                            <h1>{date}</h1>
                                            <h1>{location}</h1>
                                        </div>
                                    </div>
                                    </Link>
                                )
                            })}
                        </div>
                </section>
            <Footer />
        </>
      )
}


<Link to='/buy-tickets'>
Buy Tickets
</Link>