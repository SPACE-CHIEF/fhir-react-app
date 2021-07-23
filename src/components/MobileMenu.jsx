import React, { useRef } from "react"
import { Link, withRouter } from "react-router-dom"

function MobileMenu(props){

    return(
        <div className="header__menu container has-fade">
            <a href="#">Home</a>
            <a href="#">Appointments</a>
            <a href="#">Messages</a>
            <a href="#">myGenetics</a>
            <a href="#">Care Team</a>
            <a href="#">Profile Settings</a>
            <a href="">Log Out</a>
        </div>
    );
}

export default withRouter(MobileMenu)