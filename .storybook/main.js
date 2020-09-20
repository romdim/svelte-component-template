const autoPreprocess = require('svelte-preprocess');

module.exports = {
    stories: ['../stories/**/*.stories.ts'],
  
    addons: [
      '@storybook/addon-a11y',
      '@storybook/addon-storysource',
      '@storybook/addon-actions',
      '@storybook/addon-docs',
      '@storybook/addon-controls'
    ],
  webpackFinal: async (config, { configType }) => {
    // remove original storybook webpack rules for svelte
    config.module.rules = config.module.rules.filter(r => {
      return !r.test.toString().includes('svelte')
    })

    config.module.rules.push({
      test: /\.svelte$/,
      exclude: /node_modules/,
      loader: require.resolve('svelte-loader'),
      options: {
        preprocess: autoPreprocess()
      }
    })

    config.resolve.extensions.push('.ts');
    return config;
  }
}