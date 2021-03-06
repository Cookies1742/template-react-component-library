module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-actions",
      "@storybook/addon-interactions",
      "@storybook/addon-docs",
      "@storybook/addon-controls",
         {
           name: '@storybook/addon-postcss',
           options: {
           postcssLoaderOptions: {
                 implementation: require('postcss'),
           },
         },
   },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
