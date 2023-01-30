import { Layout } from '@/common/components/Layout'
import { Locale } from '@/types/locale'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
	return <Layout>Hello world</Layout>
}

export async function getServerSideProps({ locale }: { locale: Locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	}
}
