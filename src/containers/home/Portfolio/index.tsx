"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Portfolio = (): React.JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.absoluteContainer}>
                <div className={styles.firstRow}>
                    <div className={styles.firstColumn}>
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
                        {/* <a
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.firstJob}
                        >
                            <Image alt="" src={"/static/images/projects/svrvrv.png"} width={500} height={500}/>
                        </a> */}
                    </div>
                    <a
                        href="https://www.behance.net/gallery/224823973/Ilustracao-autoral-01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondColumn}
                    >
                        <div className={styles.secondJob}>
                            <Image alt="" src={"/static/images/projects/autoral-1.png"} width={500} height={500}/>
                        </div>
                    </a>
                </div>
                <div className={styles.secondRow}>
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
                    {/* <div className={styles.thirdJob}>
                        <Image alt="" src={"/static/images/projects/03 ❤️.png"} width={500} height={500}/>
                    </div>
                    <div className={styles.fourthJob}>
                        <Image alt="" src={"/static/images/projects/04 ❤️.png"} width={500} height={500}/>
                    </div>
                    <div className={styles.fifthJob}>
                        <Image alt="" src={"/static/images/projects/05 ❤️.png"} width={500} height={500}/>
                    </div> */}
                </div>
                <div className={styles.thirdRow}>
                    <div className={styles.firstColumn}>
                        <a
                            className={styles.sixthJob}
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
                                <source src={"/static/videos/projects/google.webm"} type={"video/webm"} />
                            </video>
                        </a>
                        <a
                            className={styles.eighthJob}
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image alt="" src={"/static/images/projects/svrvrv.png"} width={500} height={500}/>
                        </a>
                    </div>
                    <div className={styles.secondColumn}>
                        <a
                            className={styles.eighthJob}
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image alt="" src={"/static/images/projects/ynot.png"} width={500} height={500}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}