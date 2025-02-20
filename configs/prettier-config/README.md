# @gewis/prettier-config

Sharable Prettier configuration for GEWIS projects.

## Installation

```bash
npm install @gewis/prettier-config --save-dev
yarn add @gewis/prettier-config --dev
```

## Configuration

In your ESLint configuration file, add the following:

```javascript
import { eslintConfig as common } from '@gewis/eslint-config-typescript';
import { eslintConfig as prettier } from '@gewis/prettier-config';

export default [...common, prettier];
```

In your Prettier configuration file, add the following:

```javascript
import { prettierConfig } from '@gewis/prettier-config';

/**
 * @type {import("prettier").Config}
 */
export default {
  ...prettierConfig,
};
```
