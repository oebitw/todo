
//////////////////////////
//////// Imports ////////
////////////////////////

//==============//
// Dependencies//
//============//

import { Container } from 'react-bootstrap';

//==============//
// Components  //
//============//

import Pagination from './context/Pagenation';
import Header from './components/header/Header'
import ToDo from './components/todo/todo-connected';
import './App.scss'
import Auth from './auth/Auth';
import AuthProvider from './context/Auth';



//////////////////////
//////// APP ////////
////////////////////


function App() {

  return (
    <>
    <AuthProvider>
      <Header />
      <Pagination>
        <Auth capability="read">
          <ToDo />
        </Auth>
        <Auth capability="guest">
          <Container style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>To Do List Manager</h1>
            <p>Kindly sign up to use the App </p>
          </Container>
        </Auth>
      </Pagination>
    </AuthProvider>
  </>
  );

}

export default App
