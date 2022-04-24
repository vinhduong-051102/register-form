import { createContext, useState } from "react"

const appContext = createContext()
const AppProvider = ({ children }) => {
  const [id, setId] = useState()
  const data = {
    id,
    setId,

  }
  return (
    <appContext.Provider value={data} >
      {children}
    </appContext.Provider>
  )
}

export { appContext, AppProvider }