"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { isSafari } from "@/utils/isSafari";

export const Portfolio = (): React.JSX.Element => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [videoSrc, setVideoSrc] = useState<string[]>([
        "/static/videos/projects/google.webm",
        "/static/videos/projects/aleda.webm"
    ]);
    const [videoType, setVideoType] = useState("video/webm");

    useEffect(() => {
        if (isSafari()) {
            setVideoSrc([
                "/static/videos/projects/google.mp4",
                "/static/videos/projects/aleda.mp4"
            ]);
            setVideoType("video/mp4");
        } else {
            setVideoType("video/webm");
        }

        if (videoRef.current) {
            videoRef.current.load();
        }
    }, []);
    return (
        <div className={styles.container}>
            <div>
                {
                    isSafari() ? <></> : <div className={styles.mobileAboutJobs}>
                        <div className={styles.aboutJobsContainer}>
                            <div className={styles.aboutJobsTitle}>
                                Trabalhos <span>Selecionados</span>
                            </div>
                            <div className={styles.aboutText}>
                                Lorem ipsum dolor sit amet
                                Consectetuer adipiscing elit sed
                                Diam nonummy nibh euismod
                                Tincidunt ut laoreet dolore
                                Magna aliquam erat volutpat ut
                                Wisi enim ad minim veniam quis
                                Nostrud exerci tation
                                Ullamcorper suscipit lobortis nisl
                                Ut aliquip ex ea commodo
                            </div>
                        </div>
                    </div>
                }
                <div className={styles.firstRow}>
                    <div className={styles.firstColumn}>
                        <div className={`${styles.aboutJobsContainer} ${styles.hiddenSafari}`}>
                            <div className={styles.aboutJobsTitle}>
                                Trabalhos <span>Selecionados</span>
                            </div>
                            <div className={styles.aboutText}>
                                Lorem ipsum dolor sit amet
                                Consectetuer adipiscing elit sed
                                Diam nonummy nibh euismod
                                Tincidunt ut laoreet dolore
                                Magna aliquam erat volutpat ut
                                Wisi enim ad minim veniam quis
                                Nostrud exerci tation
                                Ullamcorper suscipit lobortis nisl
                                Ut aliquip ex ea commodo
                            </div>
                        </div>
                        <a
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.firstJob}
                        >
                            <Image alt="" src={"/static/images/projects/three-body-problem.jpg"} width={1000} height={1000} />
                        </a>
                    </div>
                    <a
                        href="https://www.behance.net/gallery/224823973/Ilustracao-autoral-01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.frstRowsecondColumn}
                    >
                        <div className={styles.secondJob}>
                            <Image alt="" src={"/static/images/projects/autoral-1.png"} width={1000} height={1000} />
                        </div>
                    </a>
                </div>
                {/* <div className={styles.secondRow}>
                    <a
                        className={styles.facadeJob}
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <video
                            muted
                            playsInline
                            loop
                            className={styles.video}
                            autoPlay
                        >
                            <source src={"/static/videos/projects/aleda.webm"} type={"video/webm"} />
                        </video>
                    </a>
                    <div className={styles.thirdJob}>
                        <Image alt="" src={"/static/images/projects/03 ❤️.png"} width={1000} height={1000}/>
                    </div>
                    <div className={styles.fourthJob}>
                        <Image alt="" src={"/static/images/projects/04 ❤️.png"} width={1000} height={1000}/>
                    </div>
                    <div className={styles.fifthJob}>
                        <Image alt="" src={"/static/images/projects/05 ❤️.png"} width={1000} height={1000}/>
                    </div>
                </div> */}
                <div className={styles.thirdRow}>
                    <div className={styles.firstColumn}>
                        <a
                            className={styles.sixthJob}
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <video
                                ref={videoRef}
                                muted
                                playsInline
                                loop
                                className={styles.video}
                                autoPlay
                            >
                                <source src={videoSrc[0]} type={videoType} />
                            </video>
                        </a>
                        <a
                            className={styles.eighthJob}
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image alt="" src={"/static/images/projects/svrvrv.png"} width={1000} height={1000} />
                        </a>
                    </div>
                    <div className={styles.secondColumn}>
                        <a
                            className={styles.eighthJob}
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image alt="" src={"/static/images/projects/ynot.png"} width={1000} height={1000} />
                        </a>
                        <a
                            className={styles.ninethJob}
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <video
                                ref={videoRef}
                                muted
                                playsInline
                                loop
                                className={styles.video}
                                autoPlay
                            >
                                <source src={videoSrc[1]} type={videoType} />
                            </video>
                        </a>
                    </div>
                    {
                        isSafari() ? <></> : <a
                            className={styles.mobileNinethJob}
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <video
                                ref={videoRef}
                                muted
                                playsInline
                                loop
                                className={styles.video}
                                autoPlay
                            >
                                <source src={videoSrc[1]} type={videoType} />
                            </video>
                        </a>
                    }
                </div>
            </div>
        </div>
    );
}