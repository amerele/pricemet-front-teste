import * as React from 'react';
import { useState, useEffect } from 'react';
import { Sign } from './utilities/sign';


export const Login = () => {

    return (
        <div className="app-login">
            <div className="center">
                <Sign/> {/*  Sign Up or Sign In */}
            </div>
        </div>
    )
}