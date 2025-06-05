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
import { TabKeys } from "../../../../screens/Home";
import { UseTranslate } from "../../../../translations";

type MainProps = {
  changeTabSelected: (tab: TabKeys) => void;
  lang: string;
};

export function Main({ changeTabSelected, lang }: MainProps) {
  const translator = new UseTranslate("home", lang);
  return (
    <Container>
      <Body>
        <ContainerWelcome>
          <ContentWelcome>
            <OlaText>{translator.t("greetings")}</OlaText>
            <Title>Akihito.</Title>
            <FullStackText>{translator.t("fullStack")}</FullStackText>
            <IlikeChallangerText>
              {translator.t("openToWork")}
            </IlikeChallangerText>

            <ContainerButtons>
              <ButtonProject onClick={() => changeTabSelected("projects")}>
                {translator.t("projectsButton")}
              </ButtonProject>
              <ButtonAbout onClick={() => changeTabSelected("about")}>
                {translator.t("aboutButton")}
              </ButtonAbout>
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

          <MyDescription>{translator.t("description")}</MyDescription>
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
