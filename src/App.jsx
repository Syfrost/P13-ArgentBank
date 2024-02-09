import './App.css'
import { Outlet } from "react-router";

//import LoginForm from "./components/LoginForm/LoginForm.jsx";

function App() {

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
