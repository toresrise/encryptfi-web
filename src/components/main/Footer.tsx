import { Break } from '~/components/break/Break'
import styles from './Footer.module.scss'
import { MadeBy } from '~/components/main/MadeBy'
import { FooterClickable, FooterClickableLayout } from '~/components/main/FooterClickable'
import { Select } from '~/components/form/Select'
import React, { useMemo, useState } from 'react'
import { Lang, LangHelper } from '~/helpers/lang'
import { LangService } from '~/services/lang'
import { EMAIL } from '~/helpers/constants'

const langHelper = new LangHelper()
const langService = new LangService()

export const Footer: React.FC = () => {
    const [lang, setLang] = useState(langHelper.get())
    const langs = useMemo(() => langService.get(), [])

    const changeLang = (lang: Lang) => {
        setLang(lang)
        langHelper.change(lang)
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <form className={styles.form}>
                    <Select label={'footer.lang'} name={'lang'} value={lang} set={changeLang} options={langs} />
                </form>
                <FooterClickable
                    text={'footer.about'}
                    onClick={() => alert('TODO ABOUT')}
                    className={styles.clickable}
                />
                <FooterClickable
                    text={'footer.contact'}
                    layout={FooterClickableLayout.ANCHOR}
                    href={`mailto:${EMAIL}`}
                    className={styles.clickable}
                />
                <Break />
                <MadeBy />
            </div>
        </footer>
    )
}
