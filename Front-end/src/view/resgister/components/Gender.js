import { useContext } from "react";
import { dataContext } from "../../../context/resgisterContext";
import Field from "../../../components/input-fields/Field";
import Input from "../../../components/input-fields/Input";

const Gender = () => {
  const data = useContext(dataContext)
  const { handleSelectGender } = data
  return (
    <Field nameField='Gender'>
      <Input type='select' options={['male', 'female', 'another']} action={handleSelectGender} />
    </Field>
  );
};

export default Gender;
