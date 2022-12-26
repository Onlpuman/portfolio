import Head from 'next/head';
import { FC, ReactNode, useContext } from 'react';
import clsx from 'clsx';

import { ThemeContext } from '../../context/ThemeContext';

import styles from './Layout.module.scss';

type layoutProps = {
	children: ReactNode,
}

const Layout:FC<layoutProps> = ({ children }) => {
	const { isDarkTheme } = useContext(ThemeContext);
	
	return (
		<>
			<Head>
				<title>Portfolio</title>
				<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
			</Head>
			<div className={clsx({
				[styles.app__wrapper]: true,
				[styles.dark]: isDarkTheme,
			})}>
				<main className={styles.main}>{children}</main>
			</div>
		</>
	);
};

export default Layout;