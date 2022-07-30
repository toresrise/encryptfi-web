export interface Setup<T> {
    readonly DEFAULT_VALUE: T
    init: () => void
    get: () => T
    set: (value: T) => void
}
