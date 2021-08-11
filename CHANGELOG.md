# [2.0.0](https://github.com/NullVoxPopuli/ember-addon-automated-ci/compare/v1.1.0...v2.0.0) (2021-08-01)


### Features

* **ci:** general updates ([7e4b9f2](https://github.com/NullVoxPopuli/ember-addon-automated-ci/commit/7e4b9f2012dff5c76f4f450ae3835459f46277df))


### BREAKING CHANGES

* **ci:** updated ember-cli-update-action if condition

**Features**
 - added type checking workflow
 - added dependencing caching to optimize lint/type job run speed

**Fixes**
 - main/master branch now supported in all workflow files

# [1.1.0](https://github.com/NullVoxPopuli/ember-addon-automated-ci/compare/v1.0.3...v1.1.0) (2021-08-01)


### Features

* **commits:** loosen commitlint settings ([95153e0](https://github.com/NullVoxPopuli/ember-addon-automated-ci/commit/95153e061a4c4ce0e8d45dc7a7ea37663af0befb))

## [1.0.3](https://github.com/NullVoxPopuli/ember-addon-automated-ci/compare/v1.0.2...v1.0.3) (2021-06-25)


### Bug Fixes

* **renovate:** disable updates to peerDependencies ([5f10c4a](https://github.com/NullVoxPopuli/ember-addon-automated-ci/commit/5f10c4ab7bc0d479a4163ad6cee19d1c881daa08))

## [1.0.2](https://github.com/NullVoxPopuli/ember-addon-automated-ci/compare/v1.0.1...v1.0.2) (2021-02-13)


### Bug Fixes

* resolve timing issues with compat matrix, add to README ([3e7b172](https://github.com/NullVoxPopuli/ember-addon-automated-ci/commit/3e7b17260a8a29df8f2a3ee14e066d25dc8fb2b5))

## [1.0.1](https://github.com/NullVoxPopuli/ember-addon-automated-ci/compare/v1.0.0...v1.0.1) (2021-02-13)


### Bug Fixes

* add an index.js file so that the package has a valid 'main' entry ([5fe6748](https://github.com/NullVoxPopuli/ember-addon-automated-ci/commit/5fe67482aeed7f1cdbc8fe08f64edccb7b512a6c))

# 1.0.0 (2021-02-13)


### Features

* initial release ([51f6496](https://github.com/NullVoxPopuli/ember-addon-automated-ci/commit/51f649605ab9508ca96f2043827ad10cd982d0d2))


### BREAKING CHANGES

* ember-cli-update blueprints must be on NPM in order to
work