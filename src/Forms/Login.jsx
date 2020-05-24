import React, { useState, useContext } from "react"
import styled from "styled-components"

// material ui components
import {
  Typography,
  TextField,
  Input,
  InputLabel,
  FormControlLabel,
  FormControl,
  InputAdornment,
  IconButton,
  Checkbox,
  Link,
} from "@material-ui/core"

// custom components
import DialogContext from "../Misc/DialogContext"
import AuthDialog from "../Misc/AuthDialog"
import { Button } from "../Basic/Basics"

// icons
import { Visibility, VisibilityOff } from "@material-ui/icons"

export default () => {
  const [isVisible, setVisible] = useState(false)
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const { activeModal, setActiveModal } = useContext(DialogContext)

  return (
    <AuthDialog
      open={activeModal === "login" ? true : false}
      setOpen={setActiveModal}
    >
      <Typography variant="h3" color="primary" style={{ textAlign: "center" }}>
        Log In
      </Typography>
      <FormBody>
        <TextField
          label="Email Address"
          value={mail}
          onChange={e => setMail(e.target.value)}
        />
        <FormControl variant="outlines">
          <InputLabel htmlFor="password-form">Password</InputLabel>
          <Input
            id="password-form"
            value={password}
            type={isVisible ? "text" : "password"}
            onChange={e => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setVisible(!isVisible)}
                  onMouseDown={e => e.preventDefault()}
                  style={{ marginBottom: "16px" }}
                >
                  {isVisible ? (
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
        <HelperBar>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember me"
          />
          <Link
            onClick={() => {
              setActiveModal("forgot-password")
            }}
            style={{ fontSize: "20px", cursor: "pointer" }}
          >
            Forgot Password
          </Link>
        </HelperBar>
        <Button>Log in</Button>
        <Typography variant="body1" style={{ paddingTop: "30px" }}>
          Don't have an account?
          <Link
            onClick={() => {
              setActiveModal("signup")
            }}
            style={{ paddingLeft: "10px", cursor: "pointer" }}
          >
            Sign Up
          </Link>
        </Typography>
      </FormBody>
    </AuthDialog>
  )
}

const HelperBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    max-height: 32px;
  }
`

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding-top: 20px;

  & > * {
    padding: 10px 0;
  }
`
