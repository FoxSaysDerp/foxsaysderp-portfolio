import { useTranslation } from 'next-i18next'
import { Navbar } from './Navbar'
import s from './Header.module.scss'

export const Header = () => {
	const { t } = useTranslation('common')

	return (
		<header className={s.header}>
			foxsaysderp
			<Navbar />
			<button type="button">{t('header.orderService')}</button>
		</header>
	)
}
