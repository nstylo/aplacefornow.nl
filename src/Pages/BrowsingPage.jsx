import React from "react"
import styled from "styled-components"
import { Card, Typography, Avatar } from "@material-ui/core"
import { Tag, Rating } from "lib"

const AdCard = styled(Card).attrs(() => ({
  elevation: 2,
}))`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 300px;
  min-width: 300px;
  max-height: 330px;
  min-height: 330px;
  border-radius: 8%;
  overflow: hidden;

  & > * {
    flex: 1;
  }
`

const AdImg = styled.img`
  object-fit: cover;
  max-height: 180px;
`

const AdBody = styled.div`
  padding: 16px;
  padding-top: 0;
  z-index: 3;
`

const AdAvatar = styled(Avatar).attrs(props => ({
  src: props.src,
}))`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 155px;
  right: 22px;
  z-index: 4;
`

const Slant = styled.div`
  position: absolute;
  background-color: white;
  width: 600px;
  height: 50px;
  top: 178px;
  left: -20px;
  transform: rotate(2.8deg);
  z-index: 2;
`

const AdTag = styled(Tag)`
  filter: opacity(30%);
  padding-top: 0;
  padding-bottom: 0;
  margin-right: 6px;
`

const AdTagSection = styled.div`
  display: flex;
  margin: 8px 0;
`

const AdRatingSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
`

const Ad = ({ location, text, avatar, tags, rating, price }) => {
  return (
    <AdCard>
      <Slant />
      <AdAvatar />
      <AdImg src="https://cdn.archilovers.com/projects/c_383_9ec19d18-107e-41f9-bddf-4fc03411b2b5.jpg" />
      <AdBody>
        <Typography variant="subtitle2" color="textSecondary">
          {location}
        </Typography>
        <Typography variant="h4" color="primary">
          {text}
        </Typography>
        <AdTagSection>
          <AdTag text="Room" />
          <AdTag text="15 sq. meters" />
        </AdTagSection>
        <AdRatingSection>
          <Rating disabled defaultValue={rating} precision={0.5} size="small" />
          <Typography variant="h5" color="primary">
            €{price}/night
          </Typography>
        </AdRatingSection>
      </AdBody>
    </AdCard>
  )
}

const AdSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  width: 100%;
  margin-top: 160px;

  & > * {
    margin: 16px 16px;
  }
`
// TODO align last item to the left, probably needs a hack

export default () => {
  return (
    <AdSection>
      <Ad location="Eindhoven" text="Cozy Room" rating={4.5} price={12} />
      <Ad location="Eindhoven" text="Cozy Room" rating={4.5} price={12} />
      <Ad location="Eindhoven" text="Cozy Room" rating={4.5} price={12} />
      <Ad location="Eindhoven" text="Cozy Room" rating={4.5} price={12} />
      <Ad location="Eindhoven" text="Cozy Room" rating={4.5} price={12} />
      <Ad location="Eindhoven" text="Cozy Room" rating={4.5} price={12} />
      <Ad location="Eindhoven" text="Cozy Room" rating={4.5} price={12} />
      <Ad location="Eindhoven" text="Cozy Room" rating={4.5} price={12} />
      <Ad location="Eindhoven" text="Cozy Room" rating={4.5} price={12} />
    </AdSection>
  )
}
