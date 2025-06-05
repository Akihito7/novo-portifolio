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
  ContainerExperience,
  VerticalLine,
} from "./style";

import dayjs from "dayjs";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import { theme } from "../../../../theme";

type StylesRoot = {
  minHeight?: string;
  height?: string;
};

const DATE_INITAL_GBM = dayjs().subtract(13, "months");
const GBM_WORK_INFO = {
  timeTotal: dayjs().diff(DATE_INITAL_GBM, "months"),
  timeAsJuniorDeveloper: dayjs().diff(
    DATE_INITAL_GBM.add(9, "months"),
    "months"
  ),
  timeAsIntern: dayjs().subtract(4, "months").diff(DATE_INITAL_GBM, "months"),
};

export function About() {
  const [showDiv, setShowDiv] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleIconClick = () => {
    setShowDiv(!showDiv);
  };

  const stylesRoot: StylesRoot =
    windowWidth > 786 ? { height: "100vh" } : { minHeight: "100vh" };

  return (
    <ScrollArea.Root style={stylesRoot}>
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
                Desenvolvedor Full-Stack com experiência em JavaScript, Next.js
                e NestJS, focado em resolver bugs, otimizar sistemas e construir
                soluções completas do zero. Busco criar soluções eficientes e
                escaláveis, sempre aprimorando minhas habilidades.
              </TextBio>
            </ContainerBio>

            <ContainerExperience>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                Experiência
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

                <div style={{ flex: 1 }}>
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
                    >
                      GBM Tech & Control
                    </a>
                    <span style={{ fontSize: "14px", color: "#666" }}>
                      {GBM_WORK_INFO.timeTotal}{" "}
                      {GBM_WORK_INFO.timeTotal > 1 ? "meses" : "mês"}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "20px",
                      gap: "28px",
                      position: "relative",
                      paddingLeft: "28px",
                    }}
                  >
                    <VerticalLine />

                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          position: "absolute",
                          left: "-21px",
                          top: "7px",
                          height: "10px",
                          width: "10px",
                          backgroundColor: "#0073b1",
                          borderRadius: "50%",
                        }}
                      />
                      <div>
                        <strong style={{ fontSize: "16px" }}>
                          Desenvolvedor full stack júnior
                        </strong>
                        <div style={{ fontSize: "14px", color: "#555" }}>
                          {GBM_WORK_INFO.timeAsJuniorDeveloper}{" "}
                          {GBM_WORK_INFO.timeAsJuniorDeveloper > 1
                            ? "meses"
                            : "mês"}
                        </div>
                      </div>
                    </div>

                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          position: "absolute",
                          left: "-21px",
                          top: "8px",
                          height: "10px",
                          width: "10px",
                          backgroundColor: "#ccc",
                          borderRadius: "50%",
                        }}
                      />
                      <div>
                        <strong style={{ fontSize: "16px" }}>
                          Desenvolvedor full stack — Estagiário
                        </strong>
                        <div style={{ fontSize: "14px", color: "#555" }}>
                          {GBM_WORK_INFO.timeAsIntern}{" "}
                          {GBM_WORK_INFO.timeAsIntern > 1 ? "meses" : "mês"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ContainerExperience>

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
