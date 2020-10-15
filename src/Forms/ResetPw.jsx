import React, { useState } from "react"

// custom components
import AuthDialog from "../Misc/AuthDialog"
import { Button, PasswordTextField } from "lib"
import { useQuery } from "../Misc/Hooks"

// material ui components
import { Typography } from "@material-ui/core"

export default () => {
  const [password, setPassword] = useState("")
  const [confirmation, setConfirmation] = useState("")
  const [params, setParams] = useQuery()

  return (
    <AuthDialog
      open={params.get("modal") === "resetpw" ? true : false}
      setOpen={() => setParams("modal", null)}
      onSubmit={e => e.preventDefault()} // TODO: handle reset
    >
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
      <PasswordTextField
        id="password"
        label="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <PasswordTextField
        id="password confirmation"
        label="Password Confirmation"
        value={confirmation}
        onChange={e => setConfirmation(e.target.value)}
      />
      <Button
        variant="outlined"
        color="primary"
        type="submit"
        style={{ marginTop: "30px" }}
      >
        Confirm
      </Button>
    </AuthDialog>
  )
}
