import Image from 'next/image';
import clsx from 'clsx';
import { FC, useContext } from 'react';

import { AppContext } from '../../../../context/AppContext';

import styles from './ThemeButton.module.scss';

const ThemeButton:FC = () => {
	const { isDarkTheme, setIsDarkTheme } = useContext(AppContext);
	
	return (
		<button
			className={
				clsx({
					[styles.darkModeBtn]: true,
					[styles.darkModeBtn__active]: isDarkTheme,
				})
			}
			onClick={() => setIsDarkTheme(!isDarkTheme)}
		>
			<Image
				className={styles.darkModeBtn__icon}
				src="/icons/sun.svg"
				width={16}
				height={16}
				alt="Light mode"/>
			<Image
				className={styles.darkModeBtn__icon}
				src="/icons/moon.svg"
				width={16}
				height={16}
				alt="Dark mode"/>
		</button>
	);
};

export default ThemeButton;