import styled from "styled-components";
import { theme } from "../../theme";
import { motion } from "framer-motion";

export const Container = styled.div`

width: 100vw;
height: 100vh;
background-color: ${theme.colors.black.main};

@media screen and (min-width: 486px) and (max-width: 786px) {
height: 100vh;

}

@media screen and (max-width: 485px){
 height: auto;
}

`

export const Main = styled.div`

width: 100vw;
height: 80vh;
padding: 4rem 6rem;

@media screen and (min-width: 486px) and (max-width: 786px) {
height: auto;
}


@media screen and (max-width: 485px){

height: auto;
padding: 4rem 4rem;

}


`
export const ContainerProjects = styled.div`
display: flex;
justify-content: start;
gap: 4rem;


@media screen and (min-width: 486px) and (max-width: 786px) {
flex-direction: column;
 padding: 0 2rem;
 align-items: center;
 justify-content: center;
}

@media screen and (max-width: 485px){
 flex-direction: column;
 padding: 0 2rem;
 align-items: center;
 justify-content: center;
}

`
export const Title = styled.h1`


font-family: "Poppins", sans-serif;
font-weight: 600;
font-size: 2.4rem;
margin-bottom: 5rem;

@media screen and (max-width: 485px){

text-align: start;
margin-top: 4rem;

}

`

export const DivFramerMotion = styled(motion.div)`


`