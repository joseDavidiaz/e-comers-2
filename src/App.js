
import './App.css';

import NavBar from "./Componetes/NavBar/NavBar.js";
import ItemCount from "./Componetes/ItemListContainer/ItemListContainer";



function App() {
  return (
    <>
      <NavBar/>
    
      <ItemListContainer greeting="Escribir string a enviar como prop" />
      {/* <ItemListContainer/> */}
 
      <ItemCount/>

     

    </>
  );
}



export default App;