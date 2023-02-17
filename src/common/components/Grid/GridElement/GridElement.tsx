import { CSSProperties, forwardRef, PropsWithChildren } from 'react'
import classNames from 'classnames'
import { useUI } from '@/common/hooks/useUI'
import { GridItem } from './GridElement.types'
import s from './GridElement.module.scss'

interface Props extends GridItem {
	style?: CSSProperties
	className?: string
}

export const GridElement = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
	(props, ref) => {
		const {
			style,
			className,
			name,
			key,
			page,
			children,
			fullWidth = false,
		} = props

		const { currentPage } = useUI()
		return (
			<div
				className={classNames(className, s.gridElement, {
					[s.padding]: !fullWidth,
					[s.shadowed]: currentPage !== page,
				})}
				style={{ ...style }}
				key={key}
				ref={ref}
			>
				<span>
					{name} - {page?.name ? null : page?.name}
				</span>
				<span>{children}</span>
			</div>
		)
	}
)
