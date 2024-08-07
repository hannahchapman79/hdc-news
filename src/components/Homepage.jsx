import { useContext } from "react";
import { UserContext } from "../user";

function Homepage() {

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <>
      <h1>Hey {loggedInUser.name}! Welcome to NC News!</h1>
    </>
  );
}

export default Homepage;
