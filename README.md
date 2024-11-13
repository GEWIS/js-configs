# GEWIS Eslint Config

This repository contains a shared ESLint configuration for use across all GEWIS projects. It aims to enforce consistent coding standards and code quality.

## Installation

To use this ESLint configuration in your project, install it using `npm` or `yarn`.

```bash
npm install @gewis/eslint-config@github.com:GEWIS/eslint-config --save-dev
yarn add @gewis/eslint-config@github.com:GEWIS/eslint-config --dev
```

## Usage

The package provides sharable configurations for [ESLint](https://eslint.org/docs/latest/extend/shareable-configs) and
[prettier](https://prettier.io/docs/en/sharing-configurations) that can be used directly in your project's configuration files.

> [!NOTE]  
> The shared configurations for ESLint are not compatible with ESLint `v8.x`

### ESLint Configuration

In your project's root directory, create or update the `eslint.config.{js,mjs,cjs,ts,mts,cts}` file to extend this configuration.
You can pick a combination of various configuration files:

- `index.mjs`
- `eslint.vue.mjs`
- `index.mjs`
- `eslint.react.mjs`

```javascript
import eslint from '@gewis/eslint-config/index.mjs';
import vue from '@gewis/eslint-config/eslint.vue.mjs';
import prettier from '@gewis/eslint-config/index.mjs';

export default [...eslint, ...vue, ...prettier];
```

It is possible to (partially) [override settings](https://eslint.org/docs/latest/extend/shareable-configs#overriding-settings-from-shareable-configs)
of the shared configurations in your config file. It is also possible to add your own ignored file to the configurations

> [!NOTE]  
> All files in the `.gitignore` file(s) are ignored by default

### Prettier Configuration

In your project's root directory, create or update the `.prettierrc.mjs` file to extend this configuration.
There is a single [shared prettier configuration](https://prettier.io/docs/en/sharing-configurations) available; `prettier.config.mjs`.

```javascript
import prettier from '@gewis/eslint-config/prettier.config.mjs';

/**
 * @type {import("prettier").Config}
 */
export default {
  ...prettier,
};
```

Just like with ESLint, it is possible to (partially) [override settings](https://prettier.io/docs/en/sharing-configurations#extending-a-sharable-config).
of the shared configuration.

### Run

Make sure to define the lint and format script in your `package.json`.

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint-fix": "eslint . --fix",
    "format": "prettier --ignore-path .gitignore --check .",
    "format-fix": "prettier --ignore-path .gitignore --write ."
  }
}
```

You can now lint and format your files using the configured rules and scripts.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you'd like to suggest changes or improvements.

### Updating the Configuration

To update the configuration:

1. Make changes to or add new ESLint configurations in this repository.
2. Commit your changes and push to GitHub.
3. Projects using this configuration will automatically pull the latest version when they run `yarn install`.

## License

This project is licensed under the GNU General Public License (GPL). See the [LICENSE](LICENSE) file for details.
