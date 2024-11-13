# @gewis/eslint-config-javascript

Sharable JavaScript ESLint configuration for GEWIS projects.

## Installation

```bash
npm install @gewis/eslint-config@github.com:GEWIS/eslint-config --save-dev
yarn add @gewis/eslint-config@github.com:GEWIS/eslint-config --dev
```

## Configuration
In your ESLint configuration file, add the following:

```javascript
import  { eslintConfig as common } from '@gewis/eslint-config-javascript';

export default [...common];
```
