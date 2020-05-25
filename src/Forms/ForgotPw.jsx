import React, { useContext, useState } from "react"
import styled from "styled-components"

// custom components
import DialogContext from "../Misc/DialogContext"
import AuthDialog from "../Misc/AuthDialog"
import { Button } from "../Basic/Basics"

// material ui components
import { Typography, TextField, Link } from "@material-ui/core"

export default () => {
  const [mail, setMail] = useState("")
  const { activeModal, setActiveModal } = useContext(DialogContext)

  return (
    <AuthDialog
      open={activeModal === "forgot-password" ? true : false}
      setOpen={setActiveModal}
    >
      <Typography
        variant="h2"
        color="primary"
        style={{ textAlign: "center", margin: "0 -20px" }}
      >
        Forgot Your Password?
      </Typography>
      <FormBody>
        <Typography variant="body1">
          Enter the email address associated with your account. Click the link
          in the email we send you to reset your password.
        </Typography>
        <TextField
          label="Email Address"
          value={mail}
          onChange={e => setMail(e.target.value)}
        />
        <Wrapper>
          <Button style={{ flexGrow: 5 }}>Confirm</Button>
          <Link
            onClick={() => {
              setActiveModal("login")
            }}
            style={{
              textAlign: "right",
              fontSize: "20px",
              cursor: "pointer",
              flexGrow: 2,
            }}
          >
            Log In
          </Link>
        </Wrapper>
      </FormBody>
    </AuthDialog>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding-top: 30px;

  & > * {
    padding: 10px 0;
  }
`
