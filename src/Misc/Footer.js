import React from "react"
import styled from "styled-components"
import { Grid, Typography, Paper } from "@material-ui/core"
import { breakpoints } from "../theme"

const Footer = () => {
  return (
    <Container>
      <FooterSection xs={12} top={100} item>
        <Paper
          style={{
            backgroundColor: "#fafafa",
            borderRadius: "25px 25px 0 0",
          }}
          elevation={4}
        >
          <Container>
            <Section
              xs={12}
              top={20}
              spacing={6}
              item
              container
              justify="space-evenly"
            >
              <FooterColumn header="Get in touch">
                <P>Contact</P>
                <P>info@apfn.com</P>
                <P>+31 040 123 4567</P>
              </FooterColumn>
              <FooterColumn header="Legal"></FooterColumn>
              <FooterColumn header="Learn more"></FooterColumn>
              <FooterColumn header="Social"></FooterColumn>
            </Section>
          </Container>
        </Paper>
      </FooterSection>
    </Container>
  )
}

const FooterSection = styled(Grid)`
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

const Section = styled(Grid)`
  position: relative;
  padding-left: 210px;
  padding-right: 210px;
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
const UFooterColumn = ({ header, children, className }) => {
  return (
    <Grid item xs={9} sm={6} md={4} lg={3} xl={3} className={className}>
      <Typography variant="h7" color="primary">
        {header}
      </Typography>
      {children}
    </Grid>
  )
}

const P = styled(Typography).attrs(() => ({
  variant: "body1",
}))`
  text-align: justify;
  margin-top: 16px;
  margin-bottom: 24px;
  width: auto;
`

const FooterColumn = styled(UFooterColumn)``

export default Footer
