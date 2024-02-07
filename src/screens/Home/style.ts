import styled, { keyframes } from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`

width: 100vw;
height: 100vh;


@media screen and (max-width: 485px){


}
`

export const Body = styled.div`

width: 100vw;
height: 80vh;
display: flex;
background-color: ${theme.colors.black.main};

@media screen and (max-width: 485px){
display: flex;
flex-direction: column;
height: auto;
}


`

export const Design = styled.img`
position: absolute;
right: 38%;
height: 100vh;

@media screen and (min-width: 486px) and (max-width: 786px) {
display: none;
}

@media screen and (max-width: 485px){
display: none;
}



`
export const ContainerWelcome = styled.div`

width: 50vw;
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

padding: 11rem 0;


@media screen and (max-width: 485px){
display: flex;
width: 100vw;
height: auto;
padding: 11rem 0 8rem 0;

}



`

export const ContentWelcome = styled.div`


`
export const Title = styled.h1`

font-size: 8rem;
color: ${theme.colors.white.titleMain};
font-family: 'Poppins', sans-serif;
font-weight: 800;

background: linear-gradient(-55deg, #ffffff, #7939da, #ff003d, #59a8ec,#ffffff);
background-size: 400% 100%;
animation: degrade 20s linear infinite;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;


@media screen and (min-width: 486px) and (max-width: 786px) {
font-size: 7rem;
}

@media screen and (max-width: 485px){
font-size: 6rem;
}

@keyframes degrade {
  0%{
    background-position-x: 0%;
  }

  100%{
    background-position-x: 400% ;
  }

}

`


export const OlaText = styled.p`
font-size: 1.4rem;
color: ${theme.colors.white.titleMain};
font-weight: 400;
font-family: 'Poppins', sans-serif;

@media screen and (max-width: 485px){
font-size: 1.2rem;
}


`

export const FullStackText = styled.p`
font-size: 1.4rem;
color: ${theme.colors.green.main};
font-weight: 400;
font-family: 'Poppins', sans-serif;


@media screen and (max-width: 485px){
font-size: 1.2rem;
}
`

export const IlikeChallangerText = styled.p`
font-size: 1.2rem;
color: ${theme.colors.white.titleMain};
font-weight: 400;
font-family: 'Poppins', sans-serif;

margin-top: 1rem;
`

export const ContainerButtons = styled.div`

display: flex;
gap: 1rem;

margin-top: 2rem;




`
export const ButtonProject = styled.div`

width: 12rem;
height: 4rem;
background-color: ${theme.colors.green.main};

border: 1px solid ${theme.colors.green.main};
display: flex;
align-items: center;
justify-content: center;
color: ${theme.colors.black.main};
font-size: 1.6rem;
font-weight: 500;
transform: skewX(-15deg);
transition: all 300ms;

&:hover{
    border-color: ${theme.colors.green.main};
    background-color: transparent;
    color: ${theme.colors.white.titleMain};
    cursor: pointer;
}

@media screen and (max-width: 485px){
width: 10rem;
}

`

export const ButtonAbout = styled.div`
width: 12rem;
height: 4rem;
background-color: none;
border: 1px solid ${theme.colors.green.main};

display: flex;
align-items: center;
justify-content: center;
color: ${theme.colors.white.titleMain};
font-size: 1.6rem;
font-weight: 500;

transform: skewX(-15deg);
transition: all 300ms;

&:hover{
    background-color: ${theme.colors.green.main};
    color: ${theme.colors.black.main};
    cursor: pointer;
}

@media screen and (max-width: 485px){
width: 10rem;
}
`

export const ContainerPresentation = styled.div`

width: 50vw;
height: 80vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 6rem 0;


@media screen and (max-width: 485px){
display: flex;
width: 100vw;
height: auto;

}

`

export const ImageProfile = styled.img`

width: 20rem;
height: 12rem;

object-fit: contain;

`

export const IconGithub = styled.img`
width: 1.6rem;
height: 1.6rem;
`

export const MyNameText = styled.h2`

color: ${theme.colors.white.titleMain};
font-size: 2.2rem;
font-weight: 500;

margin-top: 1.5rem;

`
export const ContainerGithub = styled.div`
display: flex;
align-items: center;
gap : 1rem;

margin-top: 0.8rem;
`
export const UserGithub = styled.a`

color: ${theme.colors.white.titleMain};
font-size: 1.4rem;
`
export const MyDescription = styled.p`

color: ${theme.colors.white.titleMain};
font-size: 1.4rem;
width: 20rem;
text-align: center;

margin-top: 3rem;

`

export const ContainerIconsRedes = styled.div`

display: flex;
align-items: center;
gap : .8rem;

margin-top: 3rem;

`
export const IconRedes = styled.img`
width: 4rem;
height: 4rem;
`

export const IconNavigation = styled.a`


`