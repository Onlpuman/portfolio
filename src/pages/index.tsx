import { NextPage } from 'next';
import {useContext} from 'react';

import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/Header/Header';
import Card from '../components/Projects/Card/Card';

import styles from './Projects.module.scss';

const Projects:NextPage = () => {
	const { projects } = useContext(ThemeContext);
	
	if (!projects) return null ;
	
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

export default Projects;
