/* eslint-disable */

// Configuration file for all things Slate.
// For more information, visit https://github.com/Shopify/slate/wiki/Slate-Configuration

const path = require('path');
const { ProvidePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const graphqlLoader = require('graphql-tag/loader');
const { minLegacySingleScriptsPlugin, minLegacyMegaScriptPlugin } = require('./legacy-config');
const { VueLoaderPlugin } = require('vue-loader');
const sectionsBase = 'core';
const snippetsBase = 'core';
const externals = {
  jquery: 'jQuery',
};

const plugins = [
  new ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.$': 'jquery',
    'window.jQuery': 'jquery',
    Vue: 'vue/dist/vue.js'
  }),
  new CopyWebpackPlugin(
    [
      {
        from: 'sections/**/*',
        to: '../sections/',
        flatten: true,
      },
      {
        from: 'snippets/**/*',
        to: '../snippets/',
        flatten: true,
      },
    ],
    { ignore: ['core/*'] },
  ),
  new VueLoaderPlugin(),
  minLegacyMegaScriptPlugin,
  minLegacySingleScriptsPlugin,
];

const rules = [
  // {
  //   test: /\.(graphql|gql)$/,
  //   exclude: /node_modules/,
  //   use: [
  //     { loader: 'graphql-tag/loader' }
  //   ]
  // }
  {
    test: /\.vue$/,
    use: [
      { loader: 'vue-loader' }
    ]
  }
];

const alias = {
  'vue$': 'vue/dist/vue.esm.js',
  styles: path.resolve('./src/styles'),
  scripts: path.resolve('./src/scripts'),
};

module.exports = {
  'eslint.config': '.eslintrc.js',
  'cssVarLoader.liquidPath': ['src/snippets/api/css/css-variables.liquid'],
  'paths.theme.src.sections': `sections/${sectionsBase}`,
  'paths.theme.src.snippets': `snippets/${snippetsBase}`,
  'webpack.extend': {
    externals,
    plugins,
    resolve: { alias, extensions: ['.mjs', '.js', '.css', '.json', '.vue'] },
    module: { rules },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](pubsub-js)[\\/]/,
            name: 'vendor',
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
};