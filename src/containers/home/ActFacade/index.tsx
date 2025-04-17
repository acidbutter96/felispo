"use client"
import React from 'react';
import styles from './styles.module.scss';

export const ActFacade = (): React.JSX.Element => {
    return (
        <div className={styles.actFacadeContainer}>
            <div className={styles.textContainer}>
                <span>Ato</span> De Imaginação
            </div>
            <div className={styles.cloudContainer}>
                {/* here's goes the cloud image */}
                cloud
            </div>
        </div>
    )
}