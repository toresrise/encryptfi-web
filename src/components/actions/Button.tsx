import React, { MouseEventHandler, ReactNode, useMemo } from 'react'
import { ButtonType } from '~/enums/ButtonType'
import styles from './Button.module.scss'
import { useTranslation } from 'react-i18next'

export enum ButtonLayout {
    PRIMARY = 'primary',
    OUTLINE = 'outline',
}

interface ButtonProps {
    text: string
    onClick: MouseEventHandler<HTMLButtonElement>
    icon?: ReactNode
    type?: ButtonType
    layout?: ButtonLayout
}

export const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    icon,
    type = ButtonType.BUTTON,
    layout = ButtonLayout.PRIMARY,
}) => {
    const { t } = useTranslation()
    const hasIcon = useMemo(() => !!icon, [icon])

    const layoutClassName = useMemo(() => {
        if (layout === ButtonLayout.PRIMARY) return styles.primary
        if (layout === ButtonLayout.OUTLINE) return styles.outline
    }, [layout])

    return (
        <button
            aria-label={hasIcon ? t(text) : undefined}
            className={`${styles.button} ${layoutClassName} ${hasIcon ? styles.fixSize : ''}`}
            type={type}
            onClick={onClick}
        >
            {hasIcon ? icon : t(text)}
        </button>
    )
}
