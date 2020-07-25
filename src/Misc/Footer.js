import React from "react";
import styled from "styled-components"
import { Grid, Typography, Paper } from "@material-ui/core"
import { breakpoints } from "../theme"

const Footer = () => {
    return (
        <Container>
        <Section xs={12} top={100} item>
            <Paper style={{
              backgroundColor: "#fafafa",
              borderRadius: "25px 25px 0 0",
            }}
            elevation={4}
            > Footer
            </Paper>
        </Section>
        </Container>
    );
};

const Section = styled(Grid)`
  position: relative;
  
  padding-top: ${(props) => props.top}px;

  @media (max-width: ${breakpoints.sm}px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: ${breakpoints.xxs}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
const Container = styled(Grid).attrs(() => ({
    container: true,
  }))`
    overflow: hidden;
  `

export default Footer;