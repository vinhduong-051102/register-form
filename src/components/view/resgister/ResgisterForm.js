import Name from "./components/Name";
import Email from "./components/Email";
import User from "./components/User";
import BirthDate from "./components/BirthDate";
import Gender from "./components/Gender";
import Password from "./components/Password";
import Remember from "./components/Remember";
import Register from "./components/RegisterButton";

const ResgisterForm = () => {
  return (
    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div className="wrapper wrapper--w790">
        <div className="card card-5">
          <div className="card-heading">
            <h2 className="title">Event Registration Form</h2>
          </div>
          <div className="card-body">
            <form>
              <Name />
              <Email />
              <User />
              <BirthDate />
              <Gender />
              <Password />
              <Remember />
              <Register />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResgisterForm
