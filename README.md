# generator-jhipster-collectz-blueprint
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> JHipster blueprint, 

# Introduction

This is a [JHipster](https://www.jhipster.tech/) blueprint, that is meant to be used in a JHipster application.

# Prerequisites

As this is a [JHipster](https://www.jhipster.tech/) blueprint, we expect you have JHipster and its related tools already installed:

- [Installing JHipster](https://www.jhipster.tech/installation/)

# Installation

## With NPM

To install this blueprint:

```bash
npm install -g generator-jhipster-collectz-blueprint
```

To update this blueprint:

```bash
npm update -g generator-jhipster-collectz-blueprint
```

## With Yarn

To install this blueprint:

```bash
yarn global add generator-jhipster-collectz-blueprint
```

To update this blueprint:

```bash
yarn global upgrade generator-jhipster-collectz-blueprint
```

# Usage

To use this blueprint, run the below command

```bash
jhipster --blueprint collectz-blueprint
```


## Running local Blueprint version for development

During development of blueprint, please note the below steps. They are very important.

1. Link your blueprint globally 

Note: If you do not want to link the blueprint(step 3) to each project being created, use NPM instead of Yarn as yeoman doesn't seem to fetch globally linked Yarn modules. On the other hand, this means you have to use NPM in all the below steps as well.

```bash
cd collectz-blueprint
npm link
```

2. Link a development version of JHipster to your blueprint (optional: required only if you want to use a non-released JHipster version, like the master branch or your own custom fork)

You could also use Yarn for this if you prefer

```bash
cd generator-jhipster
npm link

cd collectz-blueprint
npm link generator-jhipster
```

3. Create a new folder for the app to be generated and link JHipster and your blueprint there

```bash
mkdir my-app && cd my-app

npm link generator-jhipster-collectz-blueprint
npm link generator-jhipster (Optional: Needed only if you are using a non-released JHipster version)

jhipster -d --blueprint collectz-blueprint

```

# License



[npm-image]: https://img.shields.io/npm/v/generator-jhipster-collectz-blueprint.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-collectz-blueprint
[travis-image]: https://travis-ci.org/bruceshi/generator-jhipster-collectz-blueprint.svg?branch=master
[travis-url]: https://travis-ci.org/bruceshi/generator-jhipster-collectz-blueprint
[daviddm-image]: https://david-dm.org/bruceshi/generator-jhipster-collectz-blueprint.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/bruceshi/generator-jhipster-collectz-blueprint
