import { GetServerSideProps } from 'next';

import { IProjects } from '../../../models';

import styles from './project.module.scss';

import type { NextPage } from 'next';

type projectProps = {
	project: IProjects,
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
		const currentProject = {};
		
		return {
			props: { project: currentProject },
		};
	} catch (error) {
		return { notFound: true };
	}
};

const Project: NextPage<projectProps> = () => {
	
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.details}>
					
					<h1 className={styles.title}>title</h1>
					
					<div className={styles.desc}>
						<p>Skills:</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Project;