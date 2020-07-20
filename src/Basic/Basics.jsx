import React, { useState } from "react"
import styled from "styled-components"

import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  FormHelperText,
  IconButton,
  Button as IButton,
} from "@material-ui/core"

// icons
import { Visibility, VisibilityOff } from "@material-ui/icons"

const UButton = ({ children, className, ...props }) => {
  return (
    <IButton className={className} {...props}>
      {children}
    </IButton>
  )
}

export const Button = styled(UButton)`
  border-radius: 35px;
  border-width: 1.5px;

  :hover {
    border-width: 1.5px;
  }
`

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
