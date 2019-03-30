# VUTTR Front-end

<div align="center">

[![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](http://vuttr-ds.surge.sh/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

A Front-end project to VUTTR Application


Utilized:

- Flavor: flow
- Lib: React
- Formatter: prettier-standard
- Linter: standard
- Bundler: Webpack 4
- Git-hooks: husky
- Styles: Emotion JS
- Test: jest

> node >= 10.15.3

See the UI components in [Storybook of project](http://vuttr-ds.surge.sh/)

<div align="center">

![vuttr](vuttr.png)

</div>

## Scripts

#### `yarn install`

> Install the dependencies

#### `yarn dev`

> Run in development mode (localhost:8999)

#### `yarn prod`

> Build the project

#### `yarn flow`

> Run the typechecker

#### `yarn lint:fix`

> Check and fix code conforms to linting rules (standard)

#### `yarn prettier`

> Formats the code

#### `yarn storybook`

> Run storybook in development mode

#### `yarn build-storybook`

> Build the storybook

#### `yarn test`

> Run the tests

#### `yarn test:watch`

> Run the tests in watch mode


## Docker

### Using only docker
#### Building
```sh
$ sh scripts/docker-build.sh
```

#### Running
```sh
$ sh scripts/docker-run.sh
```
> Runs on localhost:3001

### Using docker-compose

#### Building

```
docker-compose build
```

#### Running

```
docker-compose up
```

> Runs on localhost:3001

## Application run

1. Before to run the project, you need run this [Fake api](https://gitlab.com/bossabox/challenge-fake-api/tree/master)
2. Run `docker-compose build`
3. Run `docker-compose up`
4. Done! Test the application

## License

The source code is licensed under **MIT**. License is available [here](https://github.com/jeovazero/vuttr-frontend/blob/master/LICENSE)

#

by <a href="https://github.com/jeovazero">@jeovazero</a>

