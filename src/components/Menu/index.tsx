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
import { theme } from "../../theme";
import { motion } from "motion/react";

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
        <div>
          <Navigation
            selected={selected === "main"}
            onClick={() => changeTabSelected("main")}
          >
            Home
          </Navigation>

          {selected === "main" && (
            <motion.div
              layoutId="activeTab"
              style={{
                height: "2px",
                width: "100%",
                backgroundColor: theme.colors.green.main,
                position: "relative",
              }}
            />
          )}
        </div>

        <div>
          <Navigation
            selected={selected === "about"}
            onClick={() => changeTabSelected("about")}
          >
            About
          </Navigation>

          {selected === "about" && (
            <motion.div
              layoutId="activeTab"
              style={{
                height: "2px",
                width: "100%",
                backgroundColor: theme.colors.green.main,
                position: "relative",
              }}
            />
          )}
        </div>

        <div>
          <Navigation
            selected={selected === "projects"}
            onClick={() => changeTabSelected("projects")}
          >
            Projetos
          </Navigation>

          {selected === "projects" && (
            <motion.div
              layoutId="activeTab"
              style={{
                height: "2px",
                width: "100%",
                backgroundColor: theme.colors.green.main,
                position: "relative",
              }}
            />
          )}
        </div>
      </ContainerNavigation>
      <Link href="https://wa.link/wqzc7f" target="_blank">
        <ButtonContactNow>Contatar agora</ButtonContactNow>
      </Link>
    </Container>
  );
}
