import styles from "./App.module.css";
import Home from "./components/Home";
import Characters from "./components/Characters";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import Nav from "./components/Nav";



function App ()
{
  return (
    <>
    <BrowserRouter>
      <Nav />
      <AppRoute>

      </AppRoute>
    </BrowserRouter>
    
    </>
  );
}

export default App;
