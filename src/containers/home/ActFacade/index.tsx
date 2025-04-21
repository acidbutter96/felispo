"use client"
import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

export const ActFacade = (): React.JSX.Element => {
    return (
        <div className={styles.actFacadeContainer}>
            <div className={styles.actFacade}>
                <div className={styles.textContainer}>
                    <span>Ato&nbsp;</span>De Imaginação
                </div>
                <div className={styles.cloudContainer}>
                    <Image alt='' src='/static/images/nuvem.png' width={500} height={500} className={styles.cloud} />
                </div>
            </div>
        </div>
    )
}