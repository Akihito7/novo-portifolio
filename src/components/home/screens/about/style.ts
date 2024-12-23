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
  padding: 10rem 0;
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
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  color: ${theme.colors.white.text};
  font-weight: 400;
  line-height: 3rem;

  @media screen and (max-width: 485px) {
    font-size: 1.3rem;
  }
`;
export const TechnologyTitle = styled.h2`
  font-size: 2.6rem;
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
