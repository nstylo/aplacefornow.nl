import React from "react"
import styled from "styled-components"
import { Typography } from "@material-ui/core"
import { useLightbox, SRLWrapper } from "simple-react-lightbox"

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`

// TODO: aspect ratio not perfect, also width/height on responsiveness needs
// tweaking
const GalleryContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 60% auto;
  grid-template-rows: 50% 50%;
  width: 100%;
  height: calc(100vw * 0.5625);
  max-height: 600px;
  position: relative;
  margin-bottom: 20px;

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
  // check https://github.com/michelecocuccio/simple-react-lightbox
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
