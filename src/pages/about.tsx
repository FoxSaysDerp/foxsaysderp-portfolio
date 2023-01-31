import { Layout } from '@/common/components/Layout'
import { Locale } from '@/types/locale'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function About() {
	return <Layout>About</Layout>
}

export async function getStaticProps({ locale }: { locale: Locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	}
}
