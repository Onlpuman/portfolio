import React, { createContext, FC, ReactNode, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

type ThemeProviderProps = {
	children: ReactNode,
	isDarkMode: boolean,
	pathFromServer: string
}

type ValueType = {
	isDarkTheme: boolean;
	setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
	pathFromServer: string,
}

export const ThemeContext = createContext<ValueType>({} as ValueType);

const ThemeProvider: FC<ThemeProviderProps> = ({ children, isDarkMode, pathFromServer }) => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(isDarkMode);
	
	const value: ValueType = {
		isDarkTheme,
		setIsDarkTheme,
		pathFromServer,
	};
	
	const cookies = new Cookies();
	
	const sendCookieTheme = (value: boolean) => {
		cookies.set('isDarkMode', value, {
			path: '/',
		});
	};
	
	useIsomorphicLayoutEffect(() => {
		const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
		
		const funcListener = (e: MediaQueryListEvent) => {
			const isUserDarkTheme = e.matches;
			isUserDarkTheme
				? sendCookieTheme(true)
				: sendCookieTheme(false);
			
			setIsDarkTheme(isUserDarkTheme);
		};
		
		mediaQueryList.addEventListener('change', funcListener);
		//return () => .removeEventListener('change', funcListener);
	}, []);
	
	useEffect(() => {
		sendCookieTheme(isDarkTheme);
	}, [isDarkTheme]);
	
	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};

export {ThemeProvider};