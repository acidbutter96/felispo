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
                        <div className={styles.firstJob}>
                            <Image alt="" src={"/static/images/projects/01 ❤️.png"} width={500} height={500}/>
                        </div>
                    </div>
                    <div className={styles.secondColumn}>
                        <div className={styles.secondJob}>
                            <Image alt="" src={"/static/images/projects/02 💚.png"} width={500} height={500}/>
                        </div>
                    </div>
                </div>
                <div className={styles.secondRow}>
                    <div className={styles.thirdJob}>
                        <Image alt="" src={"/static/images/projects/03 ❤️.png"} width={500} height={500}/>
                    </div>
                    <div className={styles.fourthJob}>
                        <Image alt="" src={"/static/images/projects/04 ❤️.png"} width={500} height={500}/>
                    </div>
                    <div className={styles.fifthJob}>
                        <Image alt="" src={"/static/images/projects/05 ❤️.png"} width={500} height={500}/>
                    </div>
                </div>
                <div className={styles.thirdRow}>
                    <div className={styles.firstColumn}>
                        <div className={styles.sixthJob}>
                            job 6
                        </div>
                        <div className={styles.eighthJob}>
                            job 8
                        </div>
                    </div>
                    <div className={styles.secondColumn}>
                        <div className={styles.seventhJob}>
                            job 7
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}