import { useContext } from "react";
import { dataContext } from "../../../context/resgisterContext";
import { Field, Input } from "../../../import/mainImport"

const Email = () => {
  const data = useContext(dataContext)
  const { inputValues, handleInput } = data
  return (
    
    <Field
      nameField='Email'
      numberCol={1}
    >
      <Input
        type="email"
        valueInput={inputValues.email}
        action={handleInput}
        inputName='email'
      />
    </Field>
  );
};

export default Email;
