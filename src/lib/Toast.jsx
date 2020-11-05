import React from "react"
import { Snackbar } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import { useToastContext, REMOVE } from "../Misc/ToastContext"

export const Toast = ({ open, duration, severity, message, anchor }) => {
  const { dispatchToast } = useToastContext()

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return
    dispatchToast({ type: REMOVE })
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
