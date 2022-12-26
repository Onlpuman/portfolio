import React, { createContext, FC, ReactNode, useEffect, useLayoutEffect, useState } from 'react';
import Cookies from 'universal-cookie';

import { isServer } from '../helpers/isServer';

type ThemeProviderProps = {
	children: ReactNode,
	isDarkMode: boolean,
	pathFromServer: string
}

type ValueType = {
	isDarkTheme: boolean;
	setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = createContext<ValueType>({} as ValueType);

const ThemeProvider: FC<ThemeProviderProps> = ({ children, isDarkMode }) => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(isDarkMode);
	
	const value: ValueType = {
		isDarkTheme,
		setIsDarkTheme,
	};
	
	const cookies = new Cookies();
	
	const sendCookieTheme = (value: boolean) => {
		cookies.set('isDarkMode', value, {
			path: '/',
		});
	};
	
	useLayoutEffect(() => {
		if (!isServer()) {
			const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
			
			const funcListener = (e: MediaQueryListEvent) => {
				const isUserDarkTheme = e.matches;
				isUserDarkTheme
					? sendCookieTheme(true)
					: sendCookieTheme(false);
				
				setIsDarkTheme(isUserDarkTheme);
			};
			
			mediaQueryList.addEventListener('change', funcListener);
		}
		//return () => .removeEventListener('change', funcListener);
	}, []);
	
	useEffect(() => {
		if (!isServer()) {
			sendCookieTheme(isDarkTheme);
		}
	}, [isDarkTheme]);
	
	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider };