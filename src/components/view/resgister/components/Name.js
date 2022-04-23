import { useContext } from "react";
import { dataContext } from "../../../../context/resgisterContext";

const Name = () => {
  const data = useContext(dataContext)
  const { inputValues, handleInputFirstName, handleInputLastName } = data
  return (
    <div className="form-row m-b-55">
      <div className="name">Name</div>
      <div className="value">
        <div className="row row-space">
          <div className="col-2">
            <div className="input-group-desc">
              <input
                className="input--style-5"
                type="text"
                name="first_name"
                autoComplete="off"
                value = {inputValues.firstName}
                onChange = {handleInputFirstName}
              />
              <label className="label--desc">first name</label>
            </div>
          </div>
          <div className="col-2">
            <div className="input-group-desc">
              <input 
                className="input--style-5" 
                type="text" 
                onChange = { handleInputLastName }
              />
              <label className="label--desc">last name</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
