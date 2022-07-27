import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { setupLang } from '~/helpers/lang'

setupLang()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path='/' element={'TODO MAIN'} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
