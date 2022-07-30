import { Setup } from '~/types/Setup'
import { LocalStorage } from '~/helpers/local-storage'
import { setHtmlAttr } from '~/helpers/dom'

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

export class ThemeHelper implements Setup<Theme> {
    readonly DEFAULT_VALUE = Theme.DARK
    private readonly THEME_KEY = import.meta.env.VITE_THEME_KEY

    init() {
        this.set(this.get())
    }

    get(): Theme {
        return (
            LocalStorage.get<Theme | null>(this.THEME_KEY) ||
            (window.matchMedia?.('(prefers-color-scheme: light)')?.matches && Theme.LIGHT) ||
            Theme.DARK
        )
    }

    set(theme: Theme) {
        LocalStorage.set<Theme>(this.THEME_KEY, theme)
        setHtmlAttr('data-theme', theme)
    }

    toggle(): void {
        this.set(this.get() === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }
}
