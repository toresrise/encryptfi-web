import { useTranslation } from 'react-i18next'
import React from 'react'
import styles from './Select.module.scss'

interface Option {
    value: string
    text: string
}

export type Options = Option[]

interface Props {
    label: string
    name: string
    value: string
    set: (newValue: any) => void
    options: Options
}

export const Select: React.FC<Props> = ({ label, name, value, set, options }) => {
    const { t } = useTranslation()

    return (
        <select
            className={styles.select}
            aria-label={t(label)}
            name={name}
            value={value}
            onChange={(event) => set(event.target.value)}
        >
            {options.map((option, index) => (
                <option className={styles.option} key={index} value={option.value}>
                    {t(option.text)}
                </option>
            ))}
        </select>
    )
}
