"use client";
import React from 'react';
import styles from './styles.module.scss';


export const AboutSection = (): React.JSX.Element => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.about}>
                <div className={styles.textContainer}>
                    Lorem consectetur voluptate quis anim minim officia ea consequat. Duis pariatur et dolor sunt aute dolore sit ipsum qui consectetur deserunt nostrud. Commodo nostrud dolore cupidatat pariatur minim enim minim fugiat nostrud velit. Cillum ut qui enim deserunt eu deserunt nisi sit magna laboris. Consequat adipisicing mollit Lorem ex mollit minim ullamco voluptate ex cillum laborum qui tempor exercitation. Pariatur est adipisicing ullamco officia cupidatat consectetur aute cupidatat. Do tempor sit dolor voluptate dolore.

                    Deserunt proident non qui ullamco dolor anim sunt. Pariatur laborum aute laboris mollit duis magna non veniam. Voluptate dolore incididunt pariatur eu eiusmod consequat culpa do nostrud velit minim laborum consequat ad. Aute excepteur ex amet et deserunt nostrud sit pariatur consectetur ipsum consequat amet minim. Id elit consectetur reprehenderit ipsum aute aliqua ullamco proident. Qui anim cillum commodo aliquip nisi et sunt.
                </div>
                <div className={styles.cloudContainer}>
                    <p>
                        O projeto Ato de Imaginação é uma iniciativa que visa promover a criatividade e a expressão artística entre os jovens. Através de oficinas, workshops e eventos culturais, buscamos incentivar a imaginação e o desenvolvimento de habilidades artísticas.
                    </p>
                </div>
            </div>
        </div>
    )
}
