import { useContext } from "react";
import { dataContext } from "../../../../context/resgisterContext";


const Email = () => {
  const data = useContext(dataContext)
  const { inputValues, handleInputEmail } = data
  return (
    <div className="form-row">
      <div className="name">Email</div>
      <div className="value">
        <div className="input-group">
          <input 
            className="input--style-5" 
            type="email" 
            onChange={handleInputEmail}
            value={inputValues.email}
          />
        </div>
      </div>
    </div>
  );
};

export default Email;
