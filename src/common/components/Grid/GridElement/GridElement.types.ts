import { ReactNode } from 'react'
import { Page } from '@/types'

export interface GridProperties {
	x: number
	y: number
	w: number
	h: number
	minW?: number
	maxW?: number
	minH?: number
	maxH?: number
	static?: boolean
	isDraggable?: boolean
	isBounded?: boolean
}
export interface GridItem {
	name: string
	key: string
	page?: Page
	properties?: GridProperties
	fullWidth?: boolean
	children: ReactNode
}
