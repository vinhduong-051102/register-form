import { useContext } from "react";
import { dataContext } from "../../../context/resgisterContext";
import Field from "../../../components/input-fields/Field";
import Input from "../../../components/input-fields/Input";

const Password = () => {
  const data = useContext(dataContext)
  const { inputValues, isShowPassword, handleInputPassword, handleInputConfirmPassword, handleChangeShow } = data
  return (
    <Field
      nameField='Password'
      numberCol={2}
    >
      <Input
        type={isShowPassword ? "text" : "password"}
        labelContent='new password'
        action={handleInputPassword}
        show={{
          isShow: true,
          isShowPassword,
          handleChangeShow,
          inputValue: inputValues.password
        }}
      />

      <Input
        type={isShowPassword ? "text" : "password"}
        labelContent='comfirm password'
        action={handleInputConfirmPassword}
        show={{
          isShow: true,
          isShowPassword,
          handleChangeShow,
          inputValue: inputValues.confirmPassword
        }}
      />
    </Field>
  );
};

export default Password;
