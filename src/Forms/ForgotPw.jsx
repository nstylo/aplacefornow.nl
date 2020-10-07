import React, { useState } from "react"
import styled from "styled-components"
import { forgotPw } from "Misc/Api"

// custom components
import AuthDialog from "../Misc/AuthDialog"
import { Button } from "lib"
import Modal from "../Misc/Modal"
import { useQuery } from "../Misc/Hooks"

// material ui components
import { Typography, TextField, Link } from "@material-ui/core"

// icons
import { ArrowBackIos as BackIcon } from "@material-ui/icons"

export default () => {
  const [mail, setMail] = useState("")
  const [error, setError] = useState(null)
  const [params, setParams] = useQuery()

  const handleForgotPassword = async e => {
    e.preventDefault()
    setError(null)
    const response = await forgotPw(mail)

    console.log(response)

    switch (response.name) {
      case "INVALID_CREDENTIALS_EMAIL":
        setError("Email provided is not valid.")
        break
      case "USER_NOT_EXISTS":
        setError("This Email does not exist in our system.")
        break
      case "USER_PASSWORD_RESET_LINK_SENT":
        // TODO: show notification popup
        break
      default:
        setError("Something went wrong, please try again.")
    }
  }

  return (
    <Modal>
      <AuthDialog
        open={params.get("modal") === "forgotpw" ? true : false}
        setOpen={() => setParams("modal", null)}
        onSubmit={handleForgotPassword}
        onClose={() => setParams("modal", "login")}
        closeButton={
          <>
            <BackIcon style={{ width: "20px", height: "auto" }} />
            <Typography variant="body2">Back</Typography>
          </>
        }
      >
        <Typography
          variant="h2"
          color="primary"
          style={{ textAlign: "center", margin: "0 -20px 12px -20px" }}
        >
          Forgot Your Password?
        </Typography>
        <Typography variant="body1">
          Enter the email address associated with your account. Click the link
          in the email we send you to reset your password.
        </Typography>
        <TextField
          error={error ? true : false}
          helperText={error}
          label="Email Address"
          value={mail}
          onChange={e => setMail(e.target.value)}
        />
        <Wrapper>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            style={{ flexGrow: 5 }}
          >
            Confirm
          </Button>
          <Link
            onClick={() => {
              setParams("modal", "login")
            }}
            style={{
              textAlign: "right",
              cursor: "pointer",
              flexGrow: 2,
            }}
          >
            <Typography variant="body1">Log In</Typography>
          </Link>
        </Wrapper>
      </AuthDialog>
    </Modal>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`
