import React, { useState} from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './style';

export default function Main(){

    const [ newRepo, setNewRepo ] = useState('');

    function handleinputChange(e){
        setNewRepo(e.target.value);
    }


    return(
       <Container>
            <h1>
                <FaGithub size={25}/>
                Meus Repositorios
            </h1>

            <Form onSubmit={()=>{}}>
                <input 
                type="text" 
                placeholder="Adicionar Repositorios"
                value={newRepo}
                onChange={handleinputChange} 
                />


                <SubmitButton>
                    <FaPlus size={14} color="#fff"/>
                </SubmitButton>

            </Form>

       </Container>
    );
}