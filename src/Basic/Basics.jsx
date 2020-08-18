import React, { useState /*, useEffect */ } from "react"
import styled from "styled-components"
import { Typography } from "@material-ui/core"
import { SRLWrapper, useLightbox } from "simple-react-lightbox"
import { theme } from "../theme"

import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  FormHelperText,
  IconButton,
  Button as IButton,
} from "@material-ui/core"

// import { Skeleton } from "@material-ui/lab"

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
  height: 100%;
  border-radius: 15px;
`

const GalleryContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 60% auto;
  grid-template-rows: 50% 50%;
  height: 400px;
  position: relative;

  & > :nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  & > :nth-child(2) {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
  }

  & > :nth-child(3) {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
  }
`

const ClickableImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => (props.onClick ? "pointer" : "default")};
`

const UClickableImage = styled.img`
  position: absolute;
  object-fit: cover;
  filter: blur(2px) brightness(70%);
  width: 105%;
  height: 105%;
`

const ImageText = styled(Typography).attrs(props => ({
  variant: props.variant,
  color: props.color,
}))`
  position: absolute;
  z-index: 10;
`

const ClickableImage = ({ text, onClick, ...props }) => (
  <ClickableImageWrapper onClick={onClick}>
    <UClickableImage {...props} />
    <ImageText variant="h4" color="textSecondary">
      {text}
    </ImageText>
  </ClickableImageWrapper>
)

// TODO: check for less than three images
export const Gallery = ({ images, ...props }) => {
  const { openLightbox } = useLightbox()

  return (
    <GalleryContainer {...props}>
      <Image src={images[0].src} alt="" />
      <Image src={images[1].src} alt="" />
      <ClickableImage
        src={images[2].src}
        text={"+ " + (images.length - 2) + " photos"}
        alt=""
        onClick={() => openLightbox(2)}
      />
      <SRLWrapper images={images} />
    </GalleryContainer>
  )
}

const UTag = ({ className, text }) => <div className={className}>{text}</div>

export const Tag = styled(UTag)`
  border-radius: 20px;
  color: white;
  font-size: 24px;
  font-weight: 400;
  padding: 5px;
  padding-right: 15px;
  width: max-content;
  background-color: ${props =>
    props.color === "secondary"
      ? theme.palette.secondary.main
      : theme.palette.primary.main};

  ::before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 0 12px 0 6px;
    -moz-border-radius: 7.5px;
    -webkit-border-radius: 7.5px;
    border-radius: 7.5px;
    background-color: white;
  }
`
