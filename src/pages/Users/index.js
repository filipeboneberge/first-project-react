import React, {useState, useEffect} from 'react';
import axios from 'axios';
import H1 from '../../components/Title';
import ContainerItens from '../../components/ContainerItens';
import { Button } from '../../components/Button/styles';
import { Container, Image, User } from './styles';
import { useHistory } from 'react-router-dom';
import Avatar from '../../assets/avatar.svg';
import Arrow from '../../assets/arrow.svg';
import Trash from '../../assets/trash.svg';

const Users = () => {

  const [users, setUsers] = useState([]);
  const history = useHistory();
 
useEffect(() => {

  async function fetchUsers(){
    const {data: newUser} = await axios.get("http://localhost:3001/users");

    setUsers(newUser);
  }

  fetchUsers();
}, []);

async function deleteUser(userId) {
  await axios.delete(`http://localhost:3001/users/${userId}`);
  const newUsers = users.filter((user) => user.id !== userId);
  setUsers(newUsers);
}

  // const users = [{id: Math.random(), name: "Filipe", age: 31},
  //                {id: Math.random(), name: "Fabiana", age: 31}];

function goBackPage() {
  history.push("/");
}

  return (

    <Container>
      <Image alt="Logo-Imagem" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>
        
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p> 
              <button onClick={() => deleteUser(user.id)}> 
              <img src={Trash} alt="Lata-de-Lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}> <img alt="Imagem-Seta" src={Arrow} />Voltar</Button>
      </ContainerItens>
    </Container>

  );

}

export default Users;