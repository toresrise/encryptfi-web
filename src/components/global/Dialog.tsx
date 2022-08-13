import Modal from 'react-modal'
import React, { PropsWithChildren, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { UseDialogProps } from '~/hooks/useDialog'
import { getRootElement } from '~/helpers/dom'
import { uniqueId } from '~/helpers/unique-id'
import styles from './Dialog.module.scss'
import { MdClose } from 'react-icons/all'

interface Props extends UseDialogProps {
    title: string
}

export const Dialog: React.FC<PropsWithChildren<Props>> = ({ title, isOpen, setIsOpen, children }) => {
    const { t } = useTranslation()
    const rootElement = useMemo(() => getRootElement(), [])
    const id = useMemo(() => uniqueId(), [])
    const close = () => setIsOpen(false)

    return (
        <Modal
            appElement={rootElement}
            ariaHideApp={true}
            id={id}
            isOpen={isOpen}
            shouldFocusAfterRender={true}
            shouldReturnFocusAfterClose={true}
            role={'dialog'}
            overlayClassName={styles.overlay}
            className={styles.dialog}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            onRequestClose={() => close()}
        >
            <div className={styles.header}>
                <h2 className={styles.title}>{t(title)}</h2>
                <button className={styles.close} type={'button'} onClick={close} aria-label={t('dialog.close')}>
                    <MdClose aria-hidden={true} />
                </button>
            </div>
            {children}
        </Modal>
    )
}
