import React, { useContext, useState } from "react"
import styled from "styled-components"

// material ui components
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Input,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Link,
  RadioGroup,
  Radio,
  useMediaQuery,
} from "@material-ui/core"

// custom components
import AuthDialog from "../Misc/AuthDialog"
import { Button } from "../Basic/Basics"
import Modal from "../Misc/Modal"
import { useQuery } from "../Misc/Hooks"

// icons
import {
  Visibility,
  VisibilityOff,
  Close as CloseIcon,
} from "@material-ui/icons"

export default () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [role, setRole] = useState("")
  const [mail, setMail] = useState("")
  const [mailConf, setMailConf] = useState("")
  const [isVisible, setVisible] = useState(false)
  const [isConfVisible, setConfVisible] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordConf, setPasswordConf] = useState("")
  const [params, setParams] = useQuery()

  const matches = useMediaQuery(theme => theme.breakpoints.down("xs"))

  return (
    <Modal>
      <AuthDialog
        open={params.get("modal") === "signup" ? true : false}
        setOpen={() => setParams("modal", null)}
      >
        <IconButton
          aria-label="close signup popup"
          onClick={() => {
            setParams("modal", null)
          }}
          style={{ position: "absolute", top: "8px", left: "1.5%" }}
        >
          <CloseIcon />
        </IconButton>
        <FormBody onSubmit={e => e.preventDefault()}>
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
                value="tentant"
                label={
                  <Typography variant="h4" color="primary">
                    Tentant
                  </Typography>
                }
                control={<Radio color="primary" />}
              />
              <FormControlLabel
                value="host"
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
            label="Email Address"
            value={mail}
            onChange={e => setMail(e.target.value)}
          />
          <TextField
            label="Email Confirmation"
            value={mailConf}
            onChange={e => setMailConf(e.target.value)}
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
          <FormControl variant="outlines">
            <InputLabel htmlFor="password-conf-form">
              Password Confirmation
            </InputLabel>
            <Input
              id="password-conf-form"
              value={passwordConf}
              type={isConfVisible ? "text" : "password"}
              onChange={e => setPasswordConf(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password confirmation visibility"
                    onClick={() => setConfVisible(!isConfVisible)}
                    onMouseDown={e => e.preventDefault()}
                    style={{ marginBottom: "16px" }}
                  >
                    {isConfVisible ? (
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
          <Button type="submit">Create Account</Button>
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
        </FormBody>
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
