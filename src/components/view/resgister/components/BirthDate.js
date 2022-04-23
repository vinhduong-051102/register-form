import { useContext } from "react";
import { dataContext } from "../../../../context/resgisterContext";


const BirthDate = () => {
  const data = useContext(dataContext)
  const { handleSelectBirthDate } = data
  return (
    <div className="form-row m-b-55">
      <div className="name">Birth date</div>
      <div className="value">
        <div className="row row-refine">
          <div className="col-9">
            <div className="input-group-desc">
              <input 
                className="input--style-5" 
                type="date" 
                onChange={handleSelectBirthDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthDate;
