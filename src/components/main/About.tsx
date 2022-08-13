import { Dialog } from '~/components/global/Dialog'
import { UseDialogProps } from '~/hooks/useDialog'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const About: React.FC<UseDialogProps> = ({ isOpen, setIsOpen }) => {
    const { t } = useTranslation()

    return (
        <Dialog isOpen={isOpen} setIsOpen={setIsOpen} title={'about.title'}>
            <p>{t('about.text')}</p>
        </Dialog>
    )
}
