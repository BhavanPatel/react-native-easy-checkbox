# react-native-easy-checkbox
[![NPM version](https://img.shields.io/npm/v/react-native-easy-checkbox.svg)](https://www.npmjs.com/package/react-native-easy-checkbox)

[![GitHub issues](https://img.shields.io/github/issues/BhavanPatel/react-native-checkbox.svg)](https://github.com/BhavanPatel/react-native-checkbox/issues)

[![GitHub forks](https://img.shields.io/github/forks/BhavanPatel/react-native-checkbox.svg)](https://github.com/BhavanPatel/react-native-checkbox/network)

[![GitHub stars](https://img.shields.io/github/stars/BhavanPatel/react-native-checkbox.svg)](https://github.com/BhavanPatel/react-native-checkbox/stargazers)

[![NPM](https://nodei.co/npm/react-native-easy-checkbox.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-easy-checkbox/)

Simple CheckBox for react-native

## Installation in project

```bash
npm install react-native-easy-checkbox --save

react-native link react-native-vector-icons
```

## Example
##### [Example here](https://github.com/BhavanPatel/react-native-checkbox/tree/master/Example)


## Sample usage
```javascript

import CheckBox from 'react-native-easy-checkbox';

```
```html
<CheckBox name="name1" checked={true} onChange={(value) => this._onChangeValue(value)}/>
```

## Configuration

Checkbox component all Configuration.

| Props | Option | Default  | Description  |
| ------ | ------ | ------ | ------ |
| name | String |checkbox | Name of checbox |
| checked | Boolean |true | State of checkbox |
| checkBoxTrueStyle | Array or Object | - | Style for True Checkbox container |
| checkBoxFalseStyle | Array or Object | - | Style for False Checkbox container |
| checkIconStyle |  Array or Object | - | Style for Checkbox |
| onChange | Function | - | On touch of checkbox returns state of checkbox |
