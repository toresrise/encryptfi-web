import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './FooterClickable.module.scss'

export enum FooterClickableLayout {
    BUTTON = 'button',
    ANCHOR = 'anchor',
}

interface Props {
    text: string
    layout?: FooterClickableLayout
    onClick?: () => void
    href?: string
}

export const FooterClickable: React.FC<Props> = ({ text, layout = FooterClickableLayout.BUTTON, ...props }) => {
    const { t } = useTranslation()

    return (
        <>
            {layout === FooterClickableLayout.BUTTON && (
                <button type='button' {...props} className={styles.clickable}>
                    {t(text)}
                </button>
            )}
            {layout === FooterClickableLayout.ANCHOR && (
                <a rel='noreferrer' target='_self' {...props} className={styles.clickable}>
                    {t(text)}
                </a>
            )}
        </>
    )
}
