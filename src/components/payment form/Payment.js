import React from "react";
import CountrySelector from "../country list/Countries";

function Payment() {
  return (
    <form action="">
      <p>Choose bank:</p>
      <select>
        <option value="swed">Bank X</option>
        <option value="seb">Bank Y</option>
      </select>
      <label>Email: </label>
      <input type="email" required />
      <div className="inputBox">
        <span>Card number</span>
        <input
          type="text"
          maxLength="16"
          className="card-number-input"
          required
        />
      </div>
      <div className="inputBox">
        <span>Card holder</span>
        <input type="text" className="card-holder-input" required />
      </div>
      <div className="flexbox">
        <div className="inputBox">
          <span>Exp MM</span>
          <select name="" id="" className="month-input">
            <option value="MONTH" selected disabled>
              MONTH
            </option>
            <option value="MONTH">01</option>
            <option value="MONTH">02</option>
            <option value="MONTH">03</option>
            <option value="MONTH">04</option>
            <option value="MONTH">05</option>
            <option value="MONTH">06</option>
            <option value="MONTH">07</option>
            <option value="MONTH">08</option>
            <option value="MONTH">09</option>
            <option value="MONTH">10</option>
            <option value="MONTH">11</option>
            <option value="MONTH">12</option>
          </select>
        </div>
        <div className="inputBox">
          <span>Exp YY</span>
          <select name="" id="" className="year-input">
            <option value="YEAR" selected disabled>
              YEAR
            </option>
            <option value="YEAR">2023</option>
            <option value="YEAR">2024</option>
            <option value="YEAR">2025</option>
            <option value="YEAR">2026</option>
            <option value="YEAR">2027</option>
            <option value="YEAR">2028</option>
            <option value="YEAR">2029</option>
            <option value="YEAR">2030</option>
          </select>
        </div>
        <div className="inputBox">
          <span>CCV</span>
          <input type="text" maxLength="4" className="ccv-input" required />
        </div>
      </div>
      <label>Country:</label>
      <CountrySelector />
      <input type="text" placeholder="Postal code" required />
      <div className="button">
        <button>Pay</button>
      </div>
    </form>
  );
}

export default Payment;
