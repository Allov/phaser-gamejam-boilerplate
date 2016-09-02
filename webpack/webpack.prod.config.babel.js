import path from 'path';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import module from './webpack.config.module';

export default {

    entry: {
        app: ['./src/index.js']
    },

    output: {
        path: 'build',
        filename: 'scripts/game.min.js'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: { warnings: false }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new CleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname, '..')
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, '../node_modules/phaser/build/phaser.min.js'), to: 'scripts' },
            { from: path.resolve(__dirname, '../static') }
        ])
    ],

    module,

    eslint: {
        failOnWarning: false,
        failOnError: true
    },

    resolve: {
        root: [ path.resolve(__dirname, '../src') ],
        extensions: ['.js', '']
    },

    stats: {
        colors: true,
        chunks: false
    }

};
