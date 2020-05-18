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
import Mika from "../Assets/Photos/mika.jpg"
import aniruddh from "../Assets/Photos/aniruddh.jpg"
import Atharva from "../Assets/Photos/atharva.jpg"
import Barbara from "../Assets/Photos/bárbara.jpg"
import Delal from "../Assets/Photos/delal.jpg"
import Ece from "../Assets/Photos/ece.jpg"
import Emma from "../Assets/Photos/emma.jpg"
import Emre from "../Assets/Photos/emre.jpg"
import Gijs from "../Assets/Photos/gijs.jpg"
import Asaf from "../Assets/Photos/asaf.jpg"
import Joao from "../Assets/Photos/joão.jpg"
import Michael from "../Assets/Photos/michael.jpg"
import Mihnea from "../Assets/Photos/mihnea.jpg"
import Nicolas from "../Assets/Photos/nicolas.jpg"
import Niklas from "../Assets/Photos/niklas.jpg"
import Simon from "../Assets/Photos/simon.jpg"
import Ave from "../Assets/Photos/ave.jpg"
import Joep from "../Assets/Photos/joep.jpg"

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
          As a team aiming to bring good into the world, we've got to set some
          ground-rules! Our values represent the way in which we aim to behave
          every day and in every step of the way. We are constantly improving,
          so we may better help you or someone you know. Here's what we're
          about:
        </P>
      </Section>
      <Section top={100} spacing={6} item container justify="space-evenly">
        {/*UGLY CODE FROM HERE, ONLY TEMPORARY*/}
        <ValueCard
          rect
          value="Empathy"
          text="We empathize and recognize the problems students face while looking for long term housing that does not feel like a compromise. Many of our team members, their friends, and family members, have faced problems with finding a place to stay in the first year of university."
        ></ValueCard>
        <ValueCard
          value="Commitment"
          text="As students ourselves we are committed to improving our fellow students’ livelihood. We have already spent countless hours designing and developing a platform that can serve our users, and we do not intend on stopping. We are passionate about improving the lives of others, while simultaneously improving ourselves and our abilities."
        ></ValueCard>
        <ValueCard
          rect
          value="Honesty"
          text="We maintain honesty with all our efforts and remain transparent about our actions to our users. Protecting our users from fraudulent behaviour remains one of our top priorities and we have put in place various safeguards to ensure honesty from all users. We demand crystal clear communication internally, and we plan to remain consistent in this aspect."
        ></ValueCard>
      </Section>
      <Section top={160} wrap="wrap" item container>
        <Grid sm={12} md={7} item>
          <Typography variant="h1" color="primary">
            Meet the team
          </Typography>
          <P>
            Each one of our team members is continuously looking to improve
            themselves and the world. A Place For Now is a manifestation of some
            smart and motivated individuals seeing how far they can take their
            abilities. As Peter Parker once stated: "With great power comes
            great responsibility," and we're aiming it at improving our
            community members' livelihoods. Here are the wonderful faces behind
            the project:
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
        <Avatar img={aniruddh} name="Aniruddh" pos="Head of Marketing" />
        <Avatar img={Asaf} name="Asaf" pos="Chairman" />
        <Avatar img={Atharva} name="Atharva" pos="Teasurer" />
        <Avatar img={Ave} name="Ave" pos="Backend Developer" />
        <Avatar img={Barbara} name="Bárbara" pos="Secretary" />
        <Avatar img={Joao} name="João" pos="External Affairs Associate" />
        <Avatar img={Ece} name="Ece" pos="Head of Social Media" />
        <Avatar img={Emma} name="Emma" pos="UX Researcher" />
        <Avatar img={Emre} name="Emre" pos="Frontend Developer" />
        <Avatar img={Niklas} name="Niklas" pos="Frontend Developer" />
        <Avatar
          img={Gijs}
          name="Gijs"
          pos="Process Improvement Extraordinaire"
        />
        <Avatar img={Joep} name="Joep" pos="Head of External Affairs" />
        <Avatar img={Michael} name="Michael" pos="External Affairs Associate" />
        <Avatar img={Mihnea} name="Mihnea" pos="Head of Design and UX" />
        <Avatar img={Mika} name="Mika" pos="UX Researcher" />
        <Avatar
          img={Nicolas}
          name="Nicolas"
          pos="Backend and Frontend Developer"
        />
        <Avatar img={Simon} name="Simon" pos="UX Researcher" />
        <Avatar img={Delal} name="Delal" pos="Backend Developer" />
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
  width: ${(props) => props.width};
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
  padding-top: ${(props) => props.top}px;

  @media (max-width: ${breakpoints.sm}px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: ${breakpoints.xxs}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

const UValueCard = ({ value, text, rect, className }) => {
  const theme = useTheme()

  return (
    <Grid item xs={12} sm={6} md={3} className={className}>
      {rect ? <Rectangles /> : <Circles />}
      <div
        className="deco"
        // TODO: inline style should generally prevented
        style={{ backgroundColor: theme.palette.primary.main }}
      />
      <Typography variant="h6">{value}</Typography>
      <P>{text}</P>
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
    height: 300px;
    width: 300px;
  }

  .deco {
    margin-top: 16px;
    margin-bottom: 5px;
    width: 10vw;
    max-width: 160px;
    height: calc(3px + 0.1vw);
  }
`
