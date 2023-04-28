import React, {useState, useRef} from 'react';
import axios from 'axios';
import H1 from '../../components/Title';
import ContainerItens from '../../components/ContainerItens';
import { Button } from '../../components/Button/styles';
import { Container, Image, InputLabel, Input} from '../Home/styles.js';
import { useHistory } from 'react-router-dom';
import People from '../../assets/people.svg';
import Arrow from '../../assets/arrow.svg';


const App = () => {

  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const history= useHistory();

async function addNewUser() {
 

  const {data: newUser} = await axios.post("http://localhost:3001/users", {name: inputName.current.value, age: inputAge.current.value});

  
  setUsers([...users, newUser]);

  history.push("/usuarios");

}


  return (

    <Container>
      <Image alt="Logo-Imagem" src={People} />
      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />
        <Button onClick={addNewUser}>Cadastrar <img alt="Imagem-Seta" src={Arrow} /></Button>
        
      </ContainerItens>
    </Container>

  );

}

export default App;