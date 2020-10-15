import React from "react"
import Modal from "./Modal"
import { useQuery } from "./Hooks"
import Login from "../Forms/Login"
import SignUp from "../Forms/SignUp"
import ResetPw from "../Forms/ResetPw"
import ForgotPw from "../Forms/ForgotPw"

export default () => {
  const [params] = useQuery()

  let child
  switch (params.get("modal")) {
    case "login":
      child = <Login routeTo={params.get("routeTo")} />
      break
    case "signup":
      child = <SignUp />
      break
    case "resetpw":
      child = <ResetPw />
      break
    case "forgotpw":
      child = <ForgotPw />
      break
    default:
      child = null
  }

  return <Modal>{child}</Modal>
}
