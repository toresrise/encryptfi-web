import { Outlet } from 'react-router-dom'
import { Seo } from '~/components/main/Seo'

export const App = () => (
    <>
        <Seo />
        <main>
            <Outlet />
        </main>
    </>
)
