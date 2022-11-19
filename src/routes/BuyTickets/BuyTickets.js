import React from "react";
import "../../App.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import "./BuyTickets.css";
import Payment from "../../components/payment form/Payment";

const data = [
  {
    id: 1,
    location: "London, United Kingdom, The Crown & Sceptre, Shepherd's Bush",
  },
  {
    id: 2,
    location: "Birmingham, United Kingdom, O2 Institute",
  },
  {
    id: 3,
    location: "Manchester, United Kingdom, O2 Ritz",
  },
  {
    id: 4,
    location: "Antwerpen, Belgium, Trix",
  },
  {
    id: 5,
    location: "Amsterdam, Netherlands, Melkweg",
  },
  {
    id: 6,
    location: "Hamburg, Germany, Fabrik",
  },
  {
    id: 7,
    location: "London, United Kingdom, O2 Shepherds Bush Empire",
  },
];

export default function BuyTickets() {
  return (
    <>
      <Navbar />
      <div className="buytickets">
        <h2>BUY TICKETS</h2>
        <h3>Price to pay: 59.99 USD</h3>
        <div className="ticketContainer">         
            <p>Choose event:</p>
            <select>
              {data.map(({ id, location }) => {
                return (
                  <option>
                    <h1 key={id}>{location}</h1>
                  </option>
                );
              })}
            </select>
            <Payment className='payment'/>
        </div>
      </div>
      <Footer />
    </>
  );
}
