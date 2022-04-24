import { useContext } from "react";
import { dataContext } from "../../../context/resgisterContext";
import { Field, Input } from "../../../import/mainImport"


const Name = () => {
  const data = useContext(dataContext)
  const { inputValues,  handleInput } = data
  return (
    <Field
      nameField='Name'
      numberCol={2}
    >
      <Input
        type="text"
        action={handleInput}
        valueInput={inputValues.firstName}
        labelContent='First name'
        inputName='firstName'
      />
      <Input
        type="text"
        action={handleInput}
        valueInput={inputValues.lastName}
        labelContent='Last name'
        inputName='lastName'
      />
    </Field>
  );
};

export default Name;
