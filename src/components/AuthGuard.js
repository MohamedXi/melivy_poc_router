import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authAtom } from "../recoil/states/auth";

// For routes that can only be accessed by authenticated users
function AuthGuard({ children }) {
  const auth = useRecoilValue(authAtom);
  const authToken = window.localStorage.getItem('user')

  if (!auth.user && !authToken) {
    return <Navigate to="/auth/sign-in" />;
  }

  return children;
}

export default AuthGuard;
