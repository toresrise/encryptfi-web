import { Outlet } from 'react-router-dom'
import { Seo } from '~/components/main/Seo'
import { Header } from '~/components/main/Header'
import { Footer } from '~/components/main/Footer'
import styles from './App.module.scss'

export const App = () => (
    <>
        <Seo />
        <div className={styles.app}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    </>
)
