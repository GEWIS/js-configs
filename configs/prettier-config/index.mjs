import eslintConfig from 'eslint-config-prettier';

const prettierConfig = {
  $schema: 'https://json.schemastore.org/prettierrc',
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 120,
  trailingComma: 'all',
};

export { prettierConfig, eslintConfig };
