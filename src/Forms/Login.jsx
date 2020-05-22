import React, { useState, useContext } from "react"
import DialogContext from "../Misc/DialogContext"
import AuthDialog from "../Misc/AuthDialog"
import styled from "styled-components"
import { theme } from "../theme"
import { makeStyles } from "@material-ui/core/styles"

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
  Button as IButton,
  Checkbox,
  Link,
} from "@material-ui/core"

// icons
import { Visibility, VisibilityOff } from "@material-ui/icons"

const useStyles = makeStyles({
  root: {
    background: theme.palette.primary.main,
    color: "#FAFAFA", // TODO: make styling more consistent with e.g. overrides
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
})

export default () => {
  const [isVisible, setVisible] = useState(false)
  const [mail, setMail] = useState("")
  const [password, setPassWord] = useState("")
  const { activeModal, setActiveModal } = useContext(DialogContext)

  return (
    <AuthDialog
      open={activeModal === "login" ? true : false}
      setOpen={setActiveModal}
    >
      <FormWrapper>
        <Typography variant="h3" color="primary" style={{ fontWeight: 600 }}>
          Log In
        </Typography>
        <FormBody>
          <TextField
            label="Email Address"
            value={mail}
            onChange={e => setMail(e.target.value)}
          ></TextField>
          <FormControl variant="outlines">
            <InputLabel htmlFor="password-form">Password</InputLabel>
            <Input
              id="password-form"
              value={password}
              type={isVisible ? "text" : "password"}
              onChange={e => setPassWord(e.target.value)}
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
          <UButton color="default">Log in</UButton>
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
      </FormWrapper>
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

const UButton = () => {
  const classes = useStyles()
  return <IButton className={classes.root}>Log In</IButton>
}

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding-top: 40px;

  & > * {
    padding: 10px 0;
  }
`

const FormWrapper = styled.div`
  padding-top: 40px;
  width: 100%;
`
