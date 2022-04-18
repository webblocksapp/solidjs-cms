const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/html',
  babel: async (options) => ({
    ...options,
    presets: ['solid', '@babel/preset-typescript'],
  }),
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    return config;
  },
};
