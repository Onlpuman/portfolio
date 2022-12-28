import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { GetServerSideProps } from 'next';
import clsx from 'clsx';

import { IProjects } from '../../../models';
import { ThemeContext } from '../../context/ThemeContext';

import styles from './project.module.scss';

import type { NextPage } from 'next';

type projectProps = {
	project: IProjects,
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
		const res = await fetch(`${process.env.API_HOST}/projects/`);
		const data = await res.json();
		
		const currentPath = ctx.params?.project;
		const currentProject = data.find((el: IProjects) => el.name === currentPath);
		
		return {
			props: { project: currentProject },
		};
	} catch (error) {
		return { notFound: true };
	}
};

const Project: NextPage<projectProps> = ({ project }) => {
	const { isDarkTheme } = useContext(ThemeContext);
	if (!project) return null;
	const { name, title, skills, img, url } = project;
	const styleImgCover = name + '-img-cover';
	
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.details}>
					
					<h1 className={styles.title}>{title}</h1>
					
					{img.map(el => (
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
								priority={true}
								quality={100}
								width={1920}
								height={956}
							/>
						</div>
					))}
					
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