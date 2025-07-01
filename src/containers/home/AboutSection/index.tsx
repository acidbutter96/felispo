"use client";
import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';


export const AboutSection = (): React.JSX.Element => {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const speed = 0.25;
                const offset = window.scrollY * speed;
                parallaxRef.current.style.transform = `translateY(${offset}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                    <div ref={parallaxRef} className={styles.parallaxWrapper}>
                        <Image
                            alt='felispo'
                            src='/static/images/biopic.png'
                            width={1000}
                            height={1000}
                            className={styles.bio}
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}
