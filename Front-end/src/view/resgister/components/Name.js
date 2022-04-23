import { useContext } from "react";
import { dataContext } from "../../../context/resgisterContext";
import Field from "../../../components/input-fields/Field";
import Input from "../../../components/input-fields/Input";

const Name = () => {
  const data = useContext(dataContext)
  const { inputValues, handleInputFirstName, handleInputLastName } = data
  return (
    <Field
      nameField='Name'
      numberCol={2}
    >
      <Input
        type="text"
        action={handleInputFirstName}
        valueInput={inputValues.firstName}
        labelContent='First name'
      />
      <Input
        type="text"
        action={handleInputLastName}
        valueInput={inputValues.lastName}
        labelContent='Last name'
      />
    </Field>
  );
};

export default Name;
