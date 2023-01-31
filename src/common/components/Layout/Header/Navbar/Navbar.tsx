import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import s from './Navbar.module.scss'
import { Navlink } from './Navlink'
import { Highlighter } from './Highlighter'

export const Navbar = () => {
	let localHighlighterWidth: string | null = null
	let localHighlighterLeft: string | null = null

	if (typeof window !== 'undefined') {
		localHighlighterWidth = localStorage.getItem('highlighterWidth')
		localHighlighterLeft = localStorage.getItem('highlighterLeft')
	}

	const [highlightWidth, setHighlightWidth] = useState<number>(
		localHighlighterWidth ? Number(localHighlighterWidth) : 0
	)
	const [highlighLeft, setHighlightLeft] = useState<number>(
		localHighlighterLeft ? Number(localHighlighterLeft) : 0
	)
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
			setHighlightWidth(linkRef.current.offsetWidth)
			localStorage.setItem(
				'highlighterWidth',
				linkRef.current.offsetWidth.toString()
			)

			setHighlightLeft(linkRef.current.offsetLeft)
			localStorage.setItem(
				'highlighterLeft',
				linkRef.current.offsetLeft.toString()
			)
		}
	}, [localHighlighterLeft, localHighlighterWidth])

	return (
		<nav className={s.navbar}>
			<Highlighter width={highlightWidth} left={highlighLeft} />
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
