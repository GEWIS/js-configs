# @gewis/eslint-config-vue

Sharable Vue ESLint configuration for GEWIS projects.

## Installation

```bash
npm install @gewis/eslint-config-vue --save-dev
yarn add @gewis/eslint-config-vue --dev
```

## Configuration

In your ESLint configuration file, add the following:

```javascript
import { eslintConfig as common } from '@gewis/eslint-config-typescript';
import { eslintConfig as vue } from '@gewis/eslint-config-vue';

export default [...common, ...vue];
```
