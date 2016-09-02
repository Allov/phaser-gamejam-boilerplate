import path from 'path';

export default {
    // eslint at build time, only the src folder.
    preLoaders: [{
        test: /\.js$/,
        include: [
            path.resolve(__dirname, '../src')
        ],
        loader: 'eslint-loader',
    }],
    // transpile any js file in src folder. Will need to add any non transpiled ES6 (e.g.: coming from node_modules).
    loaders: [{
        test: /\.js$/,
        include: [
            path.resolve(__dirname, '../src')
        ],
        loader: 'babel-loader',
    }]
};
