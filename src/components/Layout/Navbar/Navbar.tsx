import Link from 'next/link';
import { FC } from 'react';

import clsx from 'clsx';

import { poppins } from '../../../styles/fonts';

import styles from './Navbar.module.scss';
import ThemeButton from './ThemeButton/ThemeButton';
import NavLinks from './NavLinks/NavLinks';

export const Navbar:FC = () => (
	<nav className={clsx({
		[poppins.className]: true,
		[styles.nav]: true,
	})}>
		<div className={styles.container}>
			<div className={styles.nav__wrapper}>
				<Link className={styles.logo} href="/">
					<strong>Portfolio</strong>
				</Link>
				<ThemeButton/>
				<NavLinks/>
			</div>
		</div>
	</nav>
);