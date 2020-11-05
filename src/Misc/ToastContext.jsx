import React, { createContext, useContext, useReducer } from "react"
import { Toast } from "lib"
import { createPortal } from "react-dom"

export const ToastContext = createContext()

export const ADD = "ADD"
export const REMOVE = "REMOVE"

const initialState = {}

const toastReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { ...action.payload, open: true }
    case REMOVE:
      return { ...state, open: false }
    default:
      return state
  }
}

export const ToastProvider = props => {
  const [toastProps, dispatchToast] = useReducer(toastReducer, initialState)

  return (
    <ToastContext.Provider value={{ toastProps, dispatchToast }}>
      {props.children}
      {createPortal(
        <Toast {...toastProps} />,
        document.getElementById("toast-root")
      )}
    </ToastContext.Provider>
  )
}

export const useToastContext = () => {
  return useContext(ToastContext)
}
