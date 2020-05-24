import React from "react"
import { theme } from "../theme"
import { makeStyles } from "@material-ui/core"

import { Button as IButton } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    background: theme.palette.primary.main,
    color: "#FAFAFA", // TODO: make styling more consistent with e.g. overrides
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
})

export const Button = ({ children, ...props }) => {
  const classes = useStyles()
  return (
    <IButton className={classes.root} {...props}>
      {children}
    </IButton>
  )
}
