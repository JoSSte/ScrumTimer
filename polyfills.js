var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/core-js/internals/global-this.js"(exports, module) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
  }
});

// node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/core-js/internals/is-pure.js"(exports, module) {
    "use strict";
    module.exports = false;
  }
});

// node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/core-js/internals/define-global-property.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    var defineProperty = Object.defineProperty;
    module.exports = function(key, value) {
      try {
        defineProperty(globalThis2, key, { value, configurable: true, writable: true });
      } catch (error) {
        globalThis2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/core-js/internals/shared-store.js"(exports, module) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.50.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",
      license: "https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/core-js/internals/shared.js"(exports, module) {
    "use strict";
    var store = require_shared_store();
    var create = Object.create || Object;
    module.exports = function(key, value) {
      return store[key] || (store[key] = value || create(null));
    };
  }
});

// node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/core-js/internals/fails.js"(exports, module) {
    "use strict";
    module.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/core-js/internals/function-bind-native.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    module.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/core-js/internals/is-null-or-undefined.js"(exports, module) {
    "use strict";
    module.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/core-js/internals/to-object.js"(exports, module) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/core-js/internals/has-own-property.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/core-js/internals/uid.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1.1.toString);
    module.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/core-js/internals/environment-user-agent.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
    module.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/core-js/internals/environment-v8-version.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    var userAgent = require_environment_user_agent();
    var process = globalThis2.process;
    var Deno = globalThis2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
      }
    }
    module.exports = version;
  }
});

// node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module) {
    "use strict";
    var V8_VERSION = require_environment_v8_version();
    var fails = require_fails();
    var globalThis2 = require_global_this();
    var $String = globalThis2.String;
    module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = /* @__PURE__ */ Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = globalThis2.Symbol;
    var WellKnownSymbolsStore = shared("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/core-js/internals/to-string-tag-support.js"(exports, module) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module.exports = String(test) === "[object z]";
  }
});

// node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/core-js/internals/is-callable.js"(exports, module) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/core-js/internals/descriptors.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    module.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/core-js/internals/is-object.js"(exports, module) {
    "use strict";
    var isCallable = require_is_callable();
    module.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/core-js/internals/document-create-element.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var document2 = globalThis2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    module.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
  }
});

// node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/core-js/internals/an-object.js"(exports, module) {
    "use strict";
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isObject(argument)) return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/core-js/internals/function-call.js"(exports, module) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/core-js/internals/get-built-in.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
    };
  }
});

// node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/core-js/internals/is-symbol.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/core-js/internals/try-to-string.js"(exports, module) {
    "use strict";
    var $String = String;
    module.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/core-js/internals/a-callable.js"(exports, module) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isCallable(argument)) return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/core-js/internals/get-method.js"(exports, module) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/core-js/internals/to-primitive.js"(exports, module) {
    "use strict";
    var call = require_function_call();
    var isObject = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0) pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/core-js/internals/to-property-key.js"(exports, module) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/core-js/internals/object-define-property.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/core-js/internals/function-name.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/core-js/internals/inspect-source.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module.exports = store.inspectSource;
  }
});

// node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
    "use strict";
    module.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/core-js/internals/shared-key.js"(exports, module) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/core-js/internals/hidden-keys.js"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/core-js/internals/internal-state.js"(exports, module) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = globalThis2.TypeError;
    var WeakMap = globalThis2.WeakMap;
    var set;
    var get;
    var has;
    var enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = function(it, metadata) {
        if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      };
      get = function(it) {
        return store.get(it) || {};
      };
      has = function(it) {
        return store.has(it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var STATE;
    module.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
  }
});

// node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/core-js/internals/make-built-in.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var DESCRIPTORS = require_descriptors();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var inspectSource = require_inspect_source();
    var InternalStateModule = require_internal_state();
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var $String = String;
    var defineProperty = Object.defineProperty;
    var stringSlice = uncurryThis("".slice);
    var replace = uncurryThis("".replace);
    var join = uncurryThis([].join);
    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", { value: 8 }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module.exports = function(value, name, options) {
      if (stringSlice($String(name), 0, 7) === "Symbol(") {
        name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
      }
      if (options && options.getter) name = "get " + name;
      if (options && options.setter) name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", { value: name, configurable: true });
        else value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype) value.prototype = void 0;
      } catch (error) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn(state, "source")) {
        state.source = join(TEMPLATE, typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn(function toString() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/core-js/internals/define-built-in.js"(exports, module) {
    "use strict";
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module.exports = function(O, key, value, options) {
      if (!options) options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value)) makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe) delete O[key];
          else if (O[key]) simple = true;
        } catch (error) {
        }
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
          value,
          enumerable: false,
          configurable: !options.nonConfigurable,
          writable: !options.nonWritable
        });
      }
      return O;
    };
  }
});

// node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/core-js/internals/classof-raw.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/core-js/internals/classof.js"(exports, module) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ (function() {
      return arguments;
    })()) === "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/core-js/internals/object-to-string.js
var require_object_to_string = __commonJS({
  "node_modules/core-js/internals/object-to-string.js"(exports, module) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var classof = require_classof();
    module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
      return "[object " + classof(this) + "]";
    };
  }
});

// node_modules/core-js/modules/es.object.to-string.js
var require_es_object_to_string = __commonJS({
  "node_modules/core-js/modules/es.object.to-string.js"() {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var defineBuiltIn = require_define_built_in();
    var toString = require_object_to_string();
    if (!TO_STRING_TAG_SUPPORT) {
      defineBuiltIn(Object.prototype, "toString", toString, { unsafe: true });
    }
  }
});

// node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/core-js/internals/indexed-object.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var call = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) {
      }
      if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/core-js/internals/math-trunc.js"(exports, module) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
    "use strict";
    var trunc = require_math_trunc();
    module.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/core-js/internals/to-length.js"(exports, module) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
    "use strict";
    var toLength = require_to_length();
    module.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/core-js/internals/array-includes.js"(exports, module) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el) while (length > index) {
          value = O[index++];
          if (value !== value) return true;
        }
        else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };
    module.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
  }
});

// node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i) if (hasOwn(O, key = names[i++])) {
        ~indexOf(result, key) || push(result, key);
      }
      return result;
    };
  }
});

// node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
    "use strict";
    module.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/core-js/internals/own-keys.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject = require_an_object();
    var concat = uncurryThis([].concat);
    module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
    "use strict";
    var hasOwn = require_has_own_property();
    var ownKeys = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module.exports = function(target, source, exceptions) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/core-js/internals/is-forced.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module.exports = isForced;
  }
});

// node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/core-js/internals/export.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var defineGlobalProperty = require_define_global_property();
    var copyConstructorProperties = require_copy_constructor_properties();
    var isForced = require_is_forced();
    module.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = globalThis2;
      } else if (STATIC) {
        target = globalThis2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = globalThis2[TARGET] && globalThis2[TARGET].prototype;
      }
      if (target) for (key in source) {
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
          descriptor = getOwnPropertyDescriptor(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        if (!FORCED && targetProperty !== void 0) {
          if (typeof sourceProperty == typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        }
        if (options.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty(sourceProperty, "sham", true);
        }
        defineBuiltIn(target, key, sourceProperty, options);
      }
    };
  }
});

// node_modules/core-js/internals/function-apply.js
var require_function_apply = __commonJS({
  "node_modules/core-js/internals/function-apply.js"(exports, module) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var apply = FunctionPrototype.apply;
    var call = FunctionPrototype.call;
    module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
      return call.apply(apply, arguments);
    });
  }
});

// node_modules/core-js/modules/es.reflect.apply.js
var require_es_reflect_apply = __commonJS({
  "node_modules/core-js/modules/es.reflect.apply.js"() {
    "use strict";
    var $ = require_export();
    var functionApply = require_function_apply();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var fails = require_fails();
    var OPTIONAL_ARGUMENTS_LIST = !fails(function() {
      Reflect.apply(function() {
      });
    });
    $({ target: "Reflect", stat: true, forced: OPTIONAL_ARGUMENTS_LIST }, {
      apply: function apply(target, thisArgument, argumentsList) {
        return functionApply(aCallable(target), thisArgument, anObject(argumentsList));
      }
    });
  }
});

// node_modules/core-js/internals/array-slice.js
var require_array_slice = __commonJS({
  "node_modules/core-js/internals/array-slice.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module.exports = uncurryThis([].slice);
  }
});

// node_modules/core-js/internals/function-bind.js
var require_function_bind = __commonJS({
  "node_modules/core-js/internals/function-bind.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var aCallable = require_a_callable();
    var isObject = require_is_object();
    var hasOwn = require_has_own_property();
    var arraySlice = require_array_slice();
    var NATIVE_BIND = require_function_bind_native();
    var $Function = Function;
    var concat = uncurryThis([].concat);
    var join = uncurryThis([].join);
    var factories = {};
    var construct = function(C, argsLength, args) {
      if (!hasOwn(factories, argsLength)) {
        var list = [];
        var i = 0;
        for (; i < argsLength; i++) list[i] = "a[" + i + "]";
        factories[argsLength] = $Function("C,a", "return new C(" + join(list, ",") + ")");
      }
      return factories[argsLength](C, args);
    };
    module.exports = NATIVE_BIND ? $Function.bind : function bind(that) {
      var F = aCallable(this);
      var Prototype = F.prototype;
      var partArgs = arraySlice(arguments, 1);
      var boundFunction = function bound() {
        var args = concat(partArgs, arraySlice(arguments));
        return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
      };
      if (isObject(Prototype)) boundFunction.prototype = Prototype;
      return boundFunction;
    };
  }
});

// node_modules/core-js/internals/is-constructor.js
var require_is_constructor = __commonJS({
  "node_modules/core-js/internals/is-constructor.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var classof = require_classof();
    var getBuiltIn = require_get_built_in();
    var inspectSource = require_inspect_source();
    var noop = function() {
    };
    var construct = getBuiltIn("Reflect", "construct");
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = uncurryThis(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
    var isConstructorModern = function isConstructor(argument) {
      if (!isCallable(argument)) return false;
      try {
        construct(noop, [], argument);
        return true;
      } catch (error) {
        return false;
      }
    };
    var isConstructorLegacy = function isConstructor(argument) {
      if (!isCallable(argument)) return false;
      switch (classof(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return false;
      }
      try {
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      } catch (error) {
        return true;
      }
    };
    isConstructorLegacy.sham = true;
    module.exports = !construct || fails(function() {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
  }
});

// node_modules/core-js/internals/a-constructor.js
var require_a_constructor = __commonJS({
  "node_modules/core-js/internals/a-constructor.js"(exports, module) {
    "use strict";
    var isConstructor = require_is_constructor();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isConstructor(argument)) return argument;
      throw new $TypeError(tryToString(argument) + " is not a constructor");
    };
  }
});

// node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/core-js/internals/object-keys.js"(exports, module) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/core-js/internals/object-define-properties.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var definePropertyModule = require_object_define_property();
    var anObject = require_an_object();
    var toIndexedObject = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var props = toIndexedObject(Properties);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    };
  }
});

// node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/core-js/internals/html.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    module.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/core-js/internals/object-create.js"(exports, module) {
    "use strict";
    var anObject = require_an_object();
    var definePropertiesModule = require_object_define_properties();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = require_hidden_keys();
    var html = require_html();
    var documentCreateElement = require_document_create_element();
    var sharedKey = require_shared_key();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = function() {
    };
    var scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    module.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/core-js/modules/es.reflect.construct.js
var require_es_reflect_construct = __commonJS({
  "node_modules/core-js/modules/es.reflect.construct.js"() {
    "use strict";
    var $ = require_export();
    var getBuiltIn = require_get_built_in();
    var apply = require_function_apply();
    var bind = require_function_bind();
    var aConstructor = require_a_constructor();
    var anObject = require_an_object();
    var isObject = require_is_object();
    var create = require_object_create();
    var fails = require_fails();
    var nativeConstruct = getBuiltIn("Reflect", "construct");
    var ObjectPrototype = Object.prototype;
    var push = [].push;
    var NEW_TARGET_BUG = fails(function() {
      function F() {
      }
      return !(nativeConstruct(function() {
      }, [], F) instanceof F);
    });
    var ARGS_BUG = !fails(function() {
      nativeConstruct(function() {
      });
    });
    var FORCED = NEW_TARGET_BUG || ARGS_BUG;
    $({ target: "Reflect", stat: true, forced: FORCED, sham: FORCED }, {
      construct: function construct(Target, args) {
        aConstructor(Target);
        var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
        anObject(args);
        if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
        if (Target === newTarget) {
          switch (args.length) {
            case 0:
              return new Target();
            case 1:
              return new Target(args[0]);
            case 2:
              return new Target(args[0], args[1]);
            case 3:
              return new Target(args[0], args[1], args[2]);
            case 4:
              return new Target(args[0], args[1], args[2], args[3]);
          }
          var $args = [null];
          apply(push, $args, args);
          return new (apply(bind, Target, $args))();
        }
        var proto = newTarget.prototype;
        var instance = create(isObject(proto) ? proto : ObjectPrototype);
        var result = apply(Target, instance, args);
        return isObject(result) ? result : instance;
      }
    });
  }
});

// node_modules/core-js/modules/es.reflect.define-property.js
var require_es_reflect_define_property = __commonJS({
  "node_modules/core-js/modules/es.reflect.define-property.js"() {
    "use strict";
    var $ = require_export();
    var DESCRIPTORS = require_descriptors();
    var anObject = require_an_object();
    var toPropertyKey = require_to_property_key();
    var definePropertyModule = require_object_define_property();
    var isCallable = require_is_callable();
    var fails = require_fails();
    var $TypeError = TypeError;
    var ERROR_INSTEAD_OF_FALSE = fails(function() {
      Reflect.defineProperty(definePropertyModule.f({}, 1, { value: 1 }), 1, { value: 2 });
    });
    $({ target: "Reflect", stat: true, forced: ERROR_INSTEAD_OF_FALSE, sham: !DESCRIPTORS }, {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        anObject(target);
        var key = toPropertyKey(propertyKey);
        var get, set;
        anObject(attributes);
        if (("get" in attributes || "set" in attributes) && ("get" in attributes && !isCallable(get = attributes.get) && get !== void 0 || "set" in attributes && !isCallable(set = attributes.set) && set !== void 0 || ("value" in attributes || "writable" in attributes))) throw new $TypeError("Invalid property descriptor");
        try {
          definePropertyModule.f(target, key, attributes);
          return true;
        } catch (error) {
          return false;
        }
      }
    });
  }
});

// node_modules/core-js/modules/es.reflect.delete-property.js
var require_es_reflect_delete_property = __commonJS({
  "node_modules/core-js/modules/es.reflect.delete-property.js"() {
    "use strict";
    var $ = require_export();
    var anObject = require_an_object();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var toPropertyKey = require_to_property_key();
    $({ target: "Reflect", stat: true }, {
      deleteProperty: function deleteProperty(target, propertyKey) {
        anObject(target);
        var key = toPropertyKey(propertyKey);
        var descriptor = getOwnPropertyDescriptor(target, key);
        return descriptor && !descriptor.configurable ? false : delete target[key];
      }
    });
  }
});

// node_modules/core-js/internals/is-data-descriptor.js
var require_is_data_descriptor = __commonJS({
  "node_modules/core-js/internals/is-data-descriptor.js"(exports, module) {
    "use strict";
    var hasOwn = require_has_own_property();
    module.exports = function(descriptor) {
      return descriptor !== void 0 && (hasOwn(descriptor, "value") || hasOwn(descriptor, "writable"));
    };
  }
});

// node_modules/core-js/internals/correct-prototype-getter.js
var require_correct_prototype_getter = __commonJS({
  "node_modules/core-js/internals/correct-prototype-getter.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    module.exports = !fails(function() {
      function F() {
      }
      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });
  }
});

// node_modules/core-js/internals/object-get-prototype-of.js
var require_object_get_prototype_of = __commonJS({
  "node_modules/core-js/internals/object-get-prototype-of.js"(exports, module) {
    "use strict";
    var hasOwn = require_has_own_property();
    var isCallable = require_is_callable();
    var toObject = require_to_object();
    var sharedKey = require_shared_key();
    var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
    var IE_PROTO = sharedKey("IE_PROTO");
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
      var object = toObject(O);
      if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
      var constructor = object.constructor;
      if (isCallable(constructor) && object instanceof constructor) {
        return constructor.prototype;
      }
      return object instanceof $Object ? ObjectPrototype : null;
    };
  }
});

// node_modules/core-js/modules/es.reflect.get.js
var require_es_reflect_get = __commonJS({
  "node_modules/core-js/modules/es.reflect.get.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var isObject = require_is_object();
    var anObject = require_an_object();
    var isDataDescriptor = require_is_data_descriptor();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var getPrototypeOf = require_object_get_prototype_of();
    var toPropertyKey = require_to_property_key();
    var $get = function(target, propertyKey, receiver) {
      if (anObject(target) === receiver) return target[propertyKey];
      var descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey);
      if (descriptor) return isDataDescriptor(descriptor) ? descriptor.value : descriptor.get === void 0 ? void 0 : call(descriptor.get, receiver);
      var prototype = getPrototypeOf(target);
      if (isObject(prototype)) return $get(prototype, propertyKey, receiver);
    };
    $({ target: "Reflect", stat: true }, {
      get: function get(target, propertyKey) {
        return $get(anObject(target), toPropertyKey(propertyKey), arguments.length < 3 ? target : arguments[2]);
      }
    });
  }
});

// node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js
var require_es_reflect_get_own_property_descriptor = __commonJS({
  "node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js"() {
    "use strict";
    var $ = require_export();
    var DESCRIPTORS = require_descriptors();
    var anObject = require_an_object();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    $({ target: "Reflect", stat: true, sham: !DESCRIPTORS }, {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        return getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
      }
    });
  }
});

// node_modules/core-js/modules/es.reflect.get-prototype-of.js
var require_es_reflect_get_prototype_of = __commonJS({
  "node_modules/core-js/modules/es.reflect.get-prototype-of.js"() {
    "use strict";
    var $ = require_export();
    var anObject = require_an_object();
    var objectGetPrototypeOf = require_object_get_prototype_of();
    var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
    $({ target: "Reflect", stat: true, sham: !CORRECT_PROTOTYPE_GETTER }, {
      getPrototypeOf: function getPrototypeOf(target) {
        return objectGetPrototypeOf(anObject(target));
      }
    });
  }
});

// node_modules/core-js/modules/es.reflect.has.js
var require_es_reflect_has = __commonJS({
  "node_modules/core-js/modules/es.reflect.has.js"() {
    "use strict";
    var $ = require_export();
    $({ target: "Reflect", stat: true }, {
      has: function has(target, propertyKey) {
        return propertyKey in target;
      }
    });
  }
});

// node_modules/core-js/internals/array-buffer-non-extensible.js
var require_array_buffer_non_extensible = __commonJS({
  "node_modules/core-js/internals/array-buffer-non-extensible.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    module.exports = fails(function() {
      if (typeof ArrayBuffer == "function") {
        var buffer = new ArrayBuffer(8);
        if (Object.isExtensible(buffer)) Object.defineProperty(buffer, "a", { value: 8 });
      }
    });
  }
});

// node_modules/core-js/internals/object-is-extensible.js
var require_object_is_extensible = __commonJS({
  "node_modules/core-js/internals/object-is-extensible.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    var isObject = require_is_object();
    var classof = require_classof_raw();
    var ARRAY_BUFFER_NON_EXTENSIBLE = require_array_buffer_non_extensible();
    var $isExtensible = Object.isExtensible;
    var FAILS_ON_PRIMITIVES = fails(function() {
      $isExtensible(1);
    });
    module.exports = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
      if (!isObject(it)) return false;
      if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === "ArrayBuffer") return false;
      return $isExtensible ? $isExtensible(it) : true;
    } : $isExtensible;
  }
});

// node_modules/core-js/modules/es.reflect.is-extensible.js
var require_es_reflect_is_extensible = __commonJS({
  "node_modules/core-js/modules/es.reflect.is-extensible.js"() {
    "use strict";
    var $ = require_export();
    var anObject = require_an_object();
    var $isExtensible = require_object_is_extensible();
    $({ target: "Reflect", stat: true }, {
      isExtensible: function isExtensible(target) {
        anObject(target);
        return $isExtensible(target);
      }
    });
  }
});

// node_modules/core-js/modules/es.reflect.own-keys.js
var require_es_reflect_own_keys = __commonJS({
  "node_modules/core-js/modules/es.reflect.own-keys.js"() {
    "use strict";
    var $ = require_export();
    var ownKeys = require_own_keys();
    $({ target: "Reflect", stat: true }, {
      ownKeys
    });
  }
});

// node_modules/core-js/internals/freezing.js
var require_freezing = __commonJS({
  "node_modules/core-js/internals/freezing.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    module.exports = !fails(function() {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  }
});

// node_modules/core-js/modules/es.reflect.prevent-extensions.js
var require_es_reflect_prevent_extensions = __commonJS({
  "node_modules/core-js/modules/es.reflect.prevent-extensions.js"() {
    "use strict";
    var $ = require_export();
    var getBuiltIn = require_get_built_in();
    var anObject = require_an_object();
    var FREEZING = require_freezing();
    $({ target: "Reflect", stat: true, sham: !FREEZING }, {
      preventExtensions: function preventExtensions(target) {
        anObject(target);
        try {
          var objectPreventExtensions = getBuiltIn("Object", "preventExtensions");
          if (objectPreventExtensions) objectPreventExtensions(target);
          return true;
        } catch (error) {
          return false;
        }
      }
    });
  }
});

// node_modules/core-js/modules/es.reflect.set.js
var require_es_reflect_set = __commonJS({
  "node_modules/core-js/modules/es.reflect.set.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var anObject = require_an_object();
    var isObject = require_is_object();
    var isDataDescriptor = require_is_data_descriptor();
    var fails = require_fails();
    var definePropertyModule = require_object_define_property();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var getPrototypeOf = require_object_get_prototype_of();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toPropertyKey = require_to_property_key();
    var $set = function(target, propertyKey, V, receiver) {
      var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
      var existingDescriptor, prototype, setter;
      if (!ownDescriptor) {
        if (isObject(prototype = getPrototypeOf(target))) {
          return $set(prototype, propertyKey, V, receiver);
        }
        ownDescriptor = createPropertyDescriptor(0);
      }
      if (isDataDescriptor(ownDescriptor)) {
        if (ownDescriptor.writable === false || !isObject(receiver)) return false;
        if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
          if (!isDataDescriptor(existingDescriptor) || existingDescriptor.writable === false) return false;
          definePropertyModule.f(receiver, propertyKey, { value: V });
        } else try {
          definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));
        } catch (error) {
          return false;
        }
      } else {
        setter = ownDescriptor.set;
        if (setter === void 0) return false;
        call(setter, receiver, V);
      }
      return true;
    };
    var MS_EDGE_BUG = fails(function() {
      var Constructor = function() {
      };
      var object = definePropertyModule.f(new Constructor(), "a", { configurable: true });
      return Reflect.set(Constructor.prototype, "a", 1, object) !== false;
    });
    $({ target: "Reflect", stat: true, forced: MS_EDGE_BUG }, {
      set: function set(target, propertyKey, V) {
        return $set(anObject(target), toPropertyKey(propertyKey), V, arguments.length < 4 ? target : arguments[3]);
      }
    });
  }
});

// node_modules/core-js/internals/is-possible-prototype.js
var require_is_possible_prototype = __commonJS({
  "node_modules/core-js/internals/is-possible-prototype.js"(exports, module) {
    "use strict";
    var isObject = require_is_object();
    module.exports = function(argument) {
      return isObject(argument) || argument === null;
    };
  }
});

// node_modules/core-js/internals/a-possible-prototype.js
var require_a_possible_prototype = __commonJS({
  "node_modules/core-js/internals/a-possible-prototype.js"(exports, module) {
    "use strict";
    var isPossiblePrototype = require_is_possible_prototype();
    var $String = String;
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isPossiblePrototype(argument)) return argument;
      throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
    };
  }
});

// node_modules/core-js/internals/function-uncurry-this-accessor.js
var require_function_uncurry_this_accessor = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this-accessor.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var aCallable = require_a_callable();
    module.exports = function(object, key, method) {
      try {
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
      } catch (error) {
      }
    };
  }
});

// node_modules/core-js/internals/object-set-prototype-of.js
var require_object_set_prototype_of = __commonJS({
  "node_modules/core-js/internals/object-set-prototype-of.js"(exports, module) {
    "use strict";
    var uncurryThisAccessor = require_function_uncurry_this_accessor();
    var isObject = require_is_object();
    var requireObjectCoercible = require_require_object_coercible();
    var aPossiblePrototype = require_a_possible_prototype();
    module.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;
      try {
        setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) {
      }
      return function setPrototypeOf(O, proto) {
        requireObjectCoercible(O);
        aPossiblePrototype(proto);
        if (!isObject(O)) return O;
        if (CORRECT_SETTER) setter(O, proto);
        else O.__proto__ = proto;
        return O;
      };
    })() : void 0);
  }
});

// node_modules/core-js/modules/es.reflect.set-prototype-of.js
var require_es_reflect_set_prototype_of = __commonJS({
  "node_modules/core-js/modules/es.reflect.set-prototype-of.js"() {
    "use strict";
    var $ = require_export();
    var anObject = require_an_object();
    var aPossiblePrototype = require_a_possible_prototype();
    var objectSetPrototypeOf = require_object_set_prototype_of();
    if (objectSetPrototypeOf) $({ target: "Reflect", stat: true }, {
      setPrototypeOf: function setPrototypeOf(target, proto) {
        anObject(target);
        aPossiblePrototype(proto);
        try {
          objectSetPrototypeOf(target, proto);
          return true;
        } catch (error) {
          return false;
        }
      }
    });
  }
});

// node_modules/core-js/internals/set-to-string-tag.js
var require_set_to_string_tag = __commonJS({
  "node_modules/core-js/internals/set-to-string-tag.js"(exports, module) {
    "use strict";
    var defineProperty = require_object_define_property().f;
    var hasOwn = require_has_own_property();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    module.exports = function(target, TAG, STATIC) {
      if (target && !STATIC) target = target.prototype;
      if (target && !hasOwn(target, TO_STRING_TAG)) {
        defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
      }
    };
  }
});

// node_modules/core-js/modules/es.reflect.to-string-tag.js
var require_es_reflect_to_string_tag = __commonJS({
  "node_modules/core-js/modules/es.reflect.to-string-tag.js"() {
    "use strict";
    var $ = require_export();
    var globalThis2 = require_global_this();
    var setToStringTag = require_set_to_string_tag();
    $({ global: true }, { Reflect: {} });
    setToStringTag(globalThis2.Reflect, "Reflect", true);
  }
});

// node_modules/core-js/internals/path.js
var require_path = __commonJS({
  "node_modules/core-js/internals/path.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    module.exports = globalThis2;
  }
});

// node_modules/core-js/es/reflect/index.js
var require_reflect = __commonJS({
  "node_modules/core-js/es/reflect/index.js"(exports, module) {
    "use strict";
    require_es_object_to_string();
    require_es_reflect_apply();
    require_es_reflect_construct();
    require_es_reflect_define_property();
    require_es_reflect_delete_property();
    require_es_reflect_get();
    require_es_reflect_get_own_property_descriptor();
    require_es_reflect_get_prototype_of();
    require_es_reflect_has();
    require_es_reflect_is_extensible();
    require_es_reflect_own_keys();
    require_es_reflect_prevent_extensions();
    require_es_reflect_set();
    require_es_reflect_set_prototype_of();
    require_es_reflect_to_string_tag();
    var path = require_path();
    module.exports = path.Reflect;
  }
});

// node_modules/zone.js/fesm2015/zone.js
/**
 * @license Angular
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var __defProp2 = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var global2 = globalThis;
function __symbol__(name) {
  const rawPrefix = global2["__Zone_symbol_prefix"];
  const symbolPrefix = typeof rawPrefix === "string" ? rawPrefix : "__zone_symbol__";
  return symbolPrefix + name;
}
function initZone() {
  const performance = global2["performance"];
  function mark(name) {
    performance && performance["mark"] && performance["mark"](name);
  }
  function performanceMeasure(name, label) {
    performance && performance["measure"] && performance["measure"](name, label);
  }
  mark("Zone");
  const _ZoneImpl = class _ZoneImpl2 {
    constructor(parent, zoneSpec) {
      __publicField(this, "_parent");
      __publicField(this, "_name");
      __publicField(this, "_properties");
      __publicField(this, "_zoneDelegate");
      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || "unnamed" : "<root>";
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }
    static assertZonePatched() {
      if (global2["Promise"] !== patches["ZoneAwarePromise"]) {
        throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");
      }
    }
    static get root() {
      let zone = _ZoneImpl2.current;
      while (zone.parent) {
        zone = zone.parent;
      }
      return zone;
    }
    static get current() {
      return _currentZoneFrame.zone;
    }
    static get currentTask() {
      return _currentTask;
    }
    static __load_patch(name, fn, ignoreDuplicate = false) {
      if (Object.hasOwn(patches, name)) {
        const checkDuplicate = global2[__symbol__("forceDuplicateZoneCheck")] === true;
        if (!ignoreDuplicate && checkDuplicate) {
          throw Error("Already loaded patch: " + name);
        }
      } else if (!global2["__Zone_disable_" + name]) {
        const perfName = "Zone:" + name;
        mark(perfName);
        patches[name] = fn(global2, _ZoneImpl2, _api);
        performanceMeasure(perfName, perfName);
      }
    }
    get parent() {
      return this._parent;
    }
    get name() {
      return this._name;
    }
    get(key) {
      const zone = this.getZoneWith(key);
      if (zone)
        return zone._properties[key];
    }
    getZoneWith(key) {
      let current = this;
      while (current) {
        if (Object.hasOwn(current._properties, key)) {
          return current;
        }
        current = current._parent;
      }
      return null;
    }
    fork(zoneSpec) {
      if (!zoneSpec)
        throw new Error("ZoneSpec required!");
      return this._zoneDelegate.fork(this, zoneSpec);
    }
    wrap(callback, source) {
      if (typeof callback !== "function") {
        throw new Error("Expecting function got: " + callback);
      }
      const _callback = this._zoneDelegate.intercept(this, callback, source);
      const zone = this;
      return function() {
        return zone.runGuarded(_callback, this, arguments, source);
      };
    }
    run(callback, applyThis, applyArgs, source) {
      _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
      try {
        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runGuarded(callback, applyThis = null, applyArgs, source) {
      _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
      try {
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runTask(task, applyThis, applyArgs) {
      if (task.zone != this) {
        throw new Error("A task can only be run in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
      }
      const zoneTask = task;
      const { type, data: { isPeriodic = false, isRefreshable = false } = {} } = task;
      if (task.state === notScheduled && (type === eventTask || type === macroTask)) {
        return;
      }
      const reEntryGuard = task.state != running;
      reEntryGuard && zoneTask._transitionTo(running, scheduled);
      const previousTask = _currentTask;
      _currentTask = zoneTask;
      _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
      try {
        if (type == macroTask && task.data && !isPeriodic && !isRefreshable) {
          task.cancelFn = void 0;
        }
        try {
          return this._zoneDelegate.invokeTask(this, zoneTask, applyThis, applyArgs);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        const state = task.state;
        if (state !== notScheduled && state !== unknown) {
          if (type == eventTask || isPeriodic || isRefreshable && state === scheduling) {
            reEntryGuard && zoneTask._transitionTo(scheduled, running, scheduling);
          } else {
            const zoneDelegates = zoneTask._zoneDelegates;
            this._updateTaskCount(zoneTask, -1);
            reEntryGuard && zoneTask._transitionTo(notScheduled, running, notScheduled);
            if (isRefreshable) {
              zoneTask._zoneDelegates = zoneDelegates;
            }
          }
        }
        _currentZoneFrame = _currentZoneFrame.parent;
        _currentTask = previousTask;
      }
    }
    scheduleTask(task) {
      if (task.zone && task.zone !== this) {
        let newZone = this;
        while (newZone) {
          if (newZone === task.zone) {
            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
          }
          newZone = newZone.parent;
        }
      }
      task._transitionTo(scheduling, notScheduled);
      const zoneDelegates = [];
      task._zoneDelegates = zoneDelegates;
      task._zone = this;
      try {
        task = this._zoneDelegate.scheduleTask(this, task);
      } catch (err) {
        task._transitionTo(unknown, scheduling, notScheduled);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      if (task._zoneDelegates === zoneDelegates) {
        this._updateTaskCount(task, 1);
      }
      if (task.state == scheduling) {
        task._transitionTo(scheduled, scheduling);
      }
      return task;
    }
    scheduleMicroTask(source, callback, data, customSchedule) {
      return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, void 0));
    }
    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
    }
    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
    }
    cancelTask(task) {
      if (task.zone != this)
        throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
      if (task.state !== scheduled && task.state !== running) {
        return;
      }
      task._transitionTo(canceling, scheduled, running);
      try {
        this._zoneDelegate.cancelTask(this, task);
      } catch (err) {
        task._transitionTo(unknown, canceling);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      this._updateTaskCount(task, -1);
      task._transitionTo(notScheduled, canceling);
      task.runCount = -1;
      return task;
    }
    _updateTaskCount(task, count) {
      const zoneDelegates = task._zoneDelegates;
      if (count == -1) {
        task._zoneDelegates = null;
      }
      for (let i = 0; i < zoneDelegates.length; i++) {
        zoneDelegates[i]._updateTaskCount(task.type, count);
      }
    }
  };
  __publicField(_ZoneImpl, "__symbol__", __symbol__);
  let ZoneImpl = _ZoneImpl;
  const DELEGATE_ZS = {
    name: "",
    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
  };
  class _ZoneDelegate {
    constructor(zone, parentDelegate, zoneSpec) {
      __publicField(this, "_zone");
      __publicField(this, "_taskCounts", {
        "microTask": 0,
        "macroTask": 0,
        "eventTask": 0
      });
      __publicField(this, "_forkDlgt");
      __publicField(this, "_forkZS");
      __publicField(this, "_forkCurrZone");
      __publicField(this, "_interceptDlgt");
      __publicField(this, "_interceptZS");
      __publicField(this, "_interceptCurrZone");
      __publicField(this, "_invokeDlgt");
      __publicField(this, "_invokeZS");
      __publicField(this, "_invokeCurrZone");
      __publicField(this, "_handleErrorDlgt");
      __publicField(this, "_handleErrorZS");
      __publicField(this, "_handleErrorCurrZone");
      __publicField(this, "_scheduleTaskDlgt");
      __publicField(this, "_scheduleTaskZS");
      __publicField(this, "_scheduleTaskCurrZone");
      __publicField(this, "_invokeTaskDlgt");
      __publicField(this, "_invokeTaskZS");
      __publicField(this, "_invokeTaskCurrZone");
      __publicField(this, "_cancelTaskDlgt");
      __publicField(this, "_cancelTaskZS");
      __publicField(this, "_cancelTaskCurrZone");
      __publicField(this, "_hasTaskDlgt");
      __publicField(this, "_hasTaskDlgtOwner");
      __publicField(this, "_hasTaskZS");
      __publicField(this, "_hasTaskCurrZone");
      this._zone = zone;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this._zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this._zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this._zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this._zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this._zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this._zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this._zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
      if (zoneSpecHasTask || parentHasTask) {
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = this._zone;
        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this._zone;
        }
        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this._zone;
        }
        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this._zone;
        }
      }
    }
    get zone() {
      return this._zone;
    }
    fork(targetZone, zoneSpec) {
      return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new ZoneImpl(targetZone, zoneSpec);
    }
    intercept(targetZone, callback, source) {
      return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
    }
    invoke(targetZone, callback, applyThis, applyArgs, source) {
      return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
    }
    handleError(targetZone, error) {
      return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
    }
    scheduleTask(targetZone, task) {
      let returnTask = task;
      if (this._scheduleTaskZS) {
        if (this._hasTaskZS) {
          returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
        }
        returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
        if (!returnTask)
          returnTask = task;
      } else {
        if (task.scheduleFn) {
          task.scheduleFn(task);
        } else if (task.type == microTask) {
          scheduleMicroTask(task);
        } else {
          throw new Error("Task is missing scheduleFn.");
        }
      }
      return returnTask;
    }
    invokeTask(targetZone, task, applyThis, applyArgs) {
      return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
    }
    cancelTask(targetZone, task) {
      let value;
      if (this._cancelTaskZS) {
        value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
      } else {
        if (!task.cancelFn) {
          throw Error("Task is not cancelable");
        }
        value = task.cancelFn(task);
      }
      return value;
    }
    hasTask(targetZone, isEmpty) {
      try {
        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
      } catch (err) {
        this.handleError(targetZone, err);
      }
    }
    _updateTaskCount(type, count) {
      const counts = this._taskCounts;
      const prev = counts[type];
      const next = counts[type] = prev + count;
      if (next < 0) {
        throw new Error("More tasks executed then were scheduled.");
      }
      if (prev == 0 || next == 0) {
        const isEmpty = {
          microTask: counts["microTask"] > 0,
          macroTask: counts["macroTask"] > 0,
          eventTask: counts["eventTask"] > 0,
          change: type
        };
        this.hasTask(this._zone, isEmpty);
      }
    }
  }
  class ZoneTask {
    constructor(type, source, callback, options, scheduleFn, cancelFn) {
      __publicField(this, "type");
      __publicField(this, "source");
      __publicField(this, "invoke");
      __publicField(this, "callback");
      __publicField(this, "data");
      __publicField(this, "scheduleFn");
      __publicField(this, "cancelFn");
      __publicField(this, "_zone", null);
      __publicField(this, "runCount", 0);
      __publicField(this, "_zoneDelegates", null);
      __publicField(this, "_state", "notScheduled");
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;
      if (!callback) {
        throw new Error("callback is not defined");
      }
      this.callback = callback;
      const self2 = this;
      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function() {
          return ZoneTask.invokeTask.call(global2, self2, this, arguments);
        };
      }
    }
    static invokeTask(task, target, args) {
      if (!task) {
        task = this;
      }
      _numberOfNestedTaskFrames++;
      try {
        task.runCount++;
        return task.zone.runTask(task, target, args);
      } finally {
        try {
          if (_numberOfNestedTaskFrames === 1 && !global2[enableNativeMicrotaskDraining]) {
            drainMicroTaskQueueSynchronously();
          }
        } finally {
          _numberOfNestedTaskFrames--;
        }
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(notScheduled, scheduling);
    }
    _transitionTo(toState, fromState1, fromState2) {
      if (this._state === fromState1 || this._state === fromState2) {
        this._state = toState;
        if (toState == notScheduled) {
          this._zoneDelegates = null;
        }
      } else {
        throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? " or '" + fromState2 + "'" : ""}, was '${this._state}'.`);
      }
    }
    toString() {
      if (this.data && typeof this.data.handleId !== "undefined") {
        return this.data.handleId.toString();
      } else {
        return Object.prototype.toString.call(this);
      }
    }
    // add toJSON method to prevent cyclic error when
    // call JSON.stringify(zoneTask)
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount
      };
    }
  }
  const symbolSetTimeout = __symbol__("setTimeout");
  const symbolPromise = __symbol__("Promise");
  const symbolThen = __symbol__("then");
  const enableNativeMicrotaskDraining = __symbol__("enable_native_microtask_draining");
  let _microTaskQueue = [];
  let _isDrainingMicrotaskQueue = false;
  let nativeMicroTaskQueuePromise;
  function nativeScheduleMicroTask(func) {
    var _a;
    if (!nativeMicroTaskQueuePromise && global2[symbolPromise]) {
      nativeMicroTaskQueuePromise = global2[symbolPromise].resolve(0);
    }
    if (nativeMicroTaskQueuePromise) {
      const thenFn = (_a = nativeMicroTaskQueuePromise[symbolThen]) != null ? _a : nativeMicroTaskQueuePromise["then"];
      thenFn.call(nativeMicroTaskQueuePromise, func);
    } else {
      global2[symbolSetTimeout](func, 0);
    }
  }
  function scheduleMicroTask(task) {
    const isNativeDrainingEnabled = global2[enableNativeMicrotaskDraining];
    const shouldDrainWithNative = isNativeDrainingEnabled && _microTaskQueue.length === 0 && !_isDrainingMicrotaskQueue;
    const shouldDrainWithoutNative = !isNativeDrainingEnabled && _numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0;
    if (shouldDrainWithNative || shouldDrainWithoutNative) {
      nativeScheduleMicroTask(drainMicroTaskQueueSynchronously);
    }
    if (task) {
      _microTaskQueue.push(task);
    }
  }
  function drainMicroTaskQueueSynchronously() {
    if (_isDrainingMicrotaskQueue) {
      return;
    }
    _isDrainingMicrotaskQueue = true;
    try {
      while (_microTaskQueue.length) {
        const queue = _microTaskQueue;
        _microTaskQueue = [];
        for (const task of queue) {
          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }
    } finally {
      if (global2[enableNativeMicrotaskDraining]) {
        _isDrainingMicrotaskQueue = false;
        _api.microtaskDrainDone();
      } else {
        try {
          _api.microtaskDrainDone();
        } finally {
          _isDrainingMicrotaskQueue = false;
        }
      }
    }
  }
  const NO_ZONE = { name: "NO ZONE" };
  const notScheduled = "notScheduled", scheduling = "scheduling", scheduled = "scheduled", running = "running", canceling = "canceling", unknown = "unknown";
  const microTask = "microTask", macroTask = "macroTask", eventTask = "eventTask";
  const patches = /* @__PURE__ */ Object.create(null);
  const _api = {
    symbol: __symbol__,
    currentZoneFrame: () => _currentZoneFrame,
    onUnhandledError: noop,
    microtaskDrainDone: noop,
    scheduleMicroTask,
    showUncaughtError: () => !ZoneImpl[__symbol__("ignoreConsoleErrorUncaughtError")],
    patchEventTarget: () => [],
    patchOnProperties: noop,
    patchMethod: () => noop,
    bindArguments: () => [],
    patchThen: () => noop,
    patchMacroTask: () => noop,
    patchEventPrototype: () => noop,
    getGlobalObjects: () => void 0,
    ObjectDefineProperty: () => noop,
    ObjectGetOwnPropertyDescriptor: () => void 0,
    ObjectCreate: () => void 0,
    ArraySlice: () => [],
    patchClass: () => noop,
    wrapWithCurrentZone: () => noop,
    filterProperties: () => [],
    attachOriginToPatched: () => noop,
    _redefineProperty: () => noop,
    patchCallbacks: () => noop,
    nativeScheduleMicroTask
  };
  let _currentZoneFrame = { parent: null, zone: new ZoneImpl(null, null) };
  let _currentTask = null;
  let _numberOfNestedTaskFrames = 0;
  function noop() {
  }
  performanceMeasure("Zone", "Zone");
  return ZoneImpl;
}
function loadZone() {
  var _a;
  const global23 = globalThis;
  const checkDuplicate = global23[__symbol__("forceDuplicateZoneCheck")] === true;
  if (global23["Zone"] && (checkDuplicate || typeof global23["Zone"].__symbol__ !== "function")) {
    throw new Error("Zone already loaded.");
  }
  (_a = global23["Zone"]) != null ? _a : global23["Zone"] = initZone();
  return global23["Zone"];
}
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ObjectDefineProperty = Object.defineProperty;
var ObjectGetPrototypeOf = Object.getPrototypeOf;
var ObjectCreate = Object.create;
var ArraySlice = Array.prototype.slice;
var ADD_EVENT_LISTENER_STR = "addEventListener";
var REMOVE_EVENT_LISTENER_STR = "removeEventListener";
var ZONE_SYMBOL_ADD_EVENT_LISTENER = __symbol__(ADD_EVENT_LISTENER_STR);
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = __symbol__(REMOVE_EVENT_LISTENER_STR);
var TRUE_STR = "true";
var FALSE_STR = "false";
var ZONE_SYMBOL_PREFIX = __symbol__("");
function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = __symbol__;
var isWindowExists = typeof window !== "undefined";
var internalWindow = isWindowExists ? window : void 0;
var _global = isWindowExists && internalWindow || globalThis;
var REMOVE_ATTRIBUTE = "removeAttribute";
function bindArguments(args, source) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === "function") {
      args[i] = wrapWithCurrentZone(args[i], source + "_" + i);
    }
  }
  return args;
}
function patchPrototype(prototype, fnNames) {
  const source = prototype.constructor["name"];
  for (let i = 0; i < fnNames.length; i++) {
    const name = fnNames[i];
    const delegate = prototype[name];
    if (delegate) {
      const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
      if (!isPropertyWritable(prototypeDesc)) {
        continue;
      }
      prototype[name] = ((delegate2) => {
        const patched = function() {
          return delegate2.apply(this, bindArguments(arguments, source + "." + name));
        };
        attachOriginToPatched(patched, delegate2);
        return patched;
      })(delegate);
    }
  }
}
function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }
  if (propertyDesc.writable === false) {
    return false;
  }
  return !(typeof propertyDesc.get === "function" && typeof propertyDesc.set === "undefined");
}
var isWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
var isNode = !("nw" in _global) && typeof _global.process !== "undefined" && _global.process.toString() === "[object process]";
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
var isMix = typeof _global.process !== "undefined" && _global.process.toString() === "[object process]" && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
var zoneSymbolEventNames = /* @__PURE__ */ Object.create(null);
var enableBeforeunloadSymbol = zoneSymbol("enable_beforeunload");
var wrapFn = function(event) {
  event = event || _global.event;
  if (!event) {
    return;
  }
  let eventNameSymbol = zoneSymbolEventNames[event.type];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol("ON_PROPERTY" + event.type);
  }
  const target = this || event.target || _global;
  const listener = target[eventNameSymbol];
  let result;
  if (isBrowser && target === internalWindow && event.type === "error") {
    const errorEvent = event;
    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
    if (result === true) {
      event.preventDefault();
    }
  } else {
    result = listener && listener.apply(this, arguments);
    if (
      // https://github.com/angular/angular/issues/47579
      // https://www.w3.org/TR/2011/WD-html5-20110525/history.html#beforeunloadevent
      // This is the only specific case we should check for. The spec defines that the
      // `returnValue` attribute represents the message to show the user. When the event
      // is created, this attribute must be set to the empty string.
      event.type === "beforeunload" && // To prevent any breaking changes resulting from this change, given that
      // it was already causing a significant number of failures in G3, we have hidden
      // that behavior behind a global configuration flag. Consumers can enable this
      // flag explicitly if they want the `beforeunload` event to be handled as defined
      // in the specification.
      _global[enableBeforeunloadSymbol] && // The IDL event definition is `attribute DOMString returnValue`, so we check whether
      // `typeof result` is a string.
      typeof result === "string"
    ) {
      event.returnValue = result;
    } else if (result != void 0 && !result) {
      event.preventDefault();
    }
  }
  return result;
};
function patchProperty(obj, prop, prototype) {
  let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
  if (!desc && prototype) {
    const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
    if (prototypeDesc) {
      desc = { enumerable: true, configurable: true };
    }
  }
  if (!desc || !desc.configurable) {
    return;
  }
  const onPropPatchedSymbol = zoneSymbol("on" + prop + "patched");
  if (Object.hasOwn(obj, onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  }
  delete desc.writable;
  delete desc.value;
  const originalDescGet = desc.get;
  const originalDescSet = desc.set;
  const eventName = prop.slice(2);
  let eventNameSymbol = zoneSymbolEventNames[eventName];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol("ON_PROPERTY" + eventName);
  }
  desc.set = function(newValue) {
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return;
    }
    const previousValue = target[eventNameSymbol];
    if (typeof previousValue === "function") {
      target.removeEventListener(eventName, wrapFn);
    }
    originalDescSet == null ? void 0 : originalDescSet.call(target, null);
    target[eventNameSymbol] = newValue;
    if (typeof newValue === "function") {
      target.addEventListener(eventName, wrapFn, false);
    }
  };
  desc.get = function() {
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return null;
    }
    const listener = target[eventNameSymbol];
    if (listener) {
      return listener;
    } else if (originalDescGet) {
      let value = originalDescGet.call(this);
      if (value) {
        desc.set.call(this, value);
        if (typeof target[REMOVE_ATTRIBUTE] === "function") {
          target.removeAttribute(prop);
        }
        return value;
      }
    }
    return null;
  };
  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
  if (properties) {
    for (let i = 0; i < properties.length; i++) {
      patchProperty(obj, "on" + properties[i], prototype);
    }
  } else {
    const onProperties = [];
    for (const prop in obj) {
      if (prop.slice(0, 2) == "on") {
        onProperties.push(prop);
      }
    }
    for (let j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype);
    }
  }
}
var originalInstanceKey = zoneSymbol("originalInstance");
function patchClass(className) {
  const OriginalClass = _global[className];
  if (!OriginalClass)
    return;
  _global[zoneSymbol(className)] = OriginalClass;
  _global[className] = function() {
    const a = bindArguments(arguments, className);
    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;
      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;
      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;
      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;
      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;
      default:
        throw new Error("Arg list too long.");
    }
  };
  attachOriginToPatched(_global[className], OriginalClass);
  const instance = new OriginalClass(function() {
  });
  let prop;
  for (prop in instance) {
    if (className === "XMLHttpRequest" && prop === "responseBlob")
      continue;
    (function(prop2) {
      if (typeof instance[prop2] === "function") {
        _global[className].prototype[prop2] = function() {
          return this[originalInstanceKey][prop2].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global[className].prototype, prop2, {
          set: function(fn) {
            if (typeof fn === "function") {
              this[originalInstanceKey][prop2] = wrapWithCurrentZone(fn, className + "." + prop2);
              attachOriginToPatched(this[originalInstanceKey][prop2], fn);
            } else {
              this[originalInstanceKey][prop2] = fn;
            }
          },
          get: function() {
            return this[originalInstanceKey][prop2];
          }
        });
      }
    })(prop);
  }
  for (prop in OriginalClass) {
    if (prop !== "prototype" && Object.hasOwn(OriginalClass, prop)) {
      _global[className][prop] = OriginalClass[prop];
    }
  }
}
function copySymbolProperties(src, dest) {
  if (typeof Object.getOwnPropertySymbols !== "function") {
    return;
  }
  const symbols = Object.getOwnPropertySymbols(src);
  symbols.forEach((symbol) => {
    const desc = Object.getOwnPropertyDescriptor(src, symbol);
    Object.defineProperty(dest, symbol, {
      get: function() {
        return src[symbol];
      },
      set: function(value) {
        if (desc && (!desc.writable || typeof desc.set !== "function")) {
          return;
        }
        src[symbol] = value;
      },
      enumerable: desc ? desc.enumerable : true,
      configurable: desc ? desc.configurable : true
    });
  });
}
var shouldCopySymbolProperties = false;
function patchMethod(target, name, patchFn) {
  let proto = target;
  while (proto && !Object.hasOwn(proto, name)) {
    proto = ObjectGetPrototypeOf(proto);
  }
  if (!proto && target[name]) {
    proto = target;
  }
  const delegateName = zoneSymbol(name);
  let delegate = null;
  if (proto && (!(delegate = proto[delegateName]) || !Object.hasOwn(proto, delegateName))) {
    delegate = proto[delegateName] = proto[name];
    const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
    if (isPropertyWritable(desc)) {
      const patchDelegate = patchFn(delegate, delegateName, name);
      proto[name] = function() {
        return patchDelegate(this, arguments);
      };
      attachOriginToPatched(proto[name], delegate);
      if (shouldCopySymbolProperties) {
        copySymbolProperties(delegate, proto[name]);
      }
    }
  }
  return delegate;
}
function patchMacroTask(obj, funcName, metaCreator) {
  let setNative = null;
  function scheduleTask(task) {
    const data = task.data;
    data.args[data.cbIdx] = function() {
      task.invoke.apply(this, arguments);
    };
    setNative.apply(data.target, data.args);
    return task;
  }
  setNative = patchMethod(obj, funcName, (delegate) => function(self2, args) {
    const meta = metaCreator(self2, args);
    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === "function") {
      return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
    } else {
      return delegate.apply(self2, args);
    }
  });
}
function attachOriginToPatched(patched, original) {
  patched[zoneSymbol("OriginalDelegate")] = original;
}
function isFunction(value) {
  return typeof value === "function";
}
function isNumber(value) {
  return typeof value === "number";
}
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
var zoneSymbolEventNames2 = /* @__PURE__ */ Object.create(null);
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = new RegExp("^" + ZONE_SYMBOL_PREFIX + "(\\w+)(true|false)$");
var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol("propagationStopped");
var KNOWN_EVENT_LISTENER_OPTIONS = ["capture", "once", "passive", "signal"];
function prepareEventNames(eventName, eventNameToString) {
  const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames2[eventName] = {
    [FALSE_STR]: symbol,
    [TRUE_STR]: symbolCapture
  };
}
function patchEventTarget(_global2, api, apis, patchOptions) {
  const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || "eventListeners";
  const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || "removeAllListeners";
  const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  const ADD_EVENT_LISTENER_SOURCE = "." + ADD_EVENT_LISTENER + ":";
  const PREPEND_EVENT_LISTENER = "prependListener";
  const PREPEND_EVENT_LISTENER_SOURCE = "." + PREPEND_EVENT_LISTENER + ":";
  const invokeTask = function(task, target, event) {
    if (task.isRemoved) {
      return;
    }
    const delegate = task.callback;
    if (typeof delegate === "object" && delegate.handleEvent) {
      task.callback = (event2) => delegate.handleEvent(event2);
      task.originalDelegate = delegate;
    }
    let error;
    try {
      task.invoke(task, target, [event]);
    } catch (err) {
      error = err;
    }
    const options = task.options;
    if (options && typeof options === "object" && options.once) {
      const delegate2 = task.originalDelegate ? task.originalDelegate : task.callback;
      target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate2, options);
    }
    return error;
  };
  function globalCallback(context, event, isCapture) {
    event = event || _global2.event;
    if (!event) {
      return;
    }
    const target = context || event.target || _global2;
    const tasks = target[zoneSymbolEventNames2[event.type][isCapture ? TRUE_STR : FALSE_STR]];
    if (tasks) {
      const errors = [];
      if (tasks.length === 1) {
        const err = invokeTask(tasks[0], target, event);
        err && errors.push(err);
      } else {
        const copyTasks = tasks.slice();
        for (let i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }
          const err = invokeTask(copyTasks[i], target, event);
          err && errors.push(err);
        }
      }
      if (errors.length === 1) {
        throw errors[0];
      } else {
        for (let i = 0; i < errors.length; i++) {
          const err = errors[i];
          api.nativeScheduleMicroTask(() => {
            throw err;
          });
        }
      }
    }
  }
  const globalZoneAwareCallback = function(event) {
    return globalCallback(this, event, false);
  };
  const globalZoneAwareCaptureCallback = function(event) {
    return globalCallback(this, event, true);
  };
  function patchEventTargetMethods(obj, patchOptions2) {
    if (!obj) {
      return false;
    }
    let useGlobalCallback = true;
    if (patchOptions2 && patchOptions2.useG !== void 0) {
      useGlobalCallback = patchOptions2.useG;
    }
    const validateHandler = patchOptions2 && patchOptions2.vh;
    let checkDuplicate = true;
    if (patchOptions2 && patchOptions2.chkDup !== void 0) {
      checkDuplicate = patchOptions2.chkDup;
    }
    let returnTarget = false;
    if (patchOptions2 && patchOptions2.rt !== void 0) {
      returnTarget = patchOptions2.rt;
    }
    let proto = obj;
    while (proto && !Object.hasOwn(proto, ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && obj[ADD_EVENT_LISTENER]) {
      proto = obj;
    }
    if (!proto) {
      return false;
    }
    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }
    const eventNameToString = patchOptions2 && patchOptions2.eventNameToString;
    const taskData = {};
    const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    let nativePrependEventListener;
    if (patchOptions2 && patchOptions2.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions2.prepend)] = proto[patchOptions2.prepend];
    }
    function buildEventListenerOptions(options, passive) {
      if (!passive) {
        return options;
      }
      if (typeof options === "boolean") {
        return { capture: options, passive: true };
      }
      if (!options) {
        return { passive: true };
      }
      if (typeof options === "object" && options.passive !== false) {
        options.passive = true;
        return options;
      }
      return options;
    }
    const customScheduleGlobal = function(task) {
      if (taskData.isExisting) {
        return;
      }
      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };
    const customCancelGlobal = function(task) {
      if (!task.isRemoved) {
        const symbolEventNames = zoneSymbolEventNames2[task.eventName];
        let symbolEventName;
        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }
        const existingTasks = symbolEventName && task.target[symbolEventName];
        if (existingTasks) {
          for (let i = 0; i < existingTasks.length; i++) {
            const existingTask = existingTasks[i];
            if (existingTask === task) {
              existingTasks.splice(i, 1);
              task.isRemoved = true;
              if (task.removeAbortListener) {
                task.removeAbortListener();
                task.removeAbortListener = null;
              }
              if (existingTasks.length === 0) {
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }
              break;
            }
          }
        }
      }
      if (!task.allRemoved) {
        return;
      }
      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };
    const customScheduleNonGlobal = function(task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customSchedulePrepend = function(task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customCancelNonGlobal = function(task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };
    const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
    const compareTaskCallbackVsDelegate = function(task, delegate) {
      const typeOfDelegate = typeof delegate;
      return typeOfDelegate === "function" && task.callback === delegate || typeOfDelegate === "object" && task.originalDelegate === delegate;
    };
    const compare = (patchOptions2 == null ? void 0 : patchOptions2.diff) || compareTaskCallbackVsDelegate;
    const unpatchedEvents = Zone[zoneSymbol("UNPATCHED_EVENTS")];
    const passiveEvents = _global2[zoneSymbol("PASSIVE_EVENTS")];
    function copyEventListenerOptions(options) {
      if (typeof options !== "object" || options === null) {
        return options;
      }
      const newOptions = __spreadValues({}, options);
      for (const key of KNOWN_EVENT_LISTENER_OPTIONS) {
        if (!Object.hasOwn(newOptions, key) && key in options) {
          newOptions[key] = options[key];
        }
      }
      return newOptions;
    }
    const makeAddListener = function(nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget2 = false, prepend = false) {
      return function() {
        const target = this || _global2;
        let eventName = arguments[0];
        if (patchOptions2 && patchOptions2.transferEventName) {
          eventName = patchOptions2.transferEventName(eventName);
        }
        let delegate = arguments[1];
        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }
        if (isNode && eventName === "uncaughtException") {
          return nativeListener.apply(this, arguments);
        }
        let isEventListenerObject = false;
        if (typeof delegate !== "function") {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }
          isEventListenerObject = true;
        }
        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }
        const passive = !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        const options = buildEventListenerOptions(copyEventListenerOptions(arguments[2]), passive);
        const signal = options == null ? void 0 : options.signal;
        if (signal == null ? void 0 : signal.aborted) {
          return;
        }
        if (unpatchedEvents) {
          for (let i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }
        const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
        const once = options && typeof options === "object" ? options.once : false;
        const zone = Zone.current;
        let symbolEventNames = zoneSymbolEventNames2[eventName];
        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames2[eventName];
        }
        const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        let existingTasks = target[symbolEventName];
        let isExisting = false;
        if (existingTasks) {
          isExisting = true;
          if (checkDuplicate) {
            for (let i = 0; i < existingTasks.length; i++) {
              if (compare(existingTasks[i], delegate)) {
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }
        let source;
        const constructorName = target.constructor["name"];
        const targetSource = globalSources[constructorName];
        if (targetSource) {
          source = targetSource[eventName];
        }
        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        }
        taskData.options = options;
        if (once) {
          taskData.options.once = false;
        }
        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : void 0;
        if (data) {
          data.taskData = taskData;
        }
        if (signal) {
          taskData.options.signal = void 0;
        }
        const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
        if (signal) {
          taskData.options.signal = signal;
          const onAbort = () => task.zone.cancelTask(task);
          nativeListener.call(signal, "abort", onAbort, { once: true });
          task.removeAbortListener = () => signal.removeEventListener("abort", onAbort);
        }
        taskData.target = null;
        if (data) {
          data.taskData = null;
        }
        if (once) {
          taskData.options.once = true;
        }
        if (typeof task.options !== "boolean") {
          task.options = options;
        }
        task.target = target;
        task.capture = capture;
        task.eventName = eventName;
        if (isEventListenerObject) {
          task.originalDelegate = delegate;
        }
        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }
        if (returnTarget2) {
          return target;
        }
      };
    };
    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }
    proto[REMOVE_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (patchOptions2 && patchOptions2.transferEventName) {
        eventName = patchOptions2.transferEventName(eventName);
      }
      const options = arguments[2];
      const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
      const delegate = arguments[1];
      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }
      const symbolEventNames = zoneSymbolEventNames2[eventName];
      let symbolEventName;
      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }
      const existingTasks = symbolEventName && target[symbolEventName];
      if (existingTasks) {
        for (let i = 0; i < existingTasks.length; i++) {
          const existingTask = existingTasks[i];
          if (compare(existingTask, delegate)) {
            existingTasks.splice(i, 1);
            existingTask.isRemoved = true;
            if (existingTasks.length === 0) {
              existingTask.allRemoved = true;
              target[symbolEventName] = null;
              if (!capture && typeof eventName === "string") {
                const onPropertySymbol = ZONE_SYMBOL_PREFIX + "ON_PROPERTY" + eventName;
                target[onPropertySymbol] = null;
              }
            }
            existingTask.zone.cancelTask(existingTask);
            if (returnTarget) {
              return target;
            }
            return;
          }
        }
      }
      return nativeRemoveEventListener.apply(this, arguments);
    };
    proto[LISTENERS_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (patchOptions2 && patchOptions2.transferEventName) {
        eventName = patchOptions2.transferEventName(eventName);
      }
      const listeners = [];
      const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }
      return listeners;
    };
    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (!eventName) {
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
          const prop = keys[i];
          const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          let evtName = match && match[1];
          if (evtName && evtName !== "removeListener") {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        }
        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, "removeListener");
      } else {
        if (patchOptions2 && patchOptions2.transferEventName) {
          eventName = patchOptions2.transferEventName(eventName);
        }
        const symbolEventNames = zoneSymbolEventNames2[eventName];
        if (symbolEventNames) {
          const symbolEventName = symbolEventNames[FALSE_STR];
          const symbolCaptureEventName = symbolEventNames[TRUE_STR];
          const tasks = target[symbolEventName];
          const captureTasks = target[symbolCaptureEventName];
          if (tasks) {
            const removeTasks = tasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
          if (captureTasks) {
            const removeTasks = captureTasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
        }
      }
      if (returnTarget) {
        return this;
      }
    };
    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }
    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }
    return true;
  }
  let results = [];
  for (let i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }
  return results;
}
function findEventTasks(target, eventName) {
  if (!eventName) {
    const foundTasks = [];
    for (let prop in target) {
      const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
      let evtName = match && match[1];
      if (evtName && (!eventName || evtName === eventName)) {
        const tasks = target[prop];
        if (tasks) {
          for (let i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }
    return foundTasks;
  }
  let symbolEventName = zoneSymbolEventNames2[eventName];
  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames2[eventName];
  }
  const captureFalseTasks = target[symbolEventName[FALSE_STR]];
  const captureTrueTasks = target[symbolEventName[TRUE_STR]];
  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}
function patchEventPrototype(global23, api) {
  const Event = global23["Event"];
  if (Event && Event.prototype) {
    api.patchMethod(Event.prototype, "stopImmediatePropagation", (delegate) => function(self2, args) {
      self2[IMMEDIATE_PROPAGATION_SYMBOL] = true;
      delegate && delegate.apply(self2, args);
    });
  }
}
function patchQueueMicrotask(global23, api) {
  api.patchMethod(global23, "queueMicrotask", (delegate) => {
    return function(self2, args) {
      Zone.current.scheduleMicroTask("queueMicrotask", args[0]);
    };
  });
}
var taskSymbol = zoneSymbol("zoneTask");
function patchTimer(window2, setName, cancelName, nameSuffix) {
  let setNative = null;
  let clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  const tasksByHandleId = {};
  function scheduleTask(task) {
    const data = task.data;
    data.args[0] = function() {
      return task.invoke.apply(this, arguments);
    };
    const handleOrId = setNative.apply(window2, data.args);
    if (isNumber(handleOrId)) {
      data.handleId = handleOrId;
    } else {
      data.handle = handleOrId;
      data.isRefreshable = isFunction(handleOrId == null ? void 0 : handleOrId.refresh);
    }
    return task;
  }
  function clearTask(task) {
    const { handle, handleId } = task.data;
    return clearNative.call(window2, handle != null ? handle : handleId);
  }
  setNative = patchMethod(window2, setName, (delegate) => function(self2, args) {
    var _a;
    if (isFunction(args[0])) {
      const options = {
        isRefreshable: false,
        isPeriodic: nameSuffix === "Interval",
        delay: nameSuffix === "Timeout" || nameSuffix === "Interval" ? args[1] || 0 : void 0,
        args
      };
      const callback = args[0];
      args[0] = function timer() {
        try {
          return callback.apply(this, arguments);
        } finally {
          const { handle: handle2, handleId: handleId2, isPeriodic: isPeriodic2, isRefreshable: isRefreshable2 } = options;
          if (!isPeriodic2 && !isRefreshable2) {
            if (handleId2) {
              delete tasksByHandleId[handleId2];
            } else if (handle2) {
              handle2[taskSymbol] = null;
            }
          }
        }
      };
      const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
      if (!task) {
        return task;
      }
      const { handleId, handle, isRefreshable, isPeriodic } = task.data;
      if (handleId) {
        tasksByHandleId[handleId] = task;
      } else if (handle) {
        handle[taskSymbol] = task;
        if (isRefreshable && !isPeriodic) {
          const originalRefresh = handle.refresh;
          handle.refresh = function() {
            const { zone, state } = task;
            if (state === "notScheduled") {
              task._state = "scheduled";
              zone._updateTaskCount(task, 1);
            } else if (state === "running") {
              task._state = "scheduling";
            }
            return originalRefresh.call(this);
          };
        }
      }
      return (_a = handle != null ? handle : handleId) != null ? _a : task;
    } else {
      return delegate.apply(window2, args);
    }
  });
  clearNative = patchMethod(window2, cancelName, (delegate) => function(self2, args) {
    const id = args[0];
    let task;
    if (isNumber(id)) {
      task = tasksByHandleId[id];
      delete tasksByHandleId[id];
    } else {
      task = id == null ? void 0 : id[taskSymbol];
      if (task) {
        id[taskSymbol] = null;
      } else {
        task = id;
      }
    }
    if (task == null ? void 0 : task.type) {
      if (task.cancelFn) {
        task.zone.cancelTask(task);
      }
    } else {
      delegate.apply(window2, args);
    }
  });
}
function patchCustomElements(_global2, api) {
  const { isBrowser: isBrowser2, isMix: isMix2 } = api.getGlobalObjects();
  if (!isBrowser2 && !isMix2 || !_global2["customElements"] || !("customElements" in _global2)) {
    return;
  }
  const callbacks = [
    "connectedCallback",
    "disconnectedCallback",
    "adoptedCallback",
    "attributeChangedCallback",
    "formAssociatedCallback",
    "formDisabledCallback",
    "formResetCallback",
    "formStateRestoreCallback"
  ];
  api.patchCallbacks(api, _global2.customElements, "customElements", "define", callbacks);
}
function eventTargetPatch(_global2, api) {
  if (Zone[api.symbol("patchEventTarget")]) {
    return;
  }
  const { eventNames, zoneSymbolEventNames: zoneSymbolEventNames3, TRUE_STR: TRUE_STR2, FALSE_STR: FALSE_STR2, ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX2 } = api.getGlobalObjects();
  for (let i = 0; i < eventNames.length; i++) {
    const eventName = eventNames[i];
    const falseEventName = eventName + FALSE_STR2;
    const trueEventName = eventName + TRUE_STR2;
    const symbol = ZONE_SYMBOL_PREFIX2 + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX2 + trueEventName;
    zoneSymbolEventNames3[eventName] = {};
    zoneSymbolEventNames3[eventName][FALSE_STR2] = symbol;
    zoneSymbolEventNames3[eventName][TRUE_STR2] = symbolCapture;
  }
  const EVENT_TARGET = _global2["EventTarget"];
  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }
  api.patchEventTarget(_global2, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}
function patchEvent(global23, api) {
  api.patchEventPrototype(global23, api);
}
function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }
  const tip = ignoreProperties.filter((ip) => ip.target === target);
  if (tip.length === 0) {
    return onProperties;
  }
  const targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter((op) => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
  if (!target) {
    return;
  }
  const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype);
}
function getOnEventNames(target) {
  return Object.getOwnPropertyNames(target).filter((name) => name.startsWith("on") && name.length > 2).map((name) => name.substring(2));
}
function propertyDescriptorPatch(api, _global2) {
  if (isNode && !isMix) {
    return;
  }
  if (Zone[api.symbol("patchEvents")]) {
    return;
  }
  const ignoreProperties = _global2["__Zone_ignore_on_properties"];
  let patchTargets = [];
  if (isBrowser) {
    const internalWindow2 = window;
    patchTargets = patchTargets.concat([
      "Document",
      "SVGElement",
      "Element",
      "HTMLElement",
      "HTMLBodyElement",
      "HTMLMediaElement",
      "HTMLFrameSetElement",
      "HTMLFrameElement",
      "HTMLIFrameElement",
      "HTMLMarqueeElement",
      "Worker"
    ]);
    patchFilteredProperties(internalWindow2, getOnEventNames(internalWindow2), ignoreProperties, ObjectGetPrototypeOf(internalWindow2));
  }
  patchTargets = patchTargets.concat([
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "IDBIndex",
    "IDBRequest",
    "IDBOpenDBRequest",
    "IDBDatabase",
    "IDBTransaction",
    "IDBCursor",
    "WebSocket"
  ]);
  for (let i = 0; i < patchTargets.length; i++) {
    const target = _global2[patchTargets[i]];
    (target == null ? void 0 : target.prototype) && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
  }
}
function patchBrowser(Zone3) {
  Zone3.__load_patch("timers", (global23) => {
    const set = "set";
    const clear = "clear";
    patchTimer(global23, set, clear, "Timeout");
    patchTimer(global23, set, clear, "Interval");
    patchTimer(global23, set, clear, "Immediate");
  });
  Zone3.__load_patch("requestAnimationFrame", (global23) => {
    patchTimer(global23, "request", "cancel", "AnimationFrame");
    patchTimer(global23, "mozRequest", "mozCancel", "AnimationFrame");
    patchTimer(global23, "webkitRequest", "webkitCancel", "AnimationFrame");
  });
  Zone3.__load_patch("blocking", (global23, Zone4) => {
    const blockingMethods = ["alert", "prompt", "confirm"];
    for (let i = 0; i < blockingMethods.length; i++) {
      const name = blockingMethods[i];
      patchMethod(global23, name, (delegate, symbol, name2) => {
        return function(s, args) {
          return Zone4.current.run(delegate, global23, args, name2);
        };
      });
    }
  });
  Zone3.__load_patch("EventTarget", (global23, Zone4, api) => {
    patchEvent(global23, api);
    eventTargetPatch(global23, api);
    const XMLHttpRequestEventTarget = global23["XMLHttpRequestEventTarget"];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
      api.patchEventTarget(global23, api, [XMLHttpRequestEventTarget.prototype]);
    }
  });
  Zone3.__load_patch("MutationObserver", (global23, Zone4, api) => {
    patchClass("MutationObserver");
    patchClass("WebKitMutationObserver");
  });
  Zone3.__load_patch("IntersectionObserver", (global23, Zone4, api) => {
    patchClass("IntersectionObserver");
  });
  Zone3.__load_patch("FileReader", (global23, Zone4, api) => {
    patchClass("FileReader");
  });
  Zone3.__load_patch("on_property", (global23, Zone4, api) => {
    propertyDescriptorPatch(api, global23);
  });
  Zone3.__load_patch("customElements", (global23, Zone4, api) => {
    patchCustomElements(global23, api);
  });
  Zone3.__load_patch("XHR", (global23, Zone4) => {
    patchXHR(global23);
    const XHR_TASK = zoneSymbol("xhrTask");
    const XHR_SYNC = zoneSymbol("xhrSync");
    const XHR_LISTENER = zoneSymbol("xhrListener");
    const XHR_SCHEDULED = zoneSymbol("xhrScheduled");
    const XHR_URL = zoneSymbol("xhrURL");
    const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol("xhrErrorBeforeScheduled");
    function patchXHR(window2) {
      const XMLHttpRequest = window2["XMLHttpRequest"];
      if (!XMLHttpRequest) {
        return;
      }
      const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
      function findPendingTask(target) {
        return target[XHR_TASK];
      }
      let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
      let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      if (!oriAddListener) {
        const XMLHttpRequestEventTarget = window2["XMLHttpRequestEventTarget"];
        if (XMLHttpRequestEventTarget) {
          const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
          oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
      }
      const READY_STATE_CHANGE = "readystatechange";
      const SCHEDULED = "scheduled";
      function scheduleTask(task) {
        const data = task.data;
        const target = data.target;
        target[XHR_SCHEDULED] = false;
        target[XHR_ERROR_BEFORE_SCHEDULED] = false;
        const listener = target[XHR_LISTENER];
        if (!oriAddListener) {
          oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
        if (listener) {
          oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
        }
        const newListener = target[XHR_LISTENER] = () => {
          if (target.readyState === target.DONE) {
            if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
              const loadTasks = target[Zone4.__symbol__("loadfalse")];
              if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                const oriInvoke = task.invoke;
                task.invoke = function() {
                  const loadTasks2 = target[Zone4.__symbol__("loadfalse")];
                  for (let i = 0; i < loadTasks2.length; i++) {
                    if (loadTasks2[i] === task) {
                      loadTasks2.splice(i, 1);
                    }
                  }
                  if (!data.aborted && task.state === SCHEDULED) {
                    oriInvoke.call(task);
                  }
                };
                loadTasks.push(task);
              } else {
                task.invoke();
              }
            } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
              target[XHR_ERROR_BEFORE_SCHEDULED] = true;
            }
          }
        };
        oriAddListener.call(target, READY_STATE_CHANGE, newListener);
        const storedTask = target[XHR_TASK];
        if (!storedTask) {
          target[XHR_TASK] = task;
        }
        sendNative.apply(target, data.args);
        target[XHR_SCHEDULED] = true;
        return task;
      }
      function placeholderCallback() {
      }
      function clearTask(task) {
        const data = task.data;
        data.aborted = true;
        return abortNative.apply(data.target, data.args);
      }
      const openNative = patchMethod(XMLHttpRequestPrototype, "open", () => function(self2, args) {
        self2[XHR_SYNC] = args[2] == false;
        self2[XHR_URL] = args[1];
        return openNative.apply(self2, args);
      });
      const XMLHTTPREQUEST_SOURCE = "XMLHttpRequest.send";
      const fetchTaskAborting = zoneSymbol("fetchTaskAborting");
      const fetchTaskScheduling = zoneSymbol("fetchTaskScheduling");
      const sendNative = patchMethod(XMLHttpRequestPrototype, "send", () => function(self2, args) {
        if (Zone4.current[fetchTaskScheduling] === true) {
          return sendNative.apply(self2, args);
        }
        if (self2[XHR_SYNC]) {
          return sendNative.apply(self2, args);
        } else {
          const options = {
            target: self2,
            url: self2[XHR_URL],
            isPeriodic: false,
            args,
            aborted: false
          };
          const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
          if (self2 && self2[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
            task.invoke();
          }
        }
      });
      const abortNative = patchMethod(XMLHttpRequestPrototype, "abort", () => function(self2, args) {
        const task = findPendingTask(self2);
        if (task && typeof task.type == "string") {
          if (task.cancelFn == null || task.data && task.data.aborted) {
            return;
          }
          task.zone.cancelTask(task);
        } else if (Zone4.current[fetchTaskAborting] === true) {
          return abortNative.apply(self2, args);
        }
      });
    }
  });
  Zone3.__load_patch("geolocation", (global23) => {
    if (global23["navigator"] && global23["navigator"].geolocation) {
      patchPrototype(global23["navigator"].geolocation, ["getCurrentPosition", "watchPosition"]);
    }
  });
  Zone3.__load_patch("PromiseRejectionEvent", (global23, Zone4) => {
    function findPromiseRejectionHandler(evtName) {
      return function(e) {
        const eventTasks = findEventTasks(global23, evtName);
        eventTasks.forEach((eventTask) => {
          const PromiseRejectionEvent = global23["PromiseRejectionEvent"];
          if (PromiseRejectionEvent) {
            const evt = new PromiseRejectionEvent(evtName, {
              promise: e.promise,
              reason: e.rejection
            });
            eventTask.invoke(evt);
          }
        });
      };
    }
    if (global23["PromiseRejectionEvent"]) {
      Zone4[zoneSymbol("unhandledPromiseRejectionHandler")] = findPromiseRejectionHandler("unhandledrejection");
      Zone4[zoneSymbol("rejectionHandledHandler")] = findPromiseRejectionHandler("rejectionhandled");
    }
  });
  Zone3.__load_patch("queueMicrotask", (global23, Zone4, api) => {
    patchQueueMicrotask(global23, api);
  });
}
function patchPromise(Zone3) {
  Zone3.__load_patch("ZoneAwarePromise", (global23, Zone4, api) => {
    const ObjectGetOwnPropertyDescriptor2 = Object.getOwnPropertyDescriptor;
    const ObjectDefineProperty2 = Object.defineProperty;
    function readableObjectToString(obj) {
      if (obj && obj.toString === Object.prototype.toString) {
        const className = obj.constructor && obj.constructor.name;
        return (className ? className : "") + ": " + JSON.stringify(obj);
      }
      return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    const __symbol__22 = api.symbol;
    const _uncaughtPromiseErrors = [];
    const isDisableWrappingUncaughtPromiseRejection = global23[__symbol__22("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] !== false;
    const symbolPromise = __symbol__22("Promise");
    const symbolThen = __symbol__22("then");
    const creationTrace = "__creationTrace__";
    api.onUnhandledError = (e) => {
      if (api.showUncaughtError()) {
        const rejection = e && e.rejection;
        if (rejection && e.zone && e.task) {
          console.error("Unhandled Promise rejection:", rejection instanceof Error ? rejection.message : rejection, "; Zone:", e.zone.name, "; Task:", e.task && e.task.source, "; Value:", rejection, rejection instanceof Error ? rejection.stack : void 0);
        } else {
          console.error(e);
        }
      }
    };
    api.microtaskDrainDone = () => {
      while (_uncaughtPromiseErrors.length) {
        const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
        try {
          uncaughtPromiseError.zone.runGuarded(() => {
            if (uncaughtPromiseError.throwOriginal) {
              throw uncaughtPromiseError.rejection;
            }
            throw uncaughtPromiseError;
          });
        } catch (error) {
          handleUnhandledRejection(error);
        }
      }
    };
    const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__22("unhandledPromiseRejectionHandler");
    function handleUnhandledRejection(e) {
      api.onUnhandledError(e);
      try {
        const handler = Zone4[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
        if (typeof handler === "function") {
          handler.call(this, e);
        }
      } catch (err) {
      }
    }
    function isThenable(value) {
      return value && typeof value.then === "function";
    }
    function forwardResolution(value) {
      return value;
    }
    function forwardRejection(rejection) {
      return ZoneAwarePromise.reject(rejection);
    }
    const symbolState = __symbol__22("state");
    const symbolValue = __symbol__22("value");
    const symbolFinally = __symbol__22("finally");
    const symbolParentPromiseValue = __symbol__22("parentPromiseValue");
    const symbolParentPromiseState = __symbol__22("parentPromiseState");
    const source = "Promise.then";
    const UNRESOLVED = null;
    const RESOLVED = true;
    const REJECTED = false;
    const REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
      return (v) => {
        try {
          resolvePromise(promise, state, v);
        } catch (err) {
          resolvePromise(promise, false, err);
        }
      };
    }
    const once = function() {
      let wasCalled = false;
      return function wrapper(wrappedFunction) {
        return function() {
          if (wasCalled) {
            return;
          }
          wasCalled = true;
          wrappedFunction.apply(null, arguments);
        };
      };
    };
    const TYPE_ERROR = "Promise resolved with itself";
    const CURRENT_TASK_TRACE_SYMBOL = __symbol__22("currentTaskTrace");
    function resolvePromise(promise, state, value) {
      const onceWrapper = once();
      if (promise === value) {
        throw new TypeError(TYPE_ERROR);
      }
      if (promise[symbolState] === UNRESOLVED) {
        let then = null;
        try {
          if (typeof value === "object" || typeof value === "function") {
            then = value && value.then;
          }
        } catch (err) {
          onceWrapper(() => {
            resolvePromise(promise, false, err);
          })();
          return promise;
        }
        if (state !== REJECTED && value instanceof ZoneAwarePromise && Object.hasOwn(value, symbolState) && Object.hasOwn(value, symbolValue) && value[symbolState] !== UNRESOLVED) {
          clearRejectedNoCatch(value);
          resolvePromise(promise, value[symbolState], value[symbolValue]);
        } else if (state !== REJECTED && typeof then === "function") {
          try {
            then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
          } catch (err) {
            onceWrapper(() => {
              resolvePromise(promise, false, err);
            })();
          }
        } else {
          promise[symbolState] = state;
          const queue = promise[symbolValue];
          promise[symbolValue] = value;
          if (promise[symbolFinally] === symbolFinally) {
            if (state === RESOLVED) {
              promise[symbolState] = promise[symbolParentPromiseState];
              promise[symbolValue] = promise[symbolParentPromiseValue];
            }
          }
          if (state === REJECTED && value instanceof Error) {
            const trace = Zone4.currentTask && Zone4.currentTask.data && Zone4.currentTask.data[creationTrace];
            if (trace) {
              ObjectDefineProperty2(value, CURRENT_TASK_TRACE_SYMBOL, {
                configurable: true,
                enumerable: false,
                writable: true,
                value: trace
              });
            }
          }
          for (let i = 0; i < queue.length; ) {
            scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
          }
          if (queue.length == 0 && state == REJECTED) {
            promise[symbolState] = REJECTED_NO_CATCH;
            let uncaughtPromiseError = value;
            try {
              throw new Error("Uncaught (in promise): " + readableObjectToString(value) + (value && value.stack ? "\n" + value.stack : ""));
            } catch (err) {
              uncaughtPromiseError = err;
            }
            if (isDisableWrappingUncaughtPromiseRejection) {
              uncaughtPromiseError.throwOriginal = true;
            }
            uncaughtPromiseError.rejection = value;
            uncaughtPromiseError.promise = promise;
            uncaughtPromiseError.zone = Zone4.current;
            uncaughtPromiseError.task = Zone4.currentTask;
            _uncaughtPromiseErrors.push(uncaughtPromiseError);
            api.scheduleMicroTask();
          }
        }
      }
      return promise;
    }
    const REJECTION_HANDLED_HANDLER = __symbol__22("rejectionHandledHandler");
    function clearRejectedNoCatch(promise) {
      if (promise[symbolState] === REJECTED_NO_CATCH) {
        try {
          const handler = Zone4[REJECTION_HANDLED_HANDLER];
          if (handler && typeof handler === "function") {
            handler.call(this, { rejection: promise[symbolValue], promise });
          }
        } catch (err) {
        }
        promise[symbolState] = REJECTED;
        for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
          if (promise === _uncaughtPromiseErrors[i].promise) {
            _uncaughtPromiseErrors.splice(i, 1);
          }
        }
      }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
      clearRejectedNoCatch(promise);
      const promiseState = promise[symbolState];
      const delegate = promiseState ? typeof onFulfilled === "function" ? onFulfilled : forwardResolution : typeof onRejected === "function" ? onRejected : forwardRejection;
      zone.scheduleMicroTask(source, () => {
        try {
          const parentPromiseValue = promise[symbolValue];
          const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
          if (isFinallyPromise) {
            chainPromise[symbolParentPromiseValue] = parentPromiseValue;
            chainPromise[symbolParentPromiseState] = promiseState;
          }
          const value = zone.run(delegate, void 0, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
          resolvePromise(chainPromise, true, value);
        } catch (error) {
          resolvePromise(chainPromise, false, error);
        }
      }, chainPromise);
    }
    const ZONE_AWARE_PROMISE_TO_STRING = "function ZoneAwarePromise() { [native code] }";
    const noop = function() {
    };
    const AggregateError = global23.AggregateError;
    class ZoneAwarePromise {
      static toString() {
        return ZONE_AWARE_PROMISE_TO_STRING;
      }
      static resolve(value) {
        if (value instanceof ZoneAwarePromise) {
          return value;
        }
        return resolvePromise(new this(null), RESOLVED, value);
      }
      static reject(error) {
        return resolvePromise(new this(null), REJECTED, error);
      }
      static withResolvers() {
        const result = {};
        result.promise = new ZoneAwarePromise((res, rej) => {
          result.resolve = res;
          result.reject = rej;
        });
        return result;
      }
      static any(values) {
        if (!values || typeof values[Symbol.iterator] !== "function") {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        const promises = [];
        let count = 0;
        try {
          for (let v of values) {
            count++;
            promises.push(ZoneAwarePromise.resolve(v));
          }
        } catch (err) {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        if (count === 0) {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        let finished = false;
        const errors = [];
        return new ZoneAwarePromise((resolve, reject) => {
          for (let i = 0; i < promises.length; i++) {
            promises[i].then((v) => {
              if (finished) {
                return;
              }
              finished = true;
              resolve(v);
            }, (err) => {
              errors.push(err);
              count--;
              if (count === 0) {
                finished = true;
                reject(new AggregateError(errors, "All promises were rejected"));
              }
            });
          }
        });
      }
      static race(values) {
        let resolve;
        let reject;
        let promise = new this((res, rej) => {
          resolve = res;
          reject = rej;
        });
        function onResolve(value) {
          resolve(value);
        }
        function onReject(error) {
          reject(error);
        }
        for (let value of values) {
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          value.then(onResolve, onReject);
        }
        return promise;
      }
      static all(values) {
        return ZoneAwarePromise.allWithCallback(values);
      }
      static allSettled(values) {
        const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
        return P.allWithCallback(values, {
          thenCallback: (value) => ({ status: "fulfilled", value }),
          errorCallback: (err) => ({ status: "rejected", reason: err })
        });
      }
      static allWithCallback(values, callback) {
        let resolve;
        let reject;
        let promise = new this((res, rej) => {
          resolve = res;
          reject = rej;
        });
        let unresolvedCount = 2;
        let valueIndex = 0;
        const resolvedValues = [];
        for (let value of values) {
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          const curValueIndex = valueIndex;
          try {
            value.then((value2) => {
              resolvedValues[curValueIndex] = callback ? callback.thenCallback(value2) : value2;
              unresolvedCount--;
              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }, (err) => {
              if (!callback) {
                reject(err);
              } else {
                resolvedValues[curValueIndex] = callback.errorCallback(err);
                unresolvedCount--;
                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }
              }
            });
          } catch (thenErr) {
            reject(thenErr);
          }
          unresolvedCount++;
          valueIndex++;
        }
        unresolvedCount -= 2;
        if (unresolvedCount === 0) {
          resolve(resolvedValues);
        }
        return promise;
      }
      constructor(executor) {
        const promise = this;
        if (!(promise instanceof ZoneAwarePromise)) {
          throw new Error("Must be an instanceof Promise.");
        }
        promise[symbolState] = UNRESOLVED;
        promise[symbolValue] = [];
        try {
          const onceWrapper = once();
          executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
        } catch (error) {
          resolvePromise(promise, false, error);
        }
      }
      get [Symbol.toStringTag]() {
        return "Promise";
      }
      get [Symbol.species]() {
        return ZoneAwarePromise;
      }
      then(onFulfilled, onRejected) {
        var _a;
        let C = (_a = this.constructor) == null ? void 0 : _a[Symbol.species];
        if (!C || typeof C !== "function") {
          C = this.constructor || ZoneAwarePromise;
        }
        const chainPromise = new C(noop);
        const zone = Zone4.current;
        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
        }
        return chainPromise;
      }
      catch(onRejected) {
        return this.then(null, onRejected);
      }
      finally(onFinally) {
        var _a;
        let C = (_a = this.constructor) == null ? void 0 : _a[Symbol.species];
        if (!C || typeof C !== "function") {
          C = ZoneAwarePromise;
        }
        const chainPromise = new C(noop);
        chainPromise[symbolFinally] = symbolFinally;
        const zone = Zone4.current;
        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
        }
        return chainPromise;
      }
    }
    ZoneAwarePromise["resolve"] = ZoneAwarePromise.resolve;
    ZoneAwarePromise["reject"] = ZoneAwarePromise.reject;
    ZoneAwarePromise["race"] = ZoneAwarePromise.race;
    ZoneAwarePromise["all"] = ZoneAwarePromise.all;
    const NativePromise = global23[symbolPromise] = global23["Promise"];
    global23["Promise"] = ZoneAwarePromise;
    const symbolThenPatched = __symbol__22("thenPatched");
    function patchThen(Ctor) {
      const proto = Ctor.prototype;
      const prop = ObjectGetOwnPropertyDescriptor2(proto, "then");
      if (prop && (prop.writable === false || !prop.configurable)) {
        return;
      }
      const originalThen = proto.then;
      proto[symbolThen] = originalThen;
      Ctor.prototype.then = function(onResolve, onReject) {
        const wrapped = new ZoneAwarePromise((resolve, reject) => {
          originalThen.call(this, resolve, reject);
        });
        return wrapped.then(onResolve, onReject);
      };
      Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
      return function(self2, args) {
        let resultPromise = fn.apply(self2, args);
        if (resultPromise instanceof ZoneAwarePromise) {
          return resultPromise;
        }
        let ctor = resultPromise.constructor;
        if (!ctor[symbolThenPatched]) {
          patchThen(ctor);
        }
        return resultPromise;
      };
    }
    if (NativePromise) {
      patchThen(NativePromise);
      const nativeTry = NativePromise["try"];
      if (nativeTry && typeof nativeTry === "function") {
        ZoneAwarePromise["try"] = nativeTry;
      }
      patchMethod(global23, "fetch", (delegate) => zoneify(delegate));
    }
    Promise[Zone4.__symbol__("uncaughtPromiseErrors")] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
  });
}
function patchToString(Zone3) {
  Zone3.__load_patch("toString", (global23) => {
    const originalFunctionToString = Function.prototype.toString;
    const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol("OriginalDelegate");
    const PROMISE_SYMBOL = zoneSymbol("Promise");
    const ERROR_SYMBOL = zoneSymbol("Error");
    const newFunctionToString = function toString() {
      if (typeof this === "function") {
        const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
        if (originalDelegate) {
          if (typeof originalDelegate === "function") {
            return originalFunctionToString.call(originalDelegate);
          } else {
            return Object.prototype.toString.call(originalDelegate);
          }
        }
        if (this === Promise) {
          const nativePromise = global23[PROMISE_SYMBOL];
          if (nativePromise) {
            return originalFunctionToString.call(nativePromise);
          }
        }
        if (this === Error) {
          const nativeError = global23[ERROR_SYMBOL];
          if (nativeError) {
            return originalFunctionToString.call(nativeError);
          }
        }
      }
      return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    const originalObjectToString = Object.prototype.toString;
    const PROMISE_OBJECT_TO_STRING = "[object Promise]";
    Object.prototype.toString = function() {
      if (typeof Promise === "function" && this instanceof Promise) {
        return PROMISE_OBJECT_TO_STRING;
      }
      return originalObjectToString.call(this);
    };
  });
}
function patchCallbacks(api, target, targetName, method, callbacks) {
  const symbol = Zone.__symbol__(method);
  if (target[symbol]) {
    return;
  }
  const nativeDelegate = target[symbol] = target[method];
  target[method] = function(name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function(callback) {
        const source = `${targetName}.${method}::` + callback;
        const prototype = opts.prototype;
        try {
          if (Object.hasOwn(prototype, callback)) {
            const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        } catch (e) {
        }
      });
    }
    return nativeDelegate.call(target, name, opts, options);
  };
  api.attachOriginToPatched(target[method], nativeDelegate);
}
function patchUtil(Zone3) {
  Zone3.__load_patch("util", (global23, Zone4, api) => {
    const eventNames = getOnEventNames(global23);
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    const SYMBOL_BLACK_LISTED_EVENTS = Zone4.__symbol__("BLACK_LISTED_EVENTS");
    const SYMBOL_UNPATCHED_EVENTS = Zone4.__symbol__("UNPATCHED_EVENTS");
    if (global23[SYMBOL_UNPATCHED_EVENTS]) {
      global23[SYMBOL_BLACK_LISTED_EVENTS] = global23[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global23[SYMBOL_BLACK_LISTED_EVENTS]) {
      Zone4[SYMBOL_BLACK_LISTED_EVENTS] = Zone4[SYMBOL_UNPATCHED_EVENTS] = global23[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = Object.defineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = () => ({
      globalSources,
      zoneSymbolEventNames: zoneSymbolEventNames2,
      eventNames,
      isBrowser,
      isMix,
      isNode,
      TRUE_STR,
      FALSE_STR,
      ZONE_SYMBOL_PREFIX,
      ADD_EVENT_LISTENER_STR,
      REMOVE_EVENT_LISTENER_STR
    });
  });
}
function patchCommon(Zone3) {
  patchPromise(Zone3);
  patchToString(Zone3);
  patchUtil(Zone3);
}
var Zone2 = loadZone();
patchCommon(Zone2);
patchBrowser(Zone2);

// node_modules/zone.js/fesm2015/zone-testing.js
/**
 * @license Angular
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var __defProp3 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp3 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp3.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField2 = (obj, key, value) => {
  __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function patchJasmine(Zone22) {
  Zone22.__load_patch("jasmine", (global32, Zone3, api) => {
    var _a;
    const __extends = function(d, b) {
      for (const p in b)
        if (Object.hasOwn(b, p))
          d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    if (!Zone3)
      throw new Error("Missing: zone.js");
    if (typeof jest !== "undefined") {
      return;
    }
    if (typeof jasmine == "undefined" || jasmine["__zone_patch__"]) {
      return;
    }
    jasmine["__zone_patch__"] = true;
    const SyncTestZoneSpec = Zone3["SyncTestZoneSpec"];
    const ProxyZoneSpec2 = Zone3["ProxyZoneSpec"];
    if (!SyncTestZoneSpec)
      throw new Error("Missing: SyncTestZoneSpec");
    if (!ProxyZoneSpec2)
      throw new Error("Missing: ProxyZoneSpec");
    const ambientZone = Zone3.current;
    const symbol = Zone3.__symbol__;
    const disablePatchingJasmineClock = global32[symbol("fakeAsyncDisablePatchingClock")] === true;
    const enableAutoFakeAsyncWhenClockPatched = !disablePatchingJasmineClock && (global32[symbol("fakeAsyncPatchLock")] === true || global32[symbol("fakeAsyncAutoFakeAsyncWhenClockPatched")] === true);
    const jasmineEnv = jasmine.getEnv();
    ["describe", "xdescribe", "fdescribe"].forEach((methodName) => {
      let originalJasmineFn = jasmineEnv[methodName];
      jasmineEnv[methodName] = function(description, specDefinitions) {
        return originalJasmineFn.call(this, description, wrapDescribeInZone(description, specDefinitions));
      };
    });
    ["it", "xit", "fit"].forEach((methodName) => {
      let originalJasmineFn = jasmineEnv[methodName];
      jasmineEnv[symbol(methodName)] = originalJasmineFn;
      jasmineEnv[methodName] = function(description, specDefinitions, timeout) {
        arguments[1] = wrapTestInZone(specDefinitions);
        return originalJasmineFn.apply(this, arguments);
      };
    });
    ["beforeEach", "afterEach", "beforeAll", "afterAll"].forEach((methodName) => {
      let originalJasmineFn = jasmineEnv[methodName];
      jasmineEnv[symbol(methodName)] = originalJasmineFn;
      jasmineEnv[methodName] = function(specDefinitions, timeout) {
        arguments[0] = wrapTestInZone(specDefinitions);
        return originalJasmineFn.apply(this, arguments);
      };
    });
    if (!disablePatchingJasmineClock) {
      const originalClockFn = jasmine[symbol("clock")] = jasmine["clock"];
      jasmine["clock"] = function() {
        const clock = originalClockFn.apply(this, arguments);
        if (!clock[symbol("patched")]) {
          clock[symbol("patched")] = symbol("patched");
          const originalTick = clock[symbol("tick")] = clock.tick;
          clock.tick = function() {
            const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
            if (fakeAsyncZoneSpec) {
              return fakeAsyncZoneSpec.tick.apply(fakeAsyncZoneSpec, arguments);
            }
            return originalTick.apply(this, arguments);
          };
          const originalMockDate = clock[symbol("mockDate")] = clock.mockDate;
          clock.mockDate = function() {
            const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
            if (fakeAsyncZoneSpec) {
              const dateTime = arguments.length > 0 ? arguments[0] : /* @__PURE__ */ new Date();
              return fakeAsyncZoneSpec.setFakeBaseSystemTime.apply(fakeAsyncZoneSpec, dateTime && typeof dateTime.getTime === "function" ? [dateTime.getTime()] : arguments);
            }
            return originalMockDate.apply(this, arguments);
          };
          if (enableAutoFakeAsyncWhenClockPatched) {
            ["install", "uninstall"].forEach((methodName) => {
              const originalClockFn2 = clock[symbol(methodName)] = clock[methodName];
              clock[methodName] = function() {
                const FakeAsyncTestZoneSpec2 = Zone3["FakeAsyncTestZoneSpec"];
                if (FakeAsyncTestZoneSpec2) {
                  jasmine[symbol("clockInstalled")] = "install" === methodName;
                  return;
                }
                return originalClockFn2.apply(this, arguments);
              };
            });
          }
        }
        return clock;
      };
    }
    if (!jasmine[Zone3.__symbol__("createSpyObj")]) {
      const originalCreateSpyObj = jasmine.createSpyObj;
      jasmine[Zone3.__symbol__("createSpyObj")] = originalCreateSpyObj;
      jasmine.createSpyObj = function() {
        const args = Array.prototype.slice.call(arguments);
        const propertyNames = args.length >= 3 ? args[2] : null;
        let spyObj;
        if (propertyNames) {
          const defineProperty = Object.defineProperty;
          Object.defineProperty = function(obj, p, attributes) {
            return defineProperty.call(this, obj, p, __spreadProps(__spreadValues2({}, attributes), {
              configurable: true,
              enumerable: true
            }));
          };
          try {
            spyObj = originalCreateSpyObj.apply(this, args);
          } finally {
            Object.defineProperty = defineProperty;
          }
        } else {
          spyObj = originalCreateSpyObj.apply(this, args);
        }
        return spyObj;
      };
    }
    function wrapDescribeInZone(description, describeBody) {
      return function() {
        const syncZone = ambientZone.fork(new SyncTestZoneSpec(`jasmine.describe#${description}`));
        return syncZone.run(describeBody, this, arguments);
      };
    }
    function runInTestZone(testBody, applyThis, queueRunner, done) {
      const isClockInstalled = !!jasmine[symbol("clockInstalled")];
      const testProxyZoneSpec = queueRunner.testProxyZoneSpec;
      const testProxyZone = queueRunner.testProxyZone;
      let lastDelegate;
      if (isClockInstalled && enableAutoFakeAsyncWhenClockPatched) {
        const fakeAsyncModule = Zone3[Zone3.__symbol__("fakeAsyncTest")];
        if (fakeAsyncModule && typeof fakeAsyncModule.fakeAsync === "function") {
          testBody = fakeAsyncModule.fakeAsync(testBody);
        }
      }
      if (done) {
        return testProxyZone.run(testBody, applyThis, [done]);
      } else {
        return testProxyZone.run(testBody, applyThis);
      }
    }
    function wrapTestInZone(testBody) {
      return testBody && (testBody.length ? function(done) {
        return runInTestZone(testBody, this, this.queueRunner, done);
      } : function() {
        return runInTestZone(testBody, this, this.queueRunner);
      });
    }
    const j$ = jasmine;
    const privateApis = ((_a = j$ == null ? void 0 : j$.private) == null ? void 0 : _a.QueueRunner) ? j$ == null ? void 0 : j$.private : j$;
    const QueueRunner = privateApis.QueueRunner;
    privateApis.QueueRunner = (function(_super) {
      __extends(ZoneQueueRunner, _super);
      function ZoneQueueRunner(attrs) {
        if (attrs.onComplete) {
          attrs.onComplete = /* @__PURE__ */ ((fn) => () => {
            this.testProxyZone = null;
            this.testProxyZoneSpec = null;
            ambientZone.scheduleMicroTask("jasmine.onComplete", fn);
          })(attrs.onComplete);
        }
        const nativeSetTimeout = global32[Zone3.__symbol__("setTimeout")];
        const nativeClearTimeout = global32[Zone3.__symbol__("clearTimeout")];
        if (nativeSetTimeout) {
          attrs.timeout = {
            setTimeout: nativeSetTimeout ? nativeSetTimeout : global32.setTimeout,
            clearTimeout: nativeClearTimeout ? nativeClearTimeout : global32.clearTimeout
          };
        }
        if (privateApis.UserContext) {
          if (!attrs.userContext) {
            attrs.userContext = new privateApis.UserContext();
          }
          attrs.userContext.queueRunner = this;
        } else {
          if (!attrs.userContext) {
            attrs.userContext = {};
          }
          attrs.userContext.queueRunner = this;
        }
        const onException = attrs.onException;
        attrs.onException = function(error) {
          if (error && error.message === "Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.") {
            const proxyZoneSpec = this && this.testProxyZoneSpec;
            if (proxyZoneSpec) {
              const pendingTasksInfo = proxyZoneSpec.getAndClearPendingTasksInfo();
              try {
                error.message += pendingTasksInfo;
              } catch (err) {
              }
            }
          }
          if (onException) {
            onException.call(this, error);
          }
        };
        _super.call(this, attrs);
      }
      ZoneQueueRunner.prototype.execute = function() {
        let zone = Zone3.current;
        let isChildOfAmbientZone = false;
        while (zone) {
          if (zone === ambientZone) {
            isChildOfAmbientZone = true;
            break;
          }
          zone = zone.parent;
        }
        if (!isChildOfAmbientZone)
          throw new Error("Unexpected Zone: " + Zone3.current.name);
        this.testProxyZoneSpec = new ProxyZoneSpec2();
        this.testProxyZone = ambientZone.fork(this.testProxyZoneSpec);
        if (!Zone3.currentTask) {
          Zone3.current.scheduleMicroTask("jasmine.execute().forceTask", () => QueueRunner.prototype.execute.call(this));
        } else {
          _super.prototype.execute.call(this);
        }
      };
      return ZoneQueueRunner;
    })(QueueRunner);
  });
}
function patchJest(Zone22) {
  Zone22.__load_patch("jest", (context, Zone3, api) => {
    if (typeof jest === "undefined" || jest["__zone_patch__"]) {
      return;
    }
    Zone3[api.symbol("ignoreConsoleErrorUncaughtError")] = true;
    jest["__zone_patch__"] = true;
    const ProxyZoneSpec2 = Zone3["ProxyZoneSpec"];
    const SyncTestZoneSpec = Zone3["SyncTestZoneSpec"];
    if (!ProxyZoneSpec2) {
      throw new Error("Missing ProxyZoneSpec");
    }
    const rootZone = Zone3.current;
    const syncZone = rootZone.fork(new SyncTestZoneSpec("jest.describe"));
    const proxyZoneSpec = new ProxyZoneSpec2();
    const proxyZone = rootZone.fork(proxyZoneSpec);
    function wrapDescribeFactoryInZone(originalJestFn) {
      return function(...tableArgs) {
        const originalDescribeFn = originalJestFn.apply(this, tableArgs);
        return function(...args) {
          args[1] = wrapDescribeInZone(args[1]);
          return originalDescribeFn.apply(this, args);
        };
      };
    }
    function wrapTestFactoryInZone(originalJestFn) {
      return function(...tableArgs) {
        return function(...args) {
          args[1] = wrapTestInZone(args[1]);
          return originalJestFn.apply(this, tableArgs).apply(this, args);
        };
      };
    }
    function wrapDescribeInZone(describeBody) {
      return function(...args) {
        return syncZone.run(describeBody, this, args);
      };
    }
    function wrapTestInZone(testBody, isTestFunc = false) {
      if (typeof testBody !== "function") {
        return testBody;
      }
      const wrappedFunc = function() {
        if (Zone3[api.symbol("useFakeTimersCalled")] === true && testBody && !testBody.isFakeAsync) {
          const fakeAsyncModule = Zone3[Zone3.__symbol__("fakeAsyncTest")];
          if (fakeAsyncModule && typeof fakeAsyncModule.fakeAsync === "function") {
            testBody = fakeAsyncModule.fakeAsync(testBody);
          }
        }
        proxyZoneSpec.isTestFunc = isTestFunc;
        return proxyZone.run(testBody, null, arguments);
      };
      Object.defineProperty(wrappedFunc, "length", {
        configurable: true,
        writable: true,
        enumerable: false
      });
      wrappedFunc.length = testBody.length;
      return wrappedFunc;
    }
    ["describe", "xdescribe", "fdescribe"].forEach((methodName) => {
      let originalJestFn = context[methodName];
      if (context[Zone3.__symbol__(methodName)]) {
        return;
      }
      context[Zone3.__symbol__(methodName)] = originalJestFn;
      context[methodName] = function(...args) {
        args[1] = wrapDescribeInZone(args[1]);
        return originalJestFn.apply(this, args);
      };
      context[methodName].each = wrapDescribeFactoryInZone(originalJestFn.each);
    });
    context.describe.only = context.fdescribe;
    context.describe.skip = context.xdescribe;
    ["it", "xit", "fit", "test", "xtest"].forEach((methodName) => {
      let originalJestFn = context[methodName];
      if (context[Zone3.__symbol__(methodName)]) {
        return;
      }
      context[Zone3.__symbol__(methodName)] = originalJestFn;
      context[methodName] = function(...args) {
        args[1] = wrapTestInZone(args[1], true);
        return originalJestFn.apply(this, args);
      };
      context[methodName].each = wrapTestFactoryInZone(originalJestFn.each);
      context[methodName].todo = originalJestFn.todo;
      context[methodName].failing = originalJestFn.failing;
    });
    context.it.only = context.fit;
    context.it.skip = context.xit;
    context.test.only = context.fit;
    context.test.skip = context.xit;
    ["beforeEach", "afterEach", "beforeAll", "afterAll"].forEach((methodName) => {
      let originalJestFn = context[methodName];
      if (context[Zone3.__symbol__(methodName)]) {
        return;
      }
      context[Zone3.__symbol__(methodName)] = originalJestFn;
      context[methodName] = function(...args) {
        args[0] = wrapTestInZone(args[0]);
        return originalJestFn.apply(this, args);
      };
    });
    Zone3.patchJestObject = function patchJestObject(Timer, isModern = false) {
      function isPatchingFakeTimer() {
        const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
        return !!fakeAsyncZoneSpec;
      }
      function isInTestFunc() {
        const proxyZoneSpec2 = Zone3.current.get("ProxyZoneSpec");
        return proxyZoneSpec2 && proxyZoneSpec2.isTestFunc;
      }
      if (Timer[api.symbol("fakeTimers")]) {
        return;
      }
      Timer[api.symbol("fakeTimers")] = true;
      api.patchMethod(Timer, "_checkFakeTimers", (delegate) => {
        return function(self2, args) {
          if (isPatchingFakeTimer()) {
            return true;
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "useFakeTimers", (delegate) => {
        return function(self2, args) {
          Zone3[api.symbol("useFakeTimersCalled")] = true;
          if (isModern || isInTestFunc()) {
            return delegate.apply(self2, args);
          }
          return self2;
        };
      });
      api.patchMethod(Timer, "useRealTimers", (delegate) => {
        return function(self2, args) {
          Zone3[api.symbol("useFakeTimersCalled")] = false;
          if (isModern || isInTestFunc()) {
            return delegate.apply(self2, args);
          }
          return self2;
        };
      });
      api.patchMethod(Timer, "setSystemTime", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec && isPatchingFakeTimer()) {
            fakeAsyncZoneSpec.setFakeBaseSystemTime(args[0]);
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "getRealSystemTime", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec && isPatchingFakeTimer()) {
            return fakeAsyncZoneSpec.getRealSystemTime();
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "runAllTicks", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.flushMicrotasks();
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "runAllTimers", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.flush(100, true);
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "advanceTimersByTime", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.tick(args[0]);
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "runOnlyPendingTimers", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.flushOnlyPendingTimers();
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "advanceTimersToNextTimer", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.tickToNext(args[0]);
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "clearAllTimers", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.removeAllTimers();
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "getTimerCount", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            return fakeAsyncZoneSpec.getTimerCount();
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
    };
  });
}
function patchMocha(Zone22) {
  Zone22.__load_patch("mocha", (global32, Zone3) => {
    const Mocha = global32.Mocha;
    if (typeof Mocha === "undefined") {
      return;
    }
    if (typeof Zone3 === "undefined") {
      throw new Error("Missing Zone.js");
    }
    const ProxyZoneSpec2 = Zone3["ProxyZoneSpec"];
    const SyncTestZoneSpec = Zone3["SyncTestZoneSpec"];
    if (!ProxyZoneSpec2) {
      throw new Error("Missing ProxyZoneSpec");
    }
    if (Mocha["__zone_patch__"]) {
      throw new Error('"Mocha" has already been patched with "Zone".');
    }
    Mocha["__zone_patch__"] = true;
    const rootZone = Zone3.current;
    const syncZone = rootZone.fork(new SyncTestZoneSpec("Mocha.describe"));
    let testZone = null;
    const suiteZone = rootZone.fork(new ProxyZoneSpec2());
    const mochaOriginal = {
      after: global32.after,
      afterEach: global32.afterEach,
      before: global32.before,
      beforeEach: global32.beforeEach,
      describe: global32.describe,
      it: global32.it
    };
    function modifyArguments(args, syncTest, asyncTest) {
      for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        if (typeof arg === "function") {
          args[i] = arg.length === 0 ? syncTest(arg) : asyncTest(arg);
          args[i].toString = function() {
            return arg.toString();
          };
        }
      }
      return args;
    }
    function wrapDescribeInZone(args) {
      const syncTest = function(fn) {
        return function() {
          return syncZone.run(fn, this, arguments);
        };
      };
      return modifyArguments(args, syncTest);
    }
    function wrapTestInZone(args) {
      const asyncTest = function(fn) {
        return function(done) {
          return testZone.run(fn, this, [done]);
        };
      };
      const syncTest = function(fn) {
        return function() {
          return testZone.run(fn, this);
        };
      };
      return modifyArguments(args, syncTest, asyncTest);
    }
    function wrapSuiteInZone(args) {
      const asyncTest = function(fn) {
        return function(done) {
          return suiteZone.run(fn, this, [done]);
        };
      };
      const syncTest = function(fn) {
        return function() {
          return suiteZone.run(fn, this);
        };
      };
      return modifyArguments(args, syncTest, asyncTest);
    }
    global32.describe = global32.suite = function() {
      return mochaOriginal.describe.apply(this, wrapDescribeInZone(arguments));
    };
    global32.xdescribe = global32.suite.skip = global32.describe.skip = function() {
      return mochaOriginal.describe.skip.apply(this, wrapDescribeInZone(arguments));
    };
    global32.describe.only = global32.suite.only = function() {
      return mochaOriginal.describe.only.apply(this, wrapDescribeInZone(arguments));
    };
    global32.it = global32.specify = global32.test = function() {
      return mochaOriginal.it.apply(this, wrapTestInZone(arguments));
    };
    global32.xit = global32.xspecify = global32.it.skip = function() {
      return mochaOriginal.it.skip.apply(this, wrapTestInZone(arguments));
    };
    global32.it.only = global32.test.only = function() {
      return mochaOriginal.it.only.apply(this, wrapTestInZone(arguments));
    };
    global32.after = global32.suiteTeardown = function() {
      return mochaOriginal.after.apply(this, wrapSuiteInZone(arguments));
    };
    global32.afterEach = global32.teardown = function() {
      return mochaOriginal.afterEach.apply(this, wrapTestInZone(arguments));
    };
    global32.before = global32.suiteSetup = function() {
      return mochaOriginal.before.apply(this, wrapSuiteInZone(arguments));
    };
    global32.beforeEach = global32.setup = function() {
      return mochaOriginal.beforeEach.apply(this, wrapTestInZone(arguments));
    };
    ((originalRunTest, originalRun) => {
      Mocha.Runner.prototype.runTest = function(fn) {
        Zone3.current.scheduleMicroTask("mocha.forceTask", () => {
          originalRunTest.call(this, fn);
        });
      };
      Mocha.Runner.prototype.run = function(fn) {
        this.on("test", (e) => {
          testZone = rootZone.fork(new ProxyZoneSpec2());
        });
        this.on("fail", (test, err) => {
          const proxyZoneSpec = testZone && testZone.get("ProxyZoneSpec");
          if (proxyZoneSpec && err) {
            try {
              err.message += proxyZoneSpec.getAndClearPendingTasksInfo();
            } catch (error) {
            }
          }
        });
        return originalRun.call(this, fn);
      };
    })(Mocha.Runner.prototype.runTest, Mocha.Runner.prototype.run);
  });
}
var global3 = globalThis;
function __symbol__2(name) {
  const rawPrefix = global3["__Zone_symbol_prefix"];
  const symbolPrefix = typeof rawPrefix === "string" ? rawPrefix : "__zone_symbol__";
  return symbolPrefix + name;
}
var __global = globalThis;
var AsyncTestZoneSpec = class _AsyncTestZoneSpec {
  constructor(finishCallback, failCallback, namePrefix) {
    __publicField2(this, "finishCallback");
    __publicField2(this, "failCallback");
    __publicField2(this, "_pendingMicroTasks", false);
    __publicField2(this, "_pendingMacroTasks", false);
    __publicField2(this, "_alreadyErrored", false);
    __publicField2(this, "_isSync", false);
    __publicField2(this, "_existingFinishTimer", null);
    __publicField2(this, "entryFunction", null);
    __publicField2(this, "runZone", Zone.current);
    __publicField2(this, "unresolvedChainedPromiseCount", 0);
    __publicField2(this, "supportWaitUnresolvedChainedPromise", false);
    __publicField2(this, "name");
    __publicField2(this, "properties");
    this.finishCallback = finishCallback;
    this.failCallback = failCallback;
    this.name = "asyncTestZone for " + namePrefix;
    this.properties = { "AsyncTestZoneSpec": this };
    this.supportWaitUnresolvedChainedPromise = __global[__symbol__2("supportWaitUnResolvedChainedPromise")] === true;
  }
  // Needs to be a getter and not a plain property in order run this just-in-time. Otherwise
  // `__symbol__` would be evaluated during top-level execution prior to the Zone prefix being
  // changed for tests.
  static get symbolParentUnresolved() {
    return __symbol__2("parentUnresolved");
  }
  isUnresolvedChainedPromisePending() {
    return this.unresolvedChainedPromiseCount > 0;
  }
  _finishCallbackIfDone() {
    if (this._existingFinishTimer !== null) {
      clearTimeout(this._existingFinishTimer);
      this._existingFinishTimer = null;
    }
    if (!(this._pendingMicroTasks || this._pendingMacroTasks || this.supportWaitUnresolvedChainedPromise && this.isUnresolvedChainedPromisePending())) {
      this.runZone.run(() => {
        this._existingFinishTimer = setTimeout(() => {
          if (!this._alreadyErrored && !(this._pendingMicroTasks || this._pendingMacroTasks)) {
            this.finishCallback();
          }
        }, 0);
      });
    }
  }
  patchPromiseForTest() {
    if (!this.supportWaitUnresolvedChainedPromise) {
      return;
    }
    const patchPromiseForTest = Promise[Zone.__symbol__("patchPromiseForTest")];
    if (patchPromiseForTest) {
      patchPromiseForTest();
    }
  }
  unPatchPromiseForTest() {
    if (!this.supportWaitUnresolvedChainedPromise) {
      return;
    }
    const unPatchPromiseForTest = Promise[Zone.__symbol__("unPatchPromiseForTest")];
    if (unPatchPromiseForTest) {
      unPatchPromiseForTest();
    }
  }
  onScheduleTask(delegate, current, target, task) {
    if (task.type !== "eventTask") {
      this._isSync = false;
    }
    if (task.type === "microTask" && task.data && task.data instanceof Promise) {
      if (task.data[_AsyncTestZoneSpec.symbolParentUnresolved] === true) {
        this.unresolvedChainedPromiseCount--;
      }
    }
    return delegate.scheduleTask(target, task);
  }
  onInvokeTask(delegate, current, target, task, applyThis, applyArgs) {
    if (task.type !== "eventTask") {
      this._isSync = false;
    }
    return delegate.invokeTask(target, task, applyThis, applyArgs);
  }
  onCancelTask(delegate, current, target, task) {
    if (task.type !== "eventTask") {
      this._isSync = false;
    }
    return delegate.cancelTask(target, task);
  }
  // Note - we need to use onInvoke at the moment to call finish when a test is
  // fully synchronous. TODO(juliemr): remove this when the logic for
  // onHasTask changes and it calls whenever the task queues are dirty.
  // updated by(JiaLiPassion), only call finish callback when no task
  // was scheduled/invoked/canceled.
  onInvoke(parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source) {
    if (!this.entryFunction) {
      this.entryFunction = delegate;
    }
    try {
      this._isSync = true;
      return parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
    } finally {
      if (this._isSync && this.entryFunction === delegate) {
        this._finishCallbackIfDone();
      }
    }
  }
  onHandleError(parentZoneDelegate, currentZone, targetZone, error) {
    const result = parentZoneDelegate.handleError(targetZone, error);
    if (result) {
      this.failCallback(error);
      this._alreadyErrored = true;
    }
    return false;
  }
  onHasTask(delegate, current, target, hasTaskState) {
    delegate.hasTask(target, hasTaskState);
    if (current !== target) {
      return;
    }
    if (hasTaskState.change == "microTask") {
      this._pendingMicroTasks = hasTaskState.microTask;
      this._finishCallbackIfDone();
    } else if (hasTaskState.change == "macroTask") {
      this._pendingMacroTasks = hasTaskState.macroTask;
      this._finishCallbackIfDone();
    }
  }
};
function patchAsyncTest(Zone22) {
  Zone22["AsyncTestZoneSpec"] = AsyncTestZoneSpec;
  Zone22.__load_patch("asynctest", (global32, Zone3, api) => {
    Zone3[api.symbol("asyncTest")] = function asyncTest(fn) {
      if (global32.jasmine) {
        return function(done) {
          if (!done) {
            done = function() {
            };
            done.fail = function(e) {
              throw e;
            };
          }
          runInTestZone(fn, this, void 0, done, (err) => {
            if (typeof err === "string") {
              return done.fail(new Error(err));
            } else {
              done.fail(err);
            }
          });
        };
      }
      return function(...args) {
        return new Promise((finishCallback, failCallback) => {
          runInTestZone(fn, this, args, finishCallback, failCallback);
        });
      };
    };
    function runInTestZone(fn, context, applyArgs, finishCallback, failCallback) {
      const currentZone = Zone3.current;
      const AsyncTestZoneSpec2 = Zone3["AsyncTestZoneSpec"];
      if (AsyncTestZoneSpec2 === void 0) {
        throw new Error("AsyncTestZoneSpec is needed for the async() test helper but could not be found. Please make sure that your environment includes zone.js/plugins/async-test");
      }
      const ProxyZoneSpec2 = Zone3["ProxyZoneSpec"];
      if (!ProxyZoneSpec2) {
        throw new Error("ProxyZoneSpec is needed for the async() test helper but could not be found. Please make sure that your environment includes zone.js/plugins/proxy");
      }
      const proxyZoneSpec = ProxyZoneSpec2.get();
      ProxyZoneSpec2.assertPresent();
      const proxyZone = Zone3.current.getZoneWith("ProxyZoneSpec");
      const previousDelegate = proxyZoneSpec.getDelegate();
      proxyZone.parent.run(() => {
        const testZoneSpec = new AsyncTestZoneSpec2(() => {
          if (proxyZoneSpec.getDelegate() == testZoneSpec) {
            proxyZoneSpec.setDelegate(previousDelegate);
          }
          testZoneSpec.unPatchPromiseForTest();
          currentZone.run(() => {
            finishCallback();
          });
        }, (error) => {
          if (proxyZoneSpec.getDelegate() == testZoneSpec) {
            proxyZoneSpec.setDelegate(previousDelegate);
          }
          testZoneSpec.unPatchPromiseForTest();
          currentZone.run(() => {
            failCallback(error);
          });
        }, "test");
        proxyZoneSpec.setDelegate(testZoneSpec);
        testZoneSpec.patchPromiseForTest();
      });
      return Zone3.current.runGuarded(fn, context, applyArgs);
    }
  });
}
function throwProxyZoneError() {
  const jestPatched = typeof jest !== "undefined" && jest["__zone_patch__"];
  if (jestPatched) {
    throw new Error("Only globals are patched with zone-testing. If you import `it`, `describe`, etc. directly, you cannot use `fakeAsync` or `waitForAsync`.");
  } else {
    throw new Error("ProxyZoneSpec is needed for the fakeAsync and waitForAsync test helpers but could not be found. Make sure that your environment includes zone-testing.js");
  }
}
var ProxyZoneSpec = class _ProxyZoneSpec {
  constructor(defaultSpecDelegate = null) {
    __publicField2(this, "defaultSpecDelegate");
    __publicField2(this, "name", "ProxyZone");
    __publicField2(this, "_delegateSpec", null);
    __publicField2(this, "properties", { "ProxyZoneSpec": this });
    __publicField2(this, "propertyKeys", null);
    __publicField2(this, "lastTaskState", null);
    __publicField2(this, "isNeedToTriggerHasTask", false);
    __publicField2(this, "tasks", []);
    this.defaultSpecDelegate = defaultSpecDelegate;
    this.setDelegate(defaultSpecDelegate);
  }
  static get() {
    return Zone.current.get("ProxyZoneSpec");
  }
  static isLoaded() {
    return _ProxyZoneSpec.get() instanceof _ProxyZoneSpec;
  }
  static assertPresent() {
    const spec = _ProxyZoneSpec.get();
    if (spec === void 0) {
      throw new Error(`Expected to be running in 'ProxyZone', but it was not found.`);
    }
    return spec;
  }
  setDelegate(delegateSpec) {
    const isNewDelegate = this._delegateSpec !== delegateSpec;
    this._delegateSpec = delegateSpec;
    this.propertyKeys && this.propertyKeys.forEach((key) => delete this.properties[key]);
    this.propertyKeys = null;
    if (delegateSpec && delegateSpec.properties) {
      this.propertyKeys = Object.keys(delegateSpec.properties);
      this.propertyKeys.forEach((k) => this.properties[k] = delegateSpec.properties[k]);
    }
    if (isNewDelegate && this.lastTaskState && (this.lastTaskState.macroTask || this.lastTaskState.microTask)) {
      this.isNeedToTriggerHasTask = true;
    }
  }
  getDelegate() {
    return this._delegateSpec;
  }
  resetDelegate() {
    const delegateSpec = this.getDelegate();
    this.setDelegate(this.defaultSpecDelegate);
  }
  tryTriggerHasTask(parentZoneDelegate, currentZone, targetZone) {
    if (this.isNeedToTriggerHasTask && this.lastTaskState) {
      this.isNeedToTriggerHasTask = false;
      this.onHasTask(parentZoneDelegate, currentZone, targetZone, this.lastTaskState);
    }
  }
  removeFromTasks(task) {
    if (!this.tasks) {
      return;
    }
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) {
        this.tasks.splice(i, 1);
        return;
      }
    }
  }
  getAndClearPendingTasksInfo() {
    if (this.tasks.length === 0) {
      return "";
    }
    const taskInfo = this.tasks.map((task) => {
      const dataInfo = task.data && Object.keys(task.data).map((key) => {
        return key + ":" + task.data[key];
      }).join(",");
      return `type: ${task.type}, source: ${task.source}, args: {${dataInfo}}`;
    });
    const pendingTasksInfo = "--Pending async tasks are: [" + taskInfo + "]";
    this.tasks = [];
    return pendingTasksInfo;
  }
  onFork(parentZoneDelegate, currentZone, targetZone, zoneSpec) {
    if (this._delegateSpec && this._delegateSpec.onFork) {
      return this._delegateSpec.onFork(parentZoneDelegate, currentZone, targetZone, zoneSpec);
    } else {
      return parentZoneDelegate.fork(targetZone, zoneSpec);
    }
  }
  onIntercept(parentZoneDelegate, currentZone, targetZone, delegate, source) {
    if (this._delegateSpec && this._delegateSpec.onIntercept) {
      return this._delegateSpec.onIntercept(parentZoneDelegate, currentZone, targetZone, delegate, source);
    } else {
      return parentZoneDelegate.intercept(targetZone, delegate, source);
    }
  }
  onInvoke(parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source) {
    this.tryTriggerHasTask(parentZoneDelegate, currentZone, targetZone);
    if (this._delegateSpec && this._delegateSpec.onInvoke) {
      return this._delegateSpec.onInvoke(parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source);
    } else {
      return parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
    }
  }
  onHandleError(parentZoneDelegate, currentZone, targetZone, error) {
    if (this._delegateSpec && this._delegateSpec.onHandleError) {
      return this._delegateSpec.onHandleError(parentZoneDelegate, currentZone, targetZone, error);
    } else {
      return parentZoneDelegate.handleError(targetZone, error);
    }
  }
  onScheduleTask(parentZoneDelegate, currentZone, targetZone, task) {
    if (task.type !== "eventTask") {
      this.tasks.push(task);
    }
    if (this._delegateSpec && this._delegateSpec.onScheduleTask) {
      return this._delegateSpec.onScheduleTask(parentZoneDelegate, currentZone, targetZone, task);
    } else {
      return parentZoneDelegate.scheduleTask(targetZone, task);
    }
  }
  onInvokeTask(parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs) {
    if (task.type !== "eventTask") {
      this.removeFromTasks(task);
    }
    this.tryTriggerHasTask(parentZoneDelegate, currentZone, targetZone);
    if (this._delegateSpec && this._delegateSpec.onInvokeTask) {
      return this._delegateSpec.onInvokeTask(parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs);
    } else {
      return parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
    }
  }
  onCancelTask(parentZoneDelegate, currentZone, targetZone, task) {
    if (task.type !== "eventTask") {
      this.removeFromTasks(task);
    }
    this.tryTriggerHasTask(parentZoneDelegate, currentZone, targetZone);
    if (this._delegateSpec && this._delegateSpec.onCancelTask) {
      return this._delegateSpec.onCancelTask(parentZoneDelegate, currentZone, targetZone, task);
    } else {
      return parentZoneDelegate.cancelTask(targetZone, task);
    }
  }
  onHasTask(delegate, current, target, hasTaskState) {
    this.lastTaskState = hasTaskState;
    if (this._delegateSpec && this._delegateSpec.onHasTask) {
      this._delegateSpec.onHasTask(delegate, current, target, hasTaskState);
    } else {
      delegate.hasTask(target, hasTaskState);
    }
  }
};
function patchProxyZoneSpec(Zone22) {
  Zone22["ProxyZoneSpec"] = ProxyZoneSpec;
}
var global22 = typeof window === "object" && window || typeof self === "object" && self || globalThis.global;
var originalSetImmediate = global22.setImmediate;
var originalTimeout = global22.setTimeout;
var OriginalDate = global22.Date;
function FakeDate() {
  if (arguments.length === 0) {
    const d = new OriginalDate();
    d.setTime(FakeDate.now());
    return d;
  } else {
    const args = Array.prototype.slice.call(arguments);
    return new OriginalDate(...args);
  }
}
FakeDate.now = function() {
  const fakeAsyncTestZoneSpec = Zone.current.get("FakeAsyncTestZoneSpec");
  if (fakeAsyncTestZoneSpec) {
    return fakeAsyncTestZoneSpec.getFakeSystemTime();
  }
  return OriginalDate.now.apply(this, arguments);
};
FakeDate.UTC = OriginalDate.UTC;
FakeDate.parse = OriginalDate.parse;
var patchedTimers;
var timeoutCallback = function() {
};
var _Scheduler = class _Scheduler2 {
  constructor() {
    __publicField2(this, "_schedulerQueue", []);
    __publicField2(this, "_currentTickTime", 0);
    __publicField2(this, "_currentFakeBaseSystemTime", OriginalDate.now());
    __publicField2(this, "_currentTickRequeuePeriodicEntries", []);
  }
  static getNextId() {
    const id = patchedTimers.nativeSetTimeout.call(global22, timeoutCallback, 0);
    patchedTimers.nativeClearTimeout.call(global22, id);
    if (typeof id === "number") {
      return id;
    }
    return _Scheduler2.nextNodeJSId++;
  }
  getCurrentTickTime() {
    return this._currentTickTime;
  }
  getFakeSystemTime() {
    return this._currentFakeBaseSystemTime + this._currentTickTime;
  }
  setFakeBaseSystemTime(fakeBaseSystemTime) {
    this._currentFakeBaseSystemTime = fakeBaseSystemTime;
  }
  getRealSystemTime() {
    return OriginalDate.now();
  }
  scheduleFunction(cb, delay, options) {
    options = __spreadValues2(__spreadValues2({}, {
      args: [],
      isPeriodic: false,
      isRequestAnimationFrame: false,
      id: -1,
      isRequeuePeriodic: false
    }), options);
    let currentId = options.id < 0 ? _Scheduler2.nextId : options.id;
    _Scheduler2.nextId = _Scheduler2.getNextId();
    let endTime = this._currentTickTime + delay;
    let newEntry = {
      endTime,
      id: currentId,
      func: cb,
      args: options.args,
      delay,
      isPeriodic: options.isPeriodic,
      isRequestAnimationFrame: options.isRequestAnimationFrame
    };
    if (options.isRequeuePeriodic) {
      this._currentTickRequeuePeriodicEntries.push(newEntry);
    }
    let i = 0;
    for (; i < this._schedulerQueue.length; i++) {
      let currentEntry = this._schedulerQueue[i];
      if (newEntry.endTime < currentEntry.endTime) {
        break;
      }
    }
    this._schedulerQueue.splice(i, 0, newEntry);
    return currentId;
  }
  removeScheduledFunctionWithId(id) {
    for (let i = 0; i < this._schedulerQueue.length; i++) {
      if (this._schedulerQueue[i].id == id) {
        this._schedulerQueue.splice(i, 1);
        break;
      }
    }
  }
  removeAll() {
    this._schedulerQueue = [];
  }
  getTimerCount() {
    return this._schedulerQueue.length;
  }
  tickToNext(step = 1, doTick, tickOptions) {
    if (this._schedulerQueue.length < step) {
      return;
    }
    const startTime = this._currentTickTime;
    const targetTask = this._schedulerQueue[step - 1];
    this.tick(targetTask.endTime - startTime, doTick, tickOptions);
  }
  tick(millis = 0, doTick, tickOptions) {
    let finalTime = this._currentTickTime + millis;
    let lastCurrentTime = 0;
    tickOptions = Object.assign({ processNewMacroTasksSynchronously: true }, tickOptions);
    const schedulerQueue = tickOptions.processNewMacroTasksSynchronously ? this._schedulerQueue : this._schedulerQueue.slice();
    if (schedulerQueue.length === 0 && doTick) {
      doTick(millis);
      return;
    }
    while (schedulerQueue.length > 0) {
      this._currentTickRequeuePeriodicEntries = [];
      let current = schedulerQueue[0];
      if (finalTime < current.endTime) {
        break;
      } else {
        let current2 = schedulerQueue.shift();
        if (!tickOptions.processNewMacroTasksSynchronously) {
          const idx = this._schedulerQueue.indexOf(current2);
          if (idx >= 0) {
            this._schedulerQueue.splice(idx, 1);
          }
        }
        lastCurrentTime = this._currentTickTime;
        this._currentTickTime = current2.endTime;
        if (doTick) {
          doTick(this._currentTickTime - lastCurrentTime);
        }
        let retval = current2.func.apply(global22, current2.isRequestAnimationFrame ? [this._currentTickTime] : current2.args);
        if (!retval) {
          break;
        }
        if (!tickOptions.processNewMacroTasksSynchronously) {
          this._currentTickRequeuePeriodicEntries.forEach((newEntry) => {
            let i = 0;
            for (; i < schedulerQueue.length; i++) {
              const currentEntry = schedulerQueue[i];
              if (newEntry.endTime < currentEntry.endTime) {
                break;
              }
            }
            schedulerQueue.splice(i, 0, newEntry);
          });
        }
      }
    }
    lastCurrentTime = this._currentTickTime;
    this._currentTickTime = finalTime;
    if (doTick) {
      doTick(this._currentTickTime - lastCurrentTime);
    }
  }
  executeNextTask(doTick) {
    const current = this._schedulerQueue.shift();
    if (current === void 0) {
      return;
    }
    doTick == null ? void 0 : doTick(current.endTime - this._currentTickTime);
    this._currentTickTime = current.endTime;
    current.func.apply(global22, current.isRequestAnimationFrame ? [this._currentTickTime] : current.args);
  }
  flushOnlyPendingTimers(doTick) {
    if (this._schedulerQueue.length === 0) {
      return 0;
    }
    const startTime = this._currentTickTime;
    const lastTask = this._schedulerQueue[this._schedulerQueue.length - 1];
    this.tick(lastTask.endTime - startTime, doTick, { processNewMacroTasksSynchronously: false });
    return this._currentTickTime - startTime;
  }
  flush(limit = 20, flushPeriodic = false, doTick) {
    if (flushPeriodic) {
      return this.flushPeriodic(doTick);
    } else {
      return this.flushNonPeriodic(limit, doTick);
    }
  }
  flushPeriodic(doTick) {
    if (this._schedulerQueue.length === 0) {
      return 0;
    }
    const startTime = this._currentTickTime;
    const lastTask = this._schedulerQueue[this._schedulerQueue.length - 1];
    this.tick(lastTask.endTime - startTime, doTick);
    return this._currentTickTime - startTime;
  }
  flushNonPeriodic(limit, doTick) {
    const startTime = this._currentTickTime;
    let lastCurrentTime = 0;
    let count = 0;
    while (this._schedulerQueue.length > 0) {
      count++;
      if (count > limit) {
        throw new Error("flush failed after reaching the limit of " + limit + " tasks. Does your code use a polling timeout?");
      }
      if (this._schedulerQueue.filter((task) => !task.isPeriodic && !task.isRequestAnimationFrame).length === 0) {
        break;
      }
      const current = this._schedulerQueue.shift();
      lastCurrentTime = this._currentTickTime;
      this._currentTickTime = current.endTime;
      if (doTick) {
        doTick(this._currentTickTime - lastCurrentTime);
      }
      const retval = current.func.apply(global22, current.args);
      if (!retval) {
        break;
      }
    }
    return this._currentTickTime - startTime;
  }
};
__publicField2(_Scheduler, "nextNodeJSId", 1);
__publicField2(_Scheduler, "nextId", -1);
var Scheduler = _Scheduler;
var FakeAsyncTestZoneSpec = class _FakeAsyncTestZoneSpec {
  constructor(namePrefix, trackPendingRequestAnimationFrame = false, macroTaskOptions) {
    __publicField2(this, "trackPendingRequestAnimationFrame");
    __publicField2(this, "macroTaskOptions");
    __publicField2(this, "_scheduler", new Scheduler());
    __publicField2(this, "_microtasks", []);
    __publicField2(this, "_lastError", null);
    __publicField2(this, "_uncaughtPromiseErrors", Promise[Zone.__symbol__("uncaughtPromiseErrors")]);
    __publicField2(this, "pendingPeriodicTimers", []);
    __publicField2(this, "pendingTimers", []);
    __publicField2(this, "patchDateLocked", false);
    __publicField2(this, "tickMode", {
      counter: 0,
      mode: "manual"
    });
    __publicField2(this, "name");
    __publicField2(this, "properties", { "FakeAsyncTestZoneSpec": this });
    this.trackPendingRequestAnimationFrame = trackPendingRequestAnimationFrame;
    this.macroTaskOptions = macroTaskOptions;
    this.name = "fakeAsyncTestZone for " + namePrefix;
    if (!this.macroTaskOptions) {
      this.macroTaskOptions = global22[Zone.__symbol__("FakeAsyncTestMacroTask")];
    }
  }
  static assertInZone() {
    if (Zone.current.get("FakeAsyncTestZoneSpec") == null) {
      throw new Error("The code should be running in the fakeAsync zone to call this function");
    }
  }
  _fnAndFlush(fn, completers) {
    return (...args) => {
      fn.apply(global22, args);
      if (this._lastError === null) {
        if (completers.onSuccess != null) {
          completers.onSuccess.apply(global22);
        }
        this.flushMicrotasks();
      } else {
        if (completers.onError != null) {
          completers.onError.apply(global22);
        }
      }
      return this._lastError === null;
    };
  }
  static _removeTimer(timers, id) {
    let index = timers.indexOf(id);
    if (index > -1) {
      timers.splice(index, 1);
    }
  }
  _dequeueTimer(id) {
    return () => {
      _FakeAsyncTestZoneSpec._removeTimer(this.pendingTimers, id);
    };
  }
  _requeuePeriodicTimer(fn, interval, args, id) {
    return () => {
      if (this.pendingPeriodicTimers.indexOf(id) !== -1) {
        this._scheduler.scheduleFunction(fn, interval, {
          args,
          isPeriodic: true,
          id,
          isRequeuePeriodic: true
        });
      }
    };
  }
  _dequeuePeriodicTimer(id) {
    return () => {
      _FakeAsyncTestZoneSpec._removeTimer(this.pendingPeriodicTimers, id);
    };
  }
  _setTimeout(fn, delay, args, isTimer = true) {
    let removeTimerFn = this._dequeueTimer(Scheduler.nextId);
    let cb = this._fnAndFlush(fn, { onSuccess: removeTimerFn, onError: removeTimerFn });
    let id = this._scheduler.scheduleFunction(cb, delay, { args, isRequestAnimationFrame: !isTimer });
    if (isTimer) {
      this.pendingTimers.push(id);
    }
    return id;
  }
  _clearTimeout(id) {
    _FakeAsyncTestZoneSpec._removeTimer(this.pendingTimers, id);
    this._scheduler.removeScheduledFunctionWithId(id);
  }
  _setInterval(fn, interval, args) {
    let id = Scheduler.nextId;
    let completers = { onSuccess: null, onError: this._dequeuePeriodicTimer(id) };
    let cb = this._fnAndFlush(fn, completers);
    completers.onSuccess = this._requeuePeriodicTimer(cb, interval, args, id);
    this._scheduler.scheduleFunction(cb, interval, { args, isPeriodic: true });
    this.pendingPeriodicTimers.push(id);
    return id;
  }
  _clearInterval(id) {
    _FakeAsyncTestZoneSpec._removeTimer(this.pendingPeriodicTimers, id);
    this._scheduler.removeScheduledFunctionWithId(id);
  }
  _resetLastErrorAndThrow() {
    let error = this._lastError || this._uncaughtPromiseErrors[0];
    this._uncaughtPromiseErrors.length = 0;
    this._lastError = null;
    throw error;
  }
  getCurrentTickTime() {
    return this._scheduler.getCurrentTickTime();
  }
  getFakeSystemTime() {
    return this._scheduler.getFakeSystemTime();
  }
  setFakeBaseSystemTime(realTime) {
    this._scheduler.setFakeBaseSystemTime(realTime);
  }
  getRealSystemTime() {
    return this._scheduler.getRealSystemTime();
  }
  static patchDate() {
    if (!!global22[Zone.__symbol__("disableDatePatching")]) {
      return;
    }
    if (global22["Date"] === FakeDate) {
      return;
    }
    global22["Date"] = FakeDate;
    FakeDate.prototype = OriginalDate.prototype;
    _FakeAsyncTestZoneSpec.checkTimerPatch();
  }
  static resetDate() {
    if (global22["Date"] === FakeDate) {
      global22["Date"] = OriginalDate;
    }
  }
  static checkTimerPatch() {
    if (!patchedTimers) {
      throw new Error("Expected timers to have been patched.");
    }
    if (global22.setTimeout !== patchedTimers.setTimeout) {
      global22.setTimeout = patchedTimers.setTimeout;
      global22.clearTimeout = patchedTimers.clearTimeout;
    }
    if (global22.setInterval !== patchedTimers.setInterval) {
      global22.setInterval = patchedTimers.setInterval;
      global22.clearInterval = patchedTimers.clearInterval;
    }
  }
  lockDatePatch() {
    this.patchDateLocked = true;
    _FakeAsyncTestZoneSpec.patchDate();
  }
  unlockDatePatch() {
    this.patchDateLocked = false;
    _FakeAsyncTestZoneSpec.resetDate();
  }
  /** @experimental */
  setTickMode(mode, doTick) {
    if (mode === this.tickMode.mode) {
      return;
    }
    this.tickMode.counter++;
    this.tickMode.mode = mode;
    if (mode === "automatic") {
      this.advanceUntilModeChanges(doTick);
    }
  }
  advanceUntilModeChanges(doTick) {
    _FakeAsyncTestZoneSpec.assertInZone();
    const specZone = Zone.current;
    const { counter } = this.tickMode;
    Zone.root.run(() => __async(this, null, function* () {
      yield safeAsync(() => __async(this, null, function* () {
        yield void 0;
        specZone.run(() => {
          this.flushMicrotasks();
        });
      }));
      if (this.tickMode.counter !== counter) {
        return;
      }
      while (true) {
        yield safeAsync(() => this.newMacrotask(specZone));
        if (this.tickMode.counter !== counter) {
          return;
        }
        yield safeAsync(() => specZone.run(() => {
          this._scheduler.executeNextTask(doTick);
        }));
      }
    }));
  }
  // Waits until a new macro task.
  //
  // Used with autoTick(), which is meant to act when the test is waiting, we
  // need to insert ourselves in the macro task queue.
  //
  // @return {!Promise<undefined>}
  newMacrotask(specZone) {
    return __async(this, null, function* () {
      if (originalSetImmediate) {
        yield new Promise((resolve) => {
          originalSetImmediate(resolve);
        });
      } else {
        const channel = new MessageChannel();
        yield new Promise((resolve) => {
          channel.port1.onmessage = resolve;
          channel.port2.postMessage(void 0);
        });
        channel.port1.close();
        channel.port2.close();
        yield new Promise((resolve) => {
          originalTimeout(resolve);
        });
      }
      specZone.run(() => {
        this.flushMicrotasks();
      });
    });
  }
  tickToNext(steps = 1, doTick, tickOptions = { processNewMacroTasksSynchronously: true }) {
    if (steps <= 0) {
      return;
    }
    _FakeAsyncTestZoneSpec.assertInZone();
    this.flushMicrotasks();
    this._scheduler.tickToNext(steps, doTick, tickOptions);
    if (this._lastError !== null) {
      this._resetLastErrorAndThrow();
    }
  }
  tick(millis = 0, doTick, tickOptions = { processNewMacroTasksSynchronously: true }) {
    _FakeAsyncTestZoneSpec.assertInZone();
    this.flushMicrotasks();
    this._scheduler.tick(millis, doTick, tickOptions);
    if (this._lastError !== null) {
      this._resetLastErrorAndThrow();
    }
  }
  flushMicrotasks() {
    _FakeAsyncTestZoneSpec.assertInZone();
    const flushErrors = () => {
      if (this._lastError !== null || this._uncaughtPromiseErrors.length) {
        this._resetLastErrorAndThrow();
      }
    };
    while (this._microtasks.length > 0) {
      let microtask = this._microtasks.shift();
      microtask.func.apply(microtask.target, microtask.args);
    }
    flushErrors();
  }
  flush(limit, flushPeriodic, doTick) {
    _FakeAsyncTestZoneSpec.assertInZone();
    this.flushMicrotasks();
    const elapsed = this._scheduler.flush(limit, flushPeriodic, doTick);
    if (this._lastError !== null) {
      this._resetLastErrorAndThrow();
    }
    return elapsed;
  }
  flushOnlyPendingTimers(doTick) {
    _FakeAsyncTestZoneSpec.assertInZone();
    this.flushMicrotasks();
    const elapsed = this._scheduler.flushOnlyPendingTimers(doTick);
    if (this._lastError !== null) {
      this._resetLastErrorAndThrow();
    }
    return elapsed;
  }
  removeAllTimers() {
    _FakeAsyncTestZoneSpec.assertInZone();
    this._scheduler.removeAll();
    this.pendingPeriodicTimers = [];
    this.pendingTimers = [];
  }
  getTimerCount() {
    return this._scheduler.getTimerCount() + this._microtasks.length;
  }
  onScheduleTask(delegate, current, target, task) {
    switch (task.type) {
      case "microTask":
        let args = task.data && task.data.args;
        let additionalArgs;
        if (args) {
          let callbackIndex = task.data.cbIdx;
          if (typeof args.length === "number" && args.length > callbackIndex + 1) {
            additionalArgs = Array.prototype.slice.call(args, callbackIndex + 1);
          }
        }
        this._microtasks.push({
          func: task.invoke,
          args: additionalArgs,
          target: task.data && task.data.target
        });
        break;
      case "macroTask":
        switch (task.source) {
          case "setTimeout":
            task.data["handleId"] = this._setTimeout(task.invoke, task.data["delay"], Array.prototype.slice.call(task.data["args"], 2));
            break;
          case "setImmediate":
            task.data["handleId"] = this._setTimeout(task.invoke, 0, Array.prototype.slice.call(task.data["args"], 1));
            break;
          case "setInterval":
            task.data["handleId"] = this._setInterval(task.invoke, task.data["delay"], Array.prototype.slice.call(task.data["args"], 2));
            break;
          case "XMLHttpRequest.send":
            if (this.tickMode.mode === "manual") {
              throw new Error("Cannot make XHRs from within a fake async test. Request URL: " + task.data["url"]);
            }
            task = delegate.scheduleTask(target, task);
            break;
          case "requestAnimationFrame":
          case "webkitRequestAnimationFrame":
          case "mozRequestAnimationFrame":
            task.data["handleId"] = this._setTimeout(task.invoke, 16, task.data["args"], this.trackPendingRequestAnimationFrame);
            break;
          default:
            const macroTaskOption = this.findMacroTaskOption(task);
            if (macroTaskOption) {
              const args2 = task.data && task.data["args"];
              const delay = args2 && args2.length > 1 ? args2[1] : 0;
              let callbackArgs = macroTaskOption.callbackArgs ? macroTaskOption.callbackArgs : args2;
              if (!!macroTaskOption.isPeriodic) {
                task.data["handleId"] = this._setInterval(task.invoke, delay, callbackArgs);
                task.data.isPeriodic = true;
              } else {
                task.data["handleId"] = this._setTimeout(task.invoke, delay, callbackArgs);
              }
              break;
            }
            throw new Error("Unknown macroTask scheduled in fake async test: " + task.source);
        }
        break;
      case "eventTask":
        task = delegate.scheduleTask(target, task);
        break;
    }
    return task;
  }
  onCancelTask(delegate, current, target, task) {
    switch (task.source) {
      case "setTimeout":
      case "requestAnimationFrame":
      case "webkitRequestAnimationFrame":
      case "mozRequestAnimationFrame":
        return this._clearTimeout(task.data["handleId"]);
      case "setInterval":
        return this._clearInterval(task.data["handleId"]);
      default:
        const macroTaskOption = this.findMacroTaskOption(task);
        if (macroTaskOption) {
          const handleId = task.data["handleId"];
          return macroTaskOption.isPeriodic ? this._clearInterval(handleId) : this._clearTimeout(handleId);
        }
        return delegate.cancelTask(target, task);
    }
  }
  onInvoke(delegate, current, target, callback, applyThis, applyArgs, source) {
    try {
      _FakeAsyncTestZoneSpec.patchDate();
      return delegate.invoke(target, callback, applyThis, applyArgs, source);
    } finally {
      if (!this.patchDateLocked) {
        _FakeAsyncTestZoneSpec.resetDate();
      }
    }
  }
  findMacroTaskOption(task) {
    if (!this.macroTaskOptions) {
      return null;
    }
    for (let i = 0; i < this.macroTaskOptions.length; i++) {
      const macroTaskOption = this.macroTaskOptions[i];
      if (macroTaskOption.source === task.source) {
        return macroTaskOption;
      }
    }
    return null;
  }
  onHandleError(parentZoneDelegate, currentZone, targetZone, error) {
    this._lastError = error;
    return false;
  }
};
var _fakeAsyncTestZoneSpec = null;
function getProxyZoneSpec() {
  return Zone && Zone["ProxyZoneSpec"];
}
var _sharedProxyZoneSpec = null;
var _sharedProxyZone = null;
function resetFakeAsyncZone() {
  var _a, _b;
  if (_fakeAsyncTestZoneSpec) {
    _fakeAsyncTestZoneSpec.unlockDatePatch();
  }
  _fakeAsyncTestZoneSpec = null;
  (_b = (_a = getProxyZoneSpec()) == null ? void 0 : _a.get()) == null ? void 0 : _b.resetDelegate();
  _sharedProxyZoneSpec == null ? void 0 : _sharedProxyZoneSpec.resetDelegate();
}
function fakeAsync(fn, options = {}) {
  const { flush: flush2 = true } = options;
  const fakeAsyncFn = function(...args) {
    const ProxyZoneSpec2 = getProxyZoneSpec();
    if (!ProxyZoneSpec2) {
      throwProxyZoneError();
    }
    const proxyZoneSpec = ProxyZoneSpec2.assertPresent();
    if (Zone.current.get("FakeAsyncTestZoneSpec")) {
      throw new Error("fakeAsync() calls can not be nested");
    }
    try {
      if (!_fakeAsyncTestZoneSpec) {
        const FakeAsyncTestZoneSpec2 = Zone && Zone["FakeAsyncTestZoneSpec"];
        if (proxyZoneSpec.getDelegate() instanceof FakeAsyncTestZoneSpec2) {
          throw new Error("fakeAsync() calls can not be nested");
        }
        _fakeAsyncTestZoneSpec = new FakeAsyncTestZoneSpec2();
      }
      let res;
      const lastProxyZoneSpec = proxyZoneSpec.getDelegate();
      proxyZoneSpec.setDelegate(_fakeAsyncTestZoneSpec);
      _fakeAsyncTestZoneSpec.lockDatePatch();
      try {
        res = fn.apply(this, args);
        if (flush2) {
          _fakeAsyncTestZoneSpec.flush(20, true);
        } else {
          flushMicrotasks();
        }
      } finally {
        proxyZoneSpec.setDelegate(lastProxyZoneSpec);
      }
      if (!flush2) {
        if (_fakeAsyncTestZoneSpec.pendingPeriodicTimers.length > 0) {
          throw new Error(`${_fakeAsyncTestZoneSpec.pendingPeriodicTimers.length} periodic timer(s) still in the queue.`);
        }
        if (_fakeAsyncTestZoneSpec.pendingTimers.length > 0) {
          throw new Error(`${_fakeAsyncTestZoneSpec.pendingTimers.length} timer(s) still in the queue.`);
        }
      }
      return res;
    } finally {
      resetFakeAsyncZone();
    }
  };
  fakeAsyncFn.isFakeAsync = true;
  return fakeAsyncFn;
}
function _getFakeAsyncZoneSpec() {
  if (_fakeAsyncTestZoneSpec == null) {
    _fakeAsyncTestZoneSpec = Zone.current.get("FakeAsyncTestZoneSpec");
    if (_fakeAsyncTestZoneSpec == null) {
      throw new Error("The code should be running in the fakeAsync zone to call this function");
    }
  }
  return _fakeAsyncTestZoneSpec;
}
function tick(millis = 0, ignoreNestedTimeout = false) {
  _getFakeAsyncZoneSpec().tick(millis, null, ignoreNestedTimeout);
}
function flush(maxTurns) {
  return _getFakeAsyncZoneSpec().flush(maxTurns);
}
function discardPeriodicTasks() {
  const zoneSpec = _getFakeAsyncZoneSpec();
  const pendingTimers = zoneSpec.pendingPeriodicTimers;
  zoneSpec.pendingPeriodicTimers.length = 0;
}
function withProxyZone(fn) {
  const autoProxyFn = function(...args) {
    const proxyZoneSpec = getProxyZoneSpec();
    if (proxyZoneSpec === void 0) {
      throw new Error("ProxyZoneSpec is needed for the withProxyZone() test helper but could not be found. Make sure that your environment includes zone-testing.js");
    }
    const proxyZone = proxyZoneSpec.get() !== void 0 ? Zone.current : getOrCreateRootProxy();
    return proxyZone.run(fn, this, args);
  };
  return autoProxyFn;
}
function getOrCreateRootProxy() {
  const ProxyZoneSpec2 = getProxyZoneSpec();
  if (ProxyZoneSpec2 === void 0) {
    throw new Error("ProxyZoneSpec is needed for withProxyZone but could not be found. Make sure that your environment includes zone-testing.js");
  }
  if (_sharedProxyZoneSpec === null) {
    _sharedProxyZoneSpec = new ProxyZoneSpec2();
  }
  _sharedProxyZone = Zone.root.fork(_sharedProxyZoneSpec);
  return _sharedProxyZone;
}
function flushMicrotasks() {
  _getFakeAsyncZoneSpec().flushMicrotasks();
}
function patchFakeAsyncTest(Zone22) {
  Zone22["FakeAsyncTestZoneSpec"] = FakeAsyncTestZoneSpec;
  Zone22.__load_patch("fakeasync", (global32, Zone3, api) => {
    Zone3[api.symbol("fakeAsyncTest")] = {
      resetFakeAsyncZone,
      flushMicrotasks,
      discardPeriodicTasks,
      tick,
      flush,
      fakeAsync,
      withProxyZone
    };
  }, true);
  patchedTimers = {
    setTimeout: global22.setTimeout,
    setInterval: global22.setInterval,
    clearTimeout: global22.clearTimeout,
    clearInterval: global22.clearInterval,
    nativeSetTimeout: global22[Zone22.__symbol__("setTimeout")],
    nativeClearTimeout: global22[Zone22.__symbol__("clearTimeout")]
  };
  Scheduler.nextId = Scheduler.getNextId();
}
function safeAsync(fn) {
  return __async(this, null, function* () {
    try {
      return yield fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}
function hostReportError(e) {
  Zone.root.run(() => {
    originalTimeout(() => {
      throw e;
    });
  });
}
function patchLongStackTrace(Zone22) {
  const NEWLINE = "\n";
  const IGNORE_FRAMES = {};
  const creationTrace = "__creationTrace__";
  const ERROR_TAG = "STACKTRACE TRACKING";
  const SEP_TAG = "__SEP_TAG__";
  let sepTemplate = SEP_TAG + "@[native]";
  class LongStackTrace {
    constructor() {
      __publicField2(this, "error", getStacktrace());
      __publicField2(this, "timestamp", /* @__PURE__ */ new Date());
    }
  }
  function getStacktraceWithUncaughtError() {
    return new Error(ERROR_TAG);
  }
  function getStacktraceWithCaughtError() {
    try {
      throw getStacktraceWithUncaughtError();
    } catch (err) {
      return err;
    }
  }
  const error = getStacktraceWithUncaughtError();
  const caughtError = getStacktraceWithCaughtError();
  const getStacktrace = error.stack ? getStacktraceWithUncaughtError : caughtError.stack ? getStacktraceWithCaughtError : getStacktraceWithUncaughtError;
  function getFrames(error2) {
    return error2.stack ? error2.stack.split(NEWLINE) : [];
  }
  function addErrorStack(lines, error2) {
    let trace = getFrames(error2);
    for (let i = 0; i < trace.length; i++) {
      const frame = trace[i];
      if (!Object.hasOwn(IGNORE_FRAMES, frame)) {
        lines.push(trace[i]);
      }
    }
  }
  function renderLongStackTrace(frames, stack) {
    const longTrace = [stack ? stack.trim() : ""];
    if (frames) {
      let timestamp = (/* @__PURE__ */ new Date()).getTime();
      for (let i = 0; i < frames.length; i++) {
        const traceFrames = frames[i];
        const lastTime = traceFrames.timestamp;
        let separator = `____________________Elapsed ${timestamp - lastTime.getTime()} ms; At: ${lastTime}`;
        separator = separator.replace(/[^\w\d]/g, "_");
        longTrace.push(sepTemplate.replace(SEP_TAG, separator));
        addErrorStack(longTrace, traceFrames.error);
        timestamp = lastTime.getTime();
      }
    }
    return longTrace.join(NEWLINE);
  }
  function stackTracesEnabled() {
    return Error.stackTraceLimit > 0;
  }
  Zone22["longStackTraceZoneSpec"] = {
    name: "long-stack-trace",
    longStackTraceLimit: 10,
    // Max number of task to keep the stack trace for.
    // add a getLongStackTrace method in spec to
    // handle handled reject promise error.
    getLongStackTrace: function(error2) {
      if (!error2) {
        return void 0;
      }
      const trace = error2[Zone22.__symbol__("currentTaskTrace")];
      if (!trace) {
        return error2.stack;
      }
      return renderLongStackTrace(trace, error2.stack);
    },
    onScheduleTask: function(parentZoneDelegate, currentZone, targetZone, task) {
      if (stackTracesEnabled()) {
        const currentTask = Zone22.currentTask;
        let trace = currentTask && currentTask.data && currentTask.data[creationTrace] || [];
        trace = [new LongStackTrace()].concat(trace);
        if (trace.length > this.longStackTraceLimit) {
          trace.length = this.longStackTraceLimit;
        }
        if (!task.data)
          task.data = {};
        if (task.type === "eventTask") {
          task.data = __spreadValues2({}, task.data);
        }
        task.data[creationTrace] = trace;
      }
      return parentZoneDelegate.scheduleTask(targetZone, task);
    },
    onHandleError: function(parentZoneDelegate, currentZone, targetZone, error2) {
      if (stackTracesEnabled()) {
        const parentTask = Zone22.currentTask || error2.task;
        if (error2 instanceof Error && parentTask) {
          const longStack = renderLongStackTrace(parentTask.data && parentTask.data[creationTrace], error2.stack);
          try {
            error2.stack = error2.longStack = longStack;
          } catch (err) {
          }
        }
      }
      return parentZoneDelegate.handleError(targetZone, error2);
    }
  };
  function captureStackTraces(stackTraces, count) {
    if (count > 0) {
      stackTraces.push(getFrames(new LongStackTrace().error));
      captureStackTraces(stackTraces, count - 1);
    }
  }
  function computeIgnoreFrames() {
    if (!stackTracesEnabled()) {
      return;
    }
    const frames = [];
    captureStackTraces(frames, 2);
    const frames1 = frames[0];
    const frames2 = frames[1];
    for (let i = 0; i < frames1.length; i++) {
      const frame1 = frames1[i];
      if (frame1.indexOf(ERROR_TAG) == -1) {
        let match = frame1.match(/^\s*at\s+/);
        if (match) {
          sepTemplate = match[0] + SEP_TAG + " (http://localhost)";
          break;
        }
      }
    }
    for (let i = 0; i < frames1.length; i++) {
      const frame1 = frames1[i];
      const frame2 = frames2[i];
      if (frame1 === frame2) {
        IGNORE_FRAMES[frame1] = true;
      } else {
        break;
      }
    }
  }
  computeIgnoreFrames();
}
function patchSyncTest(Zone22) {
  class SyncTestZoneSpec {
    constructor(namePrefix) {
      __publicField2(this, "runZone", Zone22.current);
      __publicField2(this, "name");
      this.name = "syncTestZone for " + namePrefix;
    }
    onScheduleTask(delegate, current, target, task) {
      switch (task.type) {
        case "microTask":
        case "macroTask":
          throw new Error(`Cannot call ${task.source} from within a sync test (${this.name}).`);
        case "eventTask":
          task = delegate.scheduleTask(target, task);
          break;
      }
      return task;
    }
  }
  Zone22["SyncTestZoneSpec"] = SyncTestZoneSpec;
}
function patchPromiseTesting(Zone22) {
  Zone22.__load_patch("promisefortest", (global32, Zone3, api) => {
    const symbolState = api.symbol("state");
    const UNRESOLVED = null;
    const symbolParentUnresolved = api.symbol("parentUnresolved");
    Promise[api.symbol("patchPromiseForTest")] = function patchPromiseForTest() {
      let oriThen = Promise[Zone3.__symbol__("ZonePromiseThen")];
      if (oriThen) {
        return;
      }
      oriThen = Promise[Zone3.__symbol__("ZonePromiseThen")] = Promise.prototype.then;
      Promise.prototype.then = function() {
        const chained = oriThen.apply(this, arguments);
        if (this[symbolState] === UNRESOLVED) {
          const asyncTestZoneSpec = Zone3.current.get("AsyncTestZoneSpec");
          if (asyncTestZoneSpec) {
            asyncTestZoneSpec.unresolvedChainedPromiseCount++;
            chained[symbolParentUnresolved] = true;
          }
        }
        return chained;
      };
    };
    Promise[api.symbol("unPatchPromiseForTest")] = function unpatchPromiseForTest() {
      const oriThen = Promise[Zone3.__symbol__("ZonePromiseThen")];
      if (oriThen) {
        Promise.prototype.then = oriThen;
        Promise[Zone3.__symbol__("ZonePromiseThen")] = void 0;
      }
    };
  });
}
function rollupTesting(Zone22) {
  patchLongStackTrace(Zone22);
  patchProxyZoneSpec(Zone22);
  patchSyncTest(Zone22);
  patchJasmine(Zone22);
  patchJest(Zone22);
  patchMocha(Zone22);
  patchAsyncTest(Zone22);
  patchFakeAsyncTest(Zone22);
  patchPromiseTesting(Zone22);
}
rollupTesting(Zone);

// src/polyfills.ts
var import_reflect = __toESM(require_reflect());
//# debugId=5dd90f7c-1dd5-5520-a2c5-166a54910fa6
//# sourceMappingURL=polyfills.js.map
