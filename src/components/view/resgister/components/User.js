import { useContext } from "react";
import { dataContext } from "../../../../context/resgisterContext";


const User = () => {
  const data = useContext(dataContext)
  const { inputValues, handleInputUserName } = data
  return (
    <div className="form-row">
      <div className="name">User name</div>
      <div className="value">
        <div className="input-group">
          <input 
            className="input--style-5" 
            type="text" 
            value={inputValues.userName}  
            onChange={handleInputUserName}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
