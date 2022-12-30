import Link from 'next/link';
import { FC, useContext, useState } from 'react';
import clsx from 'clsx';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

import { navLinks} from '../../../../../public/data/componentsData';
import { ThemeContext } from '../../../../context/ThemeContext';

import styles from './NavLinks.module.scss';

const NavLinks:FC = () => {
	const { pathFromServer } = useContext(ThemeContext);
	const [activeLinkId, setActiveLinkId] = useState<number | null>(null);
	
	useIsomorphicLayoutEffect(() => {
		const currentPageID = navLinks.findIndex((el) => el.path === pathFromServer);
		setActiveLinkId(currentPageID + 1);
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