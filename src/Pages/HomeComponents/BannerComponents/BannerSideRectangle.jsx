import styled from "styled-components"
import { breakpoints } from "../../../theme.js"

export const SideRectangle = styled.div`
height: 25vh;
width: 0.72vw;

position: absolute;
top: 37%;
left: 0vw;

/* White */
background: #FFFFFF;

@media (max-width: ${breakpoints.xs}px) {
    display:none;
}
`