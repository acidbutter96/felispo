"user client"
import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';


export const Felispo = (): React.JSX.Element => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.cavalinhoContainer}>
                <Image
                    src="/static/images/cavalinho.gif" // Path to cavalinho.gif
                    alt="Cavalinho Animation"
                    width={300} // Adjust width as needed
                    height={300} // Adjust height as needed
                    className={styles.cavalinhoImage} // Optional: Add a class for styling
                />
            </div> */}
            <div className={styles.imageContainer}>
                <Image
                    src="/static/images/felispo.png"
                    alt="Felispo Logo"
                    width={500}
                    height={300}
                    className={styles.image}
                />
            </div>
            
        </div>
    )
}
