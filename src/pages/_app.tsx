import '@/styles/style.css'
import React from 'react'

export default function App({
    Component,
    pageProps: { ...pageProps },
}: any) {
    return (
        <Component {...pageProps} />
    )
}