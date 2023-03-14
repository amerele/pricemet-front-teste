import { Input } from '@chakra-ui/react'

export const CustomInput = ({name, type, onChange}: {name:string, type:string, onChange: any}) =>{
    return (
        
        <>
            <div className={"input-"+ name}>
                <label id='userLabel'>{name == 'confirmasenha' ? "Confirmar Senha" : name} 
                    <Input name= {name} type = {type} size='sm' onChange={onChange}/>
                </label>

            </div>
            
        </>
    )
}