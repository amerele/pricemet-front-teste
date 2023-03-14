import * as React from 'react';
import { Link } from 'react-router-dom';
import { Headr } from './utilities/styled-components';
import { Navlink } from './utilities/styled-components';
import { HStack, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const [User, setUser] = useState();
    useEffect(() => {
        try {
            let login = JSON.parse(localStorage.getItem('userLogado'))
            setUser(login)
        } catch (error) {
            null
        }
    }, []);
    return (
        <Headr>
            PriceMet
            {User ? (
                <>
                    <HStack>
                        <Navlink><Link to={`/products`}> Produtos </Link></Navlink>
                        <Navlink><Link to={`/users`}> Usuários</Link></Navlink>
                    </HStack>
                    <Box>
                        <button onClick={()=>{
                            localStorage.setItem('userLogado', JSON.stringify(null))
                            navigate('/')
                            window.location.reload()
                            }}>Sair</button>
                    </Box>
                </>
            ) : (
                <Navlink><Link to={`/`}> Logar </Link></Navlink>
            )}
        </Headr>
    )
}

export default Header