# swizz [![Build Status](https://travis-ci.org/dy/swizz.svg?branch=gh-pages)](https://travis-ci.org/dy/swizz)

Provide swizzles for arrays, like GLSL.

```js
import swizzle from 'swizz'

let arr = swizzle([0, 1, 2, 3])

arr.zyx = arr.xyz

arr // [2, 1, 0, 3]
```

Supported swizzles:

```js
arr.xyzw ===
arr.stpd ===
arr.rgba ===
[arr[0], arr[1], arr[2], arr[3]]
```

Uses _Proxy_ under the hood.

Probably could be implemented as babel transform to unwrap for production (by request).

[![npm install spect](https://nodei.co/npm/spect.png?mini=true)](https://npmjs.org/package/spect/)

Related art:

* [swizz](https://ghub.io/swizz)
* [known](https://ghub.io/known)
* [on-change](https://ghub.io/on-change)

Refs:

* [Metaprogramming with proxies](https://exploringjs.com/es6/ch_proxies.html)

---

HK
