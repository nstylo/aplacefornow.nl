import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Lightbox from "simple-react-lightbox"

// theme
import { theme } from "./theme"

// custom components
import Home from "./Pages/Home"
import About from "./Pages/About"
import HowItWorks from "./Pages/HowItWorks"
import ListingsPage from "./Pages/ListingsPage"
import NoMatch from "./Pages/404.jsx"
import ModalRoot from "./Misc/ModalRoot"

// routes
import LayoutRoute from "./Misc/LayoutRoute"
// import { ProtectedRoute } from "./Misc/ProtectedRoute"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Lightbox>
        <Router>
          <CssBaseline />
          <ModalRoot />
          <Switch>
            <LayoutRoute exact path="/">
              <Home />
            </LayoutRoute>
            <LayoutRoute exact path="/about">
              <About />
            </LayoutRoute>
            <LayoutRoute exact path="/how-it-works">
              <HowItWorks />
            </LayoutRoute>
            <LayoutRoute exact path="/listing/:id">
              <ListingsPage />
            </LayoutRoute>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </Lightbox>
    </ThemeProvider>
  )
}

export default App
