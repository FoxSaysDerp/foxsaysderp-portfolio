import { useTranslation } from 'next-i18next'

export const Navbar = () => {
	const { t } = useTranslation('common')
	return (
		<nav>
			<p>foxsaysderp</p>
			<p>{t('header.navbar.home')}</p>
			<p>{t('header.navbar.about')}</p>
			<p>{t('header.navbar.projects')}</p>
			<p>{t('header.navbar.contacts')}</p>
		</nav>
	)
}
