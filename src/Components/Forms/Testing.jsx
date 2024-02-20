// SomeComponent.js

import { useAuth0 } from "@auth0/auth0-react";

function Testing() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  console.log(isAuthenticated, "authenticate");
  console.log(user, "use");

  return (
    <div style={{ height: "100vh" }}>
      {isAuthenticated ? (
        <>
          <p>Hello, {user.name}!</p>
          <button onClick={() => logout()}>Log Out</button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </div>
  );
}

export default Testing;
