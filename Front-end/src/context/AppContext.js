import { createContext, useState } from "react"

const appContext = createContext()
const AppProvider = ({ children }) => {
  const [id, setId] = useState()
  const [isEdit, setIsEdit] = useState(false);
  const [users, setUsers] = useState([]);
  const [loginInfor, setLoginInfor] = useState({
    email: '',
    password: ''
  });
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    birthDate: '',
    gender: 'male',
    password: '',
    confirmPassword: '',
  })
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isLoginSuccess, setIsLoginSuccess] = useState(false)
  const data = {
    id,
    isEdit,
    users,
    inputValues,
    isShowPassword,
    loginInfor,
    isLoginSuccess,
    setLoginInfor,
    setId,
    setIsEdit,
    setUsers,
    setInputValues,
    setIsShowPassword,
    setIsLoginSuccess
  }
  return (
    <appContext.Provider value={data} >
      {children}
    </appContext.Provider>
  )
}

export { appContext, AppProvider }