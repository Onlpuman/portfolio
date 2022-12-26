import Link from 'next/link';
import { FC } from 'react';
import clsx from 'clsx';

import { navLinks } from '../../layoutData/layoutData';

import styles from './NavLinks.module.scss';

const NavLinks:FC = () => {
	return (
		<ul className={styles.list}>
			{navLinks.map(({
				id,
				title,
				path,
			}) => (
				<li key={id}>
					<Link
						className={
							clsx({
								[styles.link]: true,
							})
						}
						href={path}
					>
						{title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default NavLinks;