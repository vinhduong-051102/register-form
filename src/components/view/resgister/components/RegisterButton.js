import { useContext } from "react";
import { dataContext } from "../../../../context/resgisterContext";


const ResgisterButton = () => {
  const data = useContext(dataContext)
  const { handleSubmit } = data
  return (
    <div>
      <button className="btn btn--radius-2 btn--red" onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default ResgisterButton;
