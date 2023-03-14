import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    Table,
    Tr,
    Th,
    TableContainer,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button,
    Box,
    Center,
    Input
} from '@chakra-ui/react'
import { deleteProd, updateProduct } from './functions';
export const ProdTable = ({ products }: { products: any }) => {

    const [Descrip, setDescrip] = useState('');
    const [Preco, setPreco] = useState('');
    const [Nome, setNome] = useState('');

    return (
        <TableContainer overflowX='hidden'>
            <Table size='lg' variant='unstyled' marginTop='4'>
                <Accordion allowMultiple>
                    {products?.map((product: any) => (
                        <AccordionItem key={product.id}>
                            <AccordionButton _expanded={{ bg: '#d53f8c60' }}>
                                <Tr>
                                    <Th width='10'>{product.id}</Th>
                                    <Th width='50'>
                                        <Input placeholder={product.name} onChange={(e: { target: HTMLInputElement }) => { setNome(e.target.value) }}></Input>
                                    </Th>
                                    <Th width='30'>
                                        <Input placeholder={"R$ " + product.price} onChange={(e: { target: HTMLInputElement }) => { setPreco(e.target.value) }}></Input>
                                    </Th>
                                </Tr>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4} className='center'>
                                <Center flexDirection='column'>

                                    <Input placeholder={product.description} onChange={(e: { target: HTMLInputElement }) => { setDescrip(e.target.value) }}></Input>

                                    <Box display='flex' width='80' justifyContent='space-between'>
                                        <Button background='#d53f8c60' onClick={ ()=>{ Nome && Preco && Descrip ? updateProduct(Nome, parseInt(Preco), Descrip, product.id) :''}}>Editar Produto</Button>
                                        <Button background='#d53f8c60' onClick={() => { deleteProd(product.id) }}>Excluir Produto</Button>
                                    </Box>
                                </Center>
                            </AccordionPanel>

                        </AccordionItem>
                    )) ?? 'Erro ao carregar o banco de dados. Por favor, atualize a página'}
                </Accordion>
            </Table>
        </TableContainer >
    )
}