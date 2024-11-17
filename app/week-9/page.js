"use client";
import { useUserAuth } from "../week-9/_utils/auth-context";
export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const login = async() => {
  await gitHubSignIn();
  };
  const logout = async() => {
  await firebaseSignOut();
  }
  return (
    <div>
      <h1>Page</h1>
      <div>
        {user ? (
          <button onClick={logout}>Sign Out</button>
        ) : (
          <button onClick={login}>Sign In</button>
        )}
    </div>
  </div>
  );
}