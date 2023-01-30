import { FC, ReactNode } from 'react'
import { Header } from './Header'

type Props = {
	children: ReactNode
}

export const Layout: FC<Props> = (props: Props) => {
	const { children } = props
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}
