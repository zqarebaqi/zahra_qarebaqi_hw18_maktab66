import React, { useContext, useCallback } from "react";
import { UserContext } from "../context/context";
import Forms from "../Form";

const IsAuth = (Component) => {
  return function WithIsAuthComponent({ ...props }) {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    return (
      <>
        {loggedInUser === null ? (
          <Forms />
        ) : (
          <Component
            name={loggedInUser.name}
            handleLogOut={() => setLoggedInUser(null)}
            {...props}
          />
        )}
      </>
    );
  };
};

export default IsAuth;
