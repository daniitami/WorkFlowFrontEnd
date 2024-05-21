import React from "react";
import './App.css';

function Left(){
    return(
        <Left>
            <body>
                <div className="container">
                    <div className="sidebar">
                        <div className="logo-container">
                            <div className="logo">WorkFlow</div>
                            <img src="../images/fotoPerfil.jpg" alt="Profile Picture" className="profile-picture"/>
                            <div className="username">@daniitami</div>
                        </div>
                        <div className="menu">
                            <div className="menu-items-container">
                                <div class="menu-item-group">
                                    <div className="menu-item grey-background grey-shadow">Spaces</div>
                                    <div className="menu-item grey-background grey-shadow">Inbox</div>
                                </div>
                                <div className="menu-item grey-background grey-shadow">Habits</div>
                            </div>
                            <div className="menu-items-group">
                                <div className="menu-item create-space-button grey-background grey-shadow">Create new space</div>
                                <div className="settings-image-container"><img src="../images/Settings.png" alt="Settings" className="settings-image"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </Left>
    );
}

export default Left;