import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

// theme
import { theme } from "./theme"

// custom components
import Home from "./Pages/Home"
import About from "./Pages/About"
import HowItWorks from "./Pages/HowItWorks"
import NoMatch from "./Pages/404.jsx"
import ModalRoot from "./Misc/ModalRoot"

// routes
import LayoutRoute from "./Misc/LayoutRoute"
import Footer from "./Misc/Footer"
// import { ProtectedRoute } from "./Misc/ProtectedRoute"

function App() {
  return (
    <ThemeProvider theme={theme}>
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
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  )
}

export default App
