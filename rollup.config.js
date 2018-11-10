export default {
    input: 'src/index.js',
    output: {
        indent: '\t',
        format: 'umd',
        name: 'PM',
        file: 'dist/PackageManager.js'
    },
    treeshake: true,
    external: [],
    plugins: []
};
