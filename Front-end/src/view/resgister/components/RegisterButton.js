import { useContext } from "react";
import { dataContext } from "../../../context/resgisterContext";
import Input from "../../../components/input-fields/Input";

const ResgisterButton = () => {
  const data = useContext(dataContext)
  const { handleSubmit } = data
  return (
    <Input type="button" labelContent='Resgister' action={handleSubmit} />
  );
};

export default ResgisterButton;
