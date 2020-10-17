import styled from "styled-components"
import { Grid } from "@material-ui/core"

export const Container = styled(Grid).attrs(() => ({
    container: true,
  }))`
    height: 100%;
    overflow: hidden;
    justify-content: center;
  `