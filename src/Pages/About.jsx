import React from "react"
import styled from "styled-components"

import { Grid, Typography } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"

import { ReactComponent as Rectangles } from "../Assets/Rectangles.svg"
import { ReactComponent as Circles } from "../Assets/Circles.svg"
import { ReactComponent as UNest } from "../Assets/Nest.svg"
import { ReactComponent as UClouds } from "../Assets/Clouds.svg"

import { breakpoints } from "../theme"

// for testing purposes
import Mika from "../Assets/Mika.png"

// TODO:
// Make ValueCards and Avatars wrap on media query
// Make SVG reduce in scale (maybe z index as well) on media query

export default () => {
  return (
    <Grid container>
      <Nest />
      <Section top="160px" bottom="580px">
        <Typography variant="h1" color="primary">
          About us
        </Typography>
        <P width="600px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </P>
        <P width="600px">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </P>
      </Section>
      <Grid item xs={12}>
        <Section bottom="50px">
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
      <Section bottom="310px">
        <ValueCardSection>
          <ValueCard rect></ValueCard>
          <ValueCard></ValueCard>
          <ValueCard rect></ValueCard>
          <ValueCard></ValueCard>
        </ValueCardSection>
      </Section>
      <Section bottom="220px">
        <Clouds />
        <Typography variant="h1" color="primary">
          Meet the team
        </Typography>
        <P width="600px">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </P>
      </Section>
      <Section>
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

const P = styled(Typography).attrs(() => ({
  variant: "body1",
}))`
  text-align: justify;
  margin-top: 16px;
  margin-bottom: 24px;
  max-width: ${props => props.width};
  width: auto;
`

const Nest = styled(UNest)`
  position: absolute;
  top: 100px;
  opacity: 0.75;
  z-index: -1;
  width: ${breakpoints.xl}px;

  @media (max-width: ${breakpoints.xl}px) {
    width: 98vw;
  }
`

const Clouds = styled(UClouds)`
  position: absolute;
  right: 0px;
  top: -160px;
  width: 600px;
  height: auto;
  opacity: 0.75;
  z-index: -1;

  @media (max-width: ${breakpoints.lg}px) {
    width: 480px;
    top: -100px;
  }
`

const Section = styled(Grid).attrs(() => ({
  item: true,
  xs: 12,
}))`
  position: relative;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: ${props => props.top};
  padding-bottom: ${props => props.bottom};
`

const ValueCardSection = styled(Grid).attrs(() => ({
  container: true,
  spacing: 6,
}))`
  flex-wrap: nowrap;
  justify-content: space-between;

  @media (max-width: ${breakpoints.md}px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
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
    max-width: 180px;
    height: calc(3px + 0.15vw);
  }

  svg {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 300px;
    height: auto;
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
    margin-top: 16px;
    margin-bottom: 5px;
    width: 10vw;
    max-width: 160px;
    height: calc(3px + 0.1vw);
  }

  p {
    margin: 5px 0;
  }
`
