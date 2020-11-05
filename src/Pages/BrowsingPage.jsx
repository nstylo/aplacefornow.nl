import React from "react"
import styled from "styled-components"
import {
  Card,
  Paper,
  Typography,
  Avatar,
  InputBase,
  Divider,
  IconButton,
  Link,
} from "@material-ui/core"
import { Tag, Rating, Button as IButton } from "lib"

import {
  Search as SearchIcon,
  Sort as SortIcon,
  FilterList as FilterListIcon,
  Map as MapIcon,
} from "@material-ui/icons"

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

  & > * {
    margin: 16px 16px;
  }
`
// TODO align last item to the left, probably needs a hack

const OptionSection = styled.div`
  width: 100%;
  margin-bottom: 60px;
`

const OptionRow = styled.div`
  display: flex;
  width: 100%;

  & > * {
    margin: 16px 3px;
  }
`

const SearchBar = () => {
  return (
    <Paper
      component="form"
      style={{
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        height: "64px",
        width: "850px",
        borderRadius: "20px",
      }}
    >
      <InputBase
        placeholder="City or university"
        inputProps={{ "aria-label": "TODO" }}
        style={{ flex: 2, paddingLeft: "12px" }}
      />
      <Divider
        orientation="vertical"
        style={{ margin: "4px", height: "80%" }}
      />
      <InputBase
        placeholder="Check in - Check out"
        inputProps={{ "aria-label": "TODO" }}
        style={{ flex: 1, paddingLeft: "12px" }}
      />
      <IconButton type="submit" style={{ padding: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

const Button = styled(IButton).attrs(() => ({
  variant: "outlined",
  color: "primary",
}))`
  line-height: unset;
  padding: 0 38px;
  font-weight: 600;
`

export default () => {
  return (
    <div style={{ marginTop: "160px" }}>
      <OptionSection>
        <OptionRow>
          <SearchBar />
          <Link
            variant="subtitle2"
            component="button"
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
          >
            <MapIcon style={{ marginRight: "10px ", padding: "3px" }} />
            Show map view
          </Link>
        </OptionRow>
        <OptionRow>
          <Button>Type of place</Button>
          <Button>Price</Button>
          <Button>Distance</Button>
          <Button>
            More filters
            <FilterListIcon style={{ marginLeft: "10px " }} />
          </Button>
          <Button style={{ marginLeft: "auto" }}>
            Sort
            <SortIcon style={{ marginLeft: "10px " }} />
          </Button>
        </OptionRow>
      </OptionSection>
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
    </div>
  )
}
