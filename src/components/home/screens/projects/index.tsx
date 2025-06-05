import React, { useState } from "react";
import {
  Container,
  Main,
  ContainerProjects,
  Title,
  DivFramerMotion,
} from "./style";

import { CardProjects } from "../../../CardProjects";
import { Menu } from "../../../Menu";
import { UseTranslate } from "../../../../translations";

export function Projects({ lang }: { lang: string }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const t = new UseTranslate("projects", lang);

  const works = [
    {
      id: "1",
      spanDescription: "AkFinances",
      Name: "AkFinances.",
      description: t.t("akfinancesDescription"),
      technologyUsed: "React js, Typescript e Api.",
      color: "linear-gradient(180deg,#f3cbab,#feedca)",
      githubLink: "https://github.com/Akihito7/akfinances",
      vercelLink: "https://akfinances.vercel.app/",
    },
    {
      id: "2",
      spanDescription: "Attractions",
      Name: "Attractions.",
      description: t.t("attractionDescription"),
      technologyUsed: "React js e Framer Motion",
      color: "linear-gradient(180deg,#b1e5f9,#f4d2fe)",
      githubLink: "https://github.com/Akihito7/attractionsBrazil",
      vercelLink: "https://attractions-brazil.vercel.app",
    },
  ];

  const setSelected = (itemId: string) => {
    if (selectedId === itemId) return setSelectedId(null);
    setSelectedId(itemId);
  };

  return (
    <Container>
      <Main>
        <Title>{t.t("title")}</Title>
        <ContainerProjects>
          {works.map((item) => (
            <DivFramerMotion
              key={item.id}
              layout
              onClick={() => setSelected(item.id)}
            >
              <DivFramerMotion
                layout
                layoutId={item.id}
                initial={{ borderRadius: 10 }}
                animate={{
                  borderRadius: selectedId === item.id ? 0 : 10,
                  scale: selectedId === item.id ? 1.13 : 1,
                  zIndex: selectedId === item.id ? 2 : 1,
                  filter:
                    selectedId && selectedId !== item.id
                      ? "blur(10px)"
                      : "none",
                  opacity: selectedId && selectedId !== item.id ? 0.5 : 1,
                }}
                transition={{ duration: 0.3 }}
                style={{ cursor: "pointer" }}
              >
                <CardProjects
                  background={item.color}
                  selected={selectedId === item.id}
                  name={item.Name}
                  spanDescription={item.spanDescription}
                  description={item.description}
                  technologyUsed={item.technologyUsed}
                  githubLink={item.githubLink}
                  vercelLink={item.vercelLink}
                />
              </DivFramerMotion>
            </DivFramerMotion>
          ))}
        </ContainerProjects>
      </Main>
    </Container>
  );
}
