import React, { useRef } from "react"
import { Link, withRouter } from "react-router-dom"

function Navigation(props){
    // Functions shows the menu for mobile devices
    function showMenu(){
        const header = document.querySelector('.header');
        const fadeElems = document.querySelectorAll('.has-fade');
        const body = document.querySelector('body');
        const cards = document.querySelector('.cards');
        const mobileMenu = document.querySelector('.header__menu');
        if(header.classList.contains('open')){
            body.classList.remove('noscroll');
            cards.style.position = 'relative'; // Pushes the cards to the front
            header.classList.remove('open');
            fadeElems.forEach(function(element){
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            });
        }else{
            body.classList.add('noscroll');
            header.classList.add('open');
            cards.style.position = 'absolute'; // Pushes the cards to the back of the mobile menu
            fadeElems.forEach(function(element){
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            });
        }
    }

    return(
        <header class="header">

            <div className="overlay has-fade">

            </div>
            <nav class="container flex flex-jc-sb flex-ai-c">
                <a href="/" class="header__logo">GeneEngage</a>
                <a  id="btnHamburger" href="#"class="header__toggle hide-for-desktop" onClick={showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

                <div class="header__links hide-for-mobile">
                    <a href="/">Home</a>
                    <a href="/Appointments">Appointments</a>
                    <a href="/Messages">Messages</a>
                    <a href="/myGenetics">myGenetics</a>
                    <a href="/Settings">Profile Settings</a>
                    <a href="/logout">Logout</a>
                </div>
            </nav>
        </header>
    );
}

export default withRouter(Navigation);