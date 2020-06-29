import React from "react"
import styled from "styled-components"

import { ReactComponent as UWelcomeBirds} from "../Assets/WelcomeBirds.svg"
import { breakpoints } from "../theme"
import { Grid, Typography } from "@material-ui/core"

export default () => {
  return (
    <Container>
      <Section xs={12} top={120} item>
        <Typography variant="h1" color="primary">
          Welcome to A Place For Now!
        </Typography>
        <P>
          This website is still under development! To get behind-the-scenes help and future updates, <a href={"https://forms.gle/ZfhRSX5t38yU6SjYA"}>sign up here!</a>
        </P>
        <WelcomeBirds/>
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
const WelcomeBirds = styled(UWelcomeBirds)`
  position: relative;
  width: 75%;
  height: auto;
  left: 150px;
  z-index: -1;

  @media (max-width: ${breakpoints.lg}px) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.sm}px) {
    left: 15px;
  }
  @media (max-width: ${breakpoints.xxs}px) {
    left: 15px;
  }
`
