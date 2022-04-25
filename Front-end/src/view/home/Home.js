import { HomeDataProvider } from "../../context/homeContext";
import HomePage from "./HomePage"
const Home = () => {
  return (
    <HomeDataProvider>
      <HomePage />
    </HomeDataProvider>
  )
};

export default Home;
