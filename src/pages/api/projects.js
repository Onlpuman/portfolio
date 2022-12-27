import { projectsData } from './data/projectsData';

const getProjects = (req, res) => {
	if (req.method === 'GET') {
		res.status(200).json(projectsData);
	}
};

export default getProjects;