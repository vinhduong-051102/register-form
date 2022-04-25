import { createContext, useState, useContext } from 'react'
import axios from 'axios'
import { appContext } from './AppContext'
const dataContext = createContext()
function ResgisterDataProvider({ children }) {
    const appData = useContext(appContext)
    const { inputValues, isShowPassword, setInputValues } = appData
    const handleInput = (e) => {
        setInputValues(prev => {
            return {...prev, [e.target.getAttribute('name')]: e.target.value}
        })
    }

    const handleSubmit = () => {
        const data = inputValues
        axios.post('http://localhost:3000/forms', data)
    }
    const data = {
        inputValues,
        isShowPassword,
        handleSubmit,
        handleInput
    }
    return (
        <dataContext.Provider value = { data }>
            { children }
        </dataContext.Provider>
    )
}

export default ResgisterDataProvider
export { dataContext }