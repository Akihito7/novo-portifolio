import React, { useState } from "react";
import {
    Container,
    Logo,
    ContainerNavigation,
    Navigation,
    ButtonContactNow,
    Link,

} from "./style"

import { useNavigate } from "react-router-dom"

type PropsMenu = {
    selected: string;
}

export function Menu({ selected }) {

    const navigate = useNavigate();

    return (
        <Container>
            <Logo>Akihito</Logo>

            <ContainerNavigation>
                <Navigation
                    selected={selected === "/"}
                    onClick={() => navigate("/")}
                >
                    Home
                </Navigation>
                <Navigation
                    selected={selected === "about"}
                    onClick={() => navigate("/about")}
                >
                    About
                </Navigation>
                <Navigation
                    selected={selected === "projects"}
                    onClick={() => navigate("/Projects")}
                >
                    Projetos
                </Navigation>
            </ContainerNavigation>
            <Link
                href="https://wa.link/wqzc7f"
                target="_blank"
            >
                <ButtonContactNow>Contatar agora</ButtonContactNow>
            </Link>
        </Container>
    )
}