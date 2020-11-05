import React from "react"
import { Typography } from "@material-ui/core"

import { ReactComponent as Vent } from "../Assets/Listing/Vent.svg"
import { ReactComponent as Home } from "../Assets/Listing/Home.svg"
import { ReactComponent as Key } from "../Assets/Listing/Key.svg"
import { ReactComponent as Pets } from "../Assets/Listing/Pets.svg"
import { ReactComponent as Smoking } from "../Assets/Listing/Smoking.svg"
import { ReactComponent as Hanger } from "../Assets/Listing/Hanger.svg"
import { ReactComponent as Bed } from "../Assets/Listing/Bed.svg"
import styled from "styled-components"

const types = {
  family_home: {
    header: "Family home",
    description: "Family with children", // TODO multiple descriptions ??
  },
  air_conditioner: {
    header: "Air conditioner",
    description: "This place has an air conditioner",
  },
  seperate_bedroom: {
    header: "Seperate Bedroom",
    description: "Private bedroom with a double bed",
  },
  hangers: {
    header: "Hangers",
    description: "Hangers for clothing are available",
  },
  no_smoking: {
    header: "No smoking",
    description: "We don't smoke in this place",
  },
  no_animals: {
    header: "No animals",
    description: "It is not allowed to have pets within the room",
  },
  own_key: {
    header: "Own key",
    description: "Tenants are responsible for their own room key",
  },
}

export const Attribute = ({ type, ...props }) => {
  const details = types[type]
  let icon

  switch (type) {
    case "family_home":
      icon = <Home />
      break
    case "air_conditioner":
      icon = <Vent />
      break
    case "seperate_bedroom":
      icon = <Bed />
      break
    case "hangers":
      icon = <Hanger />
      break
    case "no_smoking":
      icon = <Smoking />
      break
    case "no_animals":
      icon = <Pets />
      break
    case "own_key":
      icon = <Key />
      break
    default:
      icon = null // TODO
  }

  return (
    <Wrapper {...props}>
      {icon}
      <div style={{ marginLeft: "42px" }}>
        <Typography variant="h5" color="textPrimary">
          {details.header}
        </Typography>
        <Typography variant="subtitle1" color="textPrimary">
          {details.description}
        </Typography>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 4px;
    left: 4px;
    margin-right: 16px;
  }
`
