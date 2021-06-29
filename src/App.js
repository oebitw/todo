
import './App.scss'

import Pagination from './context/Pagenation';
import Header from './components/header/Header'
import ToDo from './components/todo/todo-connected';



function App() {

  return (
    <>
      <Header />
      <Pagination>
        <ToDo />
      </Pagination>
      
    </>
  );

}

export default App
