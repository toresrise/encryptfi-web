import { isString } from '~/helpers/data'

let htmlElement: HTMLHtmlElement | null = null
let rootElement: HTMLElement | null = null

const getHtmlElement = (): HTMLHtmlElement => {
    if (!htmlElement) htmlElement = document.querySelector('html') as HTMLHtmlElement

    return htmlElement
}

export const setHtmlAttr = (key: string, value: any) =>
    getHtmlElement().setAttribute(key, isString(value) ? value : JSON.stringify(value))

export const getRootElement = (): HTMLElement => {
    if (!rootElement) rootElement = document.querySelector('#root') as HTMLElement

    return rootElement
}
