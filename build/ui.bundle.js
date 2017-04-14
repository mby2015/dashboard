/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_init__ = __webpack_require__(4);


let eventStore = {
	click: []
};

function pick(store, target) {
	let number = -1;
	store.forEach((s, index) => {
		if (s.e_id === target || s.element === target) {
			number = index;
		}
	});
	return number;
}

function on(element, eventType, callback) {
	if (element && eventType && callback) {
		let store = eventStore[eventType];
		let e_id = [(new Date().getTime()), store.length].join('_');
		if (!store) {
			new Error('not supported roots event');
		} else {
			store.push({
				target: element,
				callback,
				e_id
			});
		}
		return e_id;
	}
}

function off(element, eventType, e_id) {
	if (element && eventType) {
		let store = eventStore[eventType];
		if (!store) {
			new Error('not supported roots event');
		} else {
			let pickNumber = pick(store, e_id || element);
			if (pickNumber !== -1) {
				store.splice(pickNumber, 1);
			}
		}
	}
}

function start(callback) {
	window.addEventListener('load', () => {
		callback(__WEBPACK_IMPORTED_MODULE_0__config_init__["a" /* default */]);
	});
	for ( let k in eventStore ) {
		document.addEventListener(k, e => {
			let actions = eventStore[k];
			actions.forEach(action => {
				if (action.target === e.target) {
					action.callback(e);
				}
			});
		});
	}
}

/* harmony default export */ __webpack_exports__["a"] = ({
	on,
	off,
	start
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Element__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_utils__ = __webpack_require__(0);




class Menu extends __WEBPACK_IMPORTED_MODULE_1__common_Component__["a" /* default */] {
	
	render() {
		const {
			data = [],
			element
		} = this;
		
		data.forEach(({ name, location }) => {
			var li = new __WEBPACK_IMPORTED_MODULE_0__common_Element__["a" /* default */]({ tag: 'li', dataset: {
				name,
				location
			}}).element;
			li.innerHTML = name;
			__WEBPACK_IMPORTED_MODULE_2__event_utils__["a" /* default */].on(li, 'click', (e) => {
				this.moveTo(location)
			});
			element.appendChild(li);
		});
	}

	moveTo(location) {
		console.log(location);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Element {
	
	constructor({ tag, dataset }) {
		this.element = document.createElement(tag);
		this.dataset = dataset;
	}

	setData(dataset) {
		const old = this.dataSet || {};
		this.dataset = Object.assign({}, old, dataset);
		this.element.dataset = this.dataset;
	}

}

/* harmony default export */ __webpack_exports__["a"] = (Element);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	text: 'hello',
	userInfo: {
		name: '이제인',
		nick: '소라카',
		id: 'chamyo',
		hotline: '7187',
		email: 'chamyo@coupang.com'
	},
	menu: [
		{
			name: 'CheckList',
			location: '/checklist'
		},
		{
			name: 'TodoList',
			location: '/todo'
		},
		{
			name: 'BTSList',
			location: '/bts'
		},
		{
			name: 'Scrum',
			location: '/scrum'
		}
	]
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userinfo_index__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userinfo_layer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scss_index_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scss_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__scss_index_scss__);






__WEBPACK_IMPORTED_MODULE_0__event_utils__["a" /* default */].start((config) => {
	let gnb = document.getElementById('gnb');
	let id = __WEBPACK_IMPORTED_MODULE_0__event_utils__["a" /* default */].on(gnb, 'click', e => {
		__WEBPACK_IMPORTED_MODULE_0__event_utils__["a" /* default */].off(gnb, 'click', id);
	});

	setMenu(config);
	setUserInfo(config);
});

function setMenu(config) {
	let menu = new __WEBPACK_IMPORTED_MODULE_1__menu_index__["a" /* default */]({
		data: config.menu,
		element: document.getElementById('menu')
	});
	menu.render();
}

function setUserInfo(config) {
	let userInfo = new __WEBPACK_IMPORTED_MODULE_2__userinfo_index__["a" /* default */]({
		data: config.userInfo,
		element: document.getElementById('user')
	});
	userInfo.render();
	userInfo.append(getUserInfoLayer(config));
	userInfo.setEvents();
}

function getUserInfoLayer(config) {
	let layer = new __WEBPACK_IMPORTED_MODULE_3__userinfo_layer__["a" /* default */]({
		data: config.userInfo,
		element: document.getElementById('info-layer')
	});
	layer.render();
	return layer;
}

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_utils__ = __webpack_require__(0);



class UserInfo extends __WEBPACK_IMPORTED_MODULE_0__common_Component__["a" /* default */] {
	constructor(object) {
		super(object);
		this.isHide = true;
	}

	render() {
		const {
			data: {
				nick,
				email
			}
		} = this;

		this.element.innerHTML = `${nick}(${email}) <span class="toggle ${getClass(this.isHide)}"></span>`;
	}

	setEvents() {
		let toggleElement = this.element.getElementsByClassName('toggle')[0];
		__WEBPACK_IMPORTED_MODULE_1__event_utils__["a" /* default */].on(toggleElement, 'click', this.toggle.bind(this));
		this.toggleElement = toggleElement;
	}

	toggle() {
		let toggleElement = this.toggleElement;
		this.isHide = !this.isHide;
		toggleElement.className = `toggle ${getClass(this.isHide)}`;
		this.toggleChildLayer();
	}

	toggleChildLayer() {
		const {
			children = []
		} = this;
		children.forEach(child => child.toggle());
	}
	
}

function getClass(isHide) {
	return isHide ? 'down' : 'up'
}

/* harmony default export */ __webpack_exports__["a"] = (UserInfo);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Component {
	constructor({ data, element }) {
		this.data = data;
		this.element = element;
		this.children = [];
	}
	append(component) {
		this.element.appendChild(component.element);
		this.children.push(component);
	}
	deppend(component) {
		this.element.removeChild(component.element);
		this.children.splice(this.children.indexOf(component), 1);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Component);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Component__ = __webpack_require__(16);


class UserInfoLayer extends __WEBPACK_IMPORTED_MODULE_0__common_Component__["a" /* default */] {

	render() {
		const {
			data: {
				name,
				hotline,
				email
			}
		} = this;

		this.element.innerHTML =
			`<ul>
				<li><span class="label">이름</span> ${name}</li>
				<li><span class="label">이메일</span> ${email}</li>
				<li><span class="label">내선</span> ${hotline}</li>
			</ul>`;
		this.toggle();
	}

	toggle() {
		this.element.style.display = this.element.style.display ? '' : 'none';
	}

}

/* harmony default export */ __webpack_exports__["a"] = (UserInfoLayer);

/***/ })
/******/ ]);