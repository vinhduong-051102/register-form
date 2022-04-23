import { useContext } from "react";
import { dataContext } from "../../../context/resgisterContext";
import Field from "../../../components/input-fields/Field";
import Input from "../../../components/input-fields/Input";

const BirthDate = () => {
  const data = useContext(dataContext)
  const { handleSelectBirthDate } = data
  return (
    <Field
      nameField='Birth date'
      numberCol={1}
    >
      <Input
        type="date"
        action={handleSelectBirthDate}
      />
    </Field>
  );
};

export default BirthDate;
