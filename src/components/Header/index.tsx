"use client"
import React from 'react';
import {HeaderProps} from './types';
import styles from './style.module.scss';

export const Header = (props: HeaderProps): React.JSX.Element => {
    return (
        <div className={styles.header}>
            Header
        </div>
    )
}