const projects = async (req, res) => {
	try {
		if (req.method === 'GET') {
			const result = await fetch(`${req.headers.host === 'localhost:3000' ? 'http' : 'https'}://${req.headers.host}/data/data.json`)
				.then(r => r.json());
			
			return res.status(200).json(result);
		}
	} catch (error) {
		return error;
	}
};

export default projects;