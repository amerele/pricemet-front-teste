import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Header = () =>{

    return (
        <div className="header">
            <Link to={`/`}> Login </Link>|
            <Link to={`/products`}> Produtos </Link>|
            <Link to={`/users`}> Usuários</Link>
        </div>
    )
}

export default Header