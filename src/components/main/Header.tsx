import { useTranslation } from 'react-i18next'
import styles from './Header.module.scss'
import { Theme, ThemeHelper } from '~/helpers/theme'
import { Button, ButtonLayout } from '~/components/actions/Button'
import { MdOutlineNightlight, MdOutlineWbSunny } from 'react-icons/all'
import { ReactNode, useCallback, useState } from 'react'
import logo from '~/assets/images/logo.png'

const themeHelper = new ThemeHelper()

export const Header = () => {
    const { t } = useTranslation()

    const nextIconTheme = useCallback(
        () => (themeHelper.get() === Theme.DARK ? <MdOutlineWbSunny /> : <MdOutlineNightlight />),
        [],
    )

    const [iconTheme, setIconTheme] = useState<ReactNode>(nextIconTheme())

    const toggleTheme = useCallback(() => {
        themeHelper.toggle()
        setIconTheme(nextIconTheme())
    }, [nextIconTheme])

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt={t('app.logo')} />
            <h1 className={styles.title}>{t('app.name')}</h1>
            <Button onClick={() => alert('TODO DONATE')} text={'header.donate'} />
            <Button onClick={toggleTheme} icon={iconTheme} text={'header.changeTheme'} layout={ButtonLayout.OUTLINE} />
        </header>
    )
}
