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
                <p>Complex XO is more tactical and strategical version of normal 3x3 tic-tac-toe game and can be played with 2 person. Such as, in this game when you put your mark on the board, you decide the area where your oppponent will play next. Let's imagine our board as a matrix. If Player-X decides to start from down-left corner of a "big table" and puts his/her mark in one of 9 places(for example up-left corner) in little table, next Player-O will only be able to play on the chosen area where his opponent marked earlier(Player-O can play only on table in up-left corner). This sequence continues till end of the game. If player's little table is full, they can put their mark on one of the empty slots of other little tables they choose. To make it easier next player's table will be shadowed so they can easily notice it.If none of the tables are shadowed(at start and completing of little tables), you can mark wherever you want.</p>
                <hr/>
                <p>Let's START</p>
            
            </div>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfig = {
        titleBar: {
            enable: true,
            text: 'Rule'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    return (
        <nav className="navbar navbar-light  header-container" style={header}>
            <a className="navbar-brand" href="/">   
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
                <p className="name" >Complex XO</p>
            </a>
            <button className="btn btn-outline-info my-2 my-xs-0" onClick={openPopupbox} >Guidline</button>
            <PopupboxContainer {...popupboxConfig} />
        </nav>
    )
}
export default Header
