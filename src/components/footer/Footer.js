import React from 'react';
import './Footer.css';

function Footer() {
  return (
        <section className='footer'>
            <div className="footer-media">
                <a href="https://www.facebook.com/Polyphia/" target="_blank"><i className='fab fa-facebook'></i></a>
                <a href="https://twitter.com/polyphia" target="_blank"><i className='fab fa-twitter'></i></a>
                <a href="https://www.instagram.com/polyphia" target="_blank"><i className='fab fa-instagram'></i></a>
                <a href="https://www.youtube.com/channel/UCDe08Fs0s0YKJuk5h45csAQ" target="_blank"><i className='fab fa-youtube'></i></a>
                <a href="https://www.tiktok.com/@polyphia" target="_blank"><i className='fab fa-tiktok'></i></a>
            </div>
            <p className='copyright'>
            © 2022, Polyphia <br />
            Powered by SCP Merchandising
            </p>
        </section>
  )
}

export default Footer