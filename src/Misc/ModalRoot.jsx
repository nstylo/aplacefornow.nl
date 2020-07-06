import React, { useContext } from "react"
import Login from "../Forms/Login"
import SignUp from "../Forms/SignUp"
import ResetPw from "../Forms/ResetPw"
import ForgotPw from "../Forms/ForgotPw"
import DialogContext from "./DialogContext"

export default () => {
  const { activeModal } = useContext(DialogContext)

  switch (activeModal) {
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
