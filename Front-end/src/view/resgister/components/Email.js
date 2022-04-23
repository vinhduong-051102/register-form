import { useContext } from "react";
import { dataContext } from "../../../context/resgisterContext";
import Field from "../../../components/input-fields/Field";
import Input from "../../../components/input-fields/Input";

const Email = () => {
  const data = useContext(dataContext)
  const { inputValues, handleInputEmail } = data
  return (
    
    <Field
      nameField='Email'
      numberCol={1}
    >
      <Input
        type="email"
        valueInput={inputValues.email}
        action={handleInputEmail}
      />
    </Field>
  );
};

export default Email;
