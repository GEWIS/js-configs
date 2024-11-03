import vuePlugin from 'eslint-plugin-vue';
import tsEslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

export default [
  ...vuePlugin.configs['flat/recommended'],
  {
    files: ['src/**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsEslint.parser
      }
    },
    rules: {
      'vue/component-api-style': ['error', ['script-setup', 'composition']],
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts'
          }
        }
      ],
      'vue/attributes-order': [
        'error',
        {
          alphabetical: true
        }
      ]
    }
  },
];
