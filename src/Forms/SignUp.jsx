import React, { useState } from "react"
import styled from "styled-components"
import { signUp } from "../Misc/Api"
import { useHistory } from "react-router-dom"

// material ui components
import {
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
  RadioGroup,
  Radio,
  useMediaQuery,
} from "@material-ui/core"

// custom components
import AuthDialog from "../Misc/AuthDialog"
import { Button, PasswordTextField } from "lib"
import Modal from "../Misc/Modal"
import { useQuery } from "../Misc/Hooks"

export default () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [role, setRole] = useState("STUDENT") // STUDENT <or> HOST
  const [mail, setMail] = useState("")
  const [mailConf, setMailConf] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConf, setPasswordConf] = useState("")
  const [errors, setErrors] = useState({})
  const [params, setParams] = useQuery()
  let history = useHistory()
  const matches = useMediaQuery(theme => theme.breakpoints.down("xs"))

  const handleSignUp = async e => {
    e.preventDefault()
    const response = await signUp({
      email: mail,
      password,
      confEmail: mailConf,
      confPassword: passwordConf,
      name: firstName,
      surname: lastName,
      type: role,
    })

    console.log(response)

    switch (response.name) {
      case "USER_CREATED":
        history.push("/?modal=login")
        break
      case "USER_EXISTS":
        setErrors() // TODO: set errors
        break
      default:
      // should never happen
      // TODO: maybe setError?
    }
  }

  // TODO: disable when waiting for response, perhaps generalize throughout all
  // forms?
  return (
    <Modal>
      <AuthDialog
        open={params.get("modal") === "signup" ? true : false}
        setOpen={() => setParams("modal", null)}
        onSubmit={handleSignUp}
      >
        <Typography
          variant="h2"
          color="primary"
          style={{ textAlign: "center" }}
        >
          Sign Up
        </Typography>
        <NameWrapper matches={matches}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            style={{ flexGrow: 1 }}
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            style={{ flexGrow: 6 }}
          />
        </NameWrapper>
        <RadioGroup
          aria-label="role"
          value={role}
          onChange={e => setRole(e.target.value)}
        >
          <div
            style={{
              padding: "20px 0 0 0",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              value="STUDENT"
              label={
                <Typography variant="h4" color="primary">
                  Tentant
                </Typography>
              }
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              value="HOST"
              label={
                <Typography variant="h4" color="secondary">
                  Host
                </Typography>
              }
              control={<Radio color="secondary" />}
            />
          </div>
        </RadioGroup>
        <TextField
          id="email"
          value={mail}
          label="Email Address"
          onChange={e => setMail(e.target.value)}
        />
        <TextField
          id="email confirmation"
          value={mailConf}
          label="Email Confirmation"
          onChange={e => setMailConf(e.target.value)}
        />
        <PasswordTextField
          id="password"
          value={password}
          label="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <PasswordTextField
          id="password confirmation"
          value={passwordConf}
          label="Password Confirmation"
          onChange={e => setPasswordConf(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label={
            <>
              {"Accept "}
              <Link onClick={() => {}} style={{ cursor: "pointer" }}>
                terms and conditions
              </Link>
            </>
          }
        />
        <Button variant="outlined" color="primary" type="submit">
          Create Account
        </Button>
        <Typography variant="body1" style={{ paddingTop: "30px" }}>
          Already have an account?
          <Link
            onClick={() => {
              setParams("modal", "login")
            }}
            style={{ paddingLeft: "10px", cursor: "pointer" }}
          >
            Log In
          </Link>
        </Typography>
      </AuthDialog>
    </Modal>
  )
}

const NameWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.matches ? "column" : "row")};
  width: 100%;

  & > div:first-of-type {
    margin-right: ${props => (props.matches ? 0 : "20px")};
  }

  & > * {
    padding: ${props => (props.matches ? "10px 0" : 0)};
  }
`
