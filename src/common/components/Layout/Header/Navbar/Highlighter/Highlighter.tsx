import s from './Highlighter.module.scss'

interface Props {
	width: number
	left: number
}

export const Highlighter = (props: Props) => {
	const { width, left } = props
	return <span className={s.highlighter} style={{ width, left }} />
}
