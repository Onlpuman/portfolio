import { FC } from 'react';

import FooterLinks from './FooterLinks/FooterLinks';
import styles from './Footer.module.scss';

const Footer:FC = () => (
	<footer className={styles.footer}>
		<div className={styles.container}>
			<div className={styles.footer__wrapper}>
				<FooterLinks />
				<div className={styles.copyright}>
					<p>2022</p>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;