import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enUs from '../assets/locales/en-US/lang.json'
import ptBr from '../assets/locales/pt-BR/lang.json'
import { LocalStorage } from '~/helpers/local-storage'
import { isString } from '~/helpers/data'
import { setHtmlAttr } from '~/helpers/dom'
import { Setup } from '~/types/Setup'

export enum Lang {
    EN_US = 'en-US',
    PT_BR = 'pt-BR',
}

export class LangHelper implements Setup {
    private readonly LANG_KEY = import.meta.env.VITE_LANG_KEY
    private readonly DEFAULT_LANG = Lang.EN_US

    setup() {
        const lang = this.getLang()

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

    private getLang(): Lang {
        const lang =
            this.getValidLangByPropName(LocalStorage.get<string>(this.LANG_KEY)) ||
            this.getValidLangByPropName(navigator.language) ||
            this.DEFAULT_LANG

        this.setLang(lang)

        return lang
    }

    private setLang(lang: Lang) {
        LocalStorage.set<string>(this.LANG_KEY, lang)
    }

    private getValidLangByPropName(propName: string): Lang | null {
        if (!isString(propName)) propName = ''

        let lang: Lang | null = null
        const hasValidPropNameLength = propName.length >= 2

        propName = propName.slice(0, 2)

        if (!hasValidPropNameLength) return lang
        if (this.langStartsWithPropName(propName, Lang.EN_US)) lang = Lang.EN_US
        if (this.langStartsWithPropName(propName, Lang.PT_BR)) lang = Lang.PT_BR

        return lang
    }

    private langStartsWithPropName(propName: string, lang: Lang): boolean {
        return lang.toLowerCase().startsWith(propName.toLowerCase())
    }
}
