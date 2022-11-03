import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
  };

  useEffect (() => {showButton();},[]);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
                    <img src="./assets/polyphia-5d49e8234b7b0.png" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/tour' className='nav-links' onClick={closeMobileMenu}>
                            Tour
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/merch' className='nav-links' onClick={closeMobileMenu}>
                            Merch
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/music' className='nav-links' onClick={closeMobileMenu}>
                            Music
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/buy-tickets' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Buy Tickets
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Buy Tickets</Button>}
            </div>  
        </nav>
    </>
  )
}

export default Navbar