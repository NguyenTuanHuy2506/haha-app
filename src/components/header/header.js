import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import '../../public/scss/header.scss'

import * as constants from '../../constants/constants.js'

export default class Js_header extends Component {
    constructor(props){
        super(props);
        this.logo = constants.logo;
        this.menuItem = constants.menuItem;
    }
    state = {
        scrollTop: 0,
        openMenu: -1,
    }

    getScrollTop = () => {
        let _scrollTop = window.scrollY ;
        if (_scrollTop < 100) {
            this.setState({ scrollTop: 0 })
        } else {
            this.setState({ scrollTop: 1 })
        }
    }

    getOpenMenu = () => {
        this.setState({openMenu: this.state.openMenu*=-1});
    }

    componentDidMount = () => {
        window.onscroll = () => { this.getScrollTop() };
    }

     About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

    render() {
        return (
            <Router>
                <nav className={`header__nav ${this.state.scrollTop ? 'active':''}`}>
                    <h1 className="header__logo">
                       {
                           this.logo
                        }
                    </h1>

                    <div className={`menu header__menu ${this.state.openMenu == 1 ? 'active' : ''}`}>
                        <ul className="menu__inner">
                            {
                                this.menuItem.map((item, index) => (
                                <li key={index} className="menu__item">
                                    {item}
                                    <Link to={`/About`} className="nav-link"></Link>
                                </li>
                                ))
                            }
                        </ul>
                        
                    </div>

                    <button className={`btn hambuger-button ${this.state.openMenu==1?'active':''}`} onClick={this.getOpenMenu}><span></span><span></span><span></span></button>
                    
                </nav>
            </Router>
        )
    }
}

