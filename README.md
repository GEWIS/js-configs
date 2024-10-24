### GEWIS Eslint Config

# ESLint Configuration

This repository contains a shared ESLint configuration for use across all GEWIS projects. It aims to enforce consistent coding standards and code quality.

## Installation

To use this ESLint configuration in your project, add it as a dependency in your `package.json` file.

```json
{
  "devDependencies": {
    "@gewis/eslint-config": "github:GEWIS/eslint-config"
  }
}
```

### Using yarn to Install

You can also install it directly using the command line:

```bash
yarn add @gewis/eslint-config@github.com:GEWIS/eslint-config --dev
```

## Usage

1. **Create or Update ESLint Configuration:**

   In your project's root directory, create or update the `.eslintrc.cjs` file to extend this configuration:

   ```javascript
   module.exports = {
     extends: '@gewis/eslint-config',
   };
   ```

2. **Run ESLint:**

   You can now lint your files using the configured rules. If you have added a script in your project's `package.json`, you can run:

   ```bash
   yarn lint
   ```

   Make sure to define the lint script in your `package.json`:

   ```json
   "scripts": {
     "lint": "eslint ."
   }
   ```
   
## Custom Rules

If you need to add custom rules, you can do so in your local `.eslintrc.cjs` file:

```javascript
module.exports = {
  extends: '@gewis/eslint-config',
  rules: {
    // Add custom rules here
    'no-console': 'warn',
    'quotes': ['error', 'single'],
  },
};
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you'd like to suggest changes or improvements.

### Updating the Configuration

To update the configuration:

1. Make changes to the `.eslintrc.cjs` file in this repository.
2. Commit your changes and push to GitHub.
3. Projects using this configuration will automatically pull the latest version when they run `yarn install`.

## License

This project is licensed under the GNU General Public License (GPL). See the [LICENSE](LICENSE) file for details.
