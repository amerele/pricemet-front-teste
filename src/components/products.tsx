import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Table,
    Tr,
    Th,
    TableContainer,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Center
} from '@chakra-ui/react'
export const Products = () => {
const [products, setProducts] = useState<any>([]);

useEffect(()=>{
    axios.get('https://localhost:3000/products',
    {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Max-Age": "1800",
            "Access-Control-Allow-Headers": "content-type",
            "Access-Control-Allow-Methods": "GET PUT PATCH DELETE UPDATE",
            'Content-Type' : 'application/json'
        }
    })
    .then((res) => {
        console.log(res)
    })
},[])
    return (
        <div className="app-products">
            <Center>
                <TableContainer overflowX='hidden'>
                    <Heading>Produtos Cadastrados</Heading>
                    <Table size='lg' variant='unstyled' >
                        <Accordion allowMultiple>
                            {products.map((product:any) => (
                                <AccordionItem key={product.id}>
                                    <AccordionButton _expanded={{ bg: '#00000015' }}>
                                        <Tr>
                                            <Th>{product.id}</Th>
                                            <Th>{product.name}</Th>
                                            <Th>R${product.preco}</Th>
                                        </Tr>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} className='center'>
                                        {product.descricao}
                                    </AccordionPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Table>
                </TableContainer>
            </Center>
        </div>
    )
}