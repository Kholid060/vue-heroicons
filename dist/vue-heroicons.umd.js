(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['vue-heroicons'] = factory();
  else root['vue-heroicons'] = factory();
}((typeof self !== 'undefined' ? self : this), () =>
/** *** */ (function (modules) { // webpackBootstrap
    /** *** */ 	// The module cache
    /** *** */ 	const installedModules = {};
    /** *** */
    /** *** */ 	// The require function
    /** *** */ 	function __webpack_require__(moduleId) {
      /** *** */
      /** *** */ 		// Check if module is in cache
      /** *** */ 		if (installedModules[moduleId]) {
        /** *** */ 			return installedModules[moduleId].exports;
        /** *** */ 		}
      /** *** */ 		// Create a new module (and put it into the cache)
      /** *** */ 		const module = installedModules[moduleId] = {
        /** *** */ 			i: moduleId,
        /** *** */ 			l: false,
        /** *** */ 			exports: {},
        /** *** */ 		};
      /** *** */
      /** *** */ 		// Execute the module function
      /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /** *** */
      /** *** */ 		// Flag the module as loaded
      /** *** */ 		module.l = true;
      /** *** */
      /** *** */ 		// Return the exports of the module
      /** *** */ 		return module.exports;
      /** *** */ 	}
    /** *** */
    /** *** */
    /** *** */ 	// expose the modules object (__webpack_modules__)
    /** *** */ 	__webpack_require__.m = modules;
    /** *** */
    /** *** */ 	// expose the module cache
    /** *** */ 	__webpack_require__.c = installedModules;
    /** *** */
    /** *** */ 	// define getter function for harmony exports
    /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
      /** *** */ 		if (!__webpack_require__.o(exports, name)) {
        /** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /** *** */ 		}
      /** *** */ 	};
    /** *** */
    /** *** */ 	// define __esModule on exports
    /** *** */ 	__webpack_require__.r = function (exports) {
      /** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /** *** */ 		}
      /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */ 	};
    /** *** */
    /** *** */ 	// create a fake namespace object
    /** *** */ 	// mode & 1: value is a module id, require it
    /** *** */ 	// mode & 2: merge all properties of value into the ns
    /** *** */ 	// mode & 4: return value when already ns object
    /** *** */ 	// mode & 8|1: behave like require
    /** *** */ 	__webpack_require__.t = function (value, mode) {
      /** *** */ 		if (mode & 1) value = __webpack_require__(value);
      /** *** */ 		if (mode & 8) return value;
      /** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
      /** *** */ 		const ns = Object.create(null);
      /** *** */ 		__webpack_require__.r(ns);
      /** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
      /** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, (key => value[key]).bind(null, key));
      /** *** */ 		return ns;
      /** *** */ 	};
    /** *** */
    /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 	__webpack_require__.n = function (module) {
      /** *** */ 		const getter = module && module.__esModule
      /** *** */ 			? function getDefault() { return module.default; }
      /** *** */ 			: function getModuleExports() { return module; };
      /** *** */ 		__webpack_require__.d(getter, 'a', getter);
      /** *** */ 		return getter;
      /** *** */ 	};
    /** *** */
    /** *** */ 	// Object.prototype.hasOwnProperty.call
    /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /** *** */
    /** *** */ 	// __webpack_public_path__
    /** *** */ 	__webpack_require__.p = '';
    /** *** */
    /** *** */
    /** *** */ 	// Load entry module and return exports
    /** *** */ 	return __webpack_require__(__webpack_require__.s = 'fb15');
    /** *** */ }({

    /** */ '06cf':
    /** */ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__('83ab');
      const propertyIsEnumerableModule = __webpack_require__('d1e7');
      const createPropertyDescriptor = __webpack_require__('5c6c');
      const toIndexedObject = __webpack_require__('fc6a');
      const toPrimitive = __webpack_require__('c04e');
      const has = __webpack_require__('5135');
      const IE8_DOM_DEFINE = __webpack_require__('0cfb');

      const nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
      exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPrimitive(P, true);
        if (IE8_DOM_DEFINE) {
          try {
            return nativeGetOwnPropertyDescriptor(O, P);
          } catch (error) { /* empty */ }
        }
        if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
      };
      /** */ }),

    /** */ '0cfb':
    /** */ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__('83ab');
      const fails = __webpack_require__('d039');
      const createElement = __webpack_require__('cc12');

      // Thank's IE8 for his funny defineProperty
      module.exports = !DESCRIPTORS && !fails(() => Object.defineProperty(createElement('div'), 'a', {
        get() { return 7; },
      }).a != 7);
      /** */ }),

    /** */ '1be4':
    /** */ (function (module, exports, __webpack_require__) {
      const getBuiltIn = __webpack_require__('d066');

      module.exports = getBuiltIn('document', 'documentElement');
      /** */ }),

    /** */ '1c0b':
    /** */ (function (module, exports) {
      module.exports = function (it) {
        if (typeof it !== 'function') {
          throw TypeError(`${String(it)} is not a function`);
        } return it;
      };
      /** */ }),

    /** */ '1d80':
    /** */ (function (module, exports) {
      // `RequireObjectCoercible` abstract operation
      // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
      module.exports = function (it) {
        if (it == undefined) throw TypeError(`Can't call method on ${it}`);
        return it;
      };
      /** */ }),

    /** */ '23cb':
    /** */ (function (module, exports, __webpack_require__) {
      const toInteger = __webpack_require__('a691');

      const { max } = Math;
      const { min } = Math;

      // Helper for a popular repeating case of the spec:
      // Let integer be ? ToInteger(index).
      // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
      module.exports = function (index, length) {
        const integer = toInteger(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
      /** */ }),

    /** */ '23e7':
    /** */ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__('da84');
      const getOwnPropertyDescriptor = __webpack_require__('06cf').f;
      const createNonEnumerableProperty = __webpack_require__('9112');
      const redefine = __webpack_require__('6eeb');
      const setGlobal = __webpack_require__('ce4e');
      const copyConstructorProperties = __webpack_require__('e893');
      const isForced = __webpack_require__('94ca');

      /*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
      module.exports = function (options, source) {
        const TARGET = options.target;
        const GLOBAL = options.global;
        const STATIC = options.stat;
        let FORCED; let target; let key; let targetProperty; let sourceProperty; let
          descriptor;
        if (GLOBAL) {
          target = global;
        } else if (STATIC) {
          target = global[TARGET] || setGlobal(TARGET, {});
        } else {
          target = (global[TARGET] || {}).prototype;
        }
        if (target) {
          for (key in source) {
            sourceProperty = source[key];
            if (options.noTargetGet) {
              descriptor = getOwnPropertyDescriptor(target, key);
              targetProperty = descriptor && descriptor.value;
            } else targetProperty = target[key];
            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
            // contained in target
            if (!FORCED && targetProperty !== undefined) {
              if (typeof sourceProperty === typeof targetProperty) continue;
              copyConstructorProperties(sourceProperty, targetProperty);
            }
            // add a flag to not completely full polyfills
            if (options.sham || (targetProperty && targetProperty.sham)) {
              createNonEnumerableProperty(sourceProperty, 'sham', true);
            }
            // extend global
            redefine(target, key, sourceProperty, options);
          }
        }
      };
      /** */ }),

    /** */ '241c':
    /** */ (function (module, exports, __webpack_require__) {
      const internalObjectKeys = __webpack_require__('ca84');
      const enumBugKeys = __webpack_require__('7839');

      const hiddenKeys = enumBugKeys.concat('length', 'prototype');

      // `Object.getOwnPropertyNames` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
      /** */ }),

    /** */ '37e8':
    /** */ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__('83ab');
      const definePropertyModule = __webpack_require__('9bf2');
      const anObject = __webpack_require__('825a');
      const objectKeys = __webpack_require__('df75');

      // `Object.defineProperties` method
      // https://tc39.github.io/ecma262/#sec-object.defineproperties
      module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        const keys = objectKeys(Properties);
        const { length } = keys;
        let index = 0;
        let key;
        while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
        return O;
      };
      /** */ }),

    /** */ '3bbe':
    /** */ (function (module, exports, __webpack_require__) {
      const isObject = __webpack_require__('861d');

      module.exports = function (it) {
        if (!isObject(it) && it !== null) {
          throw TypeError(`Can't set ${String(it)} as a prototype`);
        } return it;
      };
      /** */ }),

    /** */ '428f':
    /** */ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__('da84');

      module.exports = global;
      /** */ }),

    /** */ '44ad':
    /** */ (function (module, exports, __webpack_require__) {
      const fails = __webpack_require__('d039');
      const classof = __webpack_require__('c6b6');

      const { split } = '';

      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      module.exports = fails(() =>
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins
        !Object('z').propertyIsEnumerable(0)) ? function (it) {
          return classof(it) == 'String' ? split.call(it, '') : Object(it);
        } : Object;
      /** */ }),

    /** */ '44d2':
    /** */ (function (module, exports, __webpack_require__) {
      const wellKnownSymbol = __webpack_require__('b622');
      const create = __webpack_require__('7c73');
      const definePropertyModule = __webpack_require__('9bf2');

      const UNSCOPABLES = wellKnownSymbol('unscopables');
      const ArrayPrototype = Array.prototype;

      // Array.prototype[@@unscopables]
      // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
      if (ArrayPrototype[UNSCOPABLES] == undefined) {
        definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: create(null),
        });
      }

      // add a key to Array.prototype[@@unscopables]
      module.exports = function (key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
      };
      /** */ }),

    /** */ 4930:
    /** */ (function (module, exports, __webpack_require__) {
      const fails = __webpack_require__('d039');

      module.exports = !!Object.getOwnPropertySymbols && !fails(() =>
      // Chrome 38 Symbol has incorrect toString conversion
      // eslint-disable-next-line no-undef
        !String(Symbol()));
      /** */ }),

    /** */ '4d64':
    /** */ (function (module, exports, __webpack_require__) {
      const toIndexedObject = __webpack_require__('fc6a');
      const toLength = __webpack_require__('50c4');
      const toAbsoluteIndex = __webpack_require__('23cb');

      // `Array.prototype.{ indexOf, includes }` methods implementation
      const createMethod = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          const O = toIndexedObject($this);
          const length = toLength(O.length);
          let index = toAbsoluteIndex(fromIndex, length);
          let value;
          // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare
          if (IS_INCLUDES && el != el) {
            while (length > index) {
              value = O[index++];
              // eslint-disable-next-line no-self-compare
              if (value != value) return true;
            // Array#indexOf ignores holes, Array#includes - not
            }
          } else {
            for (;length > index; index++) {
              if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
            }
          } return !IS_INCLUDES && -1;
        };
      };

      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false),
      };
      /** */ }),

    /** */ '50c4':
    /** */ (function (module, exports, __webpack_require__) {
      const toInteger = __webpack_require__('a691');

      const { min } = Math;

      // `ToLength` abstract operation
      // https://tc39.github.io/ecma262/#sec-tolength
      module.exports = function (argument) {
        return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
      };
      /** */ }),

    /** */ 5135:
    /** */ (function (module, exports) {
      const { hasOwnProperty } = {};

      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };
      /** */ }),

    /** */ 5692:
    /** */ (function (module, exports, __webpack_require__) {
      const IS_PURE = __webpack_require__('c430');
      const store = __webpack_require__('c6cd');

      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
      })('versions', []).push({
        version: '3.6.1',
        mode: IS_PURE ? 'pure' : 'global',
        copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
      });
      /** */ }),

    /** */ '56ef':
    /** */ (function (module, exports, __webpack_require__) {
      const getBuiltIn = __webpack_require__('d066');
      const getOwnPropertyNamesModule = __webpack_require__('241c');
      const getOwnPropertySymbolsModule = __webpack_require__('7418');
      const anObject = __webpack_require__('825a');

      // all object keys, includes non-enumerable and symbols
      module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
        const keys = getOwnPropertyNamesModule.f(anObject(it));
        const getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
      };
      /** */ }),

    /** */ 5792:
    /** */ (function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /** */ }),

    /** */ 5899:
    /** */ (function (module, exports) {
      // a string of all valid unicode whitespaces
      // eslint-disable-next-line max-len
      module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
      /** */ }),

    /** */ '58a8':
    /** */ (function (module, exports, __webpack_require__) {
      const requireObjectCoercible = __webpack_require__('1d80');
      const whitespaces = __webpack_require__('5899');

      const whitespace = `[${whitespaces}]`;
      const ltrim = RegExp(`^${whitespace}${whitespace}*`);
      const rtrim = RegExp(`${whitespace + whitespace}*$`);

      // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
      const createMethod = function (TYPE) {
        return function ($this) {
          let string = String(requireObjectCoercible($this));
          if (TYPE & 1) string = string.replace(ltrim, '');
          if (TYPE & 2) string = string.replace(rtrim, '');
          return string;
        };
      };

      module.exports = {
        // `String.prototype.{ trimLeft, trimStart }` methods
        // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
        start: createMethod(1),
        // `String.prototype.{ trimRight, trimEnd }` methods
        // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
        end: createMethod(2),
        // `String.prototype.trim` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.trim
        trim: createMethod(3),
      };
      /** */ }),

    /** */ '5c6c':
    /** */ (function (module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value,
        };
      };
      /** */ }),

    /** */ '65f0':
    /** */ (function (module, exports, __webpack_require__) {
      const isObject = __webpack_require__('861d');
      const isArray = __webpack_require__('e8b5');
      const wellKnownSymbol = __webpack_require__('b622');

      const SPECIES = wellKnownSymbol('species');

      // `ArraySpeciesCreate` abstract operation
      // https://tc39.github.io/ecma262/#sec-arrayspeciescreate
      module.exports = function (originalArray, length) {
        let C;
        if (isArray(originalArray)) {
          C = originalArray.constructor;
          // cross-realm fallback
          if (typeof C === 'function' && (C === Array || isArray(C.prototype))) C = undefined;
          else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
          }
        } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
      };
      /** */ }),

    /** */ '69f3':
    /** */ (function (module, exports, __webpack_require__) {
      const NATIVE_WEAK_MAP = __webpack_require__('7f9a');
      const global = __webpack_require__('da84');
      const isObject = __webpack_require__('861d');
      const createNonEnumerableProperty = __webpack_require__('9112');
      const objectHas = __webpack_require__('5135');
      const sharedKey = __webpack_require__('f772');
      const hiddenKeys = __webpack_require__('d012');

      const { WeakMap } = global;
      let set; let get; let
        has;

      const enforce = function (it) {
        return has(it) ? get(it) : set(it, {});
      };

      const getterFor = function (TYPE) {
        return function (it) {
          let state;
          if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw TypeError(`Incompatible receiver, ${TYPE} required`);
          } return state;
        };
      };

      if (NATIVE_WEAK_MAP) {
        const store = new WeakMap();
        const wmget = store.get;
        const wmhas = store.has;
        const wmset = store.set;
        set = function (it, metadata) {
          wmset.call(store, it, metadata);
          return metadata;
        };
        get = function (it) {
          return wmget.call(store, it) || {};
        };
        has = function (it) {
          return wmhas.call(store, it);
        };
      } else {
        const STATE = sharedKey('state');
        hiddenKeys[STATE] = true;
        set = function (it, metadata) {
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get = function (it) {
          return objectHas(it, STATE) ? it[STATE] : {};
        };
        has = function (it) {
          return objectHas(it, STATE);
        };
      }

      module.exports = {
        set,
        get,
        has,
        enforce,
        getterFor,
      };
      /** */ }),

    /** */ '6eeb':
    /** */ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__('da84');
      const createNonEnumerableProperty = __webpack_require__('9112');
      const has = __webpack_require__('5135');
      const setGlobal = __webpack_require__('ce4e');
      const inspectSource = __webpack_require__('8925');
      const InternalStateModule = __webpack_require__('69f3');

      const getInternalState = InternalStateModule.get;
      const enforceInternalState = InternalStateModule.enforce;
      const TEMPLATE = String(String).split('String');

      (module.exports = function (O, key, value, options) {
        const unsafe = options ? !!options.unsafe : false;
        let simple = options ? !!options.enumerable : false;
        const noTargetGet = options ? !!options.noTargetGet : false;
        if (typeof value === 'function') {
          if (typeof key === 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
          enforceInternalState(value).source = TEMPLATE.join(typeof key === 'string' ? key : '');
        }
        if (O === global) {
          if (simple) O[key] = value;
          else setGlobal(key, value);
          return;
        } if (!unsafe) {
          delete O[key];
        } else if (!noTargetGet && O[key]) {
          simple = true;
        }
        if (simple) O[key] = value;
        else createNonEnumerableProperty(O, key, value);
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, 'toString', function toString() {
        return typeof this === 'function' && getInternalState(this).source || inspectSource(this);
      });
      /** */ }),

    /** */ 7156:
    /** */ (function (module, exports, __webpack_require__) {
      const isObject = __webpack_require__('861d');
      const setPrototypeOf = __webpack_require__('d2bb');

      // makes subclassing work correct for wrapped built-ins
      module.exports = function ($this, dummy, Wrapper) {
        let NewTarget; let
          NewTargetPrototype;
        if (
        // it can work only with native `setPrototypeOf`
          setPrototypeOf
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    && typeof (NewTarget = dummy.constructor) === 'function'
    && NewTarget !== Wrapper
    && isObject(NewTargetPrototype = NewTarget.prototype)
    && NewTargetPrototype !== Wrapper.prototype
        ) setPrototypeOf($this, NewTargetPrototype);
        return $this;
      };
      /** */ }),

    /** */ 7418:
    /** */ (function (module, exports) {
      exports.f = Object.getOwnPropertySymbols;
      /** */ }),

    /** */ 7839:
    /** */ (function (module, exports) {
      // IE8- don't enum bug keys
      module.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf',
      ];
      /** */ }),

    /** */ '7b0b':
    /** */ (function (module, exports, __webpack_require__) {
      const requireObjectCoercible = __webpack_require__('1d80');

      // `ToObject` abstract operation
      // https://tc39.github.io/ecma262/#sec-toobject
      module.exports = function (argument) {
        return Object(requireObjectCoercible(argument));
      };
      /** */ }),

    /** */ '7c73':
    /** */ (function (module, exports, __webpack_require__) {
      const anObject = __webpack_require__('825a');
      const defineProperties = __webpack_require__('37e8');
      const enumBugKeys = __webpack_require__('7839');
      const hiddenKeys = __webpack_require__('d012');
      const html = __webpack_require__('1be4');
      const documentCreateElement = __webpack_require__('cc12');
      const sharedKey = __webpack_require__('f772');

      const GT = '>';
      const LT = '<';
      const PROTOTYPE = 'prototype';
      const SCRIPT = 'script';
      const IE_PROTO = sharedKey('IE_PROTO');

      const EmptyConstructor = function () { /* empty */ };

      const scriptTag = function (content) {
        return `${LT + SCRIPT + GT + content + LT}/${SCRIPT}${GT}`;
      };

      // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
      const NullProtoObjectViaActiveX = function (activeXDocument) {
        activeXDocument.write(scriptTag(''));
        activeXDocument.close();
        const temp = activeXDocument.parentWindow.Object;
        activeXDocument = null; // avoid memory leak
        return temp;
      };

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      const NullProtoObjectViaIFrame = function () {
        // Thrash, waste and sodomy: IE GC bug
        const iframe = documentCreateElement('iframe');
        const JS = `java${SCRIPT}:`;
        let iframeDocument;
        iframe.style.display = 'none';
        html.appendChild(iframe);
        // https://github.com/zloirock/core-js/issues/475
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag('document.F=Object'));
        iframeDocument.close();
        return iframeDocument.F;
      };

      // Check for document.domain and active x support
      // No need to use active x approach when document.domain is not set
      // see https://github.com/es-shims/es5-shim/issues/150
      // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
      // avoid IE GC bug
      let activeXDocument;
      var NullProtoObject = function () {
        try {
          /* global ActiveXObject */
          activeXDocument = document.domain && new ActiveXObject('htmlfile');
        } catch (error) { /* ignore */ }
        NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
        let { length } = enumBugKeys;
        while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };

      hiddenKeys[IE_PROTO] = true;

      // `Object.create` method
      // https://tc39.github.io/ecma262/#sec-object.create
      module.exports = Object.create || function create(O, Properties) {
        let result;
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          // add "__proto__" for Object.getPrototypeOf polyfill
          result[IE_PROTO] = O;
        } else result = NullProtoObject();
        return Properties === undefined ? result : defineProperties(result, Properties);
      };
      /** */ }),

    /** */ '7db0':
    /** */ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__('23e7');
      const $find = __webpack_require__('b727').find;
      const addToUnscopables = __webpack_require__('44d2');

      const FIND = 'find';
      let SKIPS_HOLES = true;

      // Shouldn't skip holes
      if (FIND in []) Array(1)[FIND](() => { SKIPS_HOLES = false; });

      // `Array.prototype.find` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.find
      $({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
        find: function find(callbackfn /* , that = undefined */) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
      });

      // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
      addToUnscopables(FIND);
      /** */ }),

    /** */ '7f9a':
    /** */ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__('da84');
      const inspectSource = __webpack_require__('8925');

      const { WeakMap } = global;

      module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));
      /** */ }),

    /** */ '825a':
    /** */ (function (module, exports, __webpack_require__) {
      const isObject = __webpack_require__('861d');

      module.exports = function (it) {
        if (!isObject(it)) {
          throw TypeError(`${String(it)} is not an object`);
        } return it;
      };
      /** */ }),

    /** */ '83ab':
    /** */ (function (module, exports, __webpack_require__) {
      const fails = __webpack_require__('d039');

      // Thank's IE8 for his funny defineProperty
      module.exports = !fails(() => Object.defineProperty({}, 'a', { get() { return 7; } }).a != 7);
      /** */ }),

    /** */ '861d':
    /** */ (function (module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };
      /** */ }),

    /** */ 8925:
    /** */ (function (module, exports, __webpack_require__) {
      const store = __webpack_require__('c6cd');

      const functionToString = Function.toString;

      // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
      if (typeof store.inspectSource !== 'function') {
        store.inspectSource = function (it) {
          return functionToString.call(it);
        };
      }

      module.exports = store.inspectSource;
      /** */ }),

    /** */ '90e3':
    /** */ (function (module, exports) {
      let id = 0;
      const postfix = Math.random();

      module.exports = function (key) {
        return `Symbol(${String(key === undefined ? '' : key)})_${(++id + postfix).toString(36)}`;
      };
      /** */ }),

    /** */ 9112:
    /** */ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__('83ab');
      const definePropertyModule = __webpack_require__('9bf2');
      const createPropertyDescriptor = __webpack_require__('5c6c');

      module.exports = DESCRIPTORS ? function (object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
      /** */ }),

    /** */ '94ca':
    /** */ (function (module, exports, __webpack_require__) {
      const fails = __webpack_require__('d039');

      const replacement = /#|\.prototype\./;

      const isForced = function (feature, detection) {
        const value = data[normalize(feature)];
        return value == POLYFILL ? true
          : value == NATIVE ? false
            : typeof detection === 'function' ? fails(detection)
              : !!detection;
      };

      var normalize = isForced.normalize = function (string) {
        return String(string).replace(replacement, '.').toLowerCase();
      };

      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = 'N';
      var POLYFILL = isForced.POLYFILL = 'P';

      module.exports = isForced;
      /** */ }),

    /** */ '9bf2':
    /** */ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__('83ab');
      const IE8_DOM_DEFINE = __webpack_require__('0cfb');
      const anObject = __webpack_require__('825a');
      const toPrimitive = __webpack_require__('c04e');

      const nativeDefineProperty = Object.defineProperty;

      // `Object.defineProperty` method
      // https://tc39.github.io/ecma262/#sec-object.defineproperty
      exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) {
          try {
            return nativeDefineProperty(O, P, Attributes);
          } catch (error) { /* empty */ }
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };
      /** */ }),

    /** */ a691:
    /** */ (function (module, exports) {
      const { ceil } = Math;
      const { floor } = Math;

      // `ToInteger` abstract operation
      // https://tc39.github.io/ecma262/#sec-tointeger
      module.exports = function (argument) {
        return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
      };
      /** */ }),

    /** */ a9e3:
    /** */ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__('83ab');
      const global = __webpack_require__('da84');
      const isForced = __webpack_require__('94ca');
      const redefine = __webpack_require__('6eeb');
      const has = __webpack_require__('5135');
      const classof = __webpack_require__('c6b6');
      const inheritIfRequired = __webpack_require__('7156');
      const toPrimitive = __webpack_require__('c04e');
      const fails = __webpack_require__('d039');
      const create = __webpack_require__('7c73');
      const getOwnPropertyNames = __webpack_require__('241c').f;
      const getOwnPropertyDescriptor = __webpack_require__('06cf').f;
      const defineProperty = __webpack_require__('9bf2').f;
      const { trim } = __webpack_require__('58a8');

      const NUMBER = 'Number';
      const NativeNumber = global[NUMBER];
      const NumberPrototype = NativeNumber.prototype;

      // Opera ~12 has broken Object#toString
      const BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

      // `ToNumber` abstract operation
      // https://tc39.github.io/ecma262/#sec-tonumber
      const toNumber = function (argument) {
        let it = toPrimitive(argument, false);
        let first; let third; let radix; let maxCode; let digits; let length; let index; let
          code;
        if (typeof it === 'string' && it.length > 2) {
          it = trim(it);
          first = it.charCodeAt(0);
          if (first === 43 || first === 45) {
            third = it.charCodeAt(2);
            if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
          } else if (first === 48) {
            switch (it.charCodeAt(1)) {
              case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
              case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
              default: return +it;
            }
            digits = it.slice(2);
            length = digits.length;
            for (index = 0; index < length; index++) {
              code = digits.charCodeAt(index);
              // parseInt parses a string to a first unavailable symbol
              // but ToNumber should return NaN if a string contains unavailable symbols
              if (code < 48 || code > maxCode) return NaN;
            } return parseInt(digits, radix);
          }
        } return +it;
      };

      // `Number` constructor
      // https://tc39.github.io/ecma262/#sec-number-constructor
      if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
        var NumberWrapper = function Number(value) {
          const it = arguments.length < 1 ? 0 : value;
          const dummy = this;
          return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(() => { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
            ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
        };
        for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
          // ES3:
            'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,'
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    + 'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,'
    + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
          ).split(','), j = 0, key; keys.length > j; j++) {
          if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
            defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
          }
        }
        NumberWrapper.prototype = NumberPrototype;
        NumberPrototype.constructor = NumberWrapper;
        redefine(global, NUMBER, NumberWrapper);
      }
      /** */ }),

    /** */ b0c0:
    /** */ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__('83ab');
      const defineProperty = __webpack_require__('9bf2').f;

      const FunctionPrototype = Function.prototype;
      const FunctionPrototypeToString = FunctionPrototype.toString;
      const nameRE = /^\s*function ([^ (]*)/;
      const NAME = 'name';

      // Function instances `.name` property
      // https://tc39.github.io/ecma262/#sec-function-instances-name
      if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
        defineProperty(FunctionPrototype, NAME, {
          configurable: true,
          get() {
            try {
              return FunctionPrototypeToString.call(this).match(nameRE)[1];
            } catch (error) {
              return '';
            }
          },
        });
      }
      /** */ }),

    /** */ b622:
    /** */ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__('da84');
      const shared = __webpack_require__('5692');
      const has = __webpack_require__('5135');
      const uid = __webpack_require__('90e3');
      const NATIVE_SYMBOL = __webpack_require__('4930');
      const USE_SYMBOL_AS_UID = __webpack_require__('fdbf');

      const WellKnownSymbolsStore = shared('wks');
      const { Symbol } = global;
      const createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

      module.exports = function (name) {
        if (!has(WellKnownSymbolsStore, name)) {
          if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
          else WellKnownSymbolsStore[name] = createWellKnownSymbol(`Symbol.${name}`);
        } return WellKnownSymbolsStore[name];
      };
      /** */ }),

    /** */ b727:
    /** */ (function (module, exports, __webpack_require__) {
      const bind = __webpack_require__('f8c2');
      const IndexedObject = __webpack_require__('44ad');
      const toObject = __webpack_require__('7b0b');
      const toLength = __webpack_require__('50c4');
      const arraySpeciesCreate = __webpack_require__('65f0');

      const { push } = [];

      // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
      const createMethod = function (TYPE) {
        const IS_MAP = TYPE == 1;
        const IS_FILTER = TYPE == 2;
        const IS_SOME = TYPE == 3;
        const IS_EVERY = TYPE == 4;
        const IS_FIND_INDEX = TYPE == 6;
        const NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        return function ($this, callbackfn, that, specificCreate) {
          const O = toObject($this);
          const self = IndexedObject(O);
          const boundFunction = bind(callbackfn, that, 3);
          const length = toLength(self.length);
          let index = 0;
          const create = specificCreate || arraySpeciesCreate;
          const target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
          let value; let
            result;
          for (;length > index; index++) {
            if (NO_HOLES || index in self) {
              value = self[index];
              result = boundFunction(value, index, O);
              if (TYPE) {
                if (IS_MAP) target[index] = result; // map
                else if (result) {
                  switch (TYPE) {
                    case 3: return true; // some
                    case 5: return value; // find
                    case 6: return index; // findIndex
                    case 2: push.call(target, value); // filter
                  }
                } else if (IS_EVERY) return false; // every
              }
            }
          }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
      };

      module.exports = {
        // `Array.prototype.forEach` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
        forEach: createMethod(0),
        // `Array.prototype.map` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.map
        map: createMethod(1),
        // `Array.prototype.filter` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.filter
        filter: createMethod(2),
        // `Array.prototype.some` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.some
        some: createMethod(3),
        // `Array.prototype.every` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.every
        every: createMethod(4),
        // `Array.prototype.find` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.find
        find: createMethod(5),
        // `Array.prototype.findIndex` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
        findIndex: createMethod(6),
      };
      /** */ }),

    /** */ c04e:
    /** */ (function (module, exports, __webpack_require__) {
      const isObject = __webpack_require__('861d');

      // `ToPrimitive` abstract operation
      // https://tc39.github.io/ecma262/#sec-toprimitive
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function (input, PREFERRED_STRING) {
        if (!isObject(input)) return input;
        let fn; let
          val;
        if (PREFERRED_STRING && typeof (fn = input.toString) === 'function' && !isObject(val = fn.call(input))) return val;
        if (typeof (fn = input.valueOf) === 'function' && !isObject(val = fn.call(input))) return val;
        if (!PREFERRED_STRING && typeof (fn = input.toString) === 'function' && !isObject(val = fn.call(input))) return val;
        throw TypeError("Can't convert object to primitive value");
      };
      /** */ }),

    /** */ c430:
    /** */ (function (module, exports) {
      module.exports = false;
      /** */ }),

    /** */ c6b6:
    /** */ (function (module, exports) {
      const { toString } = {};

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };
      /** */ }),

    /** */ c6cd:
    /** */ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__('da84');
      const setGlobal = __webpack_require__('ce4e');

      const SHARED = '__core-js_shared__';
      const store = global[SHARED] || setGlobal(SHARED, {});

      module.exports = store;
      /** */ }),

    /** */ c8ba:
    /** */ (function (module, exports) {
      let g;

      // This works in non-strict mode
      g = (function () {
        return this;
      }());

      try {
        // This works if eval is allowed (see CSP)
        g = g || new Function('return this')();
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === 'object') g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;
      /** */ }),

    /** */ ca84:
    /** */ (function (module, exports, __webpack_require__) {
      const has = __webpack_require__('5135');
      const toIndexedObject = __webpack_require__('fc6a');
      const { indexOf } = __webpack_require__('4d64');
      const hiddenKeys = __webpack_require__('d012');

      module.exports = function (object, names) {
        const O = toIndexedObject(object);
        let i = 0;
        const result = [];
        let key;
        for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
        // Don't enum bug & hidden keys
        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~indexOf(result, key) || result.push(key);
          }
        }
        return result;
      };
      /** */ }),

    /** */ cc12:
    /** */ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__('da84');
      const isObject = __webpack_require__('861d');

      const { document } = global;
      // typeof document.createElement is 'object' in old IE
      const EXISTS = isObject(document) && isObject(document.createElement);

      module.exports = function (it) {
        return EXISTS ? document.createElement(it) : {};
      };
      /** */ }),

    /** */ ce4e:
    /** */ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__('da84');
      const createNonEnumerableProperty = __webpack_require__('9112');

      module.exports = function (key, value) {
        try {
          createNonEnumerableProperty(global, key, value);
        } catch (error) {
          global[key] = value;
        } return value;
      };
      /** */ }),

    /** */ d012:
    /** */ (function (module, exports) {
      module.exports = {};
      /** */ }),

    /** */ d039:
    /** */ (function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
      /** */ }),

    /** */ d066:
    /** */ (function (module, exports, __webpack_require__) {
      const path = __webpack_require__('428f');
      const global = __webpack_require__('da84');

      const aFunction = function (variable) {
        return typeof variable === 'function' ? variable : undefined;
      };

      module.exports = function (namespace, method) {
        return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
          : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
      };
      /** */ }),

    /** */ d1e7:
    /** */ (function (module, exports, __webpack_require__) {
      const nativePropertyIsEnumerable = {}.propertyIsEnumerable;
      const { getOwnPropertyDescriptor } = Object;

      // Nashorn ~ JDK8 bug
      const NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

      // `Object.prototype.propertyIsEnumerable` method implementation
      // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        const descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : nativePropertyIsEnumerable;
      /** */ }),

    /** */ d2bb:
    /** */ (function (module, exports, __webpack_require__) {
      const anObject = __webpack_require__('825a');
      const aPossiblePrototype = __webpack_require__('3bbe');

      // `Object.setPrototypeOf` method
      // https://tc39.github.io/ecma262/#sec-object.setprototypeof
      // Works with __proto__ only. Old v8 can't work with null proto objects.
      /* eslint-disable no-proto */
      module.exports = Object.setPrototypeOf || ('__proto__' in {} ? (function () {
        let CORRECT_SETTER = false;
        const test = {};
        let setter;
        try {
          setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
          setter.call(test, []);
          CORRECT_SETTER = test instanceof Array;
        } catch (error) { /* empty */ }
        return function setPrototypeOf(O, proto) {
          anObject(O);
          aPossiblePrototype(proto);
          if (CORRECT_SETTER) setter.call(O, proto);
          else O.__proto__ = proto;
          return O;
        };
      }()) : undefined);
      /** */ }),

    /** */ da84:
    /** */ (function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */(function (global) {
        const check = function (it) {
          return it && it.Math == Math && it;
        };

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis === 'object' && globalThis)
  || check(typeof window === 'object' && window)
  || check(typeof self === 'object' && self)
  || check(typeof global === 'object' && global)
  // eslint-disable-next-line no-new-func
  || Function('return this')();
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__('c8ba')));
      /** */ }),

    /** */ df75:
    /** */ (function (module, exports, __webpack_require__) {
      const internalObjectKeys = __webpack_require__('ca84');
      const enumBugKeys = __webpack_require__('7839');

      // `Object.keys` method
      // https://tc39.github.io/ecma262/#sec-object.keys
      module.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
      /** */ }),

    /** */ e893:
    /** */ (function (module, exports, __webpack_require__) {
      const has = __webpack_require__('5135');
      const ownKeys = __webpack_require__('56ef');
      const getOwnPropertyDescriptorModule = __webpack_require__('06cf');
      const definePropertyModule = __webpack_require__('9bf2');

      module.exports = function (target, source) {
        const keys = ownKeys(source);
        const defineProperty = definePropertyModule.f;
        const getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      };
      /** */ }),

    /** */ e8b5:
    /** */ (function (module, exports, __webpack_require__) {
      const classof = __webpack_require__('c6b6');

      // `IsArray` abstract operation
      // https://tc39.github.io/ecma262/#sec-isarray
      module.exports = Array.isArray || function isArray(arg) {
        return classof(arg) == 'Array';
      };
      /** */ }),

    /** */ f6fd:
    /** */ (function (module, exports) {
      // document.currentScript polyfill by Adam Miller

      // MIT license

      (function (document) {
        const currentScript = 'currentScript';
        const scripts = document.getElementsByTagName('script'); // Live NodeList collection

        // If browser needs currentScript polyfill, add get currentScript() to the document object
        if (!(currentScript in document)) {
          Object.defineProperty(document, currentScript, {
            get() {
              // IE 6-10 supports script readyState
              // IE 10+ support stack trace
              try { throw new Error(); } catch (err) {
                // Find the second match for the "at" string to get file src url from stack.
                // Specifically works with the format of stack traces in IE.
                let i; const
                  res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

                // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
                for (i in scripts) {
                  if (scripts[i].src == res || scripts[i].readyState == 'interactive') {
                    return scripts[i];
                  }
                }

                // If no match, return null
                return null;
              }
            },
          });
        }
      }(document));
      /** */ }),

    /** */ f772:
    /** */ (function (module, exports, __webpack_require__) {
      const shared = __webpack_require__('5692');
      const uid = __webpack_require__('90e3');

      const keys = shared('keys');

      module.exports = function (key) {
        return keys[key] || (keys[key] = uid(key));
      };
      /** */ }),

    /** */ f8c2:
    /** */ (function (module, exports, __webpack_require__) {
      const aFunction = __webpack_require__('1c0b');

      // optional / simple context binding
      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 0: return function () {
            return fn.call(that);
          };
          case 1: return function (a) {
            return fn.call(that, a);
          };
          case 2: return function (a, b) {
            return fn.call(that, a, b);
          };
          case 3: return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
        }
        return function (/* ...args */) {
          return fn.apply(that, arguments);
        };
      };
      /** */ }),

    /** */ fb15:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);

      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
      // This file is imported into lib/wc client bundles.

      if (typeof window !== 'undefined') {
        if (true) {
          __webpack_require__('f6fd');
        }

        let i;
        if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
        }
      }

      // Indicate to webpack that this file can be concatenated
      /* harmony default export */ const setPublicPath = (null);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
      const es_function_name = __webpack_require__('b0c0');

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5527b7bf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HeroIcon.vue?vue&type=template&id=44f3ccc0&
      const render = function () {
        const _vm = this; const _h = _vm.$createElement; const _c = _vm._self._c || _h; return _c('svg', {
          class: ['heroicon-ui', _vm.name],
          attrs: {
            xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: _vm.width, fill: _vm.fill, height: _vm.height,
          },
          domProps: { innerHTML: _vm._s(_vm.icon) },
          on: { click($event) { return _vm.$emit('click'); } },
        });
      };
      const staticRenderFns = [];


      // CONCATENATED MODULE: ./src/components/HeroIcon.vue?vue&type=template&id=44f3ccc0&

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
      const es_array_find = __webpack_require__('7db0');

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
      const es_number_constructor = __webpack_require__('a9e3');

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HeroIcon.vue?vue&type=script&lang=js&


      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /* harmony default export */ const HeroIconvue_type_script_lang_js_ = ({
        name: 'heroicon',
        props: {
          name: {
            type: String,
            required: true,
          },
          width: {
            type: [String, Number],
            default: 24,
          },
          height: {
            type: [String, Number],
            default: 24,
          },
          fill: {
            type: String,
            default: 'inherit',
          },
        },
        lib: [],
        add: function add(icons) {
          if (Array.isArray(icons)) {
            this.lib = icons;
          } else {
            this.lib.push(icons);
          }
        },
        computed: {
          icon: function icon() {
            const _this = this;

            const findIcon = this.$options.lib.find(icon => icon.name === _this.name);

            if (findIcon) {
              return findIcon.path;
            }
            /* eslint-disable no-console */


            console.error("Can't find ".concat(this.name));
            /* eslint-enable no-console */

            return undefined;
          },
        },
      });
      // CONCATENATED MODULE: ./src/components/HeroIcon.vue?vue&type=script&lang=js&
      /* harmony default export */ const components_HeroIconvue_type_script_lang_js_ = (HeroIconvue_type_script_lang_js_);
      // EXTERNAL MODULE: ./src/components/HeroIcon.vue?vue&type=style&index=0&lang=css&
      const HeroIconvue_type_style_index_0_lang_css_ = __webpack_require__('ffcd');

      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      /* globals __VUE_SSR_CONTEXT__ */

      // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
      // This module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle.

      function normalizeComponent(
        scriptExports,
        render,
        staticRenderFns,
        functionalTemplate,
        injectStyles,
        scopeId,
        moduleIdentifier, /* server only */
        shadowMode, /* vue-cli only */
      ) {
        // Vue.extend constructor export interop
        const options = typeof scriptExports === 'function'
          ? scriptExports.options
          : scriptExports;

        // render functions
        if (render) {
          options.render = render;
          options.staticRenderFns = staticRenderFns;
          options._compiled = true;
        }

        // functional template
        if (functionalTemplate) {
          options.functional = true;
        }

        // scopedId
        if (scopeId) {
          options._scopeId = `data-v-${scopeId}`;
        }

        let hook;
        if (moduleIdentifier) { // server build
          hook = function (context) {
            // 2.3 injection
            context = context // cached call
        || (this.$vnode && this.$vnode.ssrContext) // stateful
        || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (injectStyles) {
              injectStyles.call(this, context);
            }
            // register component module identifier for async chunk inferrence
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
        } else if (injectStyles) {
          hook = shadowMode
            ? function () { injectStyles.call(this, this.$root.$options.shadowRoot); }
            : injectStyles;
        }

        if (hook) {
          if (options.functional) {
            // for template-only hot-reload because in that case the render fn doesn't
            // go through the normalizer
            options._injectStyles = hook;
            // register for functioal component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context);
            };
          } else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing
              ? [].concat(existing, hook)
              : [hook];
          }
        }

        return {
          exports: scriptExports,
          options,
        };
      }

      // CONCATENATED MODULE: ./src/components/HeroIcon.vue


      /* normalize component */

      const component = normalizeComponent(
        components_HeroIconvue_type_script_lang_js_,
        render,
        staticRenderFns,
        false,
        null,
        null,
        null,

      );

      /* harmony default export */ const HeroIcon = (component.exports);
      // CONCATENATED MODULE: ./src/components/index.js


      /* harmony default export */ const components = ({
        install: function install(Vue) {
          Vue.component(HeroIcon.name, HeroIcon);
        },
        add: function add(icons) {
          HeroIcon.add(icons);
        },
      });

      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
      /* concated harmony reexport HeroIcon */__webpack_require__.d(__webpack_exports__, 'HeroIcon', () => HeroIcon);


      /* harmony default export */ const entry_lib = __webpack_exports__.default = (components);
      /** */ }),

    /** */ fc6a:
    /** */ (function (module, exports, __webpack_require__) {
      // toObject with fallback for non-array-like ES3 strings
      const IndexedObject = __webpack_require__('44ad');
      const requireObjectCoercible = __webpack_require__('1d80');

      module.exports = function (it) {
        return IndexedObject(requireObjectCoercible(it));
      };
      /** */ }),

    /** */ fdbf:
    /** */ (function (module, exports, __webpack_require__) {
      const NATIVE_SYMBOL = __webpack_require__('4930');

      module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator === 'symbol';
      /** */ }),

    /** */ ffcd:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      /* harmony import */ const _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroIcon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('5792');
      /* harmony import */ const _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroIcon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroIcon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
      /* unused harmony reexport * */
      /* unused harmony default export */ const _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroIcon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a);
      /** */ }),

    /** *** */ }))));
// # sourceMappingURL=vue-heroicons.umd.js.map
