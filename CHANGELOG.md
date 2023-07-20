# Changelog

## [2.0.0](https://github.com/lite-jsx/core/compare/v1.3.0...v2.0.0) (2023-07-20)


### ⚠ BREAKING CHANGES

* The decoration name has been changed.
* The express middleware has been removed.
* The project name has been changed.

### Features

* rename Render to View decorator ([b94364a](https://github.com/lite-jsx/core/commit/b94364ac3d7e1f7b7ef6fd5403555a1b36a860b4))


### Miscellaneous Chores

* rename project in publish action ([6c296f5](https://github.com/lite-jsx/core/commit/6c296f5b00fa452fa21d901b2e42609f5b17d8b2))


### Code Refactoring

* move express middleware to a separated project ([2ef10b7](https://github.com/lite-jsx/core/commit/2ef10b7d30b0624ef19afc6530fd59741815e7c1))

## [1.3.0](https://github.com/danprates/lite-jsx/compare/v1.2.0...v1.3.0) (2023-04-11)


### Features

* **express:** add $req and $res to template props ([7839436](https://github.com/danprates/lite-jsx/commit/7839436b2b20bf40bfa0f20a20a99865c4fecb9a))
* **render:** add nest render decorator ([2569b3c](https://github.com/danprates/lite-jsx/commit/2569b3c0641c2a1a188365a7190a99589f9542ac))


### Bug Fixes

* **types:** change express middleware name to __express ([26ebdf2](https://github.com/danprates/lite-jsx/commit/26ebdf2d1b24c7cfc2e569ce7cfd0994314f0f9e))

## [1.2.0](https://github.com/danprates/lite-jsx/compare/v1.1.2...v1.2.0) (2023-04-05)


### Features

* **express:** add initial express middleware ([9239b9d](https://github.com/danprates/lite-jsx/commit/9239b9df55193f493206a989015bcd4fd62f4983))
* **types:** add express middleware to declaration ([edd1c65](https://github.com/danprates/lite-jsx/commit/edd1c65093e11be218baf47893c31fa9e8122a2f))

## [1.1.2](https://github.com/danprates/lite-jsx/compare/v1.1.1...v1.1.2) (2023-04-01)


### Bug Fixes

* **action:** move release action to publish ([#6](https://github.com/danprates/lite-jsx/issues/6)) ([7d85df0](https://github.com/danprates/lite-jsx/commit/7d85df0994fb19b54bfe8591543ab40c448cdf1d))

## [1.1.1](https://github.com/danprates/lite-jsx/compare/v1.1.0...v1.1.1) (2023-04-01)


### Bug Fixes

* **action:** change trigger in publish ([#4](https://github.com/danprates/lite-jsx/issues/4)) ([f2fb1a0](https://github.com/danprates/lite-jsx/commit/f2fb1a05267836db6e17a740456b01b6035b835a))

## [1.1.0](https://github.com/danprates/lite-jsx/compare/v1.0.0...v1.1.0) (2023-04-01)


### Features

* **action:** add conventional commits linter to quality gate ([#2](https://github.com/danprates/lite-jsx/issues/2)) ([9ac2f9c](https://github.com/danprates/lite-jsx/commit/9ac2f9c7b53a0aa2c70e8df1213d1fbfcd154881))

## 1.0.0 (2023-04-01)


### Features

* **h:** add DOCTYPE when rendering html ([813f6fa](https://github.com/danprates/lite-jsx/commit/813f6fa2e9917ff2687d41ad7dee44a4975e847e))
* **h:** add fragment support ([465ea2b](https://github.com/danprates/lite-jsx/commit/465ea2b0918348f1b0ab56250068d14ce787bb5e))
* **h:** add initial h function ([d1110f8](https://github.com/danprates/lite-jsx/commit/d1110f84aa5791ff768124adb47481a1efe86b2e))
* **h:** add sanitize to props ([a049b48](https://github.com/danprates/lite-jsx/commit/a049b489fe6c2511bdac5682419a356124b12548))
* **h:** add sanitize to tagName ([06bc184](https://github.com/danprates/lite-jsx/commit/06bc184ce80fef2d7556c44270474e6e7ca7acce))
* **stringify:** ensure that stringify a nullish child ([333d6f3](https://github.com/danprates/lite-jsx/commit/333d6f3928d269bf79968e00fce177cfd480151a))
* **stringify:** ensure that stringify an object child ([34c90f6](https://github.com/danprates/lite-jsx/commit/34c90f6aa9623782b824a628ccd5f04e3c91b1b8))


### Bug Fixes

* **action:** publish to npm action ([db63499](https://github.com/danprates/lite-jsx/commit/db634996efb700afbd94e80b1cac4db801a1446e))
* **action:** remove unnecessary npm ci script ([4da037f](https://github.com/danprates/lite-jsx/commit/4da037fad61415d90963c8f4cb4d3cc2a8d6e2f6))
