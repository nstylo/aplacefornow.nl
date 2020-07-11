import React, { useState } from "react"
import { theme } from "../theme"
import { makeStyles } from "@material-ui/core"

import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  FormHelperText,
  IconButton,
  Button as IButton,
} from "@material-ui/core"
//
// icons
import { Visibility, VisibilityOff } from "@material-ui/icons"

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

export const PasswordTextField = ({
  helperText,
  id,
  label,
  error,
  ...props
}) => {
  const [isVisible, setVisible] = useState(false)

  return (
    <FormControl variant="outlines">
      <InputLabel error={error} htmlFor={id}>
        {label}
      </InputLabel>
      <Input
        id={id}
        error={error}
        type={isVisible ? "text" : "password"}
        {...props}
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
      {error ? <FormHelperText error>{helperText}</FormHelperText> : null}
    </FormControl>
  )
}
