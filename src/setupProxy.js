const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
// 	app.use(proxy('/api', { target: 'https://blockchain.info', secure: false }));
// };

module.exports = function (app) {
	app.use(
		createProxyMiddleware('/api', {
			target: 'https://blockchain.info/blocks/1573858800000?format=json',
			logLevel: 'debug',
			changeOrigin: true,
			secure: false,
		})
	);
	app.use(
		createProxyMiddleware('/detail', {
			target:
				'https://blockchain.info/rawblock/00000000000000000005bf9ddb82a3103a0f8a450e1e16bc39c0d178c64fcd4b',
			logLevel: 'debug',
			changeOrigin: true,
			secure: false,
		})
	);
};
