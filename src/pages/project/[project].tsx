import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import { AppContext } from '../../context/AppContext';

import styles from './Project.module.scss';

import type { NextPage } from 'next';

const Project:NextPage = () => {
	const { projects, isDarkTheme } = useContext(AppContext);
	const router = useRouter();
	const projectName = router.query?.project;
	
	if (!projects) return null;
	
	const currentPageID = projects.findIndex((el) => el.name === projectName);
	const { name, title, skills, img, url, blurImg } = projects[currentPageID];
	
	const styleImgCover = name + '-img-cover';
	
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.details}>
					
					<h1 className={styles.title}>{title}</h1>
					{
						img.map((el) => (
							<div
								className={
									clsx({
										[styles.cover]: true,
										[styles[styleImgCover]]: isDarkTheme,
									})
								}
								key={el}
							>
								<Image
									className={styles.img}
									src={el}
									alt="Project image"
									placeholder="blur"
									quality={85}
									width={776}
									height={388}
									sizes="(max-width: 828px) 80vw, 50vw"
									blurDataURL={blurImg}
								/>
							</div>
						))
					}
					<div className={styles.desc}>
						<p>Skills: {skills}</p>
					</div>
					
					<Link href={url} className={styles.btn}>
						<Image src="/icons/gitHub_black.svg" alt="Github icon" width={24} height={24}/>
						GitHub Pages
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Project;