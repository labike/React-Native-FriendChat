module.exports = {
	database: 'mongodb://localhost:27017/chat',
	server: {
		port: 8888,
		host: '127.0.0.1',
	},
	jwt: {
		secret: 'YOUR_SECRET',
		expiresIn: '1d',
	},
};