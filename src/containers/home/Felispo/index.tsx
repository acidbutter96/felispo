"user client"
import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';
import styles from './styles.module.scss';


export const Felispo = (): React.JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.videoContainer}>
                <video
                    width={500}
                    height={500}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.video}
                >
                    <source src="/static/videos/felispo.webm" type="video/webm" />
                </video>
            </div>
            {/* <div className={styles.cavalinhoContainer}>
                <Image
                    src="/static/images/cavalinho.gif" // Path to cavalinho.gif
                    alt="Cavalinho Animation"
                    width={300} // Adjust width as needed
                    height={300} // Adjust height as needed
                    className={styles.cavalinhoImage} // Optional: Add a class for styling
                />
            </div> */}
        </div>
    )
}
