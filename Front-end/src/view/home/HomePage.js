import { useContext } from "react";
import { homeContext } from "../../context/homeContext";
import { appContext } from "../../context/AppContext";
const HomePage = () => {
  const appData = useContext(appContext);
  const { userLogin } = appData;
  const homeData = useContext(homeContext);
  const {} = homeData;
  const userLoginView = (
    <div className="container mt-3" style={{ width: "50%" }}>
      <div className="card">
        <div className="card-header">
          <img
            src= {userLogin ? userLogin.avatarURL : 'https://www.w3schools.com/bootstrap5/img_avatar3.png'}
            className="mx-auto d-block rounded-circle"
            style={{ maxWidth: "50%" }}
            alt='avatar'
          />
        </div>
        <div className="card-body">{`Hello ${userLogin ? userLogin.userName : 's'}`}</div>
        <div className="card-footer">Footer</div>
      </div>
    </div>
  );
  const unUserLoginView = <>heel</>;
  return userLogin ? userLoginView : unUserLoginView;
};

export default HomePage;
