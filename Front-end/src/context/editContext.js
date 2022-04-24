import { createContext, useContext, useEffect, useState } from "react";
import { appContext } from "./AppContext";
import axios from "axios";
const editContext = createContext();
const EditDataProvider = ({ children }) => {
  const appData = useContext(appContext);
  const { id, setIsEdit, setUsers } = appData;
  const [user, setUser] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:3000/forms/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))
  }, [id]);
  const handleInput = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.getAttribute("name")]: e.target.value }
    })
  }
  const handleCancel = () => {
    setIsEdit(false)
  }
  const handleSubmitChange = async () => {
    await axios.put(`http://localhost:3000/forms/${id}`, user)
    await axios.get(`http://localhost:3000/forms`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
    setIsEdit(false)
  }
  const data = {
    user,
    handleInput,
    handleCancel,
    handleSubmitChange
  }
  return (
    <editContext.Provider value={data}>
      {children}
    </editContext.Provider>
  )
}

export { editContext, EditDataProvider };
