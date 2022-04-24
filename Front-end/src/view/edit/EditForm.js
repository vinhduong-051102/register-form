import { useContext } from 'react'
import { editContext } from "../../context/editContext";
import { Form, Field, Input } from "../../import/mainImport"
import { appContext } from '../../context/AppContext';


const EditForm = () => {
  const appData = useContext(appContext)
  const { isShowPassword } = appData
  const editData = useContext(editContext)
  const { user, handleInput, handleCancel, handleSubmitChange } = editData

  return (
    <Form formName="edit">
      <Field nameField='Name' numberCol={2}>
        <Input labelContent='First name' valueInput={user.firstName} action={handleInput} inputName='firstName' />
        <Input labelContent='Last name' valueInput={user.lastName} action={handleInput} inputName='lastName' />
      </Field>
      <Field nameField='Email' numberCol={1}>
        <Input type="email" valueInput={user.email} action={handleInput} inputName='email' />
      </Field>
      <Field nameField='User name' numberCol={1}>
        <Input type="text" valueInput={user.userName} action={handleInput} inputName='userName' />
      </Field>
      <Field nameField='Birth date' numberCol={1} >
        <Input type="date" valueInput={user.birthDate} action={handleInput} inputName='birthDate' />
      </Field>
      <Field nameField='Gender' numberCol={1}>
        <Input type="select" options={['male', 'female', 'another']} valueInput={user.gender} action={handleInput} inputName='gender' />
      </Field>
      <Field nameField='Password' numberCol={1}>
        <Input type={isShowPassword ? 'text' : 'password'} show={{isShow: true, inputValue: user.password}} labelContent='new password' valueInput={user.password}action={handleInput} inputName='password' />
      </Field>
      <br/>
      <Field numberCol={2}>
        <button type="button" className="btn btn-success" onClick={handleSubmitChange}>Submit change</button>
        <button type="button" className="btn btn-danger" onClick={handleCancel}>Cancel</button>
      </Field>
    </Form>
  );
};

export default EditForm;
