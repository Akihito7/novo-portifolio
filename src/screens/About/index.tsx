import React, { useState } from "react";
import {
  Container,
  Design,
  Main,
  ContainerBio,
  ContainerTechnology,
  ImageProfile,
  NameBio,
  TextBio,
  TechnologyTitle,
  ContainerIcons,
  IconsTechnology,
} from "./style";
import { Menu } from "../../components/Menu";


export function About() {
  const [showDiv, setShowDiv] = useState(false);

  const handleIconClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <Container>
      <Design src="designAbout.svg"></Design>
      <Menu selected={"about"} />
      <Main>
        <ContainerBio>
          <ImageProfile src="profile.png"></ImageProfile>
          <TextBio>
            Sou o <NameBio>Guilherme Akihito,</NameBio> tenho 21 anos e moro em São Paulo. Há três anos, entrei no mundo da programação, inspirado pelos vídeos do Gustavo Guanabara no YouTube. Essa paixão se tornou minha vocação, levando-me à faculdade de Ciências da Computação, onde estou no 4º semestre.

            Além da graduação, busquei aprimoramento fazendo cursos online, muitos deles na Rocktseat. Aprendi Html, Css, Javascript, React.js, React Native e Node.js, solidificando minhas habilidades.

            Minha fascinação por tecnologia vai além dos estudos formais. É um estilo de vida. Tenho grandes sonhos e estou determinado a torná-los realidade.

            Estou animado para seguir aprendendo, crescer profissionalmente e enfrentar novos desafios. Seja bem-vindo à minha jornada na empolgante área da tecnologia!
          </TextBio>
        </ContainerBio>

        <ContainerTechnology>
          <TechnologyTitle>Conhecimentos! 📖</TechnologyTitle>
          <ContainerIcons>


            <IconsTechnology
              src="html.svg"
              alt="icone do html"
              onClick={handleIconClick}

              whileHover={{ scale: 1.4, rotate: 360 }}
              whileTap={{
                scale: 0.8,
                rotate: -360,
                borderRadius: "100%",
              }}
            />
            <IconsTechnology
              src="css.svg"
              alt="icone do css"
              onClick={handleIconClick}

              whileHover={{ scale: 1.4, rotate: 360 }}
              whileTap={{
                scale: 0.8,
                rotate: -360,
                borderRadius: "100%"
              }}
            />
            <IconsTechnology
              src="js.svg"
              alt="icone do javascript"
              onClick={handleIconClick}

              whileHover={{ scale: 1.4, rotate: 360 }}
              whileTap={{
                scale: 0.8,
                rotate: -360,
                borderRadius: "100%"
              }}
            />

            <IconsTechnology
              src="react.svg"
              alt="icone do react"
              onClick={handleIconClick}

              whileHover={{ scale: 1.4, rotate: 360 }}
              whileTap={{
                scale: 0.8,
                rotate: -360,
                borderRadius: "100%"
              }}
            />

            <IconsTechnology
              src="nestjs.svg"
              alt="icone do nest js"
              onClick={handleIconClick}

              whileHover={{ scale: 1.4, rotate: 360 }}
              whileTap={{
                scale: 0.8,
                rotate: -360,
                borderRadius: "100%"
              }}
            />

            <IconsTechnology
              src="typescript.svg"
              alt="icone do typescript"
              onClick={handleIconClick}

              whileHover={{ scale: 1.4, rotate: 360 }}
              whileTap={{
                scale: 0.8,
                rotate: -360,
                borderRadius: "100%"
              }}
            />


            <IconsTechnology
              src="java.svg"
              alt="icone do java"
              onClick={handleIconClick}

              whileHover={{ scale: 1.4, rotate: 360 }}
              whileTap={{
                scale: 0.8,
                rotate: -360,
                borderRadius: "100%"
              }}
            />


            <IconsTechnology
              src="spring.svg"
              alt="icone do spring"
              onClick={handleIconClick}

              whileHover={{ scale: 1.4, rotate: 360 }}
              whileTap={{
                scale: 0.8,
                rotate: -360,
                borderRadius: "100%"
              }}
            />
          </ContainerIcons>
        </ContainerTechnology>
      </Main>
    </Container>
  );
}
