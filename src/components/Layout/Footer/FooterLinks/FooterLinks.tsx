import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { footerLinks } from '../../../../../data/data';

import styles from './FooterLinks.module.scss';

const FooterLinks:FC = () => (
	<ul className={styles.social}>
		{footerLinks.map(({
			id,
			src,
			path,
		}) => (
			<li className={styles.item} key={id}>
				<Link href={path}>
					<Image src={src} alt="Links" width={38} height={38}/>
				</Link>
			</li>
		))}
	</ul>
);

export default FooterLinks;