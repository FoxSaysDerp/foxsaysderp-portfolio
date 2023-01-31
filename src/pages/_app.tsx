import { appWithTranslation } from 'next-i18next'
import { FC } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/common/context/ThemeContext'
import '@/common/global.css'

interface AppPropsE extends AppProps {
	Component: FC
}
const MyApp = ({ Component, pageProps }: AppPropsE) => (
	<ThemeProvider>
		{/* eslint-disable-next-line react/jsx-props-no-spreading */}
		<Component {...pageProps} />
	</ThemeProvider>
)

export default appWithTranslation(MyApp as FC)
