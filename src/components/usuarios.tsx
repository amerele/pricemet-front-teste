import * as React from 'react';
import { useState, useEffect } from 'react';
import { deleteUser, updateUser } from './utilities/functions';
import {
    Table,
    Tr,
    Th,
    TableContainer,
    Heading,
    Center,
    Button,
    Box,
    Input
} from '@chakra-ui/react'
import axios from 'axios';

export const UserPage = () => {
    const [users, setUsers] = useState<any>([]);
    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then((res) => {
                setUsers(res.data)
            })

    }, [])

    const [User, setUser] = useState('');


    let login = JSON.parse(localStorage.getItem('userLogado'))

    return (
        <div className="app-users">
            <Center>
                <TableContainer overflowX='hidden'>
                    <Heading>Usuários Cadastrados</Heading>
                    <Table size='lg' variant='simple' colorScheme='pink'>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Username</Th>
                        </Tr>
                        {users.map((user: any) => (
                            <Tr>
                                <Th>{user.id}</Th>
                                <Th>
                                    <Input placeholder={user.username} onChange={(e: { target: HTMLInputElement }) => { setUser(e.target.value) }}></Input>
                                </Th>
                                <Th>
                                    <Box display='flex' width='60' justifyContent='space-between'>
                                        <Button maxW='110' background='#d53f8c60' onClick={() => { User.length > 5 ? updateUser(User, user.id) : alert('Nome do usuário muito curto') }}>Editar Usuário</Button>

                                        {
                                            login == user.id ? '' : (
                                                <Button maxW='110' background='#d53f8c60' onClick={() => { deleteUser(user.id) }}>Delete User</Button>
                                            )
                                        }

                                    </Box>
                                </Th>
                            </Tr>
                        ))}
                    </Table>
                </TableContainer>
            </Center>
        </div>
    )
}