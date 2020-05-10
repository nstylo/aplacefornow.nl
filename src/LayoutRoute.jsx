import React from "react"
import { Route } from "react-router-dom"
import styled from "styled-components"

export default ({ children, path, exact }) => {
  return (
    <Route exact path={path}>
      <Grid>
        <Item>{children}</Item>
      </Grid>
    </Route>
  )
}

const Grid = styled.div`
  display: grid;

  @media (min-width: 1920px) {
    grid-template-columns: auto 1920px auto;
  }
`

const Item = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
`
