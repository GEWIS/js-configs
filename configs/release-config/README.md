# @gewis/release-config

Sharable semantic-release configuration for GEWIS projects.

## Installation

```bash
npm install @gewis/release-config --save-dev
yarn add @gewis/release-config --dev
```

## Configuration

In your semantic-release configuration file, add the following:

```javascript
import { releaseConfig } from '@gewis/release-config';

/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ['main'],
  ...releaseConfig,
};
```
