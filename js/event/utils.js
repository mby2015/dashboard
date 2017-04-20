import initConfig from '../config/init'
import Node from '../common/Node'

let eventStore = {
	click: []
};

let appendEventStore = {};

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
		callback(initConfig);
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

function addEvent(node, type, callback) {
	if (!node || !type || !callback) {
		return;
	}
	if (!appendEventStore[type]) {
		appendEventStore[type] = [];
	}
	let element = node instanceof Node ? node.element : node;
	appendEventStore[type].push(callback);
	element.addEventListener(type, callback);
}

function addEvents(node, eventMap) {
	if (!node || !eventMap) {
		return;
	}
	let element = node instanceof Node ? node.element : node;
	Object.keys(eventMap).forEach(type => {
		addEvent(element, type, eventMap[type]);
	});
}

function removeEvent(node, type, callback) {
	if (!node || !type || !callback) {
		return;
	}
	let element = node instanceof Node ? node.element : node;
	element.removeEventListener(type, callback);
}

function reset(node) {
	if (!node) {
		return;
	}
	let element = node instanceof Node ? node.element : node;
	Object.keys(appendEventStore).forEach(key => {
		let callbacks = appendEventStore[key];
		callbacks.forEach(callback => {
			element.removeEventListener(key, callback);
		});

	});
}

export default {
	on,
	off,
	start,
	addEvent,
	addEvents,
	removeEvent,
	reset
}