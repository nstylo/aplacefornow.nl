import React from "react"
import styled from "styled-components"
import { Grid, Typography, Paper, Link } from "@material-ui/core"
import { breakpoints } from "../theme"
import IconButton from "@material-ui/core/IconButton"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import FacebookIcon from "@material-ui/icons/Facebook"

const Footer = () => {
  return (
    <Container>
      <FooterSection alignItems="stretch">
        <Paper
          style={{
            backgroundColor: "#fafafa",
            borderRadius: "25px 25px 0 0",
          }}
          elevation={4}
        >
          <FooterGrid>
            <Item>
              <Section
                xs={12}
                top={30}
                spacing={6}
                item
                container
                justify="center"
              >
                <FooterColumn header="Get in touch">
                  <P>Contact</P>
                  <P>info@apfn.com</P>
                  <P>+31 040 123 4567</P>
                </FooterColumn>
                <FooterColumn header="Legal">
                  <FooterLink href="#">
                    {/*links in here*/}
                    <P>Terms and conditions</P>
                  </FooterLink>
                  <FooterLink href="#">
                    {/*links in here*/}
                    <P>Privacy policy</P>
                  </FooterLink>
                </FooterColumn>
                <FooterColumn header="Learn more">
                  <FooterLink href="#">
                    {/*links in here*/}
                    <P>How it works</P>
                  </FooterLink>
                  <FooterLink href="#">
                    {/*links in here*/}
                    <P>About Us</P>
                  </FooterLink>
                  <FooterLink href="#">
                    {/*links in here*/}
                    <P>FAQ</P>
                  </FooterLink>
                </FooterColumn>
                <FooterColumn header="Social">
                  <P>
                    Follow us on social media for the latest updates of our
                    progress
                  </P>
                  <Grid
                    container
                    xs={12}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ paddingTop: "12px" }}
                  >
                    <IconButton
                      aria-label="LinkedIn Icon"
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/company/a-place-for-now/",
                          "_blank"
                        )
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      aria-label="Instagram Icon"
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/aplacefornow/",
                          "_blank"
                        )
                      }}
                    >
                      <InstagramIcon />
                    </IconButton>
                    <IconButton
                      aria-label="Facebook Icon"
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/A-Place-for-Now-APFN-103517767884952",
                          "_blank"
                        )
                      }}
                    >
                      <FacebookIcon />
                    </IconButton>
                    <IconButton
                      aria-label="Twitter Icon"
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/aplacefornow/",
                          "_blank"
                        )
                      }}
                    >
                      <TwitterIcon />
                    </IconButton>
                  </Grid>
                  {/*Social Media Links here*/}
                </FooterColumn>
                <hr border="none" width="100%" color="D3D3D3" />
                <Grid
                  container
                  item
                  xs={12}
                  justify="center"
                  style={{
                    marginBottom: "36px",
                  }}
                >
                  <FooterLink href="#">
                    {/*links in here*/}
                    ©2020 A Place For Now, all rights reserved
                  </FooterLink>
                </Grid>
              </Section>
            </Item>
          </FooterGrid>
        </Paper>
      </FooterSection>
    </Container>
  )
}

const FooterSection = styled(Grid)`
  position: relative;
  padding-top: 65px;
  min-height: 300px;
`
const Section = styled(Grid)`
  padding-left: 80px;
  padding-right: 80px;
  padding-top: ${props => props.top}px;

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
    <Grid item xs={12} sm={12} md={6} lg={3} xl={3} className={className}>
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
  margin-top: 10px;
  width: auto;
`

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  min-height: 300px;
`

const FooterColumn = styled(UFooterColumn)``

const FooterLink = styled(Link).attrs(() => ({
  variant: "body1",
  color: "inherit",
}))`
  text-align: justify;
  margin-top: 10px;
  width: auto;
`

const Item = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  overflow: hidden;
`

const FooterGrid = styled.div`
  display: grid;
  overflow: hidden;
  min-height: 300px;
  @media (min-width: ${breakpoints.xl}px) {
    grid-template-columns: auto ${breakpoints.xl}px auto;
  }
`

export default Footer
