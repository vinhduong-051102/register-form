import { useContext } from "react";
import { dataContext } from "../../../../context/resgisterContext";


const Gender = () => {
  const data = useContext(dataContext)
  const { handleSelectGender } = data
  return (
    <div className="form-row m-b-55">
      <div className="name">Gender</div>
      <div className="value">
        <div className="input-group">
          <div className="rs-select2 js-select-simple select--no-search">
            <select onChange={handleSelectGender}>
              <option>male</option>
              <option>female</option>
              <option>another</option>
            </select>
            <div className="select-dropdown"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gender;
