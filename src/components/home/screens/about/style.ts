import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../../theme";

export const Container = styled.div`
 
  min-height: 100vh;
  width: 100vw;
`;
export const Main = styled.div`
  padding: 0 20rem 5rem 20rem;
  min-height: 100vh;

  @media screen and (min-width: 486px) and (max-width: 786px) {
    padding: 0;
  }

  @media screen and (max-width: 485px) {
    padding: 0;
  }
`;
export const Design = styled.img`
  width: 5rem;
  height: 5rem;

  position: fixed;
  right: 2%;
  bottom: 2%;
`;
export const ContainerBio = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 486px) and (max-width: 786px) {
    width: 100vw;
    padding: 6rem 3rem 6rem 3rem;
    align-items: flex-start;
    margin-top: 0;
  }

  @media screen and (max-width: 485px) {
    width: 100vw;
    padding: 6rem 3rem 6rem 3rem;
    align-items: flex-start;
    margin-top: 0;
  }
`;
export const ContainerTechnology = styled.div`
  padding: 6rem 0;
  overflow-x: none;
  

  @media screen and (min-width: 486px) and (max-width: 786px) {
    width: 100vw;
    padding: 2rem 3rem 6rem 3rem;
    align-items: flex-start;
    margin-top: 0;
  }

  @media screen and (max-width: 485px) {
    width: 100vw;
    padding: 2rem 3rem 6rem 3rem;
    align-items: flex-start;
    margin-top: 0;
  }
`;
export const ImageProfile = styled.img`
  width: 14rem;
  height: 14rem;

  @media screen and (max-width: 485px) {
    width: 10rem;
    height: 12rem;
  }
`;
export const NameBio = styled.span`
  font-size: 3rem;
  font-family: "Poppins", sans-serif;
  color: ${theme.colors.white.text};
  font-weight: 500;

  @media screen and (max-width: 485px) {
    font-size: 2.6rem;
  }
`;
export const TextBio = styled.p`
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
  color: ${theme.colors.white.text};
  font-weight: 400;
  line-height: 3rem;

  @media screen and (max-width: 485px) {
    font-size: 1.3rem;
  }
`;
export const TechnologyTitle = styled.h2`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  color: ${theme.colors.white.text};
  font-weight: 500;

  @media screen and (max-width: 485px) {
    font-size: 2.2rem;
  }
`;
export const ContainerIcons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;

  flex-wrap: wrap;
`;
export const IconsTechnology = styled(motion.img)`
  width: 5rem;
  height: 5rem;
  transition: all 0.1s ease-in-out;

  @media screen and (max-width: 485px) {
    width: 4rem;
    height: 4rem;
  }
`;


export const ContainerExperience = styled.div`
margin-top : 6rem;

@media screen and (min-width: 486px) and (max-width: 786px) {
    width: 100vw;
    padding: 2rem 3rem 6rem 3rem;
    align-items: flex-start;
    margin-top: 0;
  }

  @media screen and (max-width: 485px) {
    width: 100vw;
    padding: 2rem 3rem 6rem 3rem;
    align-items: flex-start;
    margin-top: 0;
  }

`


export const ExperienceList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 1.8rem;
  padding-left: 2rem;
`;

export const VerticalLine = styled.div`
  position: absolute;
  left: 3rem;
  top: 12px;   
  bottom: 28px; 
  width: 0.2rem;
  background-color: #ccc;

`;

export const ExperienceItem = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

export const Circle = styled.div<{ color: string }>`
  position: absolute;
  left: 1.1rem; 
  top: 7px;     
  height: 10px;
  width: 10px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  transform: translateX(-50%);
`;

export const ExperienceText = styled.div`
  margin-left: 24px; 
  white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

   @media screen and (max-width: 485px) {
    font-size: 1.2rem;
  }
`;