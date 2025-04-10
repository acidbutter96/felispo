"use client"
import React from 'react';
import { HeaderProps } from './types';
import styles from './style.module.scss';

export const Header = (props: HeaderProps): React.JSX.Element => {
    return (
        <header className={styles.headerContainer}>
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
        </header>
    )
}