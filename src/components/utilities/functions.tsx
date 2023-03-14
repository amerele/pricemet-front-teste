import axios from 'axios';
import * as React from 'react';


// Usuários
export const CadastrarUser = (Usuario: string, Senha: string) =>{   
        try {
            axios.post('http://localhost:3000/users',{
                username: Usuario,
                password: Senha
            })
            alert('Usuario Cadastrado')
            window.location.reload()
        } catch (error) {
            alert(`Erro ao cadastrar o usuário: ${error}`)
        }
}

export const LogarUser= (Usuario: string, Senha: string) =>{
    try {
        axios.get('http://localhost:3000/users')
        .then((res)=> {
            let userList = res.data;
            userList.forEach((user:any) => {
                if (Usuario == user.username && Senha == user.password){
                    alert('Logado com sucesso'),
                localStorage.setItem('userLogado', JSON.stringify(user.id)),
                window.location.reload()
                }
            });
        })
    } catch (error) {
        alert('Erro ao comunicar-se com o banco de dados. Reinicie a página')
    }
}
export const deleteUser = (id: { id: number }) => {
    try {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then((res) => {
                alert('Usuário deletado')
            })
    } catch (error) {
        alert(`Não foi possível deletar o usuário. [${error}]`)
    }
}

export const updateUser = (User: string, userId: number) =>{
    try {
        axios.patch(`http://localhost:3000/users/${userId}`, {
            username: User
        })
        window.location.reload()
    } catch (error) {
        alert(`Erro ao atualizar o usuário: ${error}`)
    }
}

// Produtos
export const cadastrarProd = (Nome: string, Descri: string, Preco: any) => {
    try {
        axios.post('http://localhost:3000/products', {
            name: Nome,
            description: Descri,
            price: Preco
        })
        window.location.reload()
    } catch (error) {
        alert(`Erro ao cadastrar o usuário: ${error}`)
    }
}

export const updateProduct = (Nome: string, Preco: number, Descrip:string, ID: number)=>{
    try {
        axios.patch(`http://localhost:3000/products/${ID}`, {
            name: Nome,
            description: Descrip,
            price: Preco
        })
        
    } catch (error) {
        alert(`Erro ao atualizar o usuário: ${error}`)
    }
    window.location.reload()
}
export const deleteProd = (id: number) =>{
    try {
        axios.delete(`http://localhost:3000/products/${id}`)
            .then((res) => {
                alert('Produto deletado')
                window.location.reload()
            })
    } catch (error) {
        alert(`Não foi possível deletar o produto. [${error}]`)
    }
}