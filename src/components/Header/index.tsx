"use client"
import React from 'react';
import styles from './styles.module.scss';

export const Header = (): React.JSX.Element => {
    return (
        <div className={styles.headerContainer}>
            <nav className={styles.navbarContainer}>
                <div className={styles.titleContainer}>
                    <h1>
                        FELISPO
                    </h1>
                </div>
                <div className={styles.menuContainer}>
                    <ul>
                        <li>
                            <a href="#home">SOBRE</a>
                        </li>
                        <li>
                            <a href="#about">PROJETOS</a>
                        </li>
                        <li>
                            <a href="#services">CURRICULO</a>
                        </li>
                        <li>
                            <a href="#contact">CONTATO</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}