import vuePlugin from 'eslint-plugin-vue';
// eslint-disable-next-line import/no-unresolved -- this package is available
import tsEslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

const config = [
  ...vuePlugin.configs['flat/recommended'],
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsEslint.parser,
      },
    },
    plugins: {
      vue: vuePlugin,
    },
  },
  // Default rules
  {
    files: ['**/*.vue'],
    rules: {
      // Recommended rules
      ...vuePlugin.configs['flat/recommended'].rules,
      // Custom rules
      'vue/component-api-style': ['error', ['script-setup', 'composition']],
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
          },
        },
      ],
      'vue/attributes-order': [
        'error',
        {
          alphabetical: true,
        },
      ],
    },
  },
];

export { config as vueConfig };
