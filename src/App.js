import styles from "./App.module.css";
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
