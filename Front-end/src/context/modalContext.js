import { createContext, useContext } from 'react'
import { appContext } from './AppContext'
const modalContext = createContext()

const ModalDataProvider = ({ children }) => {
  const appData = useContext(appContext)
  const { setIsOpenModal } = appData
  const handleCloseModal = () => {
    setIsOpenModal(false)
  }
  const data = {
    handleCloseModal
  }
  return (
    <modalContext.Provider value={data}>
      { children }
    </modalContext.Provider>
  )
}

export { modalContext, ModalDataProvider }