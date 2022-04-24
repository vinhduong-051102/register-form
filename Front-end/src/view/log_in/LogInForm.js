import { useContext } from "react"
import { Form, Field, Input } from "../../import/mainImport"
import { appContext } from "../../context/AppContext"
import { logInContext } from "../../context/logInContext"
const LogInForm = () => {
  const appData = useContext(appContext)
  const { isShowPassword, loginInfor } = appData
  const loginData = useContext(logInContext)
  const  { handleInput, handleLogin } = loginData
  return (
    <Form formName='Log in'>
      <Field nameField='Email'>
        <Input type='email' inputName='email' action={handleInput} />
      </Field>
      <Field nameField='Password' >
        <Input type={isShowPassword ? 'text' : 'password'} show={{isShow: true, inputValue: loginInfor.password}} inputName='password' action={handleInput} />  
      </Field>
      <Input type="button" labelContent="Log in" action={handleLogin} />  
    </Form>
  )
}

export default LogInForm