import { useContext } from "react";
import { dataContext } from "../../../context/resgisterContext";
import { Field, Input } from "../../../import/mainImport"


const Gender = () => {
  const data = useContext(dataContext)
  const { handleInput } = data
  return (
    <Field nameField='Gender'>
      <Input type='select' options={['male', 'female', 'another']} action={handleInput} inputName='gender' />
    </Field>
  );
};

export default Gender;
