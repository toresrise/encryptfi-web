import React, { useMemo } from 'react'
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
    className?: string
}

export const FooterClickable: React.FC<Props> = ({ text, layout = FooterClickableLayout.BUTTON, ...props }) => {
    const { t } = useTranslation()
    const className = useMemo(() => `${styles.clickable} ${props.className ?? ''}`, [props.className])

    return (
        <>
            {layout === FooterClickableLayout.BUTTON && (
                <button type='button' {...props} className={className}>
                    {t(text)}
                </button>
            )}
            {layout === FooterClickableLayout.ANCHOR && (
                <a rel='noreferrer' target='_self' {...props} className={className}>
                    {t(text)}
                </a>
            )}
        </>
    )
}
