import styles from "./App.module.css";
import Home from "./components/Home";
import Characters from "./components/Characters";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import Nav from "./components/Nav";
import CharacterContext from "./components/CharacterContext";


function App ()
{
  return (
    <>
    <BrowserRouter>
      <Nav />
      <AppRoute>
      

      <div></div>
      </AppRoute>
      
    </BrowserRouter>
    
    </>
  );
}

export default App;
