import * as React from 'react';
import { useState } from 'react';

import { Card, CardBody, CardFooter, Heading, VisuallyHidden } from '@chakra-ui/react'
import { CustomInput } from './input';

export const Sign = () => {

    const [ToggleCard, setToggleCard] = useState(true);
    const act = ToggleCard != false ? 'Cadastrar' : 'Logar';
    const handleTrocarElemento = () => {
        setToggleCard(!ToggleCard);
        
    };
    return (

        <Card minW='sm' variant='outline' align='center'>
            <CardBody>
                <div className="signup">
                    
                    <Heading> {act} </Heading>
                    <CustomInput name='Usuario' type='text' />
                    {ToggleCard ? (
                        <>
                            <CustomInput name='E-mail' type='text' />
                            <CustomInput name='Senha' type='password' />
                            <CustomInput name='confirmasenha' type='password' />
                        </>

                    ) : (
                        <CustomInput name='Senha' type='password' />
                    )}
                    <div className='center'>
                        <button className="cadastro-button">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            {act}
                        </button>
                    </div>
                </div>
            </CardBody>
            <CardFooter>{!ToggleCard ? 'Não ' : 'Já '}
                tem uma conta?
                <button onClick={handleTrocarElemento}>{!ToggleCard ? 'Cadastrar' : 'Logar'}</button>
            </CardFooter>
        </Card>

    )
}