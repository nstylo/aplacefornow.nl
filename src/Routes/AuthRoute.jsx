import React from "react"
import { Route } from "react-router-dom"
import styled from "styled-components"

import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core"

import { ReactComponent as Logo } from "../Assets/Auth/Logo2.svg"

export default ({ children, ...props }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Route {...props}>
      <Grid matches={matches}>
        <Form matches={matches}>
          <FormLogo theme={theme}>
            <Logo />
          </FormLogo>
          {children}
        </Form>
        <Background matches={matches} />
      </Grid>
    </Route>
  )
}

const FormLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Form = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: ${props => (props.matches ? 2 : 1)};
  grid-row-end: ${props => (props.matches ? 2 : 1)};

  grid-template-rows: ${props => (props.matches ? "100%" : "320px auto")};
  background: white;
  padding: 12px 32px;
`

const Background = styled.div`
  grid-column-start: 1;
  grid-column-end: ${props => (props.matches ? 1 : 3)};
  grid-row-start: ${props => (props.matches ? 2 : 1)};
  grid-row-end: 1;
  background-color: #73d3dd;
  z-index: -1;
`

const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: ${props => (props.matches ? "100%" : "640px auto")};
  grid-template-rows: ${props => (props.matches ? "auto 380px" : "100%")};
`
