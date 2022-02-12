import { logOut } from "../../config/redux/actions/authAction";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p>Home</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </>
  );
};

export default Home;
