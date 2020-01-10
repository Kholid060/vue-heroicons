![version](https://img.shields.io/npm/v/vue-heroicons) ![license](https://img.shields.io/npm/l/vue-heroicons) ![downloads](https://img.shields.io/npm/dw/vue-heroicons)

# vue-heroicons
![alt text](https://i.imgur.com/rYcDbvE.png)
Free 104 premium [heroicons-ui](https://github.com/sschoger/heroicons-ui) SVG icons for your Vue.js project

## Installation
```
// NPM
npm i vue-heroicons

// Yarn
yarn add vue-heroicons
```

## Usage
main.js
```js
import Vue from 'vue'
import HeroIcon from 'vue-heroicons'
import { archive, arrowDown } from 'vue-heroicons/src/icons'

HeroIcon.add(archive, arrowDown)
Vue.use(HeroIcon)
```
app.vue
```html
<template>
    <div id="app">
        <heroicon name="archive"></heroicon>
        <heroicon name="arrow-down" fill="green"></heroicon>
    </div>
</template>
```

## Props

|  Name | Description  |  Type | Accepted values |
|---|---|---| --- |
|`name`  | Icon name  | `String`  | - |
|  `height` | Height of icon  | `String` | - |
| `width` | Width of icon | `String` | - |
| `fill` | Color of icon | `String` | HEX or color name |
