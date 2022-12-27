import Image from 'next/image';
import { GetServerSideProps } from 'next';

import { IProjects } from '../../../models';

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
	if (!project) return null;
	const { title, skills, img } = project;
	
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.details}>
					
					<h1 className={styles.title}>{title}</h1>
					
					{img.map(el => (
						<div className={styles.cover} key={el}>
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
				</div>
			</div>
		</section>
	);
};

export default Project;