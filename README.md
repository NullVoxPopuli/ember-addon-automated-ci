# ember-addon-automated-ci

## Features

- Automated NPM releases via [semantic-release](https://github.com/semantic-release/semantic-release)
  - requires semantic aka "conventional" commits to determine patch/minor/major releases
- Automated Dependency updates (with reduced emails) via Renovate
- ember-try with node 12, 14 and all the latest Ember LTS releases
- weekly cron so that floating dependency changes can catch potential problems

### Requirements

In the repository secrets, you'll need to add one token:

- NPM_TOKEN - for releasing to NPM

## Install

Assuming your ember addon's root is also the root of the repository:

```bash
ember-cli-update init ember-addon-automated-ci
```

During init, there will be conflicts that need resolving, but after that,
things should hopefully "just work"

## Support

- yarn
