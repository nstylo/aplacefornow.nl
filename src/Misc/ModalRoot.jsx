import React from "react"
import { useQuery } from "./Hooks"
import Login from "../Forms/Login"
import SignUp from "../Forms/SignUp"
import ResetPw from "../Forms/ResetPw"
import ForgotPw from "../Forms/ForgotPw"

export default () => {
  const [params] = useQuery()

  switch (params.get("modal")) {
    case "login":
      return <Login />
    case "signup":
      return <SignUp />
    case "resetpw":
      return <ResetPw />
    case "forgotpw":
      return <ForgotPw />
    default:
      return null
  }
}
