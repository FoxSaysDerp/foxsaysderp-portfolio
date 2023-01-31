import { appWithTranslation } from 'next-i18next'
import { FC } from 'react'
import type { AppProps } from 'next/app'
import '@/common/global.css'

interface AppPropsE extends AppProps {
	Component: FC
}
const MyApp = ({ Component, pageProps }: AppPropsE) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Component {...pageProps} />
)

export default appWithTranslation(MyApp as FC)
