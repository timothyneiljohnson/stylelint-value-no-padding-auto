# stylelint-value-no-padding-auto

[![Build Status](https://travis-ci.org/timothyneiljohnson/stylelint-value-no-padding-auto.svg)](https://travis-ci.org/timothyneiljohnson/stylelint-value-no-padding-auto)

A [stylelint](https://github.com/stylelint/stylelint) custom rule to catch the invalid use of `padding: auto`.

This rule will cause stylelint to warn you whenever a padding property is caught using `auto`.

## Installation

```
npm install stylelint-value-no-padding-auto
```

This plugin is compatible with v5.0.1+.

## Details

```css
a { /* OK */
  padding: 0
}

a { /* Not OK */
  padding: auto
}
```

### This rule applies to the following padding properties.

```
padding
padding-top
padding-right
padding-bottom
padding-left
```

## Usage

Add `"stylelint-value-no-padding-auto"` to your stylelint config `plugins` array, then add `value-no-padding-auto` to your rules, set to `true`.

As follows:

```js
{
  "plugins": [
    "stylelint-value-no-padding-auto"
  ],
  "rules": {
    "value-no-padding-auto": true
  }
};
```
