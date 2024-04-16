import { Html, Head, Main, NextScript } from 'next/document'
import { Footer } from '@/components/incs/footer'
import { Header } from '@/components/incs/header'
import React from 'react'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Header />
                <Main />
                <NextScript />
                <Footer />
            </body>
        </Html>
    )
}