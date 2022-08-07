import { useTranslation } from 'react-i18next'
import styles from './MadeBy.module.scss'

export const MadeBy = () => {
    const { t } = useTranslation()

    return (
        <div className={styles.madeBy}>
            <img className={styles.logo} src='/src/assets/images/toresrise.png' alt={t('toresrise.logo')} />
            <p className={styles.text}>
                {t('madeBy.text')}{' '}
                <a className={styles.link} href='https://github.com/toresrise' target={'_blank'} rel='noreferrer'>
                    {t('toresrise.name')}
                </a>
            </p>
        </div>
    )
}
