import { createContext, useContext } from "react";
import { appContext } from "./AppContext";
const homeContext = createContext()

const HomeDataProvider = ({ children }) => {
  const appData = useContext(appContext)
  const {  } = appData
  const data = {

  }
  return (
    <homeContext.Provider value={data}>
      { children }
    </homeContext.Provider>
  )
}

export { homeContext, HomeDataProvider }