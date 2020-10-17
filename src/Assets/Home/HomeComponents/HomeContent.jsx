import React from "react"
import styled from "styled-components"

function HomeContent() {
    return (
        <StyledHomeContent>
            <h1>This is the content title</h1>
            <h2>This is some text below that</h2>
            <p>I'm sure you'd love to find a place for now wouldn't you ;)</p>
        </StyledHomeContent>
    )
  }

  /* In reality, we will use tabs to be able to switch between different
  kinds of conent on this page
  see: https://material-ui.com/components/tabs/
  */

  const StyledHomeContent = styled.div`
    position: relative;
    top: 135vh;
    bottom: 150vh;
    text-align: center;
    height: 100vh;
  `

  export default HomeContent