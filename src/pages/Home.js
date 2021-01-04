import logo from './../logo.svg';
import React, { Component } from 'react';
import "./styles/Home.css";


class Home extends Component {

    render() {
        return (
            <div>
                <div className="Home">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
        
                        <a
                            className="App-link"
                            href="https://music.youtube.com/watch?v=XPpTgCho5ZA&list=RDAMVMXPpTgCho5ZA"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Yeaaa estamos chidos pon esa rolla de arriba
                        </a>
                    </header>
                </div>
            </div>
        )
    }
}

export default Home;