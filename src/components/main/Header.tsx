import { useTranslation } from 'react-i18next'
import styles from './Header.module.scss'
import { ThemeHelper } from '~/helpers/theme'

const themeHelper = new ThemeHelper()

export const Header = () => {
    const { t } = useTranslation()

    return (
        <header className={styles.header}>
            <img className={styles.logo} src='/src/assets/images/logo.png' alt={t('app.logo')} />
            <h1 className={styles.title}>{t('app.name')}</h1>
            <div className={styles.actions}>
                <button onClick={themeHelper.toggle.bind(themeHelper)}>TODO CHANGE THEME</button>
            </div>
        </header>
    )
}
