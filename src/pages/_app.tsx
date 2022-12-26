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
	const cookie = ctx?.req?.headers?.cookie?.match(/isDarkMode=(\w+);?/)?.[1];
	const isDarkMode =
		cookie === undefined
			? false
			: JSON.parse(cookie);
	
	const pathFromServer = ctx.pathname;
	
	return {
		pageProps: {
			pathFromServer,
			isDarkMode,
		},
	};
};

export default MyApp;