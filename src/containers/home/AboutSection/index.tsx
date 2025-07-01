"use client";
import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { motion } from "motion/react";


export const AboutSection = (): React.JSX.Element => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.about}>
                <div className={styles.textContainer}>
                    Lorem ipsum
                    dolor sit amet,
                    consectetuer
                    adipiscing elit,
                    sed diam <span className={styles.specialFont}>nonummy</span> nibh
                    Lorem ipsum
                    dolor sit amet,
                    consectetuer
                </div>
                <div className={styles.bioContainer}>
                    <motion.div
                        initial={{ clipPath: 'inset(0 0 0 100%)' }}
                        animate={{ clipPath: 'inset(0 0 0 0%)' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <Image
                            alt='felispo'
                            src='/static/images/biopic.png'
                            width={700}
                            height={700}
                            className={styles.bio}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
