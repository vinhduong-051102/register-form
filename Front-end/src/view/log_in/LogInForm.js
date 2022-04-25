import { useContext } from "react"
import { Form, Field, Input } from "../../import/mainImport"
import { appContext } from "../../context/AppContext"
import { logInContext } from "../../context/logInContext"
import Modal from "../modal/Modal" 

const LogInForm = () => {
  const appData = useContext(appContext)
  const { isShowPassword, loginInfor, isOpenModal } = appData
  const loginData = useContext(logInContext)
  const  { handleInput, handleLogin } = loginData
  const loginView = (
    <Form formName='Login'>
      <Field nameField='Email'>
        <Input type='email' inputName='email' action={handleInput} />
      </Field>
      <Field nameField='Password' >
        <Input type={isShowPassword ? 'text' : 'password'} show={{isShow: true, inputValue: loginInfor.password}} inputName='password' action={handleInput} />  
      </Field>
      <Input type="button" labelContent="Log in" action={handleLogin} />  
    </Form>
  )
  const modalView = <Modal />
  return isOpenModal ? modalView : loginView
}
export default LogInForm