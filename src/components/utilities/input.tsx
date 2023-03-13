import { Input } from '@chakra-ui/react'

export const CustomInput = ({name, type}: {name:string, type:string}) =>{
    return (
        
        <>
            <div className={"input-"+ name}>
                <label id='userLabel' htmlFor={name}>{name == 'confirmasenha' ? "Confirmar Senha" : name}</label>
                <Input name= {name} type = {type} size='sm' />
            </div>
            
        </>
    )
}