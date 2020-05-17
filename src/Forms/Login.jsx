import React, { useState } from "react"
import styled from "styled-components"

// material ui components
import { Typography, TextField } from "@material-ui/core"

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
        <TextField
          label="Password"
          value={password}
          type={isVisible ? "text" : "password"}
          onChange={e => setPassWord(e.target.value)}
        ></TextField>
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
