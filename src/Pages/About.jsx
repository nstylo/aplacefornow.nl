import React from "react"
import styled from "styled-components"

// material ui components
import { Grid, Typography } from "@material-ui/core"

// visual stuff
import { ReactComponent as Rectangles } from "../Assets/About/Rectangles.svg"
import { ReactComponent as Circles } from "../Assets/About/Circles.svg"
import { ReactComponent as UBranchWithEggs } from "../Assets/About/BranchWithEggs.svg"
import { ReactComponent as UBranchWithBirds } from "../Assets/About/BranchWithBirds.svg"
import { ReactComponent as UCloud } from "../Assets/About/Cloud.svg"
import { useTheme } from "@material-ui/core/styles"

import { breakpoints } from "../theme"

// for testing purposes
import Mika from "../Assets/Photos/Mika.png"

export default () => {
  return (
    <Container>
      <Section xs={12} top={120} item>
        <Typography variant="h1" color="primary">
          About us
        </Typography>
        <P>
          A Place For Now is a non-profit startup aimed to create a community
          based solution providing students with temporary and affordable
          housing while they look for permanent solutions. Who better to tackle
          problems face than a student team? We started out with three people
          and now have over fifteen student members with a shared mission:
        </P>
        <Typography variant="subtitle2">
          “Enhance the wellbeing of students and the community surrounding it.”
        </Typography>
        <Cloud1 width="65%" />
        <Cloud2 width="45%" />
        <BranchWithEggs />
      </Section>
      <Section xs={12} top={200} item>
        <Typography variant="h1" color="primary">
          Values
        </Typography>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </P>
      </Section>
      <Section top={100} spacing={6} item container>
        <ValueCard rect></ValueCard>
        <ValueCard></ValueCard>
        <ValueCard rect></ValueCard>
        <ValueCard></ValueCard>
      </Section>
      <Section top={160} wrap="wrap" item container>
        <Grid sm={12} md={7} item>
          <Typography variant="h1" color="primary">
            Meet the team
          </Typography>
          <P>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </P>
        </Grid>
        <Grid
          xs={12}
          md={5}
          style={{
            paddingLeft: "30px",
            paddingTop: "40px",
            display: "flex",
            alignItems: "center",
          }}
          item
        >
          <BranchWithBirds />
        </Grid>
      </Section>
      <Section
        top={100}
        spacing={8}
        wrap="wrap"
        justify="center"
        item
        container
      >
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
      </Section>
    </Container>
  )
}

const Container = styled(Grid).attrs(() => ({
  container: true,
}))`
  overflow: hidden;
`

const P = styled(Typography).attrs(() => ({
  variant: "body1",
}))`
  text-align: justify;
  margin-top: 16px;
  margin-bottom: 24px;
  width: auto;
`

const Cloud = styled(UCloud)`
  overflow-x: hidden;
  position: absolute;
  z-index: -2;
  width: ${props => props.width};
  height: auto;
`

const Cloud1 = styled(Cloud)`
  left: 20%;

  @media (max-width: ${breakpoints.sm}px) {
    top: 75%;
  }

  @media (max-width: ${breakpoints.xs}px) {
    top: 88%;
  }
`

const Cloud2 = styled(Cloud)`
  top: 85%;
  left: 60%;

  @media (max-width: ${breakpoints.md}px) {
    top: 95%;
  }

  @media (max-width: ${breakpoints.sm}px) {
    top: 100%;
  }

  @media (max-width: ${breakpoints.xs}px) {
    top: 110%;
  }
`

const BranchWithEggs = styled(UBranchWithEggs)`
  position: relative;
  width: 75%;
  height: auto;
  top: 100px;
  left: -80px;
  z-index: -1;

  @media (max-width: ${breakpoints.lg}px) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.sm}px) {
    left: -40px;
  }
  @media (max-width: ${breakpoints.xxs}px) {
    left: -20px;
  }
`

const BranchWithBirds = styled(UBranchWithBirds)`
  position: relative;
  right: -80px;
  width: 100%;
  height: auto;
  z-index: -1;

  @media (max-width: ${breakpoints.sm}px) {
    right: -40px;
  }

  @media (max-width: ${breakpoints.xs}px) {
    right: -20px;
  }
`

const Section = styled(Grid)`
  position: relative;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: ${props => props.top}px;

  @media (max-width: ${breakpoints.sm}px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: ${breakpoints.xxs}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

const UValueCard = ({ rect, className }) => {
  const theme = useTheme()

  return (
    <Grid item xs={12} sm={6} md={3} className={className}>
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
    <Grid item xs={12} sm={6} md={4} lg={3} className={className}>
      <img src={img} alt={"photo of " + name} />
      <div
        className="deco"
        style={{ backgroundColor: theme.palette.primary.main }}
      />
      <Typography variant="h5">{name}</Typography>
      <Typography variant="subtitle1">{pos}</Typography>
    </Grid>
  )
}

const Avatar = styled(UAvatar)`
  max-width: 350px;
  img {
    border-radius: 50px;
    width: 100%;
    height: auto;
    max-width: 350px;
  }

  .deco {
    margin-top: 16px;
    margin-bottom: 5px;
    width: 10vw;
    max-width: 160px;
    height: calc(3px + 0.1vw);
  }
`
