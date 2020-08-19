import React, { useState } from "react"

// custom components
import AuthDialog from "../Misc/AuthDialog"
import { Button, PasswordTextField } from "lib"
import Modal from "../Misc/Modal"
import { useQuery } from "../Misc/Hooks"

// material ui components
import { Typography, IconButton } from "@material-ui/core"

// icons
import { Close as CloseIcon } from "@material-ui/icons"

export default () => {
  const [password, setPassword] = useState("")
  const [confirmation, setConfirmation] = useState("")
  const [params, setParams] = useQuery()

  return (
    <Modal>
      <AuthDialog
        open={params.get("modal") === "resetpw" ? true : false}
        setOpen={() => setParams("modal", null)}
        onSubmit={e => e.preventDefault()} // TODO: handle reset
      >
        <IconButton
          aria-label="close password reset popup"
          onClick={() => {
            setParams("modal", null)
          }}
          style={{ position: "absolute", top: "8px", left: "1.5%" }}
        >
          <CloseIcon />
        </IconButton>
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
    </Modal>
  )
}
