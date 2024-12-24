import styled from "styled-components";
import { theme } from "../../theme";

type PropsNavigation = {
    selected : boolean;
}

export const Container = styled.div`

background-color: ${theme.colors.black.main};
height: 20vh;
padding: 1rem 5rem;

display: flex;
align-items: center;
justify-content: space-around;

@media screen and (min-width: 486px) and (max-width: 786px) {
flex-direction: column;
}


@media screen and (max-width: 485px){
flex-direction: column;
}
`
export const Logo = styled.h1`

font-family: "Lobster", sans-serif;
font-size: 3.5rem;
color: ${theme.colors.green.main};
`
export const ContainerNavigation = styled.div`

display: flex;
gap: 4rem;
`
export const Navigation = styled.p<PropsNavigation>`

font-family:  "Poppins", sans-serif;
font-size: 1.4rem;
font-weight: 400;
border-color: 1px solid ${theme.colors.white.text};

color : ${({ selected }) => selected ? theme.colors.green.main : theme.colors.white.text};

&:hover{
    cursor: pointer;
}
`
export const ButtonContactNow = styled.button`

width: 15rem;
height: 4rem;
background: none;
border: 1px solid ${theme.colors.white.text};
transform: skew(-15deg);
color: ${theme.colors.white.text};

@media screen and (min-width: 486px) and (max-width: 786px) {
display: none;
}


@media screen and (max-width: 485px){
display: none;
}

display: flex;
align-items: center;
justify-content: center;

font-size: 1.4rem;
font-family: "Poppins", sans-serif;
font-weight: 500;

transition: all 500ms;

&:hover{
    cursor: pointer;
    background-color: ${theme.colors.green.main};
    color: ${theme.colors.black.main};
    border: none;
}
`

export const Link = styled.a`
text-decoration: none;
`