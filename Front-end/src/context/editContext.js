import { createContext, useContext, useEffect, useState } from "react";
import { appContext } from "./AppContext";
import axios from "axios";
const editContext = createContext();
const EditDataProvider = ({ children }) => {
  const appData = useContext(appContext);
  const { id } = appData;
  const [user, setUser] = useState({})
  useEffect(() => {
    axios
      .get(`http://localhost:3000/forms/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleInput = (e) => {
    setUser(prev => {
        return {...prev, [e.target.getAttribute('name')]: e.target.value}
    })
}
  const data = {
    user,
    handleInput
  };
  return <editContext.Provider value={data}>{children}</editContext.Provider>;
};

export { editContext, EditDataProvider };
