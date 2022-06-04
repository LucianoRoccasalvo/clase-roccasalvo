  import React from "react";
  import NavBar from "./components/NavBar";
  import ItemListContainer from "./containers/ItemListContainer";
  import ItemCount from './components/ItemCount.jsx';
  import 'bootstrap/dist/css/bootstrap.min.css';

  function App() {

    const onAdd = (count) => {
      console.log(count);

    }
    return (
        <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Saludo desde ItemListContainer'}/>
        <ItemCount stock={1} max={5} onAdd={onAdd}/>
        </div>
    );
  }

  export default App;
