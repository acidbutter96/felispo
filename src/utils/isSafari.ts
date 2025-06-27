export const isSafari = () => {
    if (typeof window === "undefined") return false;
    return (
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/))
    );
}
