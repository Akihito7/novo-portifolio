import React from "react";

import {
  Container,
  Body,
  ContainerWelcome,
  ContentWelcome,
  OlaText,
  Title,
  FullStackText,
  IlikeChallangerText,
  ContainerButtons,
  ButtonProject,
  ButtonAbout,
  ContainerPresentation,
  ImageProfile,
  IconGithub,
  MyNameText,
  ContainerGithub,
  UserGithub,
  MyDescription,
  ContainerIconsRedes,
  IconRedes,
  IconNavigation,
} from "./style";
import { Menu } from "../../../Menu";

export function Main() {
  return (
    <Container>
      <Body>
        <ContainerWelcome>
          <ContentWelcome>
            <OlaText>Olá pessoa, eu sou </OlaText>
            <Title>Akihito.</Title>
            <FullStackText>Desenvolvedor full-stack! 👨‍💻</FullStackText>
            <IlikeChallangerText>Open to work!</IlikeChallangerText>

            <ContainerButtons>
              <ButtonProject>Projetos</ButtonProject>
              <ButtonAbout>Sobre</ButtonAbout>
            </ContainerButtons>
          </ContentWelcome>
        </ContainerWelcome>
        <ContainerPresentation>
          <ImageProfile src="profileRedes.png" alt="imagem do perfil" />
          <MyNameText>Guilherme Akihito</MyNameText>
          <ContainerGithub>
            <IconGithub src="githubicon.png" alt="imagem do github" />
            <UserGithub href="https://github.com/Akihito7" target="_blank">
              akihito7
            </UserGithub>
          </ContainerGithub>

          <MyDescription>
            Estudante de ciências da computação e apaixonado por tecnologia!
          </MyDescription>
          <ContainerIconsRedes>
            <IconNavigation>
              <IconRedes src="xicon.png" alt="icone do twitter" />
            </IconNavigation>
            <IconNavigation>
              <IconRedes src="instagramicon.png" alt="icone do instagram" />
            </IconNavigation>
            <IconNavigation
              href="https://www.youtube.com/watch?v=ckfjX0B-KfM&list=RDTzx_hB8H8Yo&index=21"
              target="_blank"
            >
              <IconRedes src="youtubeicon.png" alt="icone do youtube" />
            </IconNavigation>
          </ContainerIconsRedes>
        </ContainerPresentation>
      </Body>
    </Container>
  );
}
