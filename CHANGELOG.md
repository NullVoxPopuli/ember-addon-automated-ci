## [2.1.4](https://github.com/NullVoxPopuli/ember-addon-automated-ci/compare/v2.1.3...v2.1.4) (2021-11-14)


### Bug Fixes

* **renovate:** prevent breaking changes via engines changes ([fecf8ab](https://github.com/NullVoxPopuli/ember-addon-automated-ci/commit/fecf8aba3ff4a68a92953f0791a13de170135ab1))

## [2.1.3](https://github.com/NullVoxPopuli/ember-addon-automated-ci/compare/v2.1.2...v2.1.3) (2021-11-11)


### Bug Fixes

* **renovate:** prevent breaking changes via engines changes ([5920297](https://github.com/NullVoxPopuli/ember-addon-automated-ci/commit/5920297549f6620db578cafbd458b6bdfe21e6ea))

## [2.1.2](https://github.com/NullVoxPopuli/ember-addon-automated-ci/compare/v2.1.1...v2.1.2) (2021-10-18)


### Bug Fixes

* add semantic-release cli check ([f1b3ce5](https://github.com/NullVoxPopuli/ember-addon-automated-ci/commit/f1b3ce5a1d53166923916410b0a65734900178ef))

## [2.1.1](https://github.com/NullVoxPopuli/ember-addon-automated-ci/compare/v2.1.0...v2.1.1) (2021-09-12)


### Bug Fixes

* **files/ci:** ember-cli-update-action should work now ([d2ee3e6](https://github.com/NullVoxPopuli/ember-addon-automated-ci/commit/d2ee3e63ec714a67989311844da93f5451b0fd5c))

# [2.1.0](https://github.com/NullVoxPopuli/ember-addon-automated-ci/compare/v2.0.0...v2.1.0) (2021-08-17)


### Bug Fixes

* force blueprint to bump versions ([0c69fc8](https://github.com/NullVoxPopuli/ember-addon-automated-ci/commit/0c69fc8801f5bbf9a023f1629cab5fb489a46fc0))


### Features

* support alternate range-strategy for non-addons, change addon default to lockfile change ([8c93634](https://github.com/NullVoxPopuli/ember-addon-automated-ci/commit/8c93634ad5992dc0c72288b0432118310bb6fbfa))
* update try-scenarios ([89b3e01](https://github.com/NullVoxPopuli/ember-addon-automated-ci/commit/89b3e01f2141adbd60fe5ef56fb72da0c7fa20ce))

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
