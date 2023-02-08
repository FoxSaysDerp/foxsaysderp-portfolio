import { useRouter } from 'next/router'
import { Page } from '@/types/page'
import { useEffect, useState } from 'react'
import { PAGES } from '@/common/constants/pages'

export const useUI = () => {
	const [currentPage, setCurrentPage] = useState<Page | undefined>({
		name: '',
		href: '',
		key: '',
	})
	const { asPath } = useRouter()

	useEffect(() => {
		if (asPath) {
			setCurrentPage(PAGES.find((page) => page.href === asPath))
		}
	}, [setCurrentPage, asPath])

	return {
		currentPage,
	}
}
