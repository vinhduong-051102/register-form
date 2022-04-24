import { useContext } from "react";
import { dataContext } from "../../../context/resgisterContext";
import { Field, Input } from "../../../import/mainImport"


const Password = () => {
  const data = useContext(dataContext)
  const { inputValues, isShowPassword, handleInput, handleChangeShow } = data
  return (
    <Field
      nameField='Password'
      numberCol={2}
    >
      <Input
        type={isShowPassword ? "text" : "password"}
        labelContent='new password'
        action={handleInput}
        inputName='password'
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
        action={handleInput}
        inputName='confirmPassword'
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
