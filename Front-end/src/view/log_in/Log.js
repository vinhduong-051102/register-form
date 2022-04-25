import { useContext } from "react";
import { LogInProvider } from "../../context/logInContext";
import LogInForm from "./LogInForm"; 


const Log = () => {

  return (
    <LogInProvider>
      <LogInForm />
    </LogInProvider>
  )
}

export default Log