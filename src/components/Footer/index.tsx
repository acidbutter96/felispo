"use app";
import React  from "react";
import styles from "./styles.module.scss";

export const Footer = (): React.JSX.Element => {
    const date = new Date();

    return (
        <div className={styles.container}>
            <footer>
                <div className={styles.footerContainer}>
                    <div className={styles.titleContainer}>
                        Tem um projeto em mente?
                    </div>
                    <div className={styles.textContainer}>
                        <div>
                            Vamos Criar
                        </div>
                        <div className={styles.styledText}>
                            coisas legais
                        </div>
                        <div>
                            juntos!
                        </div>
                    </div>
                    <div className={styles.emailContainer}>
                        <a href="mailto:hi@felispo.com">
                            hi@felispo.com
                        </a>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.copyright}>
                            DevButter &copy; {date.getFullYear()}
                        </div>
                        <div className={styles.location}>
                            {date.getHours()}:{date.getMinutes()} São Paulo 23ºC
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}