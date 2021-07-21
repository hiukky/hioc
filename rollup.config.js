import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const ext = format => (format == 'dts' ? 'd.ts' : 'js')

const bundle = format => ({
  input: 'src/index.ts',
  output: {
    file: `dist/index.${ext(format)}`,
    format: format == 'cjs' ? 'cjs' : 'es',
    sourcemap: false,
  },
  plugins: format == 'dts' ? [dts()] : [esbuild()],
  external: id => !/^[./]/.test(id),
})

export default [bundle('es'), bundle('cjs'), bundle('dts')]
