import React from "react"
import styled from "styled-components"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme, Dialog } from "@material-ui/core"
import { breakpoints } from "../theme"

import { ReactComponent as UCloud } from "../Assets/Auth/Cloud.svg"

export default ({ children, open, setOpen }) => {
  const theme = useTheme()
  // add 64 px because of dialog margins to avoid x overflow
  const matches = useMediaQuery(`(max-width: ${breakpoints.md + 64}px)`)
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
        <Background columnStyle={matches}>
          <Cloud top="-10px" right="-30px" />
          <Cloud top="180px" right="160px" />
          <Cloud top="460px" right="-120px" />
        </Background>
      </Grid>
    </Dialog>
  )
}

const Cloud = styled(UCloud)`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  width: 340px;
  height: auto;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  padding: 52px 64px;
  z-index: 1000;
  overflow-y: auto;
`

const Background = styled.div`
  position: relative;
  grid-column-start: ${props => (props.columnStyle ? 1 : 2)};
  grid-column-end: ${props => (props.columnStyle ? 1 : 3)};
  grid-row-start: ${props => (props.columnStyle ? 2 : 1)};
  grid-row-end: 1;
  background-color: #73d3dd;
  min-height: 200px;
  overflow: hidden;
`

const Grid = styled.div`
  display: grid;
  min-height: ${props => (props.columnStyle ? "800px" : "600px")};
  width: ${({ fullScreen, columnStyle }) =>
    fullScreen ? "100%" : columnStyle ? "600px" : "960px"};
  grid-template-columns: ${props => (props.columnStyle ? "100%" : "60% auto")};
  grid-template-rows: ${props => (props.columnStyle ? "280px auto" : "100%")};
`
