import { useTranslation } from 'react-i18next'
import styles from './Header.module.scss'

export const Header = () => {
    const { t } = useTranslation()

    return (
        <header className={styles.header}>
            <img className={styles.logo} src='/src/assets/images/logo.png' alt={t('app.logo')} />
            <h1 className={styles.title}>{t('app.name')}</h1>
            <div className={styles.actions}>TODO ACTIONS</div>
        </header>
    )
}
