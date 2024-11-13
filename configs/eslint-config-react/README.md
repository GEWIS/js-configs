# @gewis/eslint-config-react

Sharable React ESLint configuration for GEWIS projects.

## Installation

```bash
npm install @gewis/eslint-config-react --save-dev
yarn add @gewis/eslint-config-react --dev
```

## Configuration
In your ESLint configuration file, add the following:

```javascript
import  { eslintConfig as common } from '@gewis/eslint-config-typescript';
import  { eslintConfig as react } from '@gewis/eslint-config-react';

export default [
  ...common,
  ...react
];
```
