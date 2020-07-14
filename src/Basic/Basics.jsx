import React, { useState, useEffect } from "react"
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

import { Skeleton } from "@material-ui/lab"

// icons
import { Visibility, VisibilityOff } from "@material-ui/icons"

/******************************************************************************
 *
 * Basic building blocks
 *
 ******************************************************************************/

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

/******************************************************************************
 *
 * Form stuff
 *
 ******************************************************************************/

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

/******************************************************************************
 *
 * Image stuff
 *
 ******************************************************************************/

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`

const RemoteImageContainer = styled.div`
  display: flex;
  border-radius: 15px;
  overflow: hidden;
  height: 100%;
  width: 100%;
`

export const URemoteImage = ({ id }) => {
  const [isLoaded, setLoaded] = useState(false)
  const [source, setSource] = useState("")

  useEffect(() => {
    const getImage = async () =>
      fetch("https://dummyimage.com/600x400/000/fff") // TODO: use our api
        .then(response => response.blob())
        .then(img => {
          const url = URL.createObjectURL(img)
          setSource(url)
          setLoaded(true)
        })

    getImage()
  }, [])

  return (
    <RemoteImageContainer>
      {isLoaded ? (
        <Image src={source} />
      ) : (
        <Skeleton variant="rect" width="100%" height="100%" />
      )}
    </RemoteImageContainer>
  )
}
