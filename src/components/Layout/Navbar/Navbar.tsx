import Link from 'next/link';
import { FC } from 'react';

import styles from './Navbar.module.scss';
import ThemeButton from './ThemeButton/ThemeButton';
import NavLinks from './NavLinks/NavLinks';

export const Navbar:FC = () => (
	<nav className={styles.nav}>
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