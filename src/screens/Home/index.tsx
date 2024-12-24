import React, { useState } from "react";
import { Main } from "../../components/home/screens/main";
import { Menu } from "../../components/Menu";
import { About } from "../../components/home/screens/about";
import { Projects } from "../../components/home/screens/projects";

const tabComponents = {
  main: Main,
  about: About,
  projects: Projects,
};
export type TabKeys = keyof typeof tabComponents;

export function Home() {
  const [tabSelected, setTabSelected] = useState<TabKeys>("main");

  function changeTabSelected(tab: TabKeys) {
    setTabSelected(tab);
  }

  const CurrentTab = tabComponents[tabSelected];

  return (
    <div
      style={{
        width: "100vw",
        height: " 100vh",
      }}
    >
      <Menu selected={tabSelected} changeTabSelected={changeTabSelected} />
      <CurrentTab changeTabSelected={changeTabSelected} />
    </div>
  );
}
