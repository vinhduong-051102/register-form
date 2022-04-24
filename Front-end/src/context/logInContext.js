import { createContext, useContext, useEffect } from "react";
import axios from 'axios'
import { appContext } from "./AppContext";
const logInContext = createContext()
const LogInProvider = ({ children }) => {
  const appData = useContext(appContext)
  const { users, loginInfor, setLoginInfor, setIsLoginSuccess, setUsers } = appData
  const handleInput = (e) => {
    setLoginInfor(prev => {
      return {...prev, [e.target.getAttribute('name')]: e.target.value}
    })
  }
  useEffect(() => {
    axios.get("http://localhost:3000/forms")
      .then(res => setUsers(res.data))
  }, [])
  const handleLogin = (e) => {
    e.preventDefault()
    if(users.length > 0) {
      const loginKeys = Object.keys(loginInfor)
      const usersKeys = Object.keys(users[0])
      const commonKeys = usersKeys.filter((key) => loginKeys.includes(key))
      const loginStatus = commonKeys.some((key) => {
        return loginInfor[key] !== users[key]
      })
      setIsLoginSuccess(loginStatus)
    }
    else {
      setIsLoginSuccess(false)
    }
  }
  const data = {
    handleInput,
    handleLogin
  }
  return (
    <logInContext.Provider value={data}>
      { children }
    </logInContext.Provider>
  )
}

export { logInContext, LogInProvider }