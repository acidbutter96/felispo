"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { isSafari } from "@/utils/isSafari";


export const Felispo = (): React.JSX.Element => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoSrc, setVideoSrc] = useState("/static/videos/felispo.webm");
    const [videoType, setVideoType] = useState("video/webm");

    useEffect(() => {
        if (isSafari()) {
            setVideoSrc("/static/videos/felispo.mp4");
            setVideoType("video/mp4");
        } else {
            setVideoSrc("/static/videos/felispo.webm");
            setVideoType("video/webm");
        }

        if (videoRef.current) {
            videoRef.current.load();
        }
    }, []);

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
                    <source src={videoSrc} type={videoType} />
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
