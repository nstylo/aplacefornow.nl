import React from "react"
import styled from "styled-components"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme, Dialog } from "@material-ui/core"

export default ({ children, open, setOpen }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <Dialog
      open={open}
      maxWidth="lg"
      fullScreen={fullScreen}
      onClose={() => setOpen("none")}
    >
      <Grid columnStyle={matches} fullScreen={fullScreen}>
        <Form columnStyle={matches}>{children}</Form>
        <Background columnStyle={matches} />
      </Grid>
    </Dialog>
  )
}

const Form = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: ${props => (props.columnStyle ? 2 : 1)};
  grid-row-end: ${props => (props.columnStyle ? 2 : 1)};

  grid-template-rows: ${props => (props.columnStyle ? "100%" : "320px auto")};
  background: white;
  padding: 12px 64px;
  z-index: 1000;
`

const Background = styled.div`
  grid-column-start: 1;
  grid-column-end: ${props => (props.columnStyle ? 1 : 3)};
  grid-row-start: ${props => (props.columnStyle ? 2 : 1)};
  grid-row-end: 1;
  background-color: #73d3dd;
  min-height: 200px;
`

const Grid = styled.div`
  display: grid;
  min-height: ${props => (props.columnStyle ? "800px" : "600px")};
  width: ${({ fullScreen, columnStyle }) =>
    fullScreen ? "100%" : columnStyle ? "600px" : "960px"};
  grid-template-columns: ${props => (props.columnStyle ? "100%" : "60% auto")};
  grid-template-rows: ${props => (props.columnStyle ? "280px auto" : "100%")};
`
