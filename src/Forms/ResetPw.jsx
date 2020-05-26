import React, { useContext, useState } from "react"
import styled from "styled-components"

// custom components
import DialogContext from "../Misc/DialogContext"
import AuthDialog from "../Misc/AuthDialog"
import { Button } from "../Basic/Basics"

// material ui components
import {
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@material-ui/core"

// icons
import {
  Visibility,
  VisibilityOff,
  Close as CloseIcon,
} from "@material-ui/icons"

export default () => {
  const [password, setPassword] = useState("")
  const [isPasswordVisible, setPasswordVisible] = useState(false)
  const [confirmation, setConfirmation] = useState("")
  const [isConfirmationVisible, setConfirmationVisible] = useState(false)
  const { activeModal, setActiveModal } = useContext(DialogContext)

  return (
    <AuthDialog
      open={activeModal === "reset-password" ? true : false}
      setOpen={setActiveModal}
    >
      <IconButton
        aria-label="close password reset popup"
        onClick={() => {
          setActiveModal("none")
        }}
        style={{ position: "absolute", top: "8px", left: "1.5%" }}
      >
        <CloseIcon />
      </IconButton>
      <FormBody>
        <Typography
          variant="h2"
          color="primary"
          style={{ textAlign: "center", margin: "0 -20px" }}
        >
          Reset Your Password
        </Typography>
        <Typography variant="body1">
          Enter your new password below. It must be different from your previous
          password.
        </Typography>
        <FormControl variant="outlines">
          <InputLabel htmlFor="password-form">Password</InputLabel>
          <Input
            id="password-form"
            value={password}
            type={isPasswordVisible ? "text" : "password"}
            onChange={e => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setPasswordVisible(!isPasswordVisible)}
                  onMouseDown={e => e.preventDefault()}
                  style={{ marginBottom: "16px" }}
                >
                  {isPasswordVisible ? (
                    <Visibility
                      style={{
                        width: "26px",
                        height: "26px",
                      }}
                    />
                  ) : (
                    <VisibilityOff
                      style={{
                        width: "26px",
                        height: "26px",
                      }}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="outlines">
          <InputLabel htmlFor="confirmation-form">
            Password Confirmation
          </InputLabel>
          <Input
            id="confirmation-form"
            value={confirmation}
            type={isConfirmationVisible ? "text" : "password"}
            onChange={e => setConfirmation(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirmation visibility"
                  onClick={() => setConfirmationVisible(!isConfirmationVisible)}
                  onMouseDown={e => e.preventDefault()}
                  style={{ marginBottom: "16px" }}
                >
                  {isConfirmationVisible ? (
                    <Visibility
                      style={{
                        width: "26px",
                        height: "26px",
                      }}
                    />
                  ) : (
                    <VisibilityOff
                      style={{
                        width: "26px",
                        height: "26px",
                      }}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button style={{ marginTop: "20px" }}>Confirm</Button>
      </FormBody>
    </AuthDialog>
  )
}

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
