let eventMap = {};

function on(type, callback) {
	eventMap[type] = (eventMap[type] || []);
	eventMap[type].push(callback);
}

function off(type, callback) {
	eventMap[type] = eventMap[type] || [];
	if (!callback) {
		delete eventMap[type];
	} else {
		eventMap[type] = eventMap[type].filter(cb => cb !== callback);
	}
}

function emit(type, params = {}) {
	eventMap[type] = eventMap[type] || [];
	eventMap[type].forEach(callback => {
		callback(params);
	});
}

export default {
	on,
	off,
	emit
}