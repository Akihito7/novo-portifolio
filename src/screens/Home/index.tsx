import React, { useState } from "react";
import { Main } from "../../components/home/screens/main";
import { Menu } from "../../components/Menu";
import { About } from "../../components/home/screens/about";
import { Projects } from "../../components/home/screens/projects";
import { theme } from "../../theme";

const tabComponents = {
  main: Main,
  about: About,
  projects: Projects,
};
export type TabKeys = keyof typeof tabComponents;

export type Lang = "pt-br" | "en-us";

export function Home() {
  const [tabSelected, setTabSelected] = useState<TabKeys>("main");
  const [lang, setLang] = useState<Lang>(
    (localStorage.getItem("lang") as Lang) ?? "pt-br"
  );

  function handleLangChange(lang: Lang) {
    localStorage.setItem("lang", lang);
    setLang(lang);
  }

  function changeTabSelected(tab: TabKeys) {
    setTabSelected(tab);
  }

  const CurrentTab = tabComponents[tabSelected];

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: theme.colors.black.main,
        overflow: "hidden",
      }}
    >
      <Menu
        selected={tabSelected}
        changeTabSelected={changeTabSelected}
        lang={lang}
        setLang={handleLangChange}
      />
      <CurrentTab changeTabSelected={changeTabSelected} lang={lang} />
    </div>
  );
}
