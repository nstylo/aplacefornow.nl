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
import { useQuery } from "../Misc/Hooks"
import { useToastContext, ADD } from "../Misc/ToastContext"

export default () => {
  // TODO: possibly use Reducer?
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
  const { dispatchToast } = useToastContext()

  const handleSignUp = async e => {
    e.preventDefault()

    const { name, message } = await signUp({
      email: mail,
      password,
      confEmail: mailConf,
      confPassword: passwordConf,
      name: firstName,
      surname: lastName,
      type: role,
    })

    switch (name) {
      case "USER_CREATED":
        history.push("/?modal=login")

        dispatchToast({
          type: ADD,
          payload: {
            message: "You have signed up! Please check your mail.",
            severity: "success",
            duration: 6000,
          },
        })

        break
      case "USER_EXISTS":
        setErrors({ email: "User already exists" })
        break
      case "BAD_FORMAT":
        // extract errors
        Object.keys(message).forEach(key => {
          message[key] = message[key][0]
        })
        setErrors(message)
        break
      default:
      // should never happen
      // TODO: maybe setError?
    }
  }

  // TODO: disable when waiting for response, perhaps generalize throughout all
  // forms?
  return (
    <AuthDialog
      open={params.get("modal") === "signup" ? true : false}
      setOpen={() => setParams("modal", null)}
      onSubmit={handleSignUp}
    >
      <Typography variant="h2" color="primary" style={{ textAlign: "center" }}>
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
        error={errors?.email}
        helperText={errors?.email}
        id="email"
        value={mail}
        label="Email Address"
        onChange={e => setMail(e.target.value)}
      />
      <TextField
        error={errors?.emailConf}
        helperText={errors?.emailConf}
        id="email confirmation"
        value={mailConf}
        label="Email Confirmation"
        onChange={e => setMailConf(e.target.value)}
      />
      <PasswordTextField
        error={errors?.password}
        helperText={errors?.password}
        id="password"
        value={password}
        label="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <PasswordTextField
        error={errors?.passwordConf}
        helperText={errors?.passwordConf}
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
