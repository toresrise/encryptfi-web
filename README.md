<h1 align="center">Encryptfi (Web)</h1>

<p align="center">
    <img align="center" src="src/assets/images/logo.png" width="12%" alt="Encryptfi logo" />
    <br>
    <br>
    <i>A simple, transparent, anonymous and secure way to transfer files.</i>
</p>

<hr>

![Netlify Status](https://api.netlify.com/api/v1/badges/778b09ca-7110-4e31-ae1d-be841932adad/deploy-status)

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

### Start
```
yarn dev
```

### Build
```
yarn build
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

## Format code
```
yarn format
```

## Community
Our code can be copied and distributed for everybody. If you find a bug or improvement, report an [issue](https://github.com/toresrise/encryptfi-web/issues), please.

## Authors
- João Paulo Hotequil ([personal site](https://hotequil.tech))
