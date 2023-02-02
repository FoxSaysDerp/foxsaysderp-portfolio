import { createContext, FC, ReactNode, useMemo, useState } from 'react'
import { IThemeContext, IHighlighter, ThemeType } from './types.theme'

export const ThemeContext = createContext<IThemeContext | null>(null)

interface Props {
	children: ReactNode
}

export const ThemeProvider: FC<Props> = ({ children }: Props) => {
	const [highlighterState, setHighlighterState] = useState<IHighlighter>({
		width: 0,
		left: 0,
	})
	const [theme, setTheme] = useState<ThemeType>('light')

	const changeHighlighterState = (state: IHighlighter) => {
		setHighlighterState(state)
	}

	const changeTheme = (themeItem: ThemeType) => {
		setTheme(themeItem)
	}

	const context = useMemo(
		() => ({ highlighterState, theme, changeHighlighterState, changeTheme }),
		[highlighterState, theme]
	)

	return (
		<ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
	)
}
