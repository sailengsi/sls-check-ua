import buble from 'rollup-plugin-buble';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/main.js',
    output: {
        name: 'UC',
        file: 'build/uc.js',
        format: 'umd',
        // context:'window'
    },
    plugins: [
        buble(),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ],
    treeshake: true

};