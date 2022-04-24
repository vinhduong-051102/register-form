import { useContext } from "react";
import { dataContext } from "../../../context/resgisterContext";
import { Field, Input } from "../../../import/mainImport"
import { appContext } from "../../../context/AppContext";

const Password = () => {
  const appData = useContext(appContext)
  const { isShowPassword, inputValues } = appData
  const data = useContext(dataContext)
  const { handleInput, handleChangeShow } = data
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
