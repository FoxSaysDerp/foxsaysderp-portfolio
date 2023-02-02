export interface IHighlighter {
   left: number;
   width: number;
}

export type ThemeType = 'light' | 'dark'

export interface IThemeContext {
   highlighterState: IHighlighter
   changeHighlighterState: (props: IHighlighter) => void;
   theme: ThemeType
   changeTheme: (theme: ThemeType) => void;

}

