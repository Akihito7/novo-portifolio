import React, { useState } from "react";
import {
    Container,
    Main,
    ContainerProjects,
    Title,
    DivFramerMotion,


} from "./style"

import { CardProjects } from "../../components/CardProjects";
import { Menu } from "../../components/Menu";

export function Projects() {
    const [selectedId, setSelectedId] = useState(null);

    const works = [
        {
            id: "1",
            spanDescription: "AkFinances",
            Name: "AkFinances.",
            description: "Controle suas finanças com facilidade em poucos cliques! Gerencie gastos e ganhos de forma simples, com gráficos detalhados para uma visão clara. Você no comando do seu dinheiro!",
            technologyUsed: "React js, Typescript e Api.",
            color : "linear-gradient(180deg,#f3cbab,#feedca)",
            githubLink : "https://github.com/Akihito7/akfinances",
            vercelLink : "https://akfinances.vercel.app/",

        },
        {
            id: "2",
            spanDescription: "Attractions",
            Name: "Attractions.",
            description: "Site feito para mostrar um pouco dos pontos turísticos mais visitados, os queridinhos pelo povo, na verdade os 4 mais visitados, mas existem outros tão legais quanto esses!",
            technologyUsed: "React js e Framer Motion",
            color : "linear-gradient(180deg,#b1e5f9,#f4d2fe)",
            githubLink : "https://github.com/Akihito7/attractionsBrazil",
            vercelLink : "https://attractions-brazil.vercel.app"
        }
    ];

    const setSelected = (itemId) => {
        if (selectedId === itemId) return setSelectedId(null)
        setSelectedId(itemId);
    };

    return (
        <Container>
            <Menu selected={"projects"} />
            <Main>
                <Title>Projetos que realizei! 🚀</Title>
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
                                    filter: selectedId && selectedId !== item.id ? "blur(10px)" : "none",
                                    opacity: selectedId && selectedId !== item.id ? 0.5 : 1,
                                }}
                                transition={{ duration: .3 }}
                                style={{ cursor: 'pointer' }}
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