import { useContext } from "react";
import { dataContext } from "../../../context/resgisterContext";
import { Field, Input } from "../../../import/mainImport"


const User = () => {
  const data = useContext(dataContext)
  const { inputValues, handleInput } = data
  return (
    <Field
      nameField='User name'
      numberCol={1}
    >
      <Input
        valueInput={inputValues.userName}  
        action={handleInput}
        inputName='userName'
      />
    </Field>
  );
};

export default User;
