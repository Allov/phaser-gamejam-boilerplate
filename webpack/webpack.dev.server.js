import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import 'colour';
import config from './webpack.dev.config';

const base = 'http://localhost';
const port = 8080;
const url = `${base}:${port}`;

config.entry.app.unshift(`webpack-dev-server/client?${url}`, 'webpack/hot/dev-server');

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, Object.assign(config, {
    hot: true
}));
server.listen(port);

console.log(`>>> ${'server listening at'.yellow} ${url.underline.cyan} <<<`); // eslint-disable-line no-console
