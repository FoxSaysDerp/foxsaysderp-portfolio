import { IHighlighter } from '@/common/context/ThemeContext/types.theme'
import s from './Highlighter.module.scss'

export const Highlighter = (props: IHighlighter) => {
	const { width, left } = props
	return <span className={s.highlighter} style={{ width, left }} />
}
