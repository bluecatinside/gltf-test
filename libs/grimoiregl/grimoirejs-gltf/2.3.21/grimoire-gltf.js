(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color = __webpack_require__(24);

var _Color2 = _interopRequireDefault(_Color);

var _Color3 = __webpack_require__(25);

var _Color4 = _interopRequireDefault(_Color3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GLTFConstantConvert = function () {
    function GLTFConstantConvert() {
        _classCallCheck(this, GLTFConstantConvert);
    }

    _createClass(GLTFConstantConvert, null, [{
        key: "asTypedArrayConstructor",
        value: function asTypedArrayConstructor(componentType) {
            switch (componentType) {
                case WebGLRenderingContext.FLOAT:
                    return Float32Array;
                case WebGLRenderingContext.UNSIGNED_INT:
                    return Uint32Array;
                case WebGLRenderingContext.INT:
                    return Int32Array;
                case WebGLRenderingContext.SHORT:
                    return Int16Array;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                    return Uint16Array;
                case WebGLRenderingContext.BYTE:
                    return Int8Array;
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    return Uint8Array;
                default:
                    throw new Error("Unsupported typed array constructor type " + componentType);
            }
        }
    }, {
        key: "asColorValue",
        value: function asColorValue(a) {
            if (a.length === 3) {
                return new _Color2.default(a[0], a[1], a[2]);
            } else {
                return new _Color4.default(a[0], a[1], a[2], a[3]);
            }
        }
    }, {
        key: "asVectorSize",
        value: function asVectorSize(type) {
            switch (type) {
                case "SCALAR":
                    return 1;
                case "VEC2":
                    return 2;
                case "VEC3":
                    return 3;
                case "VEC4":
                case "MAT2":
                    return 4;
                case "MAT3":
                    return 9;
                case "MAT4":
                    return 16;
                default:
                    throw new Error("Invalid vectorSize");
            }
        }
    }, {
        key: "asByteSize",
        value: function asByteSize(componentType) {
            switch (componentType) {
                case WebGLRenderingContext.UNSIGNED_BYTE:
                case WebGLRenderingContext.BYTE:
                    return 1;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                case WebGLRenderingContext.SHORT:
                    return 2;
                case WebGLRenderingContext.UNSIGNED_INT:
                case WebGLRenderingContext.INT:
                case WebGLRenderingContext.FLOAT:
                    return 4;
                default:
                    throw new Error("Unknown size!");
            }
        }
    }, {
        key: "elementTypeToTypedArray",
        value: function elementTypeToTypedArray(type) {
            switch (type) {
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    return Uint8Array;
                case WebGLRenderingContext.BYTE:
                    return Int8Array;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                    return Uint16Array;
                case WebGLRenderingContext.SHORT:
                    return Int16Array;
                case WebGLRenderingContext.UNSIGNED_INT:
                    return Uint32Array;
                case WebGLRenderingContext.INT:
                    return Int32Array;
                case WebGLRenderingContext.FLOAT:
                    return Float32Array;
                default:
                    throw new Error("Unsupported");
            }
        }
    }, {
        key: "indexCountToBufferInfo",
        value: function indexCountToBufferInfo(count) {
            if (count < 256) {
                return {
                    elementType: WebGLRenderingContext.UNSIGNED_BYTE,
                    byteSize: 1,
                    ctor: Uint8Array
                };
            } else if (count < 65536) {
                return {
                    elementType: WebGLRenderingContext.UNSIGNED_SHORT,
                    byteSize: 2,
                    ctor: Uint16Array
                };
            } else {
                return {
                    elementType: WebGLRenderingContext.UNSIGNED_INT,
                    byteSize: 4,
                    ctor: Uint32Array
                };
            }
        }
    }]);

    return GLTFConstantConvert;
}();

exports.default = GLTFConstantConvert;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserModuleBase2 = __webpack_require__(10);

var _ParserModuleBase3 = _interopRequireDefault(_ParserModuleBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParserModule = function (_ParserModuleBase) {
    _inherits(ParserModule, _ParserModuleBase);

    function ParserModule(parser, baseDirectory) {
        _classCallCheck(this, ParserModule);

        var _this = _possibleConstructorReturn(this, (ParserModule.__proto__ || Object.getPrototypeOf(ParserModule)).call(this));

        _this.parser = parser;
        _this.baseDirectory = baseDirectory;
        _this.__gl = parser.gl;
        return _this;
    }

    _createClass(ParserModule, [{
        key: "fetchGLTF",
        value: function fetchGLTF(url) {
            return undefined;
        }
        /**
         * Load .gltf file
         * @return {Promise<GLTF>} [description]
         */

    }, {
        key: "loadAsGLTF",
        value: function loadAsGLTF(tf) {
            return undefined;
        }
        /**
         * Start loading texture resource.
         * @return {Promise<Texture2D>} [description]
         */

    }, {
        key: "fetchTextureResource",
        value: function fetchTextureResource(tf) {
            return undefined;
        }
        /**
         * Start loading texture resource.
         * @return {Promise<Texture2D>} [description]
         */

    }, {
        key: "loadTextureResources",
        value: function loadTextureResources(tf) {
            return undefined;
        }
        /**
         * Load image as texture
         * @return {Promise<Texture2D>} [description]
         */

    }, {
        key: "convertTotexture",
        value: function convertTotexture(arg) {
            return undefined;
        }
        /**
         * Start loading buffer resource.
         * @return {Promise<ArrayBuffer>} [description]
         */

    }, {
        key: "loadBufferResource",
        value: function loadBufferResource(tf) {
            return undefined;
        }
    }, {
        key: "loadBufferResources",
        value: function loadBufferResources(tf) {
            return undefined;
        }
    }, {
        key: "loadBufferViews",
        value: function loadBufferViews(args) {
            return undefined;
        }
    }, {
        key: "loadPrimitivesOfMesh",
        value: function loadPrimitivesOfMesh(args) {
            return undefined;
        }
    }, {
        key: "loadPrimitive",
        value: function loadPrimitive(args) {
            return undefined;
        }
    }, {
        key: "appendIndices",
        value: function appendIndices(args) {
            return undefined;
        }
    }, {
        key: "addVertexAttributes",
        value: function addVertexAttributes(args) {
            return undefined;
        }
    }, {
        key: "complementVertexAttributes",
        value: function complementVertexAttributes(args) {
            return undefined;
        }
    }, {
        key: "loadMaterials",
        value: function loadMaterials(args) {
            return undefined;
        }
    }, {
        key: "loadMaterial",
        value: function loadMaterial(args) {
            return undefined;
        }
    }, {
        key: "loadAnimations",
        value: function loadAnimations(args) {
            return undefined;
        }
    }, {
        key: "loadAnimation",
        value: function loadAnimation(args) {
            return undefined;
        }
    }]);

    return ParserModule;
}(_ParserModuleBase3.default);

exports.default = ParserModule;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS.Node.Component;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(2);

var _Component3 = _interopRequireDefault(_Component2);

var _Parser = __webpack_require__(8);

var _Parser2 = _interopRequireDefault(_Parser);

var _DefaultInstanciator = __webpack_require__(18);

var _DefaultInstanciator2 = _interopRequireDefault(_DefaultInstanciator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GLTFModelComponent = function (_Component) {
    _inherits(GLTFModelComponent, _Component);

    function GLTFModelComponent() {
        _classCallCheck(this, GLTFModelComponent);

        var _this = _possibleConstructorReturn(this, (GLTFModelComponent.__proto__ || Object.getPrototypeOf(GLTFModelComponent)).apply(this, arguments));

        _this.jointMatrices = {};
        _this.skeletons = {};
        return _this;
    }

    _createClass(GLTFModelComponent, [{
        key: "$mount",
        value: function $mount() {
            var _this2 = this;

            var src = this.getAttribute("src");
            if (src) {
                var gl = this.companion.get("gl");
                var promise = _Parser2.default.parseFromURL(gl, src).then(function (data) {
                    _this2.modelMeta = data.tf;
                    GLTFModelComponent.instanciator.instanciateAll(data, _this2, _this2.getAttribute("scene"));
                });
                this.loadPromise = promise;
                if (this.getAttribute("waitForLoad")) {
                    var loader = this.companion.get("loader");
                    loader["register"](promise, this);
                }
            }
        }
    }, {
        key: "$update",
        value: function $update() {}
    }]);

    return GLTFModelComponent;
}(_Component3.default);

exports.default = GLTFModelComponent;

GLTFModelComponent.instanciator = new _DefaultInstanciator2.default();
GLTFModelComponent.componentName = "GLTFModelComponent";
GLTFModelComponent.attributes = {
    src: {
        converter: "String",
        default: null
    },
    scene: {
        converter: "String",
        default: null
    },
    waitForLoad: {
        converter: "Boolean",
        default: false
    },
    autoAnimate: {
        converter: "Boolean",
        default: true
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Vector3:undefined;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Matrix = __webpack_require__(6);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _TransformComponent = __webpack_require__(7);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _Component2 = __webpack_require__(2);

var _Component3 = _interopRequireDefault(_Component2);

var _GLTFModelComponent = __webpack_require__(3);

var _GLTFModelComponent2 = _interopRequireDefault(_GLTFModelComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GLTFJointComponent = function (_Component) {
    _inherits(GLTFJointComponent, _Component);

    function GLTFJointComponent() {
        _classCallCheck(this, GLTFJointComponent);

        return _possibleConstructorReturn(this, (GLTFJointComponent.__proto__ || Object.getPrototypeOf(GLTFJointComponent)).apply(this, arguments));
    }

    _createClass(GLTFJointComponent, [{
        key: "$mount",
        value: function $mount() {
            this._model = this.node.getComponentInAncestor(_GLTFModelComponent2.default);
            this._transform = this.node.getComponent(_TransformComponent2.default);
            this._invBindMatrix = new _Matrix2.default(this.getAttribute("invBindShapeMatrix"));
            this._skinIndex = this.getAttribute("skinIndex");
            this._jointIndex = this.getAttribute("jointIndex");
        }
    }, {
        key: "$update",
        value: function $update() {
            var poseMat = this._model.skeletons[this._skinIndex].globalTransformInverse.multiplyWith(this._transform.globalTransform).multiplyWith(this._invBindMatrix); //.multiplyWith(this._model.skeletons[this._skinIndex].globalTransform);
            for (var i = 0; i < 16; i++) {
                this._model.jointMatrices[this._skinIndex][this._jointIndex * 16 + i] = poseMat.rawElements[i];
            }
        }
    }]);

    return GLTFJointComponent;
}(_Component3.default);

exports.default = GLTFJointComponent;

GLTFJointComponent.attributes = {
    invBindShapeMatrix: {
        converter: "Object",
        default: null
    },
    skinIndex: {
        converter: "Number",
        default: null
    },
    jointIndex: {
        converter: "Number",
        default: null
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Matrix:undefined;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Components.TransformComponent:undefined;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DefaultParserModule = __webpack_require__(9);

var _DefaultParserModule2 = _interopRequireDefault(_DefaultParserModule);

var _NormalComplementorModule = __webpack_require__(15);

var _NormalComplementorModule2 = _interopRequireDefault(_NormalComplementorModule);

var _IndexComplementorModule = __webpack_require__(16);

var _IndexComplementorModule2 = _interopRequireDefault(_IndexComplementorModule);

var _EmbeddedBufferModule = __webpack_require__(17);

var _EmbeddedBufferModule2 = _interopRequireDefault(_EmbeddedBufferModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Modules

var GLTFParser = function () {
    function GLTFParser(gl, url) {
        _classCallCheck(this, GLTFParser);

        this.gl = gl;
        this.url = url;
        this.parserModuleInstances = [];
        for (var i = 0; i < GLTFParser.parserModules.length; i++) {
            var moduleCtor = GLTFParser.parserModules[i];
            this.parserModuleInstances.push(new moduleCtor(this, url.substr(0, url.lastIndexOf("/") + 1)));
        }
    }

    _createClass(GLTFParser, [{
        key: "callParserModule",
        value: function callParserModule(target, arg) {
            for (var i = 0; i < this.parserModuleInstances.length; i++) {
                var module = this.parserModuleInstances[i];
                var moduleMethod = target(module);
                if (moduleMethod === void 0) {
                    continue;
                }
                var result = moduleMethod.call(module, arg);
                if (result !== void 0) {
                    return result;
                }
            }
            throw new Error("Parsing gltf failed. At the module \"" + target.toString() + "\"");
        }
    }, {
        key: "parse",
        value: function parse() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this = this;

                var result, gltfRaw, gltf, textureResourcePromise, bufferResources;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                result = {};
                                _context.next = 3;
                                return this.callParserModule(function (t) {
                                    return t.fetchGLTF;
                                }, this.url);

                            case 3:
                                gltfRaw = _context.sent;
                                gltf = this.callParserModule(function (t) {
                                    return t.loadAsGLTF;
                                }, gltfRaw);

                                result.tf = gltf;
                                _context.next = 8;
                                return this.callParserModule(function (t) {
                                    return t.loadTextureResources;
                                }, gltf).then(function (textures) {
                                    return _this.callParserModule(function (t) {
                                        return t.loadMaterials;
                                    }, { tf: gltf, textures: textures });
                                }).then(function (materials) {
                                    result.materials = materials;
                                });

                            case 8:
                                textureResourcePromise = _context.sent;
                                _context.next = 11;
                                return this.callParserModule(function (t) {
                                    return t.loadBufferResources;
                                }, gltf).then(function (buffers) {
                                    var bufferViews = _this.callParserModule(function (t) {
                                        return t.loadBufferViews;
                                    }, { tf: gltf, buffers: buffers });
                                    var primitives = _this.callParserModule(function (t) {
                                        return t.loadPrimitivesOfMesh;
                                    }, { tf: gltf, bufferViews: bufferViews });
                                    var animations = _this.callParserModule(function (t) {
                                        return t.loadAnimations;
                                    }, { tf: gltf, bufferViews: bufferViews });
                                    result.primitives = primitives;
                                    result.bufferViews = bufferViews;
                                    result.animations = animations;
                                });

                            case 11:
                                bufferResources = _context.sent;
                                return _context.abrupt("return", result);

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }], [{
        key: "parseFromURL",
        value: function parseFromURL(gl, url) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var parser;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                parser = new GLTFParser(gl, url);
                                return _context2.abrupt("return", parser.parse());

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }]);

    return GLTFParser;
}();

exports.default = GLTFParser;

GLTFParser.parserModules = [_EmbeddedBufferModule2.default, _IndexComplementorModule2.default, _NormalComplementorModule2.default, _DefaultParserModule2.default];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserModule2 = __webpack_require__(1);

var _ParserModule3 = _interopRequireDefault(_ParserModule2);

var _ConstantConverter = __webpack_require__(0);

var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);

var _Texture2D = __webpack_require__(26);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _Geometry = __webpack_require__(27);

var _Geometry2 = _interopRequireDefault(_Geometry);

var _MorphGeometry = __webpack_require__(28);

var _MorphGeometry2 = _interopRequireDefault(_MorphGeometry);

var _Vector = __webpack_require__(4);

var _Vector2 = _interopRequireDefault(_Vector);

var _GLTFMaterialInstanciatorRegistry = __webpack_require__(12);

var _GLTFMaterialInstanciatorRegistry2 = _interopRequireDefault(_GLTFMaterialInstanciatorRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var DefaultParserModule = function (_ParserModule) {
    _inherits(DefaultParserModule, _ParserModule);

    function DefaultParserModule() {
        _classCallCheck(this, DefaultParserModule);

        return _possibleConstructorReturn(this, (DefaultParserModule.__proto__ || Object.getPrototypeOf(DefaultParserModule)).apply(this, arguments));
    }

    _createClass(DefaultParserModule, [{
        key: "fetchGLTF",
        value: function fetchGLTF(url) {
            return this.__fetchBuffer(url);
        }
    }, {
        key: "loadAsGLTF",
        value: function loadAsGLTF(buffer) {
            var rawStr = this.__bufferToString(buffer);
            return JSON.parse(rawStr);
        }
    }, {
        key: "loadTextureResources",
        value: function loadTextureResources(tf) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var textures, promises, _loop, key;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                textures = {};
                                promises = [];

                                if (tf.images) {
                                    _loop = function _loop(key) {
                                        var texture = tf.textures[key];
                                        var promise = _this2.parser.callParserModule(function (t) {
                                            return t.fetchTextureResource;
                                        }, tf.images[texture.source]).then(function (img) {
                                            var texture = _this2.parser.callParserModule(function (t) {
                                                return t.convertTotexture;
                                            }, { tf: tf, image: img, texIndex: key });
                                            textures[key] = texture;
                                        });
                                        promises.push(promise);
                                    };

                                    for (key in tf.textures) {
                                        _loop(key);
                                    }
                                }
                                _context.next = 5;
                                return Promise.all(promises);

                            case 5:
                                return _context.abrupt("return", textures);

                            case 6:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * Start loading texture resource.
         * @return {Promise<Texture2D>} [description]
         */

    }, {
        key: "fetchTextureResource",
        value: function fetchTextureResource(tf) {
            return this.__fetchImage(this.__asAbsoluteURL(this.baseDirectory, tf.uri));
        }
        /**
         * Load image as texture
         * @return {Promise<Texture2D>} [description]
         */

    }, {
        key: "convertTotexture",
        value: function convertTotexture(arg) {
            var tex = new _Texture2D2.default(this.__gl);
            tex.update(arg.image, { flipY: false });
            var texInfo = arg.tf.textures[arg.texIndex];
            var samplerInfo = {};
            if (texInfo && texInfo.sampler !== void 0) {
                samplerInfo = arg.tf.samplers[texInfo.sampler];
            }
            tex.magFilter = samplerInfo.magFilter || WebGLRenderingContext.LINEAR;
            tex.minFilter = samplerInfo.minFilter || WebGLRenderingContext.NEAREST_MIPMAP_LINEAR;
            tex.wrapS = samplerInfo.wrapS || WebGLRenderingContext.REPEAT;
            tex.wrapT = samplerInfo.wrapT || WebGLRenderingContext.REPEAT;
            return tex;
        }
        /**
         * Start loading buffer resource.
         * @return {Promise<ArrayBuffer>} [description]
         */

    }, {
        key: "loadBufferResource",
        value: function loadBufferResource(tf) {
            return this.__fetchBuffer(this.__asAbsoluteURL(this.baseDirectory, tf.uri));
        }
    }, {
        key: "loadBufferResources",
        value: function loadBufferResources(tf) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this3 = this;

                var buffers, promises, _loop2, key;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                buffers = {};
                                promises = [];

                                _loop2 = function _loop2(key) {
                                    promises.push(_this3.parser.callParserModule(function (t) {
                                        return t.loadBufferResource;
                                    }, tf.buffers[key]).then(function (buffer) {
                                        buffers[key] = buffer;
                                    }));
                                };

                                for (key in tf.buffers) {
                                    _loop2(key);
                                }
                                _context2.next = 6;
                                return Promise.all(promises);

                            case 6:
                                return _context2.abrupt("return", buffers);

                            case 7:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "loadBufferViews",
        value: function loadBufferViews(args) {
            var bufferViews = {};
            for (var key in args.tf.bufferViews) {
                var bufferViewInfo = args.tf.bufferViews[key];
                if (bufferViewInfo.byteOffset === void 0) {
                    bufferViewInfo.byteOffset = 0;
                }
                bufferViews[key] = new Uint8Array(args.buffers[bufferViewInfo.buffer], bufferViewInfo.byteOffset, bufferViewInfo.byteLength);
            }
            return bufferViews;
        }
    }, {
        key: "loadPrimitivesOfMesh",
        value: function loadPrimitivesOfMesh(args) {
            var result = {};
            for (var key in args.tf.meshes) {
                var meshInfo = args.tf.meshes[key];
                var primitives = [];
                result[key] = primitives;
                for (var pKey in meshInfo.primitives) {
                    primitives.push(this.parser.callParserModule(function (t) {
                        return t.loadPrimitive;
                    }, { tf: args.tf, bufferViews: args.bufferViews, primitive: meshInfo.primitives[pKey] }));
                }
            }
            return result;
        }
    }, {
        key: "loadPrimitive",
        value: function loadPrimitive(args) {
            var geo = args.primitive.targets === void 0 ? new _Geometry2.default(this.__gl) : new _MorphGeometry2.default(this.__gl);
            this.parser.callParserModule(function (t) {
                return t.appendIndices;
            }, { tf: args.tf, bufferViews: args.bufferViews, primitive: args.primitive, geometry: geo });
            this.parser.callParserModule(function (t) {
                return t.addVertexAttributes;
            }, { tf: args.tf, bufferViews: args.bufferViews, primitive: args.primitive, geometry: geo });
            return geo;
        }
    }, {
        key: "appendIndices",
        value: function appendIndices(args) {
            if (args.primitive.indices !== void 0) {
                var topology = args.primitive.mode || WebGLRenderingContext.TRIANGLES;
                var indexAccessor = args.tf.accessors[args.primitive.indices];
                args.geometry.addIndex("default", args.bufferViews[indexAccessor.bufferView], topology, indexAccessor.byteOffset, indexAccessor.count, indexAccessor.componentType);
                return true;
            }
        }
    }, {
        key: "addVertexAttributes",
        value: function addVertexAttributes(args) {
            for (var attrib in args.primitive.attributes) {
                var primitive = args.primitive;
                var accessor = args.tf.accessors[primitive.attributes[attrib]];
                var bufferViewInfo = args.tf.bufferViews[accessor.bufferView];
                var bufAccessor = {};
                var elementSize = _ConstantConverter2.default.asVectorSize(accessor.type);
                // Check morph used. If morph was used for spcified attribute, source of the buffer should be keeped for using later.
                var useMorphing = false;
                if (primitive.targets && primitive.targets.length >= 1) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = primitive.targets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var target = _step.value;

                            if (attrib in target) {
                                useMorphing = true;
                                break;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                bufAccessor[attrib] = {
                    size: elementSize,
                    type: accessor.componentType,
                    stride: bufferViewInfo.byteStride,
                    offset: 0,
                    keepOnBuffer: useMorphing
                };
                var bufferView = args.bufferViews[accessor.bufferView];
                var ctor = _ConstantConverter2.default.asTypedArrayConstructor(accessor.componentType);
                var convertedBuffer = this.__convertBufferView(ctor, bufferView, bufferViewInfo, accessor);
                args.geometry.addAttributes(convertedBuffer, bufAccessor);
                if (attrib === "POSITION") {
                    var stride = bufferViewInfo.byteStride / 4;
                    if (isNaN(stride)) {
                        stride = 3; //ConstantConverter.asVectorSize(accessor.type) / ConstantConverter.asByteSize(accessor.componentType);
                    }
                    for (var j = 0; j < accessor.count; j++) {
                        var first = j * stride;
                        args.geometry.aabb.expand(new _Vector2.default(convertedBuffer[first], convertedBuffer[first + 1], convertedBuffer[first + 2]));
                    }
                }
                if (args.primitive.targets !== void 0 && args.primitive.targets[0][attrib] !== void 0) {
                    // This attribute has morph
                    var geometry = args.geometry;
                    var parameters = [];
                    var targets = args.primitive.targets;
                    for (var i = 0; i < targets.length; i++) {
                        var _accessor = args.tf.accessors[targets[i][attrib]];
                        var _bufferViewInfo = args.tf.bufferViews[_accessor.bufferView];
                        var buffer = args.bufferViews[_accessor.bufferView];
                        var morphBuffer = this.__convertBufferView(Float32Array, buffer, _bufferViewInfo, _accessor);
                        parameters.push({
                            buffer: morphBuffer,
                            accessor: {
                                size: _ConstantConverter2.default.asVectorSize(_accessor.type),
                                stride: _bufferViewInfo.byteStride,
                                offset: 0
                            }
                        });
                    }
                    geometry.addMorphAttribute(attrib, parameters);
                }
            }
            this.parser.callParserModule(function (t) {
                return t.complementVertexAttributes;
            }, args);
            return true;
        }
    }, {
        key: "complementVertexAttributes",
        value: function complementVertexAttributes(args) {
            return true;
        }
    }, {
        key: "loadMaterials",
        value: function loadMaterials(args) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var result, key;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                result = {};
                                _context3.t0 = regeneratorRuntime.keys(args.tf.materials);

                            case 2:
                                if ((_context3.t1 = _context3.t0()).done) {
                                    _context3.next = 9;
                                    break;
                                }

                                key = _context3.t1.value;
                                _context3.next = 6;
                                return this.parser.callParserModule(function (t) {
                                    return t.loadMaterial;
                                }, { material: args.tf.materials[key], textures: args.textures });

                            case 6:
                                result[key] = _context3.sent;
                                _context3.next = 2;
                                break;

                            case 9:
                                return _context3.abrupt("return", result);

                            case 10:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
    }, {
        key: "loadMaterial",
        value: function loadMaterial(args) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                return _context4.abrupt("return", _GLTFMaterialInstanciatorRegistry2.default.get(this.__gl).getInstanciator(args.material, args.textures, args.tf, this.parser));

                            case 1:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
        }
    }, {
        key: "loadAnimations",
        value: function loadAnimations(args) {
            var result = {};
            for (var key in args.tf.animations) {
                var animation = args.tf.animations[key];
                result[key] = this.parser.callParserModule(function (m) {
                    return m.loadAnimation;
                }, { tf: args.tf, bufferViews: args.bufferViews, animation: animation });
            }
            return result;
        }
    }, {
        key: "loadAnimation",
        value: function loadAnimation(args) {
            var defaultClip = [];
            for (var i = 0; i < args.animation.channels.length; i++) {
                var clip = {};
                var channel = args.animation.channels[i];
                var query = ".gltf-node-" + channel.target.node;
                var target = this._pathNameToGrimoire(channel.target.path);
                var sampler = args.animation.samplers[channel.sampler];
                clip.query = query;
                clip.component = target.component;
                clip.attribute = target.attributeName;
                var inputAccessor = args.tf.accessors[sampler.input];
                var outputAccessor = args.tf.accessors[sampler.output];
                var inputBufferInfo = args.tf.bufferViews[inputAccessor.bufferView];
                var inputBuffer = args.bufferViews[inputAccessor.bufferView];
                var outputBuffer = args.bufferViews[outputAccessor.bufferView];
                var outputBufferInfo = args.tf.bufferViews[outputAccessor.bufferView];
                var inputBufferF32 = this.__convertBufferView(Float32Array, inputBuffer, inputBufferInfo, inputAccessor); //new Float32Array(inputBuffer.buffer, inputBuffer.byteOffset + inputAccessor.byteOffset, inputAccessor.count);
                var outputBufferF32 = this.__convertBufferView(Float32Array, outputBuffer, outputBufferInfo, outputAccessor); //new Float32Array(outputBuffer.buffer, outputBuffer.byteOffset + outputAccessor.byteOffset, outputAccessor.count * elemCount);
                var elemCount = outputBufferF32.length / inputBufferF32.length;
                var times = new Array(inputAccessor.count);
                for (var _i = 0; _i < inputAccessor.count; _i++) {
                    times[_i] = inputBufferF32[_i] * 1000; // SHould consider buffer stride
                }
                clip.timeline = times;
                clip.defaultEffect = "LINEAR"; // TODO bug of animation plugin?
                var values = [];
                for (var _i2 = 0; _i2 < outputAccessor.count; _i2++) {
                    values[_i2] = [];
                    for (var j = 0; j < elemCount; j++) {
                        values[_i2][j] = outputBufferF32[_i2 * elemCount + j]; // SHould consider buffer stride
                    }
                }
                clip.values = values;
                defaultClip.push(clip);
            }
            return {
                default: defaultClip
            };
        }
    }, {
        key: "_pathNameToGrimoire",
        value: function _pathNameToGrimoire(name) {
            switch (name) {
                case "translation":
                    return { component: "Transform", attributeName: "position" };
                case "rotation":
                    return { component: "Transform", attributeName: "rotation" };
                case "scale":
                    return { component: "Transform", attributeName: "scale" };
                case "weights":
                    return { component: "GLTFVertexMorpher", attributeName: "weights" };
                default:
                    throw new Error("Unsupported path type on grimoire");
            }
        }
    }]);

    return DefaultParserModule;
}(_ParserModule3.default);

exports.default = DefaultParserModule;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ImageResolver = __webpack_require__(11);

var _ImageResolver2 = _interopRequireDefault(_ImageResolver);

var _ConstantConverter = __webpack_require__(0);

var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base class of ParserModule.
 * Provides utility for parsing glTF files.
 */
var ParserModuleBase = function () {
    function ParserModuleBase() {
        _classCallCheck(this, ParserModuleBase);
    }

    _createClass(ParserModuleBase, [{
        key: "__convertBufferView",
        value: function __convertBufferView(ctor, bufferView, bufferViewInfo, accessor) {
            var offset = 0;
            if (bufferView.byteOffset) {
                offset += bufferView.byteOffset;
            }
            if (accessor.byteOffset) {
                offset += accessor.byteOffset;
            }
            var count = accessor.count * _ConstantConverter2.default.asVectorSize(accessor.type);
            if (bufferViewInfo.byteStride) {
                count = bufferViewInfo.byteStride * accessor.count / _ConstantConverter2.default.asByteSize(accessor.componentType);
            }
            return new ctor(bufferView.buffer, offset, count);
        }
    }, {
        key: "__fetchBuffer",
        value: function __fetchBuffer(url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.responseType = "arraybuffer";
                xhr.onload = function (v) {
                    resolve(xhr.response);
                };
                xhr.onerror = function (e) {
                    reject({
                        message: "Loading resource at '" + url + " failed. Is there resource file in dependency at correct location?'",
                        error: e
                    });
                };
                xhr.send();
            });
        }
    }, {
        key: "__fetchImage",
        value: function __fetchImage(url) {
            return _ImageResolver2.default.resolve(url);
        }
    }, {
        key: "__asAbsoluteURL",
        value: function __asAbsoluteURL(baseDirURL, path) {
            if (this.__isDataUri(path)) {
                return path;
            } else {
                return baseDirURL + path;
            }
        }
        /**
         * Check provided string being data uri or not.
         * @param  {string}  target [description]
         * @return {boolean}        [description]
         */

    }, {
        key: "__isDataUri",
        value: function __isDataUri(target) {
            return !!target.match(/^\s*data\:.*;base64/);
        }
        /**
         * Get directiory location from specified url
         * @param  {string} url [description]
         * @return {string}     [description]
         */

    }, {
        key: "__getBaseDir",
        value: function __getBaseDir(url) {
            return url.substr(0, url.lastIndexOf("/") + 1);
        }
        /**
         * Convert dataURI text to raw text
         * @param  {string} dataUrl [description]
         * @return {string}         [description]
         */

    }, {
        key: "__dataUriToText",
        value: function __dataUriToText(dataUrl) {
            var splittedUri = dataUrl.split(",");
            var byteString = atob(splittedUri[1]);
            return byteString;
        }
        /**
         * Convert data url string into array buffer
         * @param  {string}      dataUri [description]
         * @return {ArrayBuffer}         [description]
         */

    }, {
        key: "__dataUriToArrayBuffer",
        value: function __dataUriToArrayBuffer(dataUri) {
            var splittedUri = dataUri.split(",");
            var byteString = atob(splittedUri[1]);
            var byteStringLength = byteString.length;
            var arrayBuffer = new ArrayBuffer(byteStringLength);
            var uint8Array = new Uint8Array(arrayBuffer);
            for (var i = 0; i < byteStringLength; i++) {
                uint8Array[i] = byteString.charCodeAt(i);
            }
            return arrayBuffer;
        }
        /**
         * Convert data uri into image element
         * @param  {string}  dataUrl [description]
         * @return {Promise}         [description]
         */

    }, {
        key: "__dataUriToImage",
        value: function __dataUriToImage(dataUrl) {
            return new Promise(function (resolve, reject) {
                var image = new Image();
                image.src = dataUrl;
                image.onload = function () {
                    resolve(image);
                };
            });
        }
    }, {
        key: "__bufferToString",
        value: function __bufferToString(arr) {
            var tmp = "";
            var len = 1024;
            for (var p = 0; p < arr.byteLength; p += len) {
                tmp += this._smallBufferToString(new Uint8Array(arr.slice(p, p + len)));
            }
            return tmp;
        }
    }, {
        key: "__getBufferReader",
        value: function __getBufferReader(arr) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : WebGLRenderingContext.UNSIGNED_BYTE;
            var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var stride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            var singleByte = 0;
            switch (type) {
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    arr = new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
                    break;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                    arr = new Uint16Array(arr.buffer, arr.byteOffset, arr.byteLength);
                    break;
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    arr = new Uint32Array(arr.buffer, arr.byteOffset, arr.byteLength);
                    break;
                default:
                    throw new Error("Unknown array buffer");
            }
            if (stride !== 0) {
                throw new Error("Accessing a buffer with stride is not supported yet.");
            }
            return function (i) {
                return arr[offset + i];
            };
        }
    }, {
        key: "_smallBufferToString",
        value: function _smallBufferToString(arr) {
            return String.fromCharCode.apply("", arr);
        }
    }]);

    return ParserModuleBase;
}();

exports.default = ParserModuleBase;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Asset.ImageResolver:undefined;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GLRelatedRegistryBase = __webpack_require__(29);

var _GLRelatedRegistryBase2 = _interopRequireDefault(_GLRelatedRegistryBase);

var _MaterialFactory = __webpack_require__(13);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _DefaultPBRMetallicRoughnessInstanciator = __webpack_require__(14);

var _DefaultPBRMetallicRoughnessInstanciator2 = _interopRequireDefault(_DefaultPBRMetallicRoughnessInstanciator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var GLTFMaterialInstanciatorRegistry = function (_GLRelatedRegistryBas) {
    _inherits(GLTFMaterialInstanciatorRegistry, _GLRelatedRegistryBas);

    function GLTFMaterialInstanciatorRegistry(gl) {
        _classCallCheck(this, GLTFMaterialInstanciatorRegistry);

        var _this = _possibleConstructorReturn(this, (GLTFMaterialInstanciatorRegistry.__proto__ || Object.getPrototypeOf(GLTFMaterialInstanciatorRegistry)).call(this));

        _this.gl = gl;
        return _this;
    }

    _createClass(GLTFMaterialInstanciatorRegistry, [{
        key: "getInstanciator",
        value: function getInstanciator(materialData, textures, gltfData, parser) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var matFactory, i, instanciator, material;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                matFactory = _MaterialFactory2.default.get(this.gl);
                                i = 0;

                            case 2:
                                if (!(i < GLTFMaterialInstanciatorRegistry.instanciators.length)) {
                                    _context.next = 12;
                                    break;
                                }

                                instanciator = GLTFMaterialInstanciatorRegistry.instanciators[GLTFMaterialInstanciatorRegistry.instanciators.length - 1 - i];
                                _context.next = 6;
                                return instanciator.tryInstanciate(matFactory, materialData, textures, gltfData, parser);

                            case 6:
                                material = _context.sent;

                                if (!material) {
                                    _context.next = 9;
                                    break;
                                }

                                return _context.abrupt("return", material);

                            case 9:
                                i++;
                                _context.next = 2;
                                break;

                            case 12:
                                throw new Error("Can't find any material for specified model." + JSON.stringify(materialData));

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }], [{
        key: "get",
        value: function get(gl) {
            return this.__get(gl, GLTFMaterialInstanciatorRegistry);
        }
    }]);

    return GLTFMaterialInstanciatorRegistry;
}(_GLRelatedRegistryBase2.default);

exports.default = GLTFMaterialInstanciatorRegistry;

GLTFMaterialInstanciatorRegistry.instanciators = [new _DefaultPBRMetallicRoughnessInstanciator2.default()];
GLTFMaterialInstanciatorRegistry.registryName = "gltf-material-instanciator";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Material.MaterialFactory:undefined;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TextureReference = __webpack_require__(30);

var _TextureReference2 = _interopRequireDefault(_TextureReference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var DefaultPBRMetallicRoughnessInstanciator = function () {
    function DefaultPBRMetallicRoughnessInstanciator() {
        _classCallCheck(this, DefaultPBRMetallicRoughnessInstanciator);
    }

    _createClass(DefaultPBRMetallicRoughnessInstanciator, [{
        key: "tryInstanciate",
        value: function tryInstanciate(matFactory, materialData, textures, gltfData, parser) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var material, pass;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!materialData["pbrMetallicRoughness"]) {
                                    _context.next = 9;
                                    break;
                                }

                                _context.next = 3;
                                return matFactory.instanciate("gltf-pbr-metallic-roughness");

                            case 3:
                                material = _context.sent;
                                pass = material.techniques["default"].passes[0];

                                this.__applyPBRMetallicRoughnessParameters(materialData, pass, textures);
                                return _context.abrupt("return", material);

                            case 9:
                                return _context.abrupt("return", null);

                            case 10:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "__applyPBRMetallicRoughnessParameters",
        value: function __applyPBRMetallicRoughnessParameters(materialData, pass, textures) {
            var pmr = materialData["pbrMetallicRoughness"];
            if (pmr.baseColorFactor) {
                pass.setArgument("baseColorFactor", pmr.baseColorFactor, null);
            }
            if (pmr.baseColorTexture) {
                pass.setArgument("baseColorTexture", new _TextureReference2.default(textures[pmr.baseColorTexture.index]), null);
            }
            if (pmr.metallicFactor) {
                pass.setArgument("metallicFactor", pmr.metallicFactor, null);
            }
            // TODO Remove? metallicTexture and roughnessTexture was removed from specification?
            if (pmr.metallicTexture) {
                pass.setArgument("metallicTexture", new _TextureReference2.default(textures[pmr.metallicTexture.index]), null);
            }
            if (pmr.roughnessTexture) {
                pass.setArgument("roughnessTexture", new _TextureReference2.default(textures[pmr.roughnessTexture.index]), null);
            }
            if (pmr.roughnessFactor) {
                pass.setArgument("roughnessFactor", pmr.roughnessFactor, null);
            }
            if (pmr.metallicRoughnessTexture) {
                pass.setArgument("metallicRoughnessTexture", new _TextureReference2.default(textures[pmr.metallicRoughnessTexture.index]), null);
            }
            if (materialData["emissiveFactor"]) {
                pass.setArgument("emissiveFactor", materialData.emissiveFactor, null);
            }
            if (materialData["emissiveTexture"]) {
                pass.setArgument("emissiveTexture", new _TextureReference2.default(textures[materialData.emissiveTexture.index]), null);
            }
            if (materialData["normalTexture"]) {
                pass.setArgument("normalTexture", new _TextureReference2.default(textures[materialData.normalTexture.index]), null);
            }
            if (materialData["occlusionTexture"]) {
                pass.setArgument("occlusionTexture", new _TextureReference2.default(textures[materialData.occlusionTexture.index]), null);
            }
            if (pmr.baseColorTexture) {
                pass.setArgument("baseColorTexture", new _TextureReference2.default(textures[pmr.baseColorTexture.index]), null);
            }
            if (pmr.metallicFactor) {
                pass.setArgument("metallicFactor", pmr.metallicFactor, null);
            }
            // TODO Remove? metallicTexture and roughnessTexture was removed from specification?
            if (pmr.metallicTexture) {
                pass.setArgument("metallicTexture", new _TextureReference2.default(textures[pmr.metallicTexture.index]), null);
            }
            if (pmr.roughnessTexture) {
                pass.setArgument("roughnessTexture", new _TextureReference2.default(textures[pmr.roughnessTexture.index]), null);
            }
            if (pmr.roughnessFactor) {
                pass.setArgument("roughnessFactor", pmr.roughnessFactor, null);
            }
            if (pmr.metallicRoughnessTexture) {
                pass.setArgument("metallicRoughnessTexture", new _TextureReference2.default(textures[pmr.metallicRoughnessTexture.index]), null);
            }
            if (materialData["emissiveFactor"]) {
                pass.setArgument("emissiveFactor", materialData.emissiveFactor, null);
            }
            if (materialData["emissiveTexture"]) {
                pass.setArgument("emissiveTexture", new _TextureReference2.default(textures[materialData.emissiveTexture.index]), null);
            }
            if (materialData["normalTexture"]) {
                pass.setArgument("normalTexture", new _TextureReference2.default(textures[materialData.normalTexture.index]), null);
            }
            if (materialData["occlusionTexture"]) {
                pass.setArgument("occlusionTexture", new _TextureReference2.default(textures[materialData.occlusionTexture.index]), null);
            }
        }
    }]);

    return DefaultPBRMetallicRoughnessInstanciator;
}();

exports.default = DefaultPBRMetallicRoughnessInstanciator;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserModule2 = __webpack_require__(1);

var _ParserModule3 = _interopRequireDefault(_ParserModule2);

var _Vector = __webpack_require__(4);

var _Vector2 = _interopRequireDefault(_Vector);

var _ConstantConverter = __webpack_require__(0);

var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NormalComplementorModule = function (_ParserModule) {
    _inherits(NormalComplementorModule, _ParserModule);

    function NormalComplementorModule() {
        _classCallCheck(this, NormalComplementorModule);

        return _possibleConstructorReturn(this, (NormalComplementorModule.__proto__ || Object.getPrototypeOf(NormalComplementorModule)).apply(this, arguments));
    }

    _createClass(NormalComplementorModule, [{
        key: "complementVertexAttributes",
        value: function complementVertexAttributes(args) {
            if (args.primitive.attributes["NORMAL"] === void 0 && args.primitive.attributes["POSITION"] !== void 0) {
                var positionAccessor = args.tf.accessors[args.primitive.attributes["POSITION"]];
                var positionBufferViewInfo = args.tf.bufferViews[positionAccessor.bufferView];
                var positionBufferView = args.bufferViews[positionAccessor.bufferView];
                var positionTypedArray = this.__convertBufferView(_ConstantConverter2.default.asTypedArrayConstructor(positionAccessor.componentType), positionBufferView, positionBufferViewInfo, positionAccessor);
                if (!positionAccessor.count) {
                    throw new Error("Accessor count of POSITION buffer should be defined for complementing NORMAL buffer");
                }
                var indexAccessor = args.tf.accessors[args.primitive.indices];
                // generate normal buffer
                var complementedNormal = new Float32Array(positionAccessor.count * 3);
                if (indexAccessor) {
                    var indexBufferViewInfo = args.tf.bufferViews[indexAccessor.bufferView];
                    var indexBufferView = args.bufferViews[indexAccessor.bufferView];
                    var indexTypedArray = this.__convertBufferView(_ConstantConverter2.default.asTypedArrayConstructor(indexAccessor.componentType), indexBufferView, indexBufferViewInfo, indexAccessor);
                    for (var i = 0; i < indexAccessor.count / 3; i++) {
                        this._calcFlatNormal(positionTypedArray, complementedNormal, indexTypedArray[3 * i], indexTypedArray[3 * i + 1], indexTypedArray[3 * i + 2]);
                    }
                } else {
                    for (var _i = 0; _i < positionAccessor.count / 3; _i++) {
                        this._calcFlatNormal(positionTypedArray, complementedNormal, 3 * _i, 3 * _i + 1, 3 * _i + 2);
                    }
                }
                // add normal to geometry
                args.geometry.addAttributes(complementedNormal, {
                    NORMAL: {
                        size: 3
                    }
                });
            }
            return false;
        }
    }, {
        key: "_getElement",
        value: function _getElement(positions, posbase, elemIndex) {
            return positions[posbase + elemIndex];
        }
    }, {
        key: "_calcFlatNormal",
        value: function _calcFlatNormal(positions, normals, i0, i1, i2) {
            var v0Tov1 = new _Vector2.default(this._getElement(positions, 3 * i1, 0) - this._getElement(positions, 3 * i0, 0), this._getElement(positions, 3 * i1, 1) - this._getElement(positions, 3 * i0, 1), this._getElement(positions, 3 * i1, 2) - this._getElement(positions, 3 * i0, 2));
            var v0Tov2 = new _Vector2.default(this._getElement(positions, 3 * i2, 0) - this._getElement(positions, 3 * i0, 0), this._getElement(positions, 3 * i2, 1) - this._getElement(positions, 3 * i0, 1), this._getElement(positions, 3 * i2, 2) - this._getElement(positions, 3 * i0, 2));
            var nor = _Vector2.default.cross(v0Tov1, v0Tov2).normalizeThis();
            normals[3 * i0] = nor.X;
            normals[3 * i0 + 1] = nor.Y;
            normals[3 * i0 + 2] = nor.Z;
            normals[3 * i1] = nor.X;
            normals[3 * i1 + 1] = nor.Y;
            normals[3 * i1 + 2] = nor.Z;
            normals[3 * i2] = nor.X;
            normals[3 * i2 + 1] = nor.Y;
            normals[3 * i2 + 2] = nor.Z;
        }
    }]);

    return NormalComplementorModule;
}(_ParserModule3.default);

exports.default = NormalComplementorModule;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserModule2 = __webpack_require__(1);

var _ParserModule3 = _interopRequireDefault(_ParserModule2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexComplementorModule = function (_ParserModule) {
    _inherits(IndexComplementorModule, _ParserModule);

    function IndexComplementorModule() {
        _classCallCheck(this, IndexComplementorModule);

        return _possibleConstructorReturn(this, (IndexComplementorModule.__proto__ || Object.getPrototypeOf(IndexComplementorModule)).apply(this, arguments));
    }

    _createClass(IndexComplementorModule, [{
        key: "appendIndices",
        value: function appendIndices(args) {
            if (args.primitive.indices === void 0) {
                var topology = args.primitive.mode || WebGLRenderingContext.TRIANGLES;
                var accessor = args.tf.accessors[args.primitive.attributes["POSITION"]];
                if (accessor.count === void 0) {
                    throw new Error("POSITION buffer should have count parameter. Construction of index buffer was failed.");
                }
                if (topology !== WebGLRenderingContext.TRIANGLES) {
                    throw new Error("Complementing index buffer is only supported for TRIANGLES topology currently.");
                }
                var indices = new Array(accessor.count);
                for (var i = 0; i < accessor.count; i++) {
                    indices[i] = i;
                }
                args.geometry.addIndex("default", indices);
                return true;
            }
        }
    }]);

    return IndexComplementorModule;
}(_ParserModule3.default);

exports.default = IndexComplementorModule;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserModule2 = __webpack_require__(1);

var _ParserModule3 = _interopRequireDefault(_ParserModule2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmbeddedBufferModule = function (_ParserModule) {
    _inherits(EmbeddedBufferModule, _ParserModule);

    function EmbeddedBufferModule() {
        _classCallCheck(this, EmbeddedBufferModule);

        return _possibleConstructorReturn(this, (EmbeddedBufferModule.__proto__ || Object.getPrototypeOf(EmbeddedBufferModule)).apply(this, arguments));
    }

    _createClass(EmbeddedBufferModule, [{
        key: "loadBufferResource",
        value: function loadBufferResource(tf) {
            if (this.__isDataUri(tf.uri)) {
                return Promise.resolve(this.__dataUriToArrayBuffer(tf.uri));
            }
        }
    }]);

    return EmbeddedBufferModule;
}(_ParserModule3.default);

exports.default = EmbeddedBufferModule;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TransformComponent = __webpack_require__(7);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _MeshRendererComponent = __webpack_require__(19);

var _MeshRendererComponent2 = _interopRequireDefault(_MeshRendererComponent);

var _ConstantConverter = __webpack_require__(0);

var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);

var _Quaternion = __webpack_require__(31);

var _Quaternion2 = _interopRequireDefault(_Quaternion);

var _Vector = __webpack_require__(4);

var _Vector2 = _interopRequireDefault(_Vector);

var _Matrix = __webpack_require__(6);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _AnimationFactory = __webpack_require__(32);

var _AnimationFactory2 = _interopRequireDefault(_AnimationFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultInstanciator = function () {
    function DefaultInstanciator() {
        _classCallCheck(this, DefaultInstanciator);

        this._skinInstanciators = [];
    }

    _createClass(DefaultInstanciator, [{
        key: "instanciateAll",
        value: function instanciateAll(recipe, model, scene) {
            var sceneIndex = scene;
            if (sceneIndex === null) {
                sceneIndex = recipe.tf.scene;
            }
            if (typeof sceneIndex !== "number") {
                for (var key in recipe.tf.scenes) {
                    sceneIndex = key;
                    break;
                }
            }
            var sceneInfo = recipe.tf.scenes[sceneIndex];
            this.__instanciateScene(sceneInfo, model, recipe);
            this.__instanciateAnimations(model, recipe);
        }
    }, {
        key: "__instanciateScene",
        value: function __instanciateScene(scene, model, recipe) {
            var nodes = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = scene.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var nodeName = _step.value;

                    this.__instanciateNode(recipe, nodeName, nodes, model.node, model);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this._skinInstanciators.forEach(function (v) {
                return v();
            });
        }
    }, {
        key: "__instanciateAnimations",
        value: function __instanciateAnimations(model, recipe) {
            for (var key in recipe.animations) {
                _AnimationFactory2.default.addAnimation("gltf-animation-" + key, JSON.stringify(recipe.animations[key]));
                model.node.addComponent("Animation", {
                    animation: "gltf-animation-" + key,
                    clips: "default",
                    auto: model.node.getAttribute("autoAnimate")
                });
            }
        }
    }, {
        key: "__instanciateNode",
        value: function __instanciateNode(recipe, nodeKey, instanciatedNodes, parent, model) {
            var _this = this;

            var node = recipe.tf.nodes[nodeKey];
            var currentNode = void 0;
            var meshes = [];
            if (node.mesh !== void 0) {
                var primitives = recipe.primitives[node.mesh];
                var meshInfo = recipe.tf.meshes[node.mesh];
                if (primitives.length === 1) {
                    var mat = recipe.materials[meshInfo.primitives[0].material];
                    var primitiveInfo = recipe.tf.meshes[node.mesh].primitives[0];
                    var cull = "back";
                    if (recipe.tf.materials && meshInfo.primitives[0].material !== void 0 && recipe.tf.materials[meshInfo.primitives[0].material] !== void 0) {
                        cull = recipe.tf.materials[meshInfo.primitives[0].material].doubleSided ? "none" : "back";
                    }
                    var meshNode = parent.addChildByName("mesh", {
                        geometry: primitives[0],
                        material: mat,
                        cull: cull
                    });
                    if (primitiveInfo.targets !== void 0 && primitiveInfo.targets.length >= 1) {
                        meshNode.addComponent("GLTFVertexMorpher", {
                            weights: meshInfo.weights
                        });
                    }
                    meshes.push(meshNode);
                    currentNode = meshNode;
                } else {
                    var objectNode = parent.addChildByName("object", {});
                    for (var i = 0; i < primitives.length; i++) {
                        var _mat = recipe.materials[meshInfo.primitives[i].material];
                        var _cull = "back";
                        if (recipe.tf.materials && meshInfo.primitives[i].material !== void i && recipe.tf.materials[meshInfo.primitives[i].material] !== void 0) {
                            _cull = recipe.tf.materials[meshInfo.primitives[i].material].doubleSided ? "none" : "back";
                        }
                        var _meshNode = objectNode.addChildByName("mesh", {
                            geometry: primitives[i],
                            material: _mat,
                            cull: _cull
                        });
                        meshes.push(_meshNode);
                    }
                    currentNode = objectNode;
                }
            } else {
                currentNode = parent.addChildByName("object", {});
            }
            instanciatedNodes[nodeKey] = currentNode;
            var nodeName = "";
            if (node.name) {
                nodeName = " gltf-node-name-" + node.name.replace(/\s+/g, "");
            }
            currentNode.setAttribute("class", "gltf-node-" + nodeKey + nodeName);
            this.__applyTransform(currentNode, node);
            if (node.children) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = node.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var child = _step2.value;

                        this.__instanciateNode(recipe, child, instanciatedNodes, currentNode, model);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
            // If this node was skin, create joint matrix buffer in model
            if (node.skin !== void 0) {
                this._skinInstanciators.push(function () {
                    var skinInfo = recipe.tf.skins[node.skin];
                    model.skeletons[node.skin] = currentNode.getComponent(_TransformComponent2.default);
                    var invBindShapeMatrixSourceAccessor = recipe.tf.accessors[skinInfo.inverseBindMatrices];
                    var invBindShapeMatrixSourceBufferInfo = recipe.tf.bufferViews[invBindShapeMatrixSourceAccessor.bufferView];
                    var invBindShapeMatrixSource = recipe.bufferViews[invBindShapeMatrixSourceAccessor.bufferView];
                    var invBindShapeMatrixSourceCasted = _this.__convertBufferView(Float32Array, invBindShapeMatrixSource, invBindShapeMatrixSourceBufferInfo, invBindShapeMatrixSourceAccessor);
                    var stride = !invBindShapeMatrixSourceBufferInfo.byteStride ? 4 : invBindShapeMatrixSourceBufferInfo.byteStride;
                    var getInvBindShapeElement = function getInvBindShapeElement(i) {
                        return invBindShapeMatrixSourceCasted[stride / 4 * i];
                    };
                    if (model.jointMatrices[node.skin] === void 0) {
                        model.jointMatrices[node.skin] = new Float32Array(skinInfo.joints.length * 16);
                    }
                    for (var _i = 0; _i < meshes.length; _i++) {
                        meshes[_i].setAttribute("fundamental.MaterialContainer.jointCount", skinInfo.joints.length);
                        meshes[_i].getComponent(_MeshRendererComponent2.default).renderArgs["gltf-jointMatrices"] = model.jointMatrices[node.skin];
                    }
                    skinInfo.joints.forEach(function (j, jointIndex) {
                        if (instanciatedNodes[j]) {
                            var invBindShapeMatrix = new Array(16);
                            for (var _i2 = 0; _i2 < 16; _i2++) {
                                invBindShapeMatrix[_i2] = getInvBindShapeElement(_i2 + 16 * jointIndex);
                            }
                            instanciatedNodes[j].setAttribute("class", instanciatedNodes[j].getAttribute("class") + " gltf-joint-" + jointIndex);
                            instanciatedNodes[j].addComponent("GLTFJoint", {
                                invBindShapeMatrix: invBindShapeMatrix,
                                skinIndex: node.skin,
                                jointIndex: jointIndex
                            });
                        } else {
                            throw new Error("specified node was not found");
                        }
                    });
                });
            }
        }
    }, {
        key: "__applyTransform",
        value: function __applyTransform(node, nodeInfo) {
            var transform = node.getComponent(_TransformComponent2.default);
            if (nodeInfo.rotation) {
                transform.setAttribute("rotation", new _Quaternion2.default([].concat(nodeInfo.rotation)));
            }
            if (nodeInfo.translation) {
                transform.setAttribute("position", new _Vector2.default([].concat(nodeInfo.translation)));
            }
            if (nodeInfo.scale) {
                transform.setAttribute("scale", new _Vector2.default([].concat(nodeInfo.scale)));
            }
            if (nodeInfo.matrix) {
                if (nodeInfo.rotation || nodeInfo.translation || nodeInfo.scale) {
                    throw new Error("Matrix property can not be existed with other transoform property");
                }
                var mat = new _Matrix2.default(nodeInfo.matrix);
                transform.applyMatrix(mat);
            }
        }
    }, {
        key: "__convertBufferView",
        value: function __convertBufferView(ctor, bufferView, bufferViewInfo, accessor) {
            var offset = 0;
            if (bufferView.byteOffset) {
                offset += bufferView.byteOffset;
            }
            if (accessor.byteOffset) {
                offset += accessor.byteOffset;
            }
            var count = accessor.count * _ConstantConverter2.default.asVectorSize(accessor.type);
            if (bufferViewInfo.byteStride) {
                count = bufferViewInfo.byteStride * accessor.count / _ConstantConverter2.default.asByteSize(accessor.componentType);
            }
            return new ctor(bufferView.buffer, offset, count);
        }
    }]);

    return DefaultInstanciator;
}();

exports.default = DefaultInstanciator;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Components.MeshRendererComponent:undefined;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(2);

var _Component3 = _interopRequireDefault(_Component2);

var _MeshRendererComponent = __webpack_require__(19);

var _MeshRendererComponent2 = _interopRequireDefault(_MeshRendererComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GLTFVertexMorpher = function (_Component) {
    _inherits(GLTFVertexMorpher, _Component);

    function GLTFVertexMorpher() {
        _classCallCheck(this, GLTFVertexMorpher);

        return _possibleConstructorReturn(this, (GLTFVertexMorpher.__proto__ || Object.getPrototypeOf(GLTFVertexMorpher)).apply(this, arguments));
    }

    _createClass(GLTFVertexMorpher, [{
        key: "$mount",
        value: function $mount() {
            var _this2 = this;

            this._meshComponent = this.node.getComponent(_MeshRendererComponent2.default);
            this._meshComponent.geometry.then(function (g) {
                return _this2._morphTarget = g;
            });
            this.getAttributeRaw("weights").watch(function (v) {
                if (_this2._morphTarget) {
                    _this2._morphTarget.setWeight(v);
                }
            });
        }
    }]);

    return GLTFVertexMorpher;
}(_Component3.default);

exports.default = GLTFVertexMorpher;

GLTFVertexMorpher.attributes = {
    weights: {
        default: [],
        converter: "NumberArray"
    }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.__NAME__ = exports.__VERSION__ = undefined;

var _Accessor = __webpack_require__(23);

var _Accessor2 = _interopRequireDefault(_Accessor);

var _GLTFJointComponent = __webpack_require__(5);

var _GLTFJointComponent2 = _interopRequireDefault(_GLTFJointComponent);

var _GLTFModelComponent = __webpack_require__(3);

var _GLTFModelComponent2 = _interopRequireDefault(_GLTFModelComponent);

var _GLTFVertexMorpher = __webpack_require__(20);

var _GLTFVertexMorpher2 = _interopRequireDefault(_GLTFVertexMorpher);

var _DefaultInstanciator = __webpack_require__(18);

var _DefaultInstanciator2 = _interopRequireDefault(_DefaultInstanciator);

var _ConstantConverter = __webpack_require__(0);

var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);

var _DefaultParserModule = __webpack_require__(9);

var _DefaultParserModule2 = _interopRequireDefault(_DefaultParserModule);

var _DefaultPBRMetallicRoughnessInstanciator = __webpack_require__(14);

var _DefaultPBRMetallicRoughnessInstanciator2 = _interopRequireDefault(_DefaultPBRMetallicRoughnessInstanciator);

var _GLTFMaterialInstanciatorRegistry = __webpack_require__(12);

var _GLTFMaterialInstanciatorRegistry2 = _interopRequireDefault(_GLTFMaterialInstanciatorRegistry);

var _EmbeddedBufferModule = __webpack_require__(17);

var _EmbeddedBufferModule2 = _interopRequireDefault(_EmbeddedBufferModule);

var _IndexComplementorModule = __webpack_require__(16);

var _IndexComplementorModule2 = _interopRequireDefault(_IndexComplementorModule);

var _NormalComplementorModule = __webpack_require__(15);

var _NormalComplementorModule2 = _interopRequireDefault(_NormalComplementorModule);

var _Parser = __webpack_require__(8);

var _Parser2 = _interopRequireDefault(_Parser);

var _ParserModule = __webpack_require__(1);

var _ParserModule2 = _interopRequireDefault(_ParserModule);

var _ParserModuleBase = __webpack_require__(10);

var _ParserModuleBase2 = _interopRequireDefault(_ParserModuleBase);

var _ResourceResolver = __webpack_require__(33);

var _ResourceResolver2 = _interopRequireDefault(_ResourceResolver);

var _main = __webpack_require__(36);

var _main2 = _interopRequireDefault(_main);

var _grimoirejs = __webpack_require__(21);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __VERSION__ = exports.__VERSION__ = "2.3.21";
var __NAME__ = exports.__NAME__ = "grimoirejs-gltf";

var __EXPOSE__ = {
    "Accessor": {
        "Accessor": _Accessor2.default
    },
    "Components": {
        "GLTFJointComponent": _GLTFJointComponent2.default,
        "GLTFModelComponent": _GLTFModelComponent2.default,
        "GLTFVertexMorpher": _GLTFVertexMorpher2.default
    },
    "Instanciator": {
        "DefaultInstanciator": _DefaultInstanciator2.default
    },
    "Parser": {
        "ConstantConverter": _ConstantConverter2.default,
        "DefaultParserModule": _DefaultParserModule2.default,
        "MaterialInstanciator": {
            "DefaultPBRMetallicRoughnessInstanciator": _DefaultPBRMetallicRoughnessInstanciator2.default,
            "GLTFMaterialInstanciatorRegistry": _GLTFMaterialInstanciatorRegistry2.default
        },
        "Modules": {
            "EmbeddedBufferModule": _EmbeddedBufferModule2.default,
            "IndexComplementorModule": _IndexComplementorModule2.default,
            "NormalComplementorModule": _NormalComplementorModule2.default
        },
        "Parser": _Parser2.default,
        "ParserModule": _ParserModule2.default,
        "ParserModuleBase": _ParserModuleBase2.default
    },
    "Util": {
        "ResourceResolver": _ResourceResolver2.default
    }
};

_grimoirejs2.default.notifyRegisteringPlugin(__NAME__);
var __BASE__ = (0, _main2.default)();
Object.assign(__EXPOSE__, {
    __VERSION__: __VERSION__,
    __NAME__: __NAME__
});
Object.assign(__BASE__ || {}, __EXPOSE__);
window["GrimoireJS"].lib.gltf = __EXPOSE__;
exports.default = __BASE__;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ConstantConverter = __webpack_require__(0);

var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The accessor class to be used for fetching animation frames
 */
var Accessor = function () {
    function Accessor(buffer, count, componentType, elementSize, byteOffset, byteStride) {
        _classCallCheck(this, Accessor);

        this.buffer = buffer;
        this.count = count;
        this.componentType = componentType;
        this.elementSize = elementSize;
        this.byteOffset = byteOffset;
        this.byteStride = byteStride;
        this._dView = new DataView(buffer.buffer, buffer.byteOffset + byteOffset);
        this._elementByteSize = _ConstantConverter2.default.asByteSize(componentType);
        if (byteStride === 0) {
            this.byteStride = this.elementSize * this._elementByteSize;
        }
    }

    _createClass(Accessor, [{
        key: "getByIndex",
        value: function getByIndex(index) {
            if (index < 0 || index >= this.count) {
                return null;
            }
            var res = new Array(this.elementSize);
            for (var i = 0; i < this.elementSize; i++) {
                res[i] = this._getSingleByIndex(index, i);
            }
            return res;
        }
    }, {
        key: "_getSingleByIndex",
        value: function _getSingleByIndex(index, elementIndex) {
            switch (this.componentType) {
                case WebGLRenderingContext.FLOAT:
                    return this._dView.getFloat32(index * this.byteStride + this._elementByteSize * elementIndex, true);
                default:
                    throw new Error("Unsupported element type");
            }
        }
    }]);

    return Accessor;
}();

exports.default = Accessor;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Color3:undefined;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Color4:undefined;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Resource.Texture2D:undefined;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Geometry.Geometry:undefined;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Geometry.MorphGeometry:undefined;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Resource.GLRelatedRegistryBase:undefined;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Material.TextureReference:undefined;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Quaternion:undefined;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.animation?window.GrimoireJS.lib.animation.Animation.AnimationFactory:undefined;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TextFileResolver = __webpack_require__(34);

var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);

var _ImageResolver = __webpack_require__(11);

var _ImageResolver2 = _interopRequireDefault(_ImageResolver);

var _HashCalculator = __webpack_require__(35);

var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Provides resolving resource dependency while parsing gltf file.
 */
var ResourceResolver = function () {
    function ResourceResolver(_rootPath) {
        _classCallCheck(this, ResourceResolver);

        this._rootPath = _rootPath;
        this.baseDirectory = this._getBaseDir(_rootPath);
    }

    _createClass(ResourceResolver, [{
        key: "loadGLTFFile",
        value: function loadGLTFFile() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", _this._rootPath);
                xhr.responseType = "arraybuffer";
                xhr.onload = function (v) {
                    var uiarr = new Uint8Array(xhr.response);
                    var glTFMagic = [103, 108, 84, 70];
                    var isBinary = true;
                    for (var i = 0; i < glTFMagic.length; i++) {
                        if (uiarr[i] !== glTFMagic[i]) {
                            isBinary = false;
                        }
                    }
                    var resultJson = void 0;
                    if (isBinary) {
                        var darr = new DataView(xhr.response);
                        var fl = darr.getUint32(8, true); // fullLength
                        var l = darr.getUint32(12, true); // contentLength
                        resultJson = _this._bufferToString(xhr.response.slice(20, 20 + l));
                        _this.binaryGLTFBuffer = xhr.response.slice(20 + l, fl);
                    } else {
                        resultJson = _this._bufferToString(xhr.response);
                    }
                    _this.tf = JSON.parse(resultJson);
                    _this.tf.id = _HashCalculator2.default.calcHash(resultJson);
                    resolve(_this.tf);
                };
                xhr.onerror = function (e) {
                    // reject({
                    //   message: `Loading resource at '${this.baseDirectory + url} failed. Is there resource file in dependency at correct location?'`,
                    //   error:e
                    // });
                };
                xhr.send();
            });
        }
        /**
         * Load image from specified url or dataURL.
         * @param  {string}  url [description]
         * @return {Promise}     [description]
         */

    }, {
        key: "loadImage",
        value: function loadImage(image) {
            var url = image.uri;
            var isBlob = false;
            if (image["extensions"] && image["extensions"]["KHR_binary_glTF"]) {
                var binaryInfo = image["extensions"]["KHR_binary_glTF"];
                var bufferViewInfo = this.tf.bufferViews[binaryInfo.bufferView];
                var blob = new Blob([new Uint8Array(this.binaryGLTFBuffer, bufferViewInfo.byteOffset, bufferViewInfo.byteLength)], {
                    type: binaryInfo.mimeType
                });
                url = window.URL.createObjectURL(blob);
                isBlob = true;
            }
            if (this._isDataUrl(url)) {
                return this._dataUriToImage(url);
            } else {
                return _ImageResolver2.default.resolve(isBlob ? url : this.baseDirectory + url);
            }
        }
        /**
         * Load buffer from specified url or dataURL.
         * @return {Promise<ArrayBuffer>} [description]
         */

    }, {
        key: "loadBuffer",
        value: function loadBuffer(url) {
            var _this2 = this;

            if (this._isDataUrl(url)) {
                return new Promise(function (resolve, reject) {
                    resolve(_this2._dataUriToArrayBuffer(url));
                });
            }
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", _this2.baseDirectory + url);
                xhr.responseType = "arraybuffer";
                xhr.onload = function (v) {
                    resolve(xhr.response);
                };
                xhr.onerror = function (e) {
                    reject({
                        message: "Loading resource at '" + (_this2.baseDirectory + url) + " failed. Is there resource file in dependency at correct location?'",
                        error: e
                    });
                };
                xhr.send();
            });
        }
        /**
         * Load string from specified url or dataURL
         * @param  {string}          url [description]
         * @return {Promise<string>}     [description]
         */

    }, {
        key: "loadShader",
        value: function loadShader(shader) {
            var url = shader.uri;
            var isBlob = false;
            if (shader["extensions"] && shader["extensions"]["KHR_binary_glTF"]) {
                var binaryInfo = shader["extensions"]["KHR_binary_glTF"];
                var bufferViewInfo = this.tf.bufferViews[binaryInfo.bufferView];
                var blob = new Blob([new Uint8Array(this.binaryGLTFBuffer, bufferViewInfo.byteOffset, bufferViewInfo.byteLength)], {
                    type: "text/plain"
                });
                url = window.URL.createObjectURL(blob);
                isBlob = true;
            }
            if (this._isDataUrl(url)) {
                return Promise.resolve(this._dataUriToText(url));
            } else {
                return _TextFileResolver2.default.resolve(isBlob ? url : this.baseDirectory + url);
            }
        }
        /**
         * Convert data url string into array buffer
         * @param  {string}      dataUri [description]
         * @return {ArrayBuffer}         [description]
         */

    }, {
        key: "_dataUriToArrayBuffer",
        value: function _dataUriToArrayBuffer(dataUri) {
            var splittedUri = dataUri.split(",");
            var byteString = atob(splittedUri[1]);
            var byteStringLength = byteString.length;
            var arrayBuffer = new ArrayBuffer(byteStringLength);
            var uint8Array = new Uint8Array(arrayBuffer);
            for (var i = 0; i < byteStringLength; i++) {
                uint8Array[i] = byteString.charCodeAt(i);
            }
            return arrayBuffer;
        }
        /**
         * Convert data uri into image element
         * @param  {string}  dataUrl [description]
         * @return {Promise}         [description]
         */

    }, {
        key: "_dataUriToImage",
        value: function _dataUriToImage(dataUrl) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                var canvas = document.createElement("canvas");
                var context = canvas.getContext("2d");
                var image = new Image();
                image.src = dataUrl;
                image.onload = function () {
                    resolve(_this3._ensureCorrectSize(image));
                };
            });
        }
    }, {
        key: "_dataUriToText",
        value: function _dataUriToText(dataUrl) {
            var splittedUri = dataUrl.split(",");
            var byteString = atob(splittedUri[1]);
            return byteString;
        }
    }, {
        key: "_ensureCorrectSize",
        value: function _ensureCorrectSize(image) {
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            var cWidth = Math.pow(2, Math.ceil(Math.log(image.width) / Math.LN2));
            var cHeight = Math.pow(2, Math.ceil(Math.log(image.height) / Math.LN2));
            if (cWidth === image.width && cHeight === image.height) {
                return image;
            }
            canvas.width = cWidth;
            canvas.height = cHeight;
            context.drawImage(image, 0, 0, image.width, image.height, 0, 0, cWidth, cHeight);
            return canvas;
        }
    }, {
        key: "_bufferToString",
        value: function _bufferToString(arr) {
            var tmp = "";
            var len = 1024;
            for (var p = 0; p < arr.byteLength; p += len) {
                tmp += this._smallBufferToString(new Uint8Array(arr.slice(p, p + len)));
            }
            return tmp;
        }
    }, {
        key: "_smallBufferToString",
        value: function _smallBufferToString(arr) {
            return String.fromCharCode.apply("", arr);
        }
        /**
         * Check specified url is dataUrl or not
         * @param  {string}  dataUrl [description]
         * @return {boolean}         [description]
         */

    }, {
        key: "_isDataUrl",
        value: function _isDataUrl(dataUrl) {
            return !!dataUrl.match(/^\s*data\:.*;base64/);
        }
        /**
         * Get directiory location from specified url
         * @param  {string} url [description]
         * @return {string}     [description]
         */

    }, {
        key: "_getBaseDir",
        value: function _getBaseDir(url) {
            return url.substr(0, url.lastIndexOf("/") + 1);
        }
    }]);

    return ResourceResolver;
}();

exports.default = ResourceResolver;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Asset.TextFileResolver:undefined;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Util.HashCalculator:undefined;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _GLTFJointComponent = __webpack_require__(5);

var _GLTFJointComponent2 = _interopRequireDefault(_GLTFJointComponent);

var _GLTFModelComponent = __webpack_require__(3);

var _GLTFModelComponent2 = _interopRequireDefault(_GLTFModelComponent);

var _grimoirejs = __webpack_require__(21);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _MaterialFactory = __webpack_require__(13);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _UniformResolverRegistry = __webpack_require__(37);

var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

var _gltfPbrMetallicRoughness = __webpack_require__(38);

var _gltfPbrMetallicRoughness2 = _interopRequireDefault(_gltfPbrMetallicRoughness);

var _ImportResolver = __webpack_require__(39);

var _ImportResolver2 = _interopRequireDefault(_ImportResolver);

var _GLExtRequestor = __webpack_require__(40);

var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);

var _GLTFVertexMorpher = __webpack_require__(20);

var _GLTFVertexMorpher2 = _interopRequireDefault(_GLTFVertexMorpher);

var _gltfVertex = __webpack_require__(41);

var _gltfVertex2 = _interopRequireDefault(_gltfVertex);

var _gltfVarying = __webpack_require__(42);

var _gltfVarying2 = _interopRequireDefault(_gltfVarying);

var _gltfVaryingVertex = __webpack_require__(43);

var _gltfVaryingVertex2 = _interopRequireDefault(_gltfVaryingVertex);

var _gltfFragment = __webpack_require__(44);

var _gltfFragment2 = _interopRequireDefault(_gltfFragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

exports.default = function () {
    _GLExtRequestor2.default.request("OES_standard_derivatives");
    _GLExtRequestor2.default.request("OES_element_index_uint");
    _grimoirejs2.default.register(function () {
        return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _ImportResolver2.default.staticImports["gltf-vertex"] = _gltfVertex2.default;
                            _ImportResolver2.default.staticImports["gltf-varying"] = _gltfVarying2.default;
                            _ImportResolver2.default.staticImports["gltf-varying-vertex"] = _gltfVaryingVertex2.default;
                            _ImportResolver2.default.staticImports["gltf-fragment"] = _gltfFragment2.default;
                            _grimoirejs2.default.registerComponent("GLTFModel", _GLTFModelComponent2.default);
                            _grimoirejs2.default.registerComponent("GLTFJoint", _GLTFJointComponent2.default);
                            _grimoirejs2.default.registerComponent("GLTFVertexMorpher", _GLTFVertexMorpher2.default);
                            _grimoirejs2.default.registerNode("model", ["GLTFModel"], {}, "object");
                            _MaterialFactory2.default.addSORTMaterial("gltf-pbr-metallic-roughness", _gltfPbrMetallicRoughness2.default);
                            _UniformResolverRegistry2.default.add("JOINTMATRIX", function (valInfo, material) {
                                return function (proxy, info) {
                                    if (info.renderable.renderArgs["gltf-jointMatrices"]) {
                                        proxy.uniformMatrixArray(valInfo.name, info.renderable.renderArgs["gltf-jointMatrices"]);
                                    }
                                };
                            });

                        case 10:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Material.UniformResolverRegistry:undefined;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "@Pass{\n@DynamicState(dynamic-cull)\n#extension GL_OES_standard_derivatives : enable\n@BlendFunc(SRC_ALPHA,ONE_MINUS_SRC_ALPHA)\nFS_PREC(mediump,float)\n\n@import \"gltf-varying-vertex\"\n\n@import \"gltf-fragment\"\n}"

/***/ }),
/* 39 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Sort.ImportResolver:undefined;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Resource.GLExtRequestor:undefined;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "@ExposeMacro(int,jointCount,JOINT_COUNT,0)\n#ifdef VS\n#if JOINT_COUNT > 0\n  @JOINTMATRIX\n  uniform mat4 boneMatrices[JOINT_COUNT];\n#endif\n  @NORMAL\n  attribute vec3 normal;\n  @POSITION\n  attribute vec3 position;\n#ifdef ATTRIBUTE_TEXCOORD_0_ENABLED\n  @TEXCOORD_0\n  attribute vec2 texCoord;\n#endif\n#ifdef ATTRIBUTE_TANGENT_ENABLED\n  @TANGENT\n  attribute vec3 tangent;\n#endif\n#if JOINT_COUNT > 0\n  @JOINTS_0\n  attribute vec4 joint;\n  @WEIGHTS_0\n  attribute vec4 weight;\n#endif\n\n#ifdef ATTRIBUTE_COLOR_0_ENABLED\n  @COLOR_0\n  attribute vec3 vertColor;\n#endif\n  uniform mat4 _matPVM;\n  uniform mat4 _matM;\n  @MODELINVERSETRANSPOSE\n  uniform mat4 normalMatrix;\n\n  @CAMERA_POSITION\n  uniform vec3 _cameraPositionVert;\n  void main(){\n    mat4 transform = _matM;\n    mat4 projectionTransform = _matPVM;\n    mat4 normalTransform = _matM;\n    #if JOINT_COUNT > 0\n      mat4 skinMat = weight.x * boneMatrices[int(joint.x)] + weight.y * boneMatrices[int(joint.y)] + weight.z * boneMatrices[int(joint.z)] + weight.w * boneMatrices[int(joint.w)];\n      transform *= skinMat;\n      normalTransform *= skinMat;\n      projectionTransform *= skinMat;\n    #endif\n    #ifdef ATTRIBUTE_TEXCOORD_0_ENABLED\n        vUV = texCoord;\n    #else\n        vUV  = position.xy /2.0 + vec2(0.5);\n    #endif\n    vNormal = normalize(mat3(normalTransform) * normal);\n    vPosition = (transform * vec4(position,1.0)).xyz;\n    #ifdef ATTRIBUTE_TANGENT_ENABLED\n    vTangent = normalize(mat3(normalTransform) * tangent);\n    #endif\n    gl_Position = projectionTransform * vec4(position,1.0);\n    #ifdef ATTRIBUTE_COLOR_0_ENABLED\n    vVertexColor = vertColor;\n    #endif\n  }\n#endif\n"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "varying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vUV;\n#ifdef ATTRIBUTE_TANGENT_ENABLED\nvarying vec3 vTangent;\n#endif\n#ifdef ATTRIBUTE_COLOR_0_ENABLED\nvarying vec3 vVertexColor;\n#endif"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "@import \"gltf-varying\"\n@import \"gltf-vertex\""

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "#ifdef FS\n  @{flag:\"USE_NORMAL_TEXTURE\"}\n  uniform sampler2D normalTexture;\n\n  @{default:\"white\",type:\"color\"}\n  uniform vec4 baseColorFactor;\n\n  @{flag:\"USE_BASECOLOR_TEXTURE\"}\n  uniform sampler2D baseColorTexture;\n\n  @{default:\"1\"}\n  uniform float metallicFactor;\n\n  @{flag:\"USE_METALLIC_TEXTURE\"}\n  uniform sampler2D metallicTexture;\n\n  @{default:\"1\"}\n  uniform float roughnessFactor;\n\n  @{flag:\"USE_ROUGHNESS_TEXTURE\"}\n  uniform sampler2D roughnessTexture;\n\n  @{default:\"black\",type:\"color\"}\n  uniform vec3 emissiveFactor;\n\n  @{flag:\"USE_EMISSIVE_TEXTURE\"}\n  uniform sampler2D emissiveTexture;\n\n  @{flag:\"USE_METALLIC_ROUGHNESS_TEXTURE\"}\n  uniform sampler2D metallicRoughnessTexture;\n\n  @{flag:\"USE_OCCLUSION_TEXTURE\"}\n  uniform sampler2D occlusionTexture;\n\n  @CAMERA_POSITION\n  uniform vec3 _cameraPosition;\n\n  @import \"forward-shading\"\n\n  #ifndef POST_SHADING_SURFACE_FUNCTION\n    #define POST_SHADING_SURFACE_FUNCTION postShadingSurfaceFunction\n\n    vec4 postShadingSurfaceFunction(vec4 result,vec4 baseColor,vec3 normal,vec3 position){\n        return result;\n    }\n  #endif\n\n    #ifndef PRE_SHADING_SURFACE_FUNCTION\n    #define PRE_SHADING_SURFACE_FUNCTION preShadingSurfaceFunction\n\n    vec4 preShadingSurfaceFunction(vec4 baseColor,vec3 normal,vec3 position){\n        return baseColor;\n    }\n  #endif\n\n  void main(){\n    vec4 baseColor = baseColorFactor;\n    float occlusion = 1.0;\n    #ifdef USE_BASECOLOR_TEXTURE\n      baseColor *= texture2D(baseColorTexture,vUV);\n    #endif\n    #ifdef ATTRIBUTE_COLOR_0_ENABLED\n      baseColor.rgb *= vVertexColor;\n    #endif\n    vec3 emissive = emissiveFactor;\n    #ifdef USE_EMISSIVE_TEXTURE\n      emissive *= texture2D(emissiveTexture,vUV).rgb;\n    #endif\n    float metallic = metallicFactor;\n    #ifdef USE_METALLIC_TEXTURE\n      metallic *= texture2D(metallicTexture,vUV).r;\n    #endif\n    float roughness = roughnessFactor;\n    #ifdef USE_ROUGHNESS_TEXTURE\n      roughness *= texture2D(roughnessTexture,vUV).r;\n    #endif\n    #ifdef USE_METALLIC_ROUGHNESS_TEXTURE\n      vec3 rm = texture2D(metallicRoughnessTexture,vUV).rgb;\n      metallic *= rm.b;\n      roughness *= rm.g;\n    #endif\n    vec3 normal = normalize(vNormal);\n    #ifdef USE_NORMAL_TEXTURE\n      #ifndef ATTRIBUTE_TANGENT_ENABLED\n      vec3 pos_dx = dFdx(vPosition);\n      vec3 pos_dy = dFdy(vPosition);\n      vec3 tex_dx = dFdx(vec3(vUV, 0.0));\n      vec3 tex_dy = dFdy(vec3(vUV, 0.0));\n      vec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);\n      t = normalize(t - vNormal * dot(vNormal, t));\n      #endif\n      #ifdef ATTRIBUTE_TANGENT_ENABLED\n      vec3 t = vTangent;\n      #endif\n      vec3 b = normalize(cross(vNormal, t));\n      mat3 tbn = mat3(t, b, vNormal);\n      vec3 n = texture2D(normalTexture, vUV).rgb;\n      normal = normalize(tbn * (2.0 * n - 1.0));\n    #endif\n    #ifdef CONTEXT_STATE_CULL\n    #if (CONTEXT_STATE_CULL == 0)\n    normal *= (float(gl_FrontFacing) - 0.5) * 2.0;\n    #endif\n    #endif\n    baseColor = PRE_SHADING_SURFACE_FUNCTION(baseColor,normal,vPosition);\n    vec3 dielectricSpecular = vec3(0.04);\n    vec3 diffuse = mix(baseColor.rgb * (1. - dielectricSpecular.r),vec3(0),metallic);\n    vec3 f0 = mix(dielectricSpecular,baseColor.rgb,metallic);\n    float alpha = roughness * roughness;\n    pbr_params param = pbr_params(diffuse,f0,alpha,roughness);\n    vec3 shadeResult = shading(param,normal,vPosition);\n    shadeResult += emissive;\n    #ifdef USE_OCCLUSION_TEXTURE\n      occlusion = texture2D(occlusionTexture,vUV).r;\n    #endif\n    shadeResult *= occlusion;\n    gl_FragColor = POST_SHADING_SURFACE_FUNCTION(vec4(shadeResult,baseColor.a),baseColor,normal,vPosition);\n  }\n#endif"

/***/ })
/******/ ]);
});
//# sourceMappingURL=grimoire-gltf.js.map