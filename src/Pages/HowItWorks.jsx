import React from "react"
import styled from "styled-components"

import { Grid, Typography } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"

import { ReactComponent as UParagraphRect } from "../Assets/ParagraphRect.svg"

export default () => {
  return (
    <Grid container>
    <ParagraphRect/>
      <Section left="160px" top="163px" bottom="634px">
        <Typography variant="h1" color="primary">
          How It Works
        </Typography>
        <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.
        </P>
      </Section>
    </Grid>
  )
}

const ParagraphRect = styled(UParagraphRect)`
  position: absolute;
  top: 340px;
`

const P = styled.p`
  width: ${props => props.width};
`
const Section = styled(Grid).attrs(props => ({
  item: true,
  xs: 12,
}))`
  padding-left: ${props => props.left};
  padding-right: ${props => props.right};
  padding-top: ${props => props.top};
  padding-bottom: ${props => props.bottom};
`