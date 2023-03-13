import * as React from 'react';
import { useState, useEffect } from 'react';

import {
    Table,
    Tr,
    Th,
    TableContainer,
    Heading,
    Center
} from '@chakra-ui/react'

export const UserPage = () => {

    const users = [{
        id: 1,
        nome: 'bruno gomes',
        email: 'brunoplinks8@gmail.com',
        usuario: 'amerele',
        senha: '1234'
    },
    {
        id: 2,
        nome: 'maria baratela',
        email: 'malubatera@gmail.com',
        usuario: 'noodletwod',
        senha: '1234'
    }]

    return (
        <div className="app-users">
            <Center>
                <TableContainer overflowX='hidden'>
                    <Heading>Usuários Cadastrados</Heading>
                    <Table size='lg' variant='simple' colorScheme='black'>
                        {users.map((user) => (
                            <Tr>
                                <Th>{user.id}</Th>
                                <Th>{user.nome}</Th>
                                <Th>{user.email}</Th>
                                <Th>{user.usuario}</Th>
                            </Tr>

                        ))}
                    </Table>
                </TableContainer>
            </Center>
        </div>
    )
}