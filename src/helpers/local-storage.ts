import { isString } from '~/helpers/data'

const capitalizeCase = (text: string) =>
    text
        .trim()
        .toUpperCase()
        .replace(/[^\w]+/g, '_')

const PREFIX = capitalizeCase(import.meta.env.VITE_LOCAL_STORAGE_PREFIX)

export abstract class LocalStorage {
    static propName(key: string): string {
        const initialPrefix = `${PREFIX}_`

        if (!key.startsWith(initialPrefix)) key = `${initialPrefix}${key}`

        return capitalizeCase(key)
    }

    static get<T = any>(key: string): T {
        const stringValue = localStorage.getItem(LocalStorage.propName(key)) || ''
        let value = null

        try {
            if (stringValue) value = JSON.parse(stringValue)
        } catch {
            value = stringValue
        }

        return value
    }

    static set<T = any>(key: string, value: T): void {
        let nextValue: string

        if (isString(value)) nextValue = `${value}`
        else nextValue = JSON.stringify(value)

        localStorage.setItem(LocalStorage.propName(key), nextValue)
    }
}
