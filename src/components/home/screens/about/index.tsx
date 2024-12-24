import React, { useState } from "react";
import {
  Container,
  Design,
  IconsTechnology,
  Main,
  ContainerBio,
  ImageProfile,
  TextBio,
  NameBio,
  ContainerIcons,
  ContainerTechnology,
  TechnologyTitle,
} from "./style";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import { theme } from "../../../../theme";

export function About() {
  const [showDiv, setShowDiv] = useState(false);

  const handleIconClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <ScrollArea.Root style={{ height: "100vh" }}>
      <ScrollArea.Viewport
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Container style={{ height: "100%" }}>
          <Design src="designAbout.svg" />

          <Design src="designAbout.svg"></Design>
          <Main>
            <ContainerBio>
              <ImageProfile src="profileRedes.png"></ImageProfile>
              <TextBio>
                Sou o <NameBio>Guilherme Akihito,</NameBio> tenho 21 anos e moro
                em São Paulo. Há três anos, entrei no mundo da programação,
                inspirado pelos vídeos do Gustavo Guanabara no YouTube. Essa
                paixão se tornou minha vocação, levando-me à faculdade de
                Ciências da Computação, onde estou no 4º semestre. Além da
                graduação, busquei aprimoramento fazendo cursos online, muitos
                deles na Rocktseat. Aprendi Html, Css, Javascript, React.js,
                React Native e Node.js, solidificando minhas habilidades. Minha
                fascinação por tecnologia vai além dos estudos formais. É um
                estilo de vida. Tenho grandes sonhos e estou determinado a
                torná-los realidade. Estou animado para seguir aprendendo,
                crescer profissionalmente e enfrentar novos desafios. Seja
                bem-vindo à minha jornada na empolgante área da tecnologia!
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
                    borderRadius: "100%",
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
                    borderRadius: "100%",
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
                    borderRadius: "100%",
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
                    borderRadius: "100%",
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
                    borderRadius: "100%",
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
                    borderRadius: "100%",
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
                    borderRadius: "100%",
                  }}
                />
              </ContainerIcons>
            </ContainerTechnology>
          </Main>
        </Container>
        <ScrollArea.Scrollbar
          orientation="vertical"
          style={{
            width: "6px",
            borderRadius: "10px",
          }}
        >
          <ScrollArea.Thumb
            style={{
              flex : "1",
              backgroundColor: theme.colors.green.main,
              borderRadius: "10px",
            }}
          />
        </ScrollArea.Scrollbar>
      </ScrollArea.Viewport>
    </ScrollArea.Root>
  );
}
