import { useContext } from "react";
import { dataContext } from "../../../../context/resgisterContext";


const Remember = () => {
  // const data = useContext(dataContext)
  return (
    <div className="form-row p-t-20">
      <label className="label label--block">
        Do you want remember infomation
      </label>
      <div className="p-t-15">
        <label className="radio-container m-r-55">
          Yes
          <input type="radio" checked="checked" name="exist" />
          <span className="checkmark" ></span>
        </label>
        <label className="radio-container">
          No
          <input type="radio" name="exist" />
          <span className="checkmark" ></span>
        </label>
      </div>
    </div>
  );
};

export default Remember;
