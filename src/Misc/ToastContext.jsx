import React, { createContext, useContext, useReducer } from "react"
import { Toast } from "lib"
import { createPortal } from "react-dom"

export const ToastContext = createContext()

export const ADD = "ADD"
export const REMOVE = "REMOVE"

const initialState = null

const toastReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return action.payload
    case REMOVE:
      return null
    default:
      return state
  }
}

export const ToastProvider = props => {
  const [toast, dispatchToast] = useReducer(toastReducer, initialState)

  return (
    <ToastContext.Provider value={{ toast, dispatchToast }}>
      {props.children}
      {createPortal(
        toast ? <Toast {...toast} /> : null,
        document.getElementById("toast-root")
      )}
    </ToastContext.Provider>
  )
}

export const useToastContext = () => {
  return useContext(ToastContext)
}
