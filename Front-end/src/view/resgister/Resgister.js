import ResgisterDataProvider from "../../context/resgisterContext";
import ResgisterForm from "./ResgisterForm";

const Resgister = () => {
  return (
    <ResgisterDataProvider>
      <ResgisterForm />
    </ResgisterDataProvider>
  );
};

export default Resgister;
