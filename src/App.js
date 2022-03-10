import styled from 'styled-components';
import './App.css';
import Button from './components/Button/Button';
import { ContainerBody } from './components/Container/styles';


export const Input = styled.input`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;
function App() {
  return (
    <>
    <ContainerBody>
      <Input placeholder='Usuário'></Input>
    <Button/>
    </ContainerBody>
    </>
  );
}

export default App;
