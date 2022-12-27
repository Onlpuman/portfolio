import Link from 'next/link';
import { FC, useContext, useLayoutEffect, useState } from 'react';
import clsx from 'clsx';

import { navLinks } from '../../../../../data/data';
import { ThemeContext } from '../../../../context/ThemeContext';
import { isServer } from '../../../../helpers/isServer';

import styles from './NavLinks.module.scss';

const NavLinks:FC = () => {
	const { pathFromServer } = useContext(ThemeContext);
	const [activeLinkId, setActiveLinkId] = useState<number | null>(null);
	
	useLayoutEffect(() => {
		if (!isServer()) {
			const currentPageID = navLinks.findIndex((el) => el.path === pathFromServer);
			setActiveLinkId(currentPageID + 1);
		}
	},[pathFromServer]);
	
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
								[styles.link__active]: id === activeLinkId,
							})
						}
						href={path}
						onClick={() => setActiveLinkId(id)}
					>
						{title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default NavLinks;