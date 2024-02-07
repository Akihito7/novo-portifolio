import React from "react";
import {
    Container,
    ContainerIcons,
    ContainerMain,
    Icon,
    IconNavigation,
    Title,
    Description,
    SpanDescription,
    TechnologiesUsed,
    DivFramerMotion,
} from "./style";

type PropsCardProjects = {
    selected: boolean;
    name: string;
    description: string;
    spanDescription: string;
    technologyUsed: string;
    background : string;
    githubLink : string;
    vercelLink : string;

}

export function CardProjects({
    selected,
    name,
    description,
    spanDescription,
    technologyUsed,
    background,
    githubLink,
    vercelLink,

}: PropsCardProjects) {
    return (
        <Container background={background}>
            <ContainerIcons>
                <IconNavigation href={githubLink} target="_blank">
                    <Icon src="github.svg" alt="icone do github" />
                </IconNavigation>

                <IconNavigation href={vercelLink} target="_blank">
                    <Icon src="boxwitharrow.svg" alt="icone do box with arrow" />
                </IconNavigation>
            </ContainerIcons>

            <ContainerMain selected={selected}>
                {
                    selected ?
                        <DivFramerMotion
                            initial={{ opacity: 0 }}
                            animate={{ opacity: selected ? [0, 0, 0, 0, 0.2, 0.4, 0.6, 0.8, 1,] : 0, transition: { duration: 1 } }}
                        >
                            <Description>
                                <SpanDescription>{spanDescription},</SpanDescription>
                                {description}
                            </Description>
                        </DivFramerMotion>

                        :

                        <DivFramerMotion
                            initial={{ opacity: 0 }}
                            animate={{ opacity: selected ? 0 : [0, 0, 0.4, 1], transition: { duration: 1 } }}
                        >
                            <Title>{name}</Title>
                        </DivFramerMotion>
                }
                <DivFramerMotion
                    initial={{
                        filter: "blur(2px)"
                    }}
                    animate={{
                        filter: selected ? ["blur(2px)", "blur(0px)",] : ["blur(0px)", "blur(2px)", "blur(0px)"],
                        transition: { duration: 1 }
                    }}
                >


                    <TechnologiesUsed>{technologyUsed}</TechnologiesUsed>
                </DivFramerMotion>

            </ContainerMain>
        </Container>
    );
}


