"use app";
import React from "react";
import { Header } from "@/components/Header";
import { Felispo } from "@/containers/home/Felispo";
import { ActFacade } from "@/containers/home/ActFacade";
import { AboutSection } from "@/containers/home/AboutSection";
import { Footer } from "@/components/Footer";

export const Home = (): React.JSX.Element => {
    return (
        <>
            <Header />
            <Felispo />
            <ActFacade />
            <AboutSection />
            <Footer />
        </>
    )
}