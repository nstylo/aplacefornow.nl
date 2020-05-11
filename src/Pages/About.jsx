import React from "react"
import styled from "styled-components"

import { Grid, Typography } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"

import { ReactComponent as Rectangles } from "../Assets/Rectangles.svg"
import { ReactComponent as Circles } from "../Assets/Circles.svg"
import { ReactComponent as UNest } from "../Assets/Nest.svg"
import { ReactComponent as UClouds } from "../Assets/Clouds.svg"

// for testing purposes
import Mika from "../Assets/Mika.png"

// TODO:
// Make ValueCards and Avatars wrap on media query
// Make SVG reduce in scale (maybe z index as well) on media query

export default () => {
  return (
    <Grid container>
      <Nest />
      <Clouds />
      <Section left="160px" top="163px" bottom="634px">
        <Typography variant="h1" color="primary">
          About us
        </Typography>
        <P width="700px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </P>
        <P width="700px">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </P>
      </Section>
      <Grid item xs={12}>
        <Section left="150px" right="150px" bottom="50px">
          <Typography variant="h1" color="primary">
            Values
          </Typography>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </P>
        </Section>
      </Grid>
      <Section left="150px" right="150px" bottom="318px">
        <Grid container spacing={8} wrap="nowrap" justify="space-between">
          <ValueCard rect></ValueCard>
          <ValueCard></ValueCard>
          <ValueCard rect></ValueCard>
          <ValueCard></ValueCard>
        </Grid>
      </Section>
      <Section left="150px" bottom="220px">
        <Typography variant="h1" color="primary">
          Meet the team
        </Typography>
        <P width="700px">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </P>
      </Section>
      <Section left="185px" right="185px">
        <Grid container spacing={6}>
          {/* TODO: map over list of avatar objects */}
          <Avatar img={Mika} name="Mika de Gooijer" pos="UI/UX Designer" />
          <Avatar img={Mika} name="Mika de Gooijer" pos="UI/UX Designer" />
          <Avatar img={Mika} name="Mika de Gooijer" pos="UI/UX Designer" />
          <Avatar img={Mika} name="Mika de Gooijer" pos="UI/UX Designer" />
          <Avatar img={Mika} name="Mika de Gooijer" pos="UI/UX Designer" />
          <Avatar img={Mika} name="Mika de Gooijer" pos="UI/UX Designer" />
          <Avatar img={Mika} name="Mika de Gooijer" pos="UI/UX Designer" />
          <Avatar img={Mika} name="Mika de Gooijer" pos="UI/UX Designer" />
          <Avatar img={Mika} name="Mika de Gooijer" pos="UI/UX Designer" />
          <Avatar img={Mika} name="Mika de Gooijer" pos="UI/UX Designer" />
          <Avatar img={Mika} name="Mika de Gooijer" pos="UI/UX Designer" />
          <Avatar img={Mika} name="Mika de Gooijer" pos="UI/UX Designer" />
        </Grid>
      </Section>
    </Grid>
  )
}

const P = styled.p`
  width: ${props => props.width};
`

const Nest = styled(UNest)`
  position: absolute;
  top: 220px;
`

const Clouds = styled(UClouds)`
  position: absolute;
  top: 2960px;
  left: 1000px;

  @media (min-width: 1920px) {
    left: calc(1000px + (100vw - 1920px) / 2);
  }
`

const Section = styled(Grid).attrs(props => ({
  item: true,
  xs: 12,
}))`
  padding-left: ${props => props.left};
  padding-right: ${props => props.right};
  padding-top: ${props => props.top};
  padding-bottom: ${props => props.bottom};
`

const UValueCard = ({ rect, className }) => {
  const theme = useTheme()

  return (
    <Grid item className={className}>
      {rect ? <Rectangles /> : <Circles />}
      <div
        className="deco"
        // TODO: inline style should generally prevented
        style={{ backgroundColor: theme.palette.primary.main }}
      />
      <Typography variant="h6">Value here</Typography>
      <P>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </P>
    </Grid>
  )
}

// TODO: improve responsiveness
const ValueCard = styled(UValueCard)`
  .deco {
    margin-top: calc(10px + 5vw);
    margin-bottom: 25px;
    width: 10vw;
    max-width: 200px;
    height: calc(5px + 0.15vw);
  }

  svg {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
  }
`

const UAvatar = ({ img, name, pos, className }) => {
  const theme = useTheme()

  return (
    <Grid item xs={3} className={className}>
      <img src={img} alt={"photo of" + name} />
      <div
        className="deco"
        // TODO: inline style should generally prevented
        style={{ backgroundColor: theme.palette.primary.main }}
      />
      <Typography variant="h5">{name}</Typography>
      <Typography variant="subtitle1">{pos}</Typography>
    </Grid>
  )
}

const Avatar = styled(UAvatar)`
  img {
    border-radius: 50px;
    width: 100%;
    height: auto;
    max-width: 350px;
    max-height: 350px;
  }

  .deco {
    margin-top: 10px;
    margin-bottom: 5px;
    width: 10vw;
    max-width: 200px;
    height: calc(5px + 0.1vw);
  }

  p {
    margin: 5px 0;
  }
`
