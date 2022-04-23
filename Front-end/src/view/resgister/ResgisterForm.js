import Name from "./components/Name";
import Email from "./components/Email";
import User from "./components/User";
import BirthDate from "./components/BirthDate";
import Gender from "./components/Gender";
import Password from "./components/Password";
import Remember from "./components/Remember";
import Register from "./components/RegisterButton";
import Form from "../../components/form/Form";

const ResgisterForm = () => {
  return (
    <Form
      formName="Resgister"
    >
      <Name />
      <Email />
      <User />
      <BirthDate />
      <Gender />
      <Password />
      <Remember />
      <Register />
    </Form>
  );
};

export default ResgisterForm;
