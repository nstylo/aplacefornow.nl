import React, { createContext, useContext, useReducer } from "react"
import styled from "styled-components"
import { Toast } from "lib"
import { createPortal } from "react-dom"

export const ToastContext = createContext()

export const ADD = "ADD"
export const REMOVE = "REMOVE"
export const REMOVE_ALL = "REMOVE_ALL"

const initialState = []

export const toastReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: +new Date(),
          message: action.payload.message,
          severity: action.payload.severity,
          duration: action.payload.duration,
          anchor: action.payload.anchor,
        },
      ]
    case REMOVE:
      return state.filter(t => t.id !== action.payload.id)
    case REMOVE_ALL:
      return initialState
    default:
      return state
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vh;
`

const ToastMapper = ({ toasts }) => {
  return (
    <Wrapper>
      {toasts.map(toast => (
        <Toast {...toast} />
      ))}
    </Wrapper>
  )
}

export const ToastProvider = props => {
  const [toasts, toastDispatch] = useReducer(toastReducer, initialState)

  return (
    <ToastContext.Provider value={{ toasts, toastDispatch }}>
      {props.children}
      {createPortal(
        <ToastMapper toasts={toasts} />,
        document.getElementById("toast-root")
      )}
    </ToastContext.Provider>
  )
}

export const useToastContext = () => {
  return useContext(ToastContext)
}
