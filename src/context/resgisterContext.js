import { createContext, useState } from 'react'
import axios from 'axios'

const dataContext = createContext()
function ResgisterDataProvider({ children }) {
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
    const handleInputFirstName = (e) => {
        setInputValues(prev => {
            return {...prev, firstName: e.target.value}
        })
    }
    const handleInputLastName = (e) => {
        setInputValues(prev => {
            return {...prev, lastName: e.target.value}
        })
    }
    const handleInputEmail = (e) => {
        setInputValues(prev => {
            return {...prev, email: e.target.value}
        })
    }
    const handleInputUserName = (e) => {
        setInputValues(prev => {
            return {...prev, userName: e.target.value}
        })
    }
    const handleSelectGender = (e) => {
        setInputValues(prev => {
            return {...prev, gender: e.target.value}
        })
    }
    const handleSelectBirthDate = (e) => {
        setInputValues(prev => {
            return {...prev, birthDate: e.target.value}
        })
    }
    const handleInputPassword = (e) => setInputValues(prev => {
        return {...prev, password: e.target.value}
    })

    const handleInputConfirmPassword = (e) => {
        setInputValues(prev => {
            return {...prev, confirmPassword: e.target.value}
        })
    }
    const handleChangeShow = (e) => {
        e.preventDefault()
        setIsShowPassword(!isShowPassword)
    }
    const handleSubmit = () => {
        const data = inputValues
        axios.post('http://localhost:3000/forms', data)
    }
    
    const data = {
        inputValues,
        isShowPassword,
        handleInputFirstName,
        handleInputLastName,
        handleInputEmail, 
        handleInputUserName,
        handleSelectGender,
        handleSelectBirthDate,
        handleInputConfirmPassword,
        handleInputPassword,
        handleChangeShow,
        handleSubmit,
    }
    return (
        <dataContext.Provider value = { data }>
            { children }
        </dataContext.Provider>
    )
}

export default ResgisterDataProvider
export { dataContext }