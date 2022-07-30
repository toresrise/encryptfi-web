import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LangHelper } from '~/helpers/lang'
import { Home } from '~/pages/Home'
import { ThemeHelper } from '~/helpers/theme'

const themeHelper = new ThemeHelper()
const langHelper = new LangHelper()

themeHelper.init()
langHelper.init()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
