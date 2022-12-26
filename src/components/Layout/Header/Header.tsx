import Link from 'next/link';
import { FC } from 'react';

import styles from './Header.module.scss';

const Header:FC = () => (
	<header className={styles.header}>
		<div className={styles.header__wrapper}>
			<h1 className={styles.title}>
				<strong>Hi, my name is <em>Max</em></strong><br/>{'I\'m a frontend developer'}
			</h1>
			<div className={styles.text}>
				<p>with passion for learning and creating.</p>
			</div>
			<Link href="https://github.com/Onlpuman" className={styles.btn}>Visit my github</Link>
		</div>
	</header>
);


export default Header;