import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Sign } from './utilities/sign';


export const Login = () => {

    return (
        <div className="app-login">
            <Box height='70vh' display='flex' alignItems='center' justifyContent='center'>
                <Sign /> {/*  ./utilities/sign.tsx */}
            </Box>
        </div>
    )
}