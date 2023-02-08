import { Layout } from '@/common/components/Layout'
import { Locale } from '@/types/locale'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Container } from '@/common/components/Container'
import { Grid, GridElement } from '@/common/components/Grid'

export default function Home() {
	const layout = [
		{ i: 'a', x: 0, y: 0, w: 1, h: 2, static: false },
		{ i: 'b', x: 1, y: 0, w: 2, h: 1 },
		{ i: 'c', x: 4, y: 0, w: 1, h: 2 },
	]

	return (
		<Layout>
			<Container>
				<Grid layout={layout}>
					<GridElement key="a" name="a">
						a
					</GridElement>
					<GridElement key="b" name="b">
						b
					</GridElement>
					<GridElement key="c" name="c">
						c
					</GridElement>
				</Grid>
			</Container>
		</Layout>
	)
}

export async function getStaticProps({ locale }: { locale: Locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	}
}
