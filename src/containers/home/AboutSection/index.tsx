"use client";
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
                    sed diam <span className={styles.specialFont}>nonummy</span> nibh
                    Lorem ipsum
                    dolor sit amet,
                    consectetuer
                </div>
                <div className={styles.bioContainer}>
                    <Image
                        alt='felispo'
                        src='/static/images/biopic.png'
                        width={700}
                        height={700}
                        className={styles.bio}
                    />
                </div>
            </div>
        </div>
    )
}
