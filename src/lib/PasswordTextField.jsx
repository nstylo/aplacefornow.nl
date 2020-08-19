import React, { useState } from "react"
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  FormHelperText,
  IconButton,
} from "@material-ui/core"

import { Visibility, VisibilityOff } from "@material-ui/icons"

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
