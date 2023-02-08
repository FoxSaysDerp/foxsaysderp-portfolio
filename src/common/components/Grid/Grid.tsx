import { ReactNode } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { GridProperties, GridItem } from './GridElement'

interface GridItemExtended extends GridProperties {
	i: GridItem['name']
}

interface Props {
	layout: GridItemExtended[]
	children: ReactNode
}

export const Grid = ({ layout, children }: Props) => {
	const ResponsiveGridLayout = WidthProvider(Responsive)

	return (
		<ResponsiveGridLayout
			className="layout"
			rowHeight={280}
			layouts={{ lg: layout, md: layout, sm: layout, xs: layout }}
			breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
			cols={{ lg: 6, md: 5, sm: 4, xs: 4, xxs: 4 }}
			isDraggable
		>
			{children}
		</ResponsiveGridLayout>
	)
}
