import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NewProduct } from './utilities/modais';
import { ProdTable } from './utilities/table-products';
import { Heading, Center, Button, useDisclosure } from '@chakra-ui/react'

export const Products = () => {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        try {
            axios.get('http://localhost:3000/products')
                .then((res) => {
                    setProducts(res.data)
                })
        } catch (error) {
            alert(`Erro ao carregar os produtos. Reinicie a página [${error}]`)
        }
    }, [])

    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef(null)

    return (
        <div className="app-products">
            <Center flexDirection='column'>
                <Heading>Produtos Cadastrados</Heading>
                <Button background='#d53f8c60' size='sm' onClick={onOpen} >Novo Produto</Button>

                <ProdTable products={products}/> { /*  => ./utilities/table-products */ }

            </Center>

            <NewProduct isOpen={isOpen} onClose={onClose} finalRef={finalRef} /> { /*  => ./utilities/modal-new-product */ }
        </div>
    )
}