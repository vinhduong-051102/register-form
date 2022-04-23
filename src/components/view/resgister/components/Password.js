import { useContext } from "react";
import { dataContext } from "../../../../context/resgisterContext";


const Password = () => {
  const data = useContext(dataContext)
  const { inputValues, isShowPassword, handleInputPassword, handleInputConfirmPassword, handleChangeShow, handleCheckSimilarPassword } = data
  return (
    <div className="form-row m-b-55">
      <div className="name">Password</div>
      <div className="value">
        <div className="row row-space">
          <div className="col-2">
            <div className="input-group-desc">
              <input 
                className="input--style-5 input-pw" 
                type={isShowPassword ? "text" : "password"}
                onChange={handleInputPassword}
                value={inputValues.password}
              />
              <button className={isShowPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick={handleChangeShow} style={inputValues.password ? {} : {display: "none"}}/>
              <label className="label--desc">new password</label>
            </div>
          </div>
          <div className="col-2">
            <div className="input-group-desc">
              <input 
                className="input--style-5 input-pw" 
                type={isShowPassword ? "text" : "password"}
                onChange={handleInputConfirmPassword}
                value={inputValues.confirmPassword}
                onBlur={handleCheckSimilarPassword}
              />
              <button className={isShowPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick={handleChangeShow} style={inputValues.confirmPassword ? {} : {display: "none"}} />
              <label className="label--desc">comfirm password</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
