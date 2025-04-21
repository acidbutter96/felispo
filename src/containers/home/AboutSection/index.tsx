"use client";
import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';


export const AboutSection = (): React.JSX.Element => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.about}>
                <div className={styles.textContainer}>
                Lorem ipsum
                dolor sit amet,
                consectetuer
                adipiscing elit,
                sed diam&nbsp;
                <span className={styles.specialFont}>nonummy</span>&nbsp;nibh
                Lorem ipsum
                dolor sit amet,
                consectetuer
                </div>
                <div className={styles.bioContainer}>
                    <Image
                        alt='cloud'
                        src='/static/images/bio.png'
                        width={400}
                        height={400}
                        className={styles.bio}
                    />
                </div>
            </div>
        </div>
    )
}
