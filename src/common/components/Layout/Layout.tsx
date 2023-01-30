import { FC, ReactNode } from 'react'
import { Navbar } from '../Navbar'

type Props = {
	children: ReactNode
}

export const Layout: FC<Props> = (props: Props) => {
	const { children } = props
	return (
		<div>
			<Navbar />
			{children}
		</div>
	)
}
