import Link from 'next/link';
import { NextPage } from 'next';

import styles from './Contacts.module.scss';

const Contacts: NextPage = () => (
	<section className={styles.section}>
		<div className={styles.container}>
			<h1 className={styles.title_1}>Contacts</h1>
			<ul className={styles.list}>
				<li className={styles.item}>
					<h2 className={styles.title_2}>Location</h2>
					<p>Limassol, Cyprus</p>
				</li>
				<li className={styles.item}>
					<h2 className={styles.title_2}>Telegram / WhatsApp</h2>
					<p><Link className={styles.link} href="tel:+35796064929">+357 (96) 06-49-29</Link></p>
				</li>
				<li className={styles.item}>
					<h2 className={styles.title_2}>Email</h2>
					<p><Link className={styles.link} href="mailto:onlyhuman_901@icloud.com">onlyhuman_901@icloud.com</Link></p>
				</li>
			</ul>
		</div>
	</section>
);

export default Contacts;