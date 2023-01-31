import { useEffect, useRef, useContext } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { IThemeContext, ThemeContext } from '@/common/context/ThemeContext'
import { Navlink } from './Navlink'
import { Highlighter } from './Highlighter'
import s from './Navbar.module.scss'

export const Navbar = () => {
	const { highlighterState, changeHighlighterState } = useContext(
		ThemeContext
	) as IThemeContext

	const { t } = useTranslation('common')

	const { asPath } = useRouter()

	const NAV_LINKS = [
		{ name: 'header.navbar.home', href: '/' },
		{ name: 'header.navbar.about', href: '/about' },
		{ name: 'header.navbar.projects', href: '/projects' },
		{ name: 'header.navbar.contact', href: '/contact' },
	]

	const linkRef = useRef<HTMLAnchorElement>(null)

	useEffect(() => {
		if (linkRef.current) {
			const { offsetWidth, offsetLeft } = linkRef.current
			changeHighlighterState({ width: offsetWidth, left: offsetLeft })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<nav className={s.navbar}>
			<Highlighter
				width={highlighterState.width}
				left={highlighterState.left}
			/>
			{NAV_LINKS.map((navLink) => (
				<Navlink
					href={navLink.href}
					key={navLink.name}
					active={asPath === navLink.href}
					innerRef={asPath === navLink.href ? linkRef : null}
				>
					{t(navLink.name)}
				</Navlink>
			))}
		</nav>
	)
}
