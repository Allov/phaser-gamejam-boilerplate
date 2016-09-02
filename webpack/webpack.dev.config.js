import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import module from './webpack.config.module';

export default {

    entry: {
        app: ['./src/index.js']
    },

    output: {
        path: '/',
        publicPath: '/',
        filename: 'scripts/game.js'
    },

    devtool: '#source-map',

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, '../node_modules/phaser/build/phaser.min.js'), to: 'scripts/' },
            { from: path.resolve(__dirname, '../node_modules/phaser/build/phaser.js'), to: 'scripts/' },
            { from: path.resolve(__dirname, '../node_modules/phaser/build/phaser.map'), to: 'scripts/' }
        ])
    ],

    module,

    eslint: {
        failOnWarning: false,
        failOnError: false
    },

    historyApiFallback: {
        index: 'index.html'
    },

    contentBase: path.resolve(`${__dirname}/../static`),

    resolve: {
        root: [ path.resolve(__dirname, '../src') ],
        extensions: ['.js', '']
    },

    stats: {
        colors: true,
        chunks: false
    }

};
