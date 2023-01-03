import React, { createContext, FC, ReactNode, useEffect, useRef, useState } from 'react';
import Cookies from 'universal-cookie';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

import { IProjects } from '../../models';

type providerPropsType = {
	children: ReactNode,
	data: IProjects[],
	isDarkMode: boolean,
}

type valueType = {
	projects: IProjects[],
	isDarkTheme: boolean,
	setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>,
}

export const AppContext = createContext<valueType>({} as valueType);

const AppProvider:FC<providerPropsType> = ({ children, data, isDarkMode }) => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(isDarkMode);
	const dataRef = useRef(data);
	const projects = dataRef.current;
	const cookies = new Cookies();
	
	const value: valueType = {
		projects,
		isDarkTheme,
		setIsDarkTheme,
	};
	
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
		<AppContext.Provider value={value}>
			{children}
		</AppContext.Provider>
	);
};

export {AppProvider};
