import {
  Container,
  Logo,
  ContainerNavigation,
  Navigation,
  ButtonContactNow,
  Link,
} from "./style";
import { FlagIcon } from "react-flag-kit";

import { Lang, TabKeys } from "../../screens/Home";
import { theme } from "../../theme";
import { motion } from "motion/react";
import { UseTranslate } from "../../translations";

type PropsMenu = {
  selected: string;
  changeTabSelected: (tab: TabKeys) => void;
  lang: Lang;
  setLang: (value: Lang) => void;
};

export function Menu({
  selected,
  changeTabSelected,
  lang,
  setLang,
}: PropsMenu) {
  const t = new UseTranslate("menu", lang);

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
            {t.t("home")}
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
            {t.t("about")}
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
            {t.t("projects")}
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Link href="https://wa.link/wqzc7f" target="_blank">
          <ButtonContactNow>{t.t("contactNow")}</ButtonContactNow>
        </Link>
        <div style={{ display: "flex", gap: "10px" }}>
          <FlagIcon
            code="US"
            size={30}
            onClick={() => setLang("en-us")}
            style={{ cursor: "pointer" }}
          />
          <FlagIcon
            code="BR"
            size={30}
            onClick={() => setLang("pt-br")}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </Container>
  );
}
