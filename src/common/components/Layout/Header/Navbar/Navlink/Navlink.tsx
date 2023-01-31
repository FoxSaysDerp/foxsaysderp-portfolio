import { ReactNode, RefObject } from 'react'
import Link from 'next/link'
import s from './Navlink.module.scss'

interface Props {
	children: ReactNode
	href: string
	active: boolean
	innerRef: RefObject<HTMLAnchorElement> | null
}

export const Navlink = (props: Props) => {
	const { href, children, active, innerRef } = props

	return (
		<Link
			href={href}
			className={`${s.navlink} ${active ? s.active : ''}`}
			ref={innerRef}
		>
			{children}
		</Link>
	)
}
