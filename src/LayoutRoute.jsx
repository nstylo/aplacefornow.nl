import React, { useState, useEffect } from "react"
import { Route, useHistory } from "react-router-dom"
import styled from "styled-components"
import { ReactComponent as Logo } from "./Assets/Logo.svg"
import { breakpoints } from "./theme"

import {
  AppBar,
  Toolbar as UToolbar,
  Button,
  Tabs,
  Tab,
  useTheme,
  useScrollTrigger,
  Slide,
  Zoom,
  Fab,
} from "@material-ui/core"

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"

const UScrollTop = ({ className }) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <Zoom in={trigger}>
      <div className={className} onClick={handleClick} role="presentation">
        <Fab color="primary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  )
}

// TODO: responsive bottom + right
const ScrollTop = styled(UScrollTop)`
  position: fixed;
  bottom: 40px;
  right: 40px;
`

// used for hiding the header on scroll
const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

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
      <div id="back-to-top-anchor" />
      <Grid>
        <HideOnScroll>
          <AppBar position="fixed">
            <Toolbar>
              <Logo style={{ padding: "2px", height: "50px", width: "50px" }} />
              <Container>
                <Tabs
                  value={activeTab}
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: {
                      height: 3,
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
                    margin: "4px 0",
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
        </HideOnScroll>
        <Item>{children}</Item>
      </Grid>
      <ScrollTop />
    </Route>
  )
}

const Toolbar = styled(UToolbar)`
  @media (min-width: ${breakpoints.sm}px) {
    min-height: 54px;
  }
`

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
