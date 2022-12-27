import { AppProps } from 'next/app';
import { NextPageContext } from 'next';

import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/Layout/Layout';
import '../styles/reset.css';
import '../styles/global.scss';

type serverProps = {
	ctx: NextPageContext;
}

const MyApp = ({ Component, pageProps }: AppProps) => {
	const { pathFromServer, isDarkMode } = pageProps;
	
	return (
		<ThemeProvider isDarkMode={isDarkMode} pathFromServer={pathFromServer}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
};

MyApp.getInitialProps = async ({ ctx }: serverProps) => {
	try {
		const cookie = ctx?.req?.headers?.cookie?.match(/isDarkMode=(\w+);?/)?.[1];
		const pathFromServer = ctx.pathname;
		
		const isDarkMode =
			cookie === undefined
				? false
				: JSON.parse(cookie);
		
		return {
			pageProps: {
				pathFromServer,
				isDarkMode,
			},
		};
	} catch {
		return {
			pageProps: { null: null },
		};
	}
};

export default MyApp;