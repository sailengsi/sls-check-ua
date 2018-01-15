import buble from 'rollup-plugin-buble';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    output: {
        name: 'build/uc.js',
        file:'build/uc.js',
        format: 'umd'
    },
    plugins: [
        buble(),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ],
    treeshake: true

};