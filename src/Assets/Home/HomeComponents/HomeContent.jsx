import React from "react"
import styled from "styled-components"
import { Grid, Typography, Tab, Tabs } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { breakpoints } from "../../../theme"

function TabPanel(props) {
  const { children, value, index } = props
  return (
    <div role="tabpanel">
      {value === index && <Container>{children}</Container>}
    </div>
  )
}
function HomeContent() {
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const classes = useStyles()
  return (
    <StyledHomeContent>
      <Container>
        <Section xs={12} top={80} item>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            classes={{
              root: classes.customTabRoot,
              indicator: classes.customTabIndicator,
            }}
          >
            <Tab label="Become a host" />
            <Tab label="Learn more" />
            <Tab label="Find a room" />
          </Tabs>
        </Section>
      </Container>
    </StyledHomeContent>
  )
}

const StyledHomeContent = styled.div`
  position: relative;
  top: 105vh;
  bottom: 150vh;
`

const Container = styled(Grid).attrs(() => ({
  container: true,
}))`
  overflow: hidden;
`
const Section = styled(Grid)`
  position: relative;
  padding-left: 80px;
  padding-right: 80px;
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
const useStyles = makeStyles((theme) => ({
  customTabRoot: {
    color: "black",
    backgroundColor: "transparent",
  },
  customTabIndicator: {
    backgroundColor: "#AD578D",
    height: 5,
    width: "80%",
  },
}))
export default HomeContent
