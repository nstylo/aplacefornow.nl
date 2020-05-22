import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

// theme
import { theme } from "./theme"

// import forms
import Login from "./Forms/Login"
import SignUp from "./Forms/SignUp"
import ResetPw from "./Forms/ResetPw"
import ForgotPw from "./Forms/ForgotPw"

// routes
import LayoutRoute from "./Misc/LayoutRoute"
import DialogContext from "./Misc/DialogContext"
// import { ProtectedRoute } from "./Misc/ProtectedRoute"

// import pages
import Home from "./Pages/Home"
import About from "./Pages/About"
import HowItWorks from "./Pages/HowItWorks"
import NoMatch from "./Pages/404.jsx"

function App() {
  // controlls the active global popup
  const [activeModal, setActiveModal] = useState("none")

  return (
    <ThemeProvider theme={theme}>
      <DialogContext.Provider value={{ activeModal, setActiveModal }}>
        <Router>
          <CssBaseline />
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
        <Login />
      </DialogContext.Provider>
    </ThemeProvider>
  )
}

export default App

