import React from "react"
import styled from "styled-components"
import { theme } from "../theme"

const UTag = ({ className, text, ...props }) => (
  <div className={className} {...props}>
    {text}
  </div>
)

export const Tag = styled(UTag)`
  border-radius: 20px;
  color: white;
  font-size: 20px;
  font-weight: 400;
  padding: 5px;
  padding-right: 15px;
  white-space: nowrap;
  width: max-content;
  background-color: ${props =>
    props.color === "secondary"
      ? theme.palette.secondary.main
      : theme.palette.primary.main};

  ::before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 0 12px 0 6px;
    -moz-border-radius: 7.5px;
    -webkit-border-radius: 7.5px;
    border-radius: 7.5px;
    background-color: white;
  }
`
