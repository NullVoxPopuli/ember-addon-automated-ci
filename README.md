# Archived

Using `wyvox/action` instead, which allows for concise workflows in a much more extendable way

# ember-addon-automated-ci

## Features

- Automated NPM releases via [semantic-release](https://github.com/semantic-release/semantic-release)
  - requires semantic aka "conventional" commits to determine patch/minor/major releases
- Automated Dependency updates (with reduced emails) via Renovate
- ember-try with node 12, 14 and all the latest Ember LTS releases
- Weekly cron so that floating dependency changes can catch potential problems
- Supports `[skip ci]` commits
- Cached dependencies for faster job runs
- ember-cli-update-action so that blueprints can stay up to date

### Requirements

In the repository secrets, you'll need to add one token:

- NPM_TOKEN - for releasing to NPM

## Install

Assuming your ember addon's root is also the root of the repository:

```bash
ember-cli-update init -b ember-addon-automated-ci
```

The output of the above should look something like this:

```bash
❯  ember-cli-update init -b ember-addon-automated-ci
installing ember-addon-automated-ci
  create .github/renovate.json5
  create .github/workflows/ci.yml
  create .github/workflows/lint.yml
  create package.json

Successfully created project ember-jsqr.
Get started by typing:

  $ cd ember-jsqr
  $ npm start

Happy coding!

❯ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   .github/workflows/ci.yml
	new file:   .github/workflows/lint.yml
	modified:   package.json
	modified:   tests/dummy/config/ember-cli-update.json
```

During init, there will be conflicts that need resolving, but after that,
things should hopefully "just work"

If this is your first time using ember-cli-update, you'll want to familiarize
yourself with https://github.com/ember-cli/ember-cli-update/wiki/Getting-Started

## Support

Dependency Managers
- yarn

Default Branches
- main
- master
