import { appWithTranslation } from 'next-i18next'
import { FC } from 'react'

interface AppProps {
	Component: FC
}
const MyApp = ({ Component }: AppProps) => <Component />

export default appWithTranslation(MyApp as FC)
