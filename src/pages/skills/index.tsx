import { NextPage } from 'next';

import { skills } from '../../../data/data';

import styles from './Skills.module.scss';

const Skills: NextPage = () => (
	<section className={styles.section}>
		<div className={styles.container}>
			<h1 className={styles.title_1}>Skills</h1>
			<ul className={styles.list}>
				<li className={styles.item}>
					<h2 className={styles.title_2}>Frontend</h2>
					<p>{skills.join(', ')}</p>
				</li>
			</ul>
		</div>
	</section>
);

export default Skills;