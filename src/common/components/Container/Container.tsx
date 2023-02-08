import { ReactNode } from 'react'
import s from './Container.module.scss'

interface Props {
	children: ReactNode
}
export const Container = ({ children }: Props) => (
	<div className={s.container}>{children}</div>
)
