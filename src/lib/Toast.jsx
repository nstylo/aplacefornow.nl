import React, { useState } from "react"
import { Snackbar } from "@material-ui/core"
import { Alert } from "@material-ui/lab"

export default ({ duration, severity, message, anchorOrigin }) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
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
