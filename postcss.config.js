/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

module.exports = {
    plugins: {
        // PostCSS Preset Env includes autoprefixer and browsers option will be passed to it automatically.
        'postcss-preset-env': {
            stage: 0,
            browsers: 'last 2 versions',
            // importFrom: 'path/to/file.css'
        },
        'postcss-import': {},
        'postcss-nested': {},
    },
};
