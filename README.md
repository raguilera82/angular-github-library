# angular github library
[![Build Status](https://travis-ci.org/raguilera82/angular-github-library.svg?branch=master)](https://travis-ci.org/raguilera82/angular-github-library)
[![npm version](https://badge.fury.io/js/@raguilera82/angular-github-library.svg)](http://badge.fury.io/js/@raguilera82/angular-github-library)
[![devDependency Status](https://david-dm.org/raguilera82/angular-github-library/dev-status.svg)](https://david-dm.org/raguilera82/angular-github-library#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/raguilera82/angular-github-library.svg)](https://github.com/raguilera82/angular-github-library/issues)
[![GitHub stars](https://img.shields.io/github/stars/raguilera82/angular-github-library.svg)](https://github.com/raguilera82/angular-github-library/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/raguilera82/angular-github-library/master/LICENSE)

## Demo
https://raguilera82.github.io/angular-github-library/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Github module library

## Installation

Install through npm:
```
npm install --save @raguilera82/angular-github-library
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { GithubModule } from '@raguilera82/angular-github-library';

@NgModule({
  imports: [
    GithubModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/raguilera82/angular-github-library/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/dist/umd/@raguilera82/angular-github-library/@raguilera82/angular-github-library.js"></script>
<script>
    // everything is exported angularGithubLibrary namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://raguilera82.github.io/angular-github-library/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
