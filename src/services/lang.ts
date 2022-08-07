import { Get } from '~/types/Methods'
import { Lang } from '~/helpers/lang'

interface LangItem {
    value: Lang
    text: string
}

type Langs = LangItem[]

export class LangService implements Get<Langs> {
    get(): Langs {
        return [
            {
                value: Lang.EN_US,
                text: 'enums.langs.enUs',
            },
            {
                value: Lang.PT_BR,
                text: 'enums.langs.ptBr',
            },
        ]
    }
}
