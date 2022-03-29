
import './App.css';

import NavBar from "./Componetes/NavBar/NavBar.js";
import ItemCount from "./Componetes/ItemListContainer/ItemListContainer";



function App() {
  return (
    <>
      <NavBar/>
    
      {/* <ItemListContainer/> */}
 
      <ItemCount/>

      <h2> OFERTAS </h2>

      <ItemCount/>

    </>
  );
}



export default App;