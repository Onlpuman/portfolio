import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import clsx from 'clsx';
import Link from 'next/link';

import { navLinks } from '../../../../../public/data/componentsData';

import styles from './NavLinks.module.scss';

const NavLinks:FC = () => {
	const [activeLinkId, setActiveLinkId] = useState<number | null>(null);
	const router = useRouter();
	const pagePath = router.pathname;
	
	useIsomorphicLayoutEffect(() => {
		const currentPageID = navLinks.findIndex((el) => el.path === pagePath);
		setActiveLinkId(currentPageID + 1);
	},[pagePath]);
	
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
