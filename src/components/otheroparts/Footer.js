import React from 'react';
import footer from '../styles/footer.css'

const Footer = () => {
    // <div style={footer} className="footer " >
    //     <h1>this is footer</h1>
    // </div>
    return (
        <footer className="text-center text-lg-start footer" style={footer}>
            <div className="text-center p-3">
                  <p>© 2020 Copyright: <a className="text-dark" href="/">Complex.xo</a></p>
                  <p>this game was built on react and bootstrap.</p>
                  <p>Still on development stage.</p>
            </div>
      </footer>
    );
}

export default Footer;
