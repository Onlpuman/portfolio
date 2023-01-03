import Head from 'next/head';
import { FC, ReactNode, useContext } from 'react';
import clsx from 'clsx';

import { dm_sans } from '../../styles/fonts';
import { AppContext } from '../../context/AppContext';

import { Navbar } from './Navbar/Navbar';
import Footer from './Footer/Footer';
import styles from './Layout.module.scss';

type layoutProps = {
	children: ReactNode,
}

const Layout:FC<layoutProps> = ({ children }) => {
	const { isDarkTheme } = useContext(AppContext);
	
	return (
		<>
			<Head>
				<title>Portfolio</title>
			</Head>
			<div className={clsx({
				[dm_sans.className]: true,
				[styles.app__wrapper]: true,
				[styles.dark]: isDarkTheme,
			})}>
				<Navbar />
				<main className={styles.main}>{children}</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;