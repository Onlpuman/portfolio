import { GetServerSideProps, NextPage } from 'next';

import Card from '../components/Projects/Card/Card';
import { IProjects } from '../../models';
import Header from '../components/Header/Header';

import styles from './Projects.module.scss';

type projectProps = {
	projects: [IProjects],
}

const Projects: NextPage<projectProps> = ({ projects }) => {
	if (!projects) return null;
	
	return (
		<>
			<Header />
			<section className={styles.section}>
				<div className={styles.container}>
					<h2 className={styles.title}>Projects</h2>
					<ul className={styles.projects}>
						{projects && projects.map(project => (
							<Card key={project.id} project={project}/>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
		const { req } = ctx;
		const url = `${req?.headers.host === 'localhost:3000' ? 'http' : 'https'}://${req?.headers.host}/api/projects`;
		
		const res = await fetch(url);
		const data: IProjects[] = await res.json();
		
		return {
			props: { projects: data },
		};
	} catch (error) {
		return { notFound: true };
	}
};

export default Projects;