# GEWIS Shared Configs

This repository contains shared configurations for use across all GEWIS projects. It aims to enforce consistent coding standards and code quality.

- [ESLint](https://eslint.org/docs/latest/extend/shareable-configs) configuration for JavaScript, TypeScript, React and Vue
- [Prettier](https://prettier.io/docs/en/sharing-configurations) configuration including ESLint ignores

> [!NOTE]  
> The shared configurations for ESLint are not compatible with ESLint `v8.x`

### ESLint

In your project's root directory, create or update the `eslint.config.{js,mjs,cjs,ts,mts,cts}` file to extend this configuration.
You can pick a combination of various configuration files:

- `index.mjs`
- `eslint.vue.mjs`
- `eslint.react.mjs`

Then, follow one of the specific README's to configure your ESLint instance. It is possible to (partially) [override settings](https://eslint.org/docs/latest/extend/shareable-configs#overriding-settings-from-shareable-configs)
of the shared configurations in your config file. It is also possible to add your own ignored file to the configurations

> [!NOTE]  
> All files in the `.gitignore` file(s) are ignored by default

### [Prettier](./configs/prettier-config/README.md)

In your project's root directory, create or update the `.prettierrc.mjs` file to extend this configuration.
Follow the specific README's to configure your Prettier and ESLint instance.

Just like with ESLint, it is possible to (partially) [override settings](https://prettier.io/docs/en/sharing-configurations#extending-a-sharable-config).
of the shared configuration.

### Scripts

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

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you'd like to suggest changes or improvements.

### Updating the Configuration

To update the configuration:

1. Make changes to or add new ESLint configurations in this repository.
2. Commit your changes and push to GitHub.
3. Projects using this configuration will automatically pull the latest version when they run `yarn install`.

## License

This project is licensed under the GNU General Public License (GPL). See the [LICENSE](LICENSE) file for details.
