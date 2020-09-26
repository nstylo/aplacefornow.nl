import React from "react"
import { Button as IButton } from "@material-ui/core"
import styled from "styled-components"

const UButton = ({ children, className, ...props }) => {
  return (
    <IButton className={className} {...props}>
      {children}
    </IButton>
  )
}

export const Button = styled(UButton)`
  border-radius: 35px;
  border-width: 2.5px;

  :hover {
    border-width: 2.5px;
  }
`
