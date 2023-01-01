import { AppProps } from 'next/app';
import { NextPageContext } from 'next';

import { ThemeProvider } from '../context/ThemeContext';
import { IProjects } from '../../models';
import Layout from '../components/Layout/Layout';
import '../styles/reset.css';
import '../styles/global.scss';

type contextType = {
	ctx: NextPageContext;
}

type initialPropsType = {
	data: IProjects[],
	isDarkMode: boolean,
}

const MyApp = ({ Component, pageProps }: AppProps) => {
	const { data, isDarkMode }: initialPropsType = pageProps;
	
	return (
		<ThemeProvider data={data} isDarkMode={isDarkMode}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
};

MyApp.getInitialProps = async ({ ctx }: contextType) => {
	try {
		if (!ctx.req) return {
			pageProps: null,
		};
		
		const cookie = ctx?.req?.headers?.cookie?.match(/isDarkMode=(\w+);?/)?.[1];
		
		const host = ctx?.req?.headers.host;
		const url = `${host === 'localhost:3000' ? 'http' : 'https'}://${host}/api/projects`;
		const res = await fetch(url);
		const data: IProjects[] = await res.json();
		
		const isDarkMode =
			cookie === undefined || cookie === 'undefined'
				? false
				: JSON.parse(cookie);
		
		return {
			pageProps: {
				data,
				isDarkMode,
			},
		};
	} catch(error) {
		return {
			pageProps: { error },
		};
	}
};

export default MyApp;