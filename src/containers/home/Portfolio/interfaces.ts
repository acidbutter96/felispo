import { Transition } from "motion";

export interface RevealAnimation {
    initial: { clipPath: string };
    animate: { clipPath: string };
    transition: Transition;
}