import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { IProjects } from '../../../../models';

import styles from './Card.module.scss';

type cardProps = {
	project: IProjects,
}

const Card: FC<cardProps> = ({ project }) => {
	const { name, description, path, img } = project || {};
	const styleWrapper = name + '__wrapper';
	
	return (
		<li className={styles.card}>
			<Link href={path}>
				<div className={styles[styleWrapper]}>
					<Image className={styles.img} src={img[0]} priority={true} alt="Card img" width={324} height={232}/>
				</div>
				<h3 className={styles.title}>{description}</h3>
			</Link>
		</li>
	);
};

export default Card;