import React, { useState } from "react"
import styled from "styled-components"
import { login } from "../Misc/Api"

// material ui components
import {
  Typography,
  TextField,
  FormControlLabel,
  IconButton,
  Checkbox,
  Link,
} from "@material-ui/core"

// custom components
import AuthDialog from "../Misc/AuthDialog"
import { Button } from "../Basic/Basics"
import Modal from "../Misc/Modal"
import { useQuery } from "../Misc/Hooks"
import { PasswordTextField } from "../Basic/Basics"

// icons
import { Close as CloseIcon } from "@material-ui/icons"

export default () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [params, setParams] = useQuery()
  const [error, setError] = useState(null)

  // TODO
  const handleLogin = async e => {
    e.preventDefault()
    await login({ method: "login", creds: { email, password } })
    setEmail("")
    setPassword("")
  }

  return (
    <Modal>
      <AuthDialog
        open={params.get("modal") === "login" ? true : false}
        setOpen={() => setParams(("modal": null))}
      >
        <IconButton
          aria-label="close login popup"
          onClick={() => {
            setParams("modal", null)
          }}
          style={{ position: "absolute", top: "8px", left: "1.5%" }}
        >
          <CloseIcon />
        </IconButton>
        <FormBody onSubmit={handleLogin}>
          <Typography
            variant="h2"
            color="primary"
            style={{ textAlign: "center" }}
          >
            Log In
          </Typography>
          <TextField
            id="email"
            value={email}
            error={error ? true : false}
            helperText={error}
            label="Email Address"
            onChange={e => setEmail(e.target.value)}
          />
          <PasswordTextField
            id="password"
            value={password}
            error={error ? true : false}
            helperText={error}
            label="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <HelperBar>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
            <Link
              onClick={() => {
                setParams("modal", "forgotpw")
              }}
              style={{ cursor: "pointer" }}
            >
              <Typography variant="body1">Forgot Password</Typography>
            </Link>
          </HelperBar>
          <Button type="submit">Log in</Button>
          <Typography variant="body1" style={{ paddingTop: "30px" }}>
            Don't have an account?
            <Link
              onClick={() => {
                setParams("modal", "signup")
              }}
              style={{ paddingLeft: "10px", cursor: "pointer" }}
            >
              Sign Up
            </Link>
          </Typography>
        </FormBody>
      </AuthDialog>
    </Modal>
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

const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding-top: 10px;

  & > * {
    padding: 10px 0;
  }
`
