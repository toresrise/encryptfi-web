import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import React from 'react'

export const Seo: React.FC = () => {
    const { t } = useTranslation()

    return (
        <Helmet>
            <title>{t('app.title')}</title>
            <meta name='description' content={t('app.description')} />
            <meta name='keywords' content={t('app.keywords')} />
        </Helmet>
    )
}
