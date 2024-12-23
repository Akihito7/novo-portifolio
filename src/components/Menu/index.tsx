import React from "react";
import {
  Container,
  Logo,
  ContainerNavigation,
  Navigation,
  ButtonContactNow,
  Link,
} from "./style";
import { TabKeys } from "../../screens/Home";

type PropsMenu = {
  selected: string;
  changeTabSelected: (tab: TabKeys) => void;
};

export function Menu({ selected, changeTabSelected }: PropsMenu) {
  return (
    <Container>
      <Link href="/">
        <Logo>Akihito</Logo>
      </Link>

      <ContainerNavigation>
        <Navigation
          selected={selected === "main"}
          onClick={() => changeTabSelected("main")}
        >
          Home
        </Navigation>
        <Navigation
          selected={selected === "about"}
          onClick={() => changeTabSelected("about")}
        >
          About
        </Navigation>
        <Navigation
          selected={selected === "projects"}
          onClick={() => changeTabSelected("projects")}
        >
          Projetos
        </Navigation>
      </ContainerNavigation>
      <Link href="https://wa.link/wqzc7f" target="_blank">
        <ButtonContactNow>Contatar agora</ButtonContactNow>
      </Link>
    </Container>
  );
}
