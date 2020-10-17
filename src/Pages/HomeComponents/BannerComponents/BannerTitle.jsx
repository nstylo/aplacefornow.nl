import styled from "styled-components"
import { breakpoints } from "../../../theme.js"

export const Title = styled.div`
/* karla-700 - latin */
@font-face {
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  src: local('Karla Bold'), local('Karla-Bold'),
       url('Fonts/karla-v13-latin-700.woff2') format('woff2'),
       url('Fonts/karla-v13-latin-700.woff') format('woff'), 

}

font-family: Karla;
font-style: normal;
font-weight: 700;

font-size: 64px;
line-height: 75px;
display: flex;
align-items: center;

width:100%;
height:auto;

text-align: start;

/* White */
color: #FFFFFF;

@media (max-width: ${breakpoints.md}px) {
  font-size:40px;
  line-height:57.2px;
}

@media (max-width: ${breakpoints.mds}px) {
  font-size:32px;
  line-height:45.76px;
}

@media (max-width: ${breakpoints.xs}px) {
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  justify-content : center;
  text-align: center;
  left:0px;
  right:0px;
}
  `


