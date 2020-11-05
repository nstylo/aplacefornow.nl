import React from "react"
import styled from "styled-components"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Grid, Typography, Tab, Tabs } from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { breakpoints } from "../../../theme"
import { useMediaQuery } from "@material-ui/core";

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

  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down(960));
  const tabsProps = {
    orientation: isSmallScreen ? "vertical" : "horizontal",
  };

  const classes = useStyles()

  return (
    <StyledHomeContent>
      <Container>
        <Section xs={12} top={80} item>
          <Tabs
            {...tabsProps}
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            classes={{
              root: classes.customTabRoot,
              indicator: classes.customTabIndicator,
            }}
            centered
          >
            <StyledTab label="Become a host" />
            <StyledMiddleTab label="Learn more"/>
            <StyledTab label="Find a room" />
          </Tabs>

        </Section>
      </Container>
    </StyledHomeContent>
  )
}

const StyledHomeContent = styled.div`
  position: absolute;
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
const StyledTab = withStyles((theme) => ({
  root: {
    minWidth: "272px",
    minHeight: "60px",
    marginBottom: "9px",

    fontSize: "32px",
    color: "#DBDBDB",

    '&$selected': {
      color: '#AD578D',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);


const StyledMiddleTab = styled(StyledTab)`
  margin-left:64px; 
  margin-right:64px
`

const useStyles = makeStyles((theme) => ({
  customTabRoot: {
    color: "black",
    backgroundColor: "transparent",
  },
  customTabIndicator: {
    backgroundColor: "#AD578D",
    height: 5,
    maxWidth: "272px",
  }
}))

export default HomeContent
