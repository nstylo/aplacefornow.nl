import React, { useContext, useState } from "react"
import styled from "styled-components"

// custom components
import DialogContext from "../Misc/DialogContext"
import AuthDialog from "../Misc/AuthDialog"
import { Button } from "../Basic/Basics"

// material ui components
import { Typography, TextField, Link, IconButton } from "@material-ui/core"

// icons
import { ArrowBackIos as BackIcon } from "@material-ui/icons"

export default () => {
  const [mail, setMail] = useState("")
  const { activeModal, setActiveModal } = useContext(DialogContext)

  return (
    <AuthDialog
      open={activeModal === "forgot-password" ? true : false}
      setOpen={setActiveModal}
    >
      <IconButton
        aria-label="back to login"
        onClick={() => {
          setActiveModal("login")
        }}
        style={{ position: "absolute", top: "8px", left: "1.5%" }}
      >
        <BackIcon style={{ width: "20px", height: "auto" }} />
        <Typography variant="h5">Back</Typography>
      </IconButton>
      <FormBody>
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
  padding-top: 10px;

  & > * {
    padding: 10px 0;
  }
`
