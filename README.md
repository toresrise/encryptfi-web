<img align="right" src="src/assets/logo.png" width="16%" alt="Encryptfi logo" />

# Encryptfi
A simple, transparent, anonymous and secure way to transfer files.

## Setup project
Follow all commands bellow.

### Environment
Create .env file in root folder with content.
```
VITE_API_URL=YOUR_API_URL_HERE
```

### Install packages
```
yarn
```

### Start project
```
yarn dev
```

## Setup IntelliJ

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

## Format code (fix lint and prettier)
```
yarn format
```

## Community
Our code can be copied and distributed for everybody. If you find a bug or improvement, report an [issue](https://github.com/toresrise/encryptfi-web/issues), please.

## Authors
- João Paulo Hotequil ([personal site](https://hotequil.tech))
