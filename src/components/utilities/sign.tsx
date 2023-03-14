import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';

import { Card, CardBody, CardFooter, Heading, VisuallyHidden } from '@chakra-ui/react'
import { CustomInput } from './input';
import { Button } from './styled-components';
import { ToggButt } from './styled-components';
import { CadastrarUser, LogarUser } from './functions';


export const Sign = () => {

    const [ToggleCard, setToggleCard] = useState(true);
    const [Usuario, setUsuario] = useState('');
    const [Senha, setSenha] = useState('');   
    const [confirmaSenha, setconfirmaSenha] = useState('');

    const act = ToggleCard != false ? 'Cadastrar' : 'Logar';
    const handleTrocarElemento = () => {
        setToggleCard(!ToggleCard);
        
    };
    
    return (

        <Card minW='sm' variant='outline' align='center'>
            <CardBody>
                <div className="signup">
                    
                    <Heading> {act} </Heading>
                    <CustomInput 
                        name='Usuario' 
                        type='text' 
                        onChange={(e:{target:HTMLInputElement}) =>{ 
                            setUsuario(e.target.value)}} />
                    
                    <CustomInput 
                        name='Senha' 
                        type='password' 
                        onChange={(e:{target:HTMLInputElement}) =>{ 
                            setSenha(e.target.value)}} />
                    {ToggleCard ? (
                        <>
                            <CustomInput 
                                name='confirmasenha' 
                                type='password' 
                                onChange={(e:{target:HTMLInputElement}) =>{ 
                                    setconfirmaSenha(e.target.value)}} />
                        </>
                    ) : ''}
                    <div className='center'>
                        <Button className='cadButton' onClick={ act == 'Cadastrar' ? ( 
                            ()=> { 
                                if (Usuario.length > 5 && confirmaSenha && Senha && confirmaSenha == Senha){
                                    CadastrarUser(Usuario, Senha)
                                }
                             } ) 
                            : ()=>{LogarUser(Usuario, Senha)}}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            {act}
                        </Button>
                    </div>
                </div>
            </CardBody>
            <CardFooter>{!ToggleCard ? 'Não ' : 'Já '}
                tem uma conta?
                <ToggButt onClick={handleTrocarElemento}>{!ToggleCard ? 'Cadastrar' : 'Logar'}</ToggButt>
            </CardFooter>
        </Card>

    )
}