import { useContext } from "react";
import { dataContext } from "../../../context/resgisterContext";
import { Field, Input } from "../../../import/mainImport"

const BirthDate = () => {
  const data = useContext(dataContext)
  const { handleInput } = data
  return (
    <Field
      nameField='Birth date'
      numberCol={1}
    >
      <Input
        type="date"
        action={handleInput}
        inputName='birthDate'
      />
    </Field>
  );
};

export default BirthDate;
