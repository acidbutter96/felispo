"use client";
import React, { useRef } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

export const Felispo = (): React.JSX.Element => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div className={styles.container}>
            <div className={styles.videoContainer}>
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    loop
                    className={styles.video}
                    autoPlay
                >
                    <source src="/static/videos/felispo.webm" type="video/webm" />
                </video>
            </div>
            <div className={styles.cavalinhoContainer}>
                <div className={styles.cavalinho}>
                    <Image
                        src="/static/images/cavalinho.gif" // Path to cavalinho.gif
                        alt="Cavalinho Animation"
                        width={300} // Adjust width as needed
                        height={300} // Adjust height as needed
                        className={styles.cavalinhoImage} // Optional: Add a class for styling
                    />
                </div>
            </div>
            <div className={styles.facadesContainer}>
                <div className={styles.firstBox}></div>
                <div className={styles.secondBox}></div>
            </div>
        </div>
    );
};
