import React, { useState } from "react"
import { Snackbar } from "@material-ui/core"
import { Alert } from "@material-ui/lab"

export const Toast = ({ duration, severity, message, anchor }) => {
  const [open, setOpen] = useState(true)

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return

    setOpen(false)
  }

  return (
    <Snackbar
      anchorOrigin={anchor}
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}
