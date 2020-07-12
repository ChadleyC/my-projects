import React, { Router, Component } from 'react'
import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";
import ProfilePage from "../components/authentication/ProfilePage";
import PasswordReset from "../components/authentication/PasswordReset";

const Profile = () => {
        return (
            this.user ? 
            <ProfilePage />
            :
            <Router>
                <SignUp path="signUp" />
                <SignIn path="/" />
                <PasswordReset path="passwordReset" />
            </Router>
        )
};
