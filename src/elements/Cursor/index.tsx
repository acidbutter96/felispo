"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.scss";


export const Cursor = () => {
    useEffect(() => {
        const $bigBall = document.querySelector(".cursor__ball--big");
        const $smallBall = document.querySelector(".cursor__ball--small");
        const $hoverables = document.querySelectorAll(".hoverable");

        console.log($bigBall, $smallBall, $hoverables);

        // Move the cursor
        const onMouseMove = (e: MouseEvent) => {
            gsap.to($bigBall, {
                duration: 0.4,
                x: e.pageX - 15,
                y: e.pageY - 15,
            });
            gsap.to($smallBall, {
                duration: 0.1,
                x: e.pageX - 5,
                y: e.pageY - 7,
            });
        };

        // Hover an element
        const onMouseHover = () => {
            gsap.to($bigBall, {
                duration: 0.3,
                scale: 4,
            });
        };

        const onMouseHoverOut = () => {
            gsap.to($bigBall, {
                duration: 0.3,
                scale: 1,
            });
        };

        // Add event listeners
        document.body.addEventListener("mousemove", onMouseMove);
        $hoverables.forEach((hoverable) => {
            hoverable.addEventListener("mouseenter", onMouseHover);
            hoverable.addEventListener("mouseleave", onMouseHoverOut);
        });

        // Cleanup event listeners on unmount
        return () => {
            document.body.removeEventListener("mousemove", onMouseMove);
            $hoverables.forEach((hoverable) => {
                hoverable.removeEventListener("mouseenter", onMouseHover);
                hoverable.removeEventListener("mouseleave", onMouseHoverOut);
            });
        };
    }, []);

    return (
        <div className={styles.cursor}>
            <div className="cursor__ball cursor__ball--big">
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
                </svg>
            </div>
            <div className="cursor__ball cursor__ball--small">
                <svg height="10" width="10">
                    <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
                </svg>
            </div>
        </div>
    );
};