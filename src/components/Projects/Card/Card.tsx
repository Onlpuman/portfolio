import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { IProjects } from '../../../../models';

import styles from './Card.module.scss';

type cardProps = {
	project: IProjects,
}

const Card:FC<cardProps> = ({ project }) => {
	const { name, description, path, img, blurImg } = project;
	const styleImgCover = name + '-img-cover';
	
	return (
		<li className={styles.card}>
			<Link href={path}>
				<div className={styles[styleImgCover]}>
					<Image
						className={styles.img}
						src={img[0]}
						placeholder="blur"
						quality={85}
						width={324}
						height={160}
						blurDataURL={blurImg}
						alt="Card img"
					/>
				</div>
				<h3 className={styles.title}>{description}</h3>
			</Link>
		</li>
	);
};

export default Card;