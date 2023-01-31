import { Layout } from '@/common/components/Layout'
import { Locale } from '@/types/locale'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Projects() {
	return <Layout>Projects</Layout>
}

export async function getStaticProps({ locale }: { locale: Locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	}
}
