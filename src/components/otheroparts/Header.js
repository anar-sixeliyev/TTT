import React from 'react'
import logo from '../../logo.png'
import header from '../styles/header.css'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"

const Header = () => {
    //make tic tac toe more interesting and strategical
    const openPopupbox = () => {
        const content = (
            <div>
                <p>make tic tac toe more interesting and strategicalmake tic tac toe more interesting and strategicalmake tic tac toe more interesting and strategicalmake tic tac toe more interesting and strategicalmake tic tac toe more interesting and strategicalmake tic tac toe more interesting and strategicalmake tic tac toe more interesting and strategical</p>
            </div>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfig = {
        titleBar: {
            enable: true,
            text: 'Guidline'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    {/* <header style={header} className="header-container">
        <a href="#" className="header-link" >
            <div className="logo-div" >
                <img src={logo} alt="logo" className="logo" />
            </div>
            <p className="name" >Complex XO</p>
        </a>
        <div style={{ padding: "20px" }}>
            <button onClick={openPopupbox} className="btn" >Guidline</button>
            <PopupboxContainer {...popupboxConfig} />
        </div>
    </header> */}
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">   
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
                <p className="name" >Complex XO</p>
            </a>
            <button className="btn btn-outline-success my-2 my-xs-0" onClick={openPopupbox} >Guidline</button>
            <PopupboxContainer {...popupboxConfig} />
        </nav>
    )
}
export default Header
