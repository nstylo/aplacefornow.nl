import React, { useState } from "react"
import styled from "styled-components"

// material ui components
import {
  Typography,
  TextField,
  Input,
  InputLabel,
  FormControl,
  InputAdornment,
  IconButton,
} from "@material-ui/core"

// icons
import { Visibility, VisibilityOff } from "@material-ui/icons"
export default () => {
  const [isVisible, setVisible] = useState(false)
  const [mail, setMail] = useState("")
  const [password, setPassWord] = useState("")

  return (
    <FormWrapper>
      <Typography variant="h2" color="primary" style={{ fontWeight: 400 }}>
        Log in
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
                >
                  {isVisible ? (
                    <Visibility style={{ width: "28px", height: "28px" }} />
                  ) : (
                    <VisibilityOff style={{ width: "28px", height: "28px" }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </FormBody>
    </FormWrapper>
  )
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
  width: 100%;
`
