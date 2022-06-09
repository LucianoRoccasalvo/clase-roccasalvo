  import React from "react";
  import NavBar from "./components/NavBar";
  import ItemListContainer from "./containers/ItemListContainer";
  import ItemCount from './components/ItemCount.jsx';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import ItemDetailContainer from "./containers/ItemDetailContainer";

  function App() {

    const onAdd = (count) => {
      console.log(count);

    }
    return (
        <div className="App">
        <NavBar />
        <ItemListContainer/>
        <ItemDetailContainer/>
        <ItemCount inicial={1} max={5} onAdd={onAdd}/>

        </div>
    );
  }

  export default App;
