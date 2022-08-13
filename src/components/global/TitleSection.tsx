import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './TitleSection.module.scss'

interface Props {
    title: string
}

export const TitleSection: React.FC<Props> = ({ title }) => {
    const { t } = useTranslation()

    return <h2 className={styles.title}>{t(title)}</h2>
}
