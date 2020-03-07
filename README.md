![version](https://img.shields.io/npm/v/vue-heroicons) ![license](https://img.shields.io/npm/l/vue-heroicons) ![downloads](https://img.shields.io/npm/dw/vue-heroicons)

# vue-heroicons
![alt text](https://raw.githubusercontent.com/Kholid060/vue-heroicons/master/src/assets/Screenshot.png)
Free 104 premium [heroicons-ui](https://github.com/sschoger/heroicons-ui) SVG icons for your Vue.js project

## Demo
[https://vue-heroicons.netlify.com/](https://vue-heroicons.netlify.com/)

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

HeroIcon.add([archive, arrowDown])
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

## Add custom icon
my-custom-icons.js
```js
export const customIcon = { name: 'custom-icon', path: '<path d="M13 5.41V21a1 1 0 0 1-2 0V5.41l-5.3 5.3a1 1 0 1 1-1.4-1.42l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 1 1-1.4 1.42L13 5.4z"/>' }
```
main.js
```js
import Vue from 'vue'
import HeroIcon from 'vue-heroicons'
import { archive, arrowDown } from 'vue-heroicons/src/icons'
import { customIcon } from './my-custom-icons'

HeroIcon.add([archive, arrowDown, customIcon])
Vue.use(HeroIcon)
```
app.vue
```html
<template>
    <div id="app">
        <heroicon name="custom-icon"></heroicon>
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
