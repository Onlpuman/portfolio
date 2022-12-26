export interface IFooterLink {
	id: number,
	src: string,
	path: string
}

export interface INavLink {
	id: number,
	title: string,
	path: string
}

export interface IProjects {
	id: number,
	name: string,
	description: string,
	title: string,
	skills: string,
	path: string,
	img: string[],
	url: string,
}