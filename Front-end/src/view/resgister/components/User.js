import { useContext } from "react";
import { dataContext } from "../../../context/resgisterContext";
import Field from "../../../components/input-fields/Field";
import Input from "../../../components/input-fields/Input";

const User = () => {
  const data = useContext(dataContext)
  const { inputValues, handleInputUserName } = data
  return (
    <Field
      nameField='User name'
      numberCol={1}
    >
      <Input
        valueInput={inputValues.userName}  
        action={handleInputUserName}
      />
    </Field>
  );
};

export default User;
