import React, { createContext, FC, ReactNode, useState } from 'react';

type ThemeProviderProps = {
	children: ReactNode,
	isDarkMode: boolean,
}

type ThemeType = {
	isDarkTheme: boolean;
	setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = createContext<ThemeType>({} as ThemeType);

const ThemeProvider: FC<ThemeProviderProps> = ({ children, isDarkMode }) => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(isDarkMode);
	
	const value: ThemeType = {
		isDarkTheme,
		setIsDarkTheme,
	};
	
	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider };