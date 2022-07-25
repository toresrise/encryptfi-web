let htmlElement: HTMLHtmlElement | null = null;

export const getHtmlElement = (): HTMLHtmlElement => {
    if (!htmlElement) htmlElement = document.querySelector('html') as HTMLHtmlElement;

    return htmlElement;
};
