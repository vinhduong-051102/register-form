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
    avatarURL: 'https://www.w3schools.com/bootstrap5/img_avatar3.png'
  })
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isLoginSuccess, setIsLoginSuccess] = useState()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [userLogin, setUserLogin] = useState()

  const data = {
    id,
    isEdit,
    users,
    inputValues,
    isShowPassword,
    loginInfor,
    isLoginSuccess,
    isOpenModal,
    userLogin,
    setLoginInfor,
    setId,
    setIsEdit,
    setUsers,
    setInputValues,
    setIsShowPassword,
    setIsLoginSuccess,
    setIsOpenModal,
    setUserLogin,
  }
  return (
    <appContext.Provider value={data} >
      {children}
    </appContext.Provider>
  )
}

export { appContext, AppProvider }