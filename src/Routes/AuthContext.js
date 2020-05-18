import React from "react"

export let state = { isAuthenticated: false }

export const context = React.createContext(state)
