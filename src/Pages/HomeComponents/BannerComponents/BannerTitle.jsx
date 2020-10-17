import styled from "styled-components"
import { breakpoints } from "../../../theme.js"

export const Title = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap');

font-family: Karla;
font-style: normal;
font-weight: bold;

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


