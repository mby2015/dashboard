import eventUtils from './event/utils';
import Menu from './menu/index';
import UserInfo from './userinfo/index';
import InfoLayer from './userinfo/layer';
import '../scss/index.scss';

eventUtils.start((config) => {
	let gnb = document.getElementById('gnb');
	let id = eventUtils.on(gnb, 'click', e => {
		eventUtils.off(gnb, 'click', id);
	});

	setMenu(config);
	setUserInfo(config);
});

function setMenu(config) {
	let menu = new Menu({
		data: config.menu,
		element: document.getElementById('menu')
	});
	menu.render();
}

function setUserInfo(config) {
	let userInfo = new UserInfo({
		data: config.userInfo,
		element: document.getElementById('user')
	});
	userInfo.render();
	userInfo.append(getUserInfoLayer(config));
	userInfo.setEvents();
}

function getUserInfoLayer(config) {
	let layer = new InfoLayer({
		data: config.userInfo,
		element: document.getElementById('info-layer')
	});
	layer.render();
	return layer;
}