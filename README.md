<p align="center"><img align="center" src="./src/assets/images/logo.png" width="158px" alt="Encryptfi logo" /></p>

# Encryptfi (Web)
A simple, transparent, anonymous and secure way to transfer files.

![Netlify deploy status](https://api.netlify.com/api/v1/badges/778b09ca-7110-4e31-ae1d-be841932adad/deploy-status)
[![GitHub license](https://img.shields.io/github/license/toresrise/encryptfi-web)](https://github.com/toresrise/encryptfi-web/blob/main/LICENSE)
![GitHub repository size](https://img.shields.io/github/repo-size/toresrise/encryptfi-web)
[![Code style is Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<hr>

## Install prerequisites
- [NodeJS and NPM](https://nodejs.org/en/download)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

## Setup project
Follow all commands bellow.

### Environment
Create **.env** file in **root** folder with content.
```
VITE_API_URL=YOUR_API_URL_HERE
VITE_LOCAL_STORAGE_PREFIX=YOUR_LOCAL_STORAGE_PREFIX_HERE
VITE_LANG_KEY=YOUR_LANG_KEY_HERE
```

### Install packages
```
yarn
```

### Active Husky hooks (if not automatically configured)
```
yarn husky install
```

### Start
```
yarn dev
```

### Build
```
yarn build
```

## Setup JetBrains (IDE)

### Configure lint
Go to `File > Settings > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint`, select **Automatic ESLint configuration** and check **Run eslint --fix on save**.

### Configure prettier
Go to `File > Settings > Languages & Frameworks > JavaScript > Prettier`, check **On 'Reformat Code' action** and check **On save**.

## Lint
Run commands:

### Check
```
yarn lint
```

### Fix
```
yarn lint:fix
```

## Prettier
Run commands:

### Check
```
yarn prettier
```

### Fix
```
yarn prettier:fix
```

## Format code
```
yarn format
```

## Figma (prototype)
See application components in our [Figma project](https://www.figma.com/file/SADKp23JNkpiVvhJsRZFAk/Web).

## Community
Our code can be copied and distributed for **everybody**. If you find a bug or improvement, report an [issue](https://github.com/toresrise/encryptfi-web/issues), please.

## Documentation authors
- **João Paulo Hotequil** ([website](https://hotequil.tech))
