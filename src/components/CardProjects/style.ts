import styled from "styled-components";
import { theme } from "../../theme";
import { motion } from "framer-motion";

type PropsContainerMain = {
    selected : boolean;
} 

type PropsContainer = {
    background: string;
}

export const Container = styled.div<PropsContainer>`

width: 32rem;
height: 33rem;

padding: 2rem;
display: flex;
flex-direction: column;
justify-content: space-between;
background: ${({ background }) => background}

`

export const ContainerIcons = styled.div`

display: flex;
justify-content: flex-end;
gap: 1rem;
`

export const ContainerMain = styled.div<PropsContainerMain>`

height: ${({ selected }) => selected ? "80%" : "50%"};

display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;

padding: 2rem 0 0 0;
`

export const Icon = styled.img`

width: 2rem;
height: 2rem;
transition: all 300ms;

&:hover{
    transform: scale(1.5);
}
`

export const IconNavigation = styled.a`

`
export const Title = styled.h1`

font-size: 4rem;
color: ${theme.colors.black.main};
font-family: "Poppins", sans-serif;
font-weight: 600;

`

export const Description = styled.p`

font-size: 1.4rem;
color: ${theme.colors.black.main};
font-family: "Poppins", sans-serif;
font-weight: 600;

`
export const SpanDescription = styled.h2`
font-size: 3rem;
color: ${theme.colors.black.main};
font-family: "Poppins", sans-serif;
font-weight: 600;
`

export const TechnologiesUsed = styled.p`

font-size: 1.4rem;
font-family: "Poppins", sans-serif;
font-weight: 500;
color: ${theme.colors.black.main};

`

export const DivFramerMotion = styled(motion.div)`

`