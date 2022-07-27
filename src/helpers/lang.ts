import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enUs from '../assets/locales/en-US/lang.json'
import ptBr from '../assets/locales/pt-BR/lang.json'
import { LocalStorage } from '~/helpers/local-storage'
import { isString } from '~/helpers/data'
import { setHtmlAttr } from '~/helpers/dom'

export enum Lang {
    EN_US = 'en-US',
    PT_BR = 'pt-BR',
}

const LANG_KEY = import.meta.env.VITE_LANG_KEY
const DEFAULT_LANG = Lang.EN_US
const setLang = (lang: Lang) => LocalStorage.set<string>(LANG_KEY, lang)

const validLang = (propName: string): Lang | null => {
    if (!isString(propName)) propName = ''

    let lang: Lang | null = null
    const hasPropNameLength = propName.length >= 2
    const initialPropName = propName.slice(0, 2)

    if (!hasPropNameLength) return lang
    if (Lang.EN_US.startsWith(initialPropName)) lang = Lang.EN_US
    if (Lang.PT_BR.startsWith(initialPropName)) lang = Lang.PT_BR

    return lang
}

export const browserLang = (): Lang => {
    const lang = validLang(LocalStorage.get<string>(LANG_KEY)) || validLang(navigator.language) || DEFAULT_LANG

    setLang(lang)

    return lang
}

export const setupLang = () => {
    const lang = browserLang()

    setHtmlAttr('lang', lang)

    i18n.use(initReactI18next).init({
        resources: {
            [Lang.EN_US]: { translation: enUs },
            [Lang.PT_BR]: { translation: ptBr },
        },
        lng: lang,
        fallbackLng: Lang.EN_US,
        interpolation: {
            escapeValue: false,
        },
    })
}
