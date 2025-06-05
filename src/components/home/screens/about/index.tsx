import { useState } from "react";
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
  ContainerExperience,
  VerticalLine,
  ExperienceItem,
  Circle,
  ExperienceText,
  ExperienceList,
} from "./style";

import dayjs from "dayjs";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { theme } from "../../../../theme";
import { UseTranslate } from "../../../../translations";

const DATE_INITAL_GBM = dayjs().subtract(13, "months");
const GBM_WORK_INFO = {
  timeTotal: dayjs().diff(DATE_INITAL_GBM, "months"),
  timeAsJuniorDeveloper: dayjs().diff(
    DATE_INITAL_GBM.add(9, "months"),
    "months"
  ),
  timeAsIntern: dayjs().subtract(4, "months").diff(DATE_INITAL_GBM, "months"),
};

export function About({ lang }: { lang: string }) {
  const [showDiv, setShowDiv] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const t = new UseTranslate("about", lang);

  const handleIconClick = () => {
    setShowDiv(!showDiv);
  };

  const stylesRoot =
    windowWidth > 786 ? { height: "100vh" } : { minHeight: "100vh" };

  return (
    <ScrollArea.Root style={stylesRoot}>
      <ScrollArea.Viewport style={{ width: "100%", height: "100%" }}>
        <Container style={{ height: "100%" }}>
          <Design src="designAbout.svg" />
          <Design src="designAbout.svg" />

          <Main>
            <ContainerBio>
              <ImageProfile src="profileRedes.png" />
              <TextBio>{t.t("bio")}</TextBio>
            </ContainerBio>

            <ContainerExperience>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                {t.t("experienceTitle")}
              </h2>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src="gbmtech_logo.jpeg"
                  alt="company logo"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "6px",
                    objectFit: "contain",
                  }}
                />

                <div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <a
                      href="https://www.linkedin.com/company/gbmtech/posts/?feedView=all"
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#0a66c2",
                        textDecoration: "none",
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.t("company")}
                    </a>
                    <span style={{ fontSize: "14px", color: "#666" }}>
                      {GBM_WORK_INFO.timeTotal}{" "}
                      {GBM_WORK_INFO.timeTotal > 1
                        ? t.t("months")
                        : t.t("month")}
                    </span>
                  </div>

                  <ExperienceList>
                    <VerticalLine />

                    <ExperienceItem>
                      <Circle color="#0073b1" />
                      <ExperienceText>
                        <strong style={{ fontSize: "16px" }}>
                          {t.t("juniorTitle")}
                        </strong>
                        <div style={{ fontSize: "14px", color: "#555" }}>
                          {GBM_WORK_INFO.timeAsJuniorDeveloper}{" "}
                          {GBM_WORK_INFO.timeAsJuniorDeveloper > 1
                            ? t.t("months")
                            : t.t("month")}
                        </div>
                      </ExperienceText>
                    </ExperienceItem>

                    <ExperienceItem>
                      <Circle color="#ccc" />
                      <ExperienceText>
                        <strong style={{ fontSize: "16px" }}>
                          {t.t("internTitle")}
                        </strong>
                        <div style={{ fontSize: "14px", color: "#555" }}>
                          {GBM_WORK_INFO.timeAsIntern}{" "}
                          {GBM_WORK_INFO.timeAsIntern > 1
                            ? t.t("months")
                            : t.t("month")}
                        </div>
                      </ExperienceText>
                    </ExperienceItem>
                  </ExperienceList>
                </div>
              </div>
            </ContainerExperience>

            <ContainerTechnology>
              <TechnologyTitle>{t.t("skillsTitle")}</TechnologyTitle>
              <ContainerIcons>
                {[
                  "html.svg",
                  "css.svg",
                  "js.svg",
                  "react.svg",
                  "nestjs.svg",
                  "typescript.svg",
                  "java.svg",
                  "spring.svg",
                ].map((icon, idx) => (
                  <IconsTechnology
                    key={idx}
                    src={icon}
                    alt={`icone de ${icon}`}
                    onClick={handleIconClick}
                    whileHover={{ scale: 1.4, rotate: 360 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: -360,
                      borderRadius: "100%",
                    }}
                  />
                ))}
              </ContainerIcons>
            </ContainerTechnology>
          </Main>
        </Container>

        {windowWidth > 786 && (
          <ScrollArea.Scrollbar
            style={{
              width: "6px",
              borderRadius: "10px",
            }}
          >
            <ScrollArea.Thumb
              style={{
                flex: "1",
                backgroundColor: theme.colors.green.main,
                borderRadius: "10px",
              }}
            />
          </ScrollArea.Scrollbar>
        )}
      </ScrollArea.Viewport>
    </ScrollArea.Root>
  );
}
