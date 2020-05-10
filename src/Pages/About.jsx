import React from "react"
import styled from "styled-components"

import { Grid, Typography, Box } from "@material-ui/core"

import { ReactComponent as Rectangles } from "../Assets/Rectangles.svg"
import { ReactComponent as Circles } from "../Assets/Circles.svg"

export default () => {
  return (
    <Grid container>
      <Section left="160px" top="163px" bottom="634px">
        <Typography variant="h1" color="primary">
          About us
        </Typography>
        <P width="700px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </P>
      </Section>
      <Grid item xs={12}>
        <Section left="150px" right="150px" bottom="89px">
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
        <Grid container spacing={8} wrap="nowrap">
          <ValueCard rect></ValueCard>
          <ValueCard></ValueCard>
          <ValueCard rect></ValueCard>
          <ValueCard></ValueCard>
        </Grid>
      </Section>
      <Section left="150px">
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
      <Grid item xs={12}>
        team flexbox
      </Grid>
    </Grid>
  )
}

const P = styled.p`
  width: ${props => props.width};
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

const ValueCard = ({ rect }) => {
  return (
    <Grid item>
      {rect ? (
        <Rectangles style={{ width: "100%" }} />
      ) : (
        <Circles style={{ width: "100%" }} />
      )}
    </Grid>
  )
}
