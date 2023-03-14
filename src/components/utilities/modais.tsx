import * as React from 'react';
import { useState, useEffect } from 'react';
import { CustomInput } from './input';
import { cadastrarProd, updateUser } from './functions';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react';
import axios from 'axios';

//New Product Modal
export const NewProduct = ({ isOpen, onClose, finalRef }: { isOpen: any, onClose: any, finalRef: any }) => {
    const [Nome, setNome] = useState('');
    const [Preco, setPreco] = useState<number>();
    const [Descri, setDescri] = useState('');

    return (
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Novo Produto</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <CustomInput name='Nome do Produto' type='text' onChange={(e: { target: HTMLInputElement }) => {
                        setNome(e.target.value)
                    }}></CustomInput>
                    <CustomInput name='Preco' type='number' onChange={(e: { target: HTMLInputElement }) => {
                        setPreco(parseInt(e.target.value))
                    }}></CustomInput>
                    <CustomInput name='Descricao' type='text' onChange={(e: { target: HTMLInputElement }) => {
                        setDescri(e.target.value)
                    }}></CustomInput>

                </ModalBody>
                <ModalFooter>
                    <Button variant='ghost' background='#d53f8c60'
                        onClick={() => { cadastrarProd(Nome, Descri, Preco) }}>Cadastrar Produto</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )

}