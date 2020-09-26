import React, { useState } from "react"
import styled from "styled-components"

// custom components
import AuthDialog from "../Misc/AuthDialog"
import { Button } from "lib"
import Modal from "../Misc/Modal"
import { useQuery } from "../Misc/Hooks"

// material ui components
import { Typography, TextField, Link, IconButton } from "@material-ui/core"

// icons
import { ArrowBackIos as BackIcon } from "@material-ui/icons"

export default () => {
  const [mail, setMail] = useState("")
  const [params, setParams] = useQuery()

  return (
    <Modal>
      <AuthDialog
        open={params.get("modal") === "forgotpw" ? true : false}
        setOpen={() => setParams("modal", null)}
        onSubmit={e => e.preventDefault()} // handle forgotpw
      >
        <IconButton
          aria-label="back to login"
          onClick={() => {
            setParams("modal", "login")
          }}
          style={{ position: "absolute", top: "8px", left: "1.5%" }}
        >
          <BackIcon style={{ width: "20px", height: "auto" }} />
          <Typography variant="body2">Back</Typography>
        </IconButton>
        <Typography
          variant="h2"
          color="primary"
          style={{ textAlign: "center", margin: "0 -20px 12px -20px" }}
        >
          Forgot Your Password?
        </Typography>
        <Typography variant="body1">
          Enter the email address associated with your account. Click the link
          in the email we send you to reset your password.
        </Typography>
        <TextField
          label="Email Address"
          value={mail}
          onChange={e => setMail(e.target.value)}
        />
        <Wrapper>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            style={{ flexGrow: 5 }}
          >
            Confirm
          </Button>
          <Link
            onClick={() => {
              setParams("modal", "login")
            }}
            style={{
              textAlign: "right",
              cursor: "pointer",
              flexGrow: 2,
            }}
          >
            <Typography variant="body1">Log In</Typography>
          </Link>
        </Wrapper>
      </AuthDialog>
    </Modal>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`
