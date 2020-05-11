import React, { useState, useEffect } from "react"
import { Route, useHistory } from "react-router-dom"
import styled from "styled-components"
import { AppBar, Toolbar, Button, Tabs, Tab, useTheme } from "@material-ui/core"
import { ReactComponent as Logo } from "./Assets/Logo.svg"
import { breakpoints } from "./theme"

export default ({ children, path, exact }) => {
  const [activeTab, setActiveTab] = useState(0)
  const theme = useTheme()
  let history = useHistory()

  useEffect(() => {
    switch (history.location.pathname) {
      case "/":
        setActiveTab(0)
        break
      case "/how-it-works":
        setActiveTab(1)
        break
      case "/about":
        setActiveTab(2)
        break
      default:
        setActiveTab(0)
    }
  }, [history.location.pathname])

  const handleChange = (event, newValue) => {
    setActiveTab(newValue)
    let url

    switch (newValue) {
      case 0:
        url = "/"
        break
      case 1:
        url = "/how-it-works"
        break
      case 2:
        url = "/about"
        break
      default:
        url = "/"
    }

    history.push(url)
  }

  const handleLogin = event => {
    history.push("/login")
  }

  return (
    <Route exact path={path}>
      <Grid>
        <AppBar position="fixed">
          <Toolbar>
            <Logo style={{ padding: "4px", height: "64px", width: "64px" }} />
            <Container>
              <Tabs
                value={activeTab}
                onChange={handleChange}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: theme.palette.text.secondary,
                  },
                }}
              >
                <Tab label="home" />
                <Tab label="how it works" />
                <Tab label="about us" />
              </Tabs>
              <Button
                color="primary"
                style={{
                  padding: "0 30px",
                  marginLeft: "30px",
                  backgroundColor: theme.palette.text.secondary,
                }}
                onClick={handleLogin}
              >
                Log in
              </Button>
            </Container>
          </Toolbar>
        </AppBar>
        <Item>{children}</Item>
      </Grid>
    </Route>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`

const Grid = styled.div`
  display: grid;

  @media (min-width: ${breakpoints.xl}px) {
    grid-template-columns: auto ${breakpoints.xl}px auto;
  }
`

const Item = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
`
