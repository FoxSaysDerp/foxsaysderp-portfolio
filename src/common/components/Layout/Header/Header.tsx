import { useTranslation } from 'next-i18next'
import { Navbar } from '../Navbar'

export const Header = () => {
	const { t } = useTranslation('common')

	return (
		<div>
			foxsaysderp
			<Navbar />
			<button type="button">{t('header.orderService')}</button>
		</div>
	)
}
