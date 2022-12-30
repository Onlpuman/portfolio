import { IFooterLink, INavLink } from '../../models';

export const navLinks: INavLink[] = [
	{ id: 1, title: 'Projects', path: '/' },
	{ id: 2, title: 'Skills', path: '/skills' },
	{ id: 3, title: 'Contacts', path: '/contacts' },
];

export const footerLinks: IFooterLink[] = [
	{ id: 1, src: '/icons/gitHub.svg', path: 'https://github.com/Onlpuman' },
	{ id: 2, src: '/icons/linkedIn.svg', path: 'https://www.linkedin.com/in/maksim-p-297804237' },
	{ id: 3, src: '/icons/instagram.svg', path: 'https://www.instagram.com/onlypuman/' },
];

export const skills: string[] = [
	'JavaScript',
	'TypeScript',
	'ReactJS',
	'NextJS',
	'Redux',
	'HTML',
	'CSS',
	'SCSS',
	'NPM',
	'Yarn',
	'BootStrap',
	'MaterialUI',
	'StyledComponents',
];