import React, { useState, useEffect } from "react"
import { Route, useHistory } from "react-router-dom"
import styled from "styled-components"
import { ReactComponent as Logo } from "../Assets/Logo.svg"
import { breakpoints } from "../theme"
import { useQuery } from "./Hooks"

import {
  AppBar,
  Toolbar as UToolbar,
  Button,
  IconButton,
  Drawer,
  Tabs,
  Tab,
  useTheme,
  useScrollTrigger,
  Slide,
  Zoom,
  Fab,
} from "@material-ui/core"

// make things reactive
import useMediaQuery from "@material-ui/core/useMediaQuery"

// icons
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import MenuIcon from "@material-ui/icons/Menu"

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

export default ({ children, ...props }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [isOpen, setOpen] = useState(false)
  let history = useHistory()
  const [params, setParams] = useQuery()
  const theme = useTheme()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })
  const matches = useMediaQuery(`(min-width: ${breakpoints.mds}px)`)

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

  // prevent open menu on resize
  useEffect(() => {
    setOpen(false)
  }, [matches])

  const handleTabbing = (event, newValue) => {
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
    setParams("modal", "login")
  }

  return (
    <Route {...props}>
      <div id="back-to-top-anchor" />
      <Grid>
        <HideOnScroll>
          <AppBar position="fixed" elevation={trigger ? 4 : 0}>
            <Toolbar>
              <Logo
                style={{ height: "50px", width: "50px", cursor: "pointer" }}
                onClick={() => history.push("/")}
              />
              <Container>
                {matches ? (
                  <Nav
                    orientation="horizontal"
                    value={activeTab}
                    onChange={handleTabbing}
                    TabIndicatorProps={{
                      style: {
                        height: 3,
                        backgroundColor: theme.palette.grey[50],
                      },
                    }}
                    theme={theme}
                    handleLogin={handleLogin}
                  />
                ) : (
                  <>
                    <Drawer
                      anchor="right"
                      open={isOpen}
                      onClose={() => setOpen(false)}
                    >
                      <Nav
                        orientation="vertical"
                        indicatorColor="primary"
                        value={activeTab}
                        onChange={handleTabbing}
                        TabIndicatorProps={{
                          style: {
                            width: 4,
                          },
                        }}
                        theme={theme}
                        handleLogin={handleLogin}
                      />
                    </Drawer>
                    <IconButton
                      color="inherit"
                      onClick={() => setOpen(!isOpen)}
                      style={{ padding: 0 }}
                    >
                      <MenuIcon />
                    </IconButton>
                  </>
                )}
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

const UNav = ({ className, theme, handleLogin, ...props }) => {
  return (
    <>
      <Tabs {...props}>
        <Tab label="home" />
        <Tab label="how it works" />
        <Tab label="about us" />
      </Tabs>
      <Button className={className} color="primary" onClick={handleLogin}>
        Log in
      </Button>
    </>
  )
}

// TODO: hover
const Nav = styled(UNav)`
  padding: 0 30px;
  margin: ${props =>
    props.orientation === "horizontal" ? "4px 0 4px 30px" : "20px 6px 0 6px"};
  background-color: ${props => props.theme.palette.grey[50]};

  :hover {
    background-color: ${props => props.theme.palette.grey[50]};
  }
`

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
