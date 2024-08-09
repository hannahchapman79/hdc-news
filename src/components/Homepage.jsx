import { useContext } from "react";
import { UserContext } from "../user";

function Homepage() {

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <>
      <h1>NC News</h1>
      <h2>Your Daily Dose of Insight.</h2>
    </>
  );
}

export default Homepage;
