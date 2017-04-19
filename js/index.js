import eventUtils from './event/utils';
import Menu from './menu/index';
import UserInfo from './userinfo/index';
import InfoLayer from './userinfo/layer';
import Content from './content/index';
import MemoContainer from './memo/index';
import '../scss/index.scss';

eventUtils.start((config) => {
	let gnb = document.getElementById('gnb');
	let id = eventUtils.on(gnb, 'click', e => {
		eventUtils.off(gnb, 'click', id);
	});

	setUserInfo(config);
	setMenu(config);
	setMemo(config);
	setContent(config);
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
	userInfo.appendComponent(getUserInfoLayer(config));
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

function setMemo(config) {
	let memo = new MemoContainer({
		data: config.memos || {},
		element: document.getElementById('memo')
	});
	let del_button = setRemoveMemoButton(memo);
	memo.render();
	memo.fixDeleteButton(del_button);
	setAddMemoButton(memo);
}

function setAddMemoButton(memo) {
	let memo_add = document.getElementById('add-memo');
	eventUtils.on(memo_add, 'click', () => {
		memo.add();
	});
}

function setRemoveMemoButton(memo) {
	let memo_remove = document.getElementById('remove-memo');
	eventUtils.on(memo_remove, 'click', () => {
		memo.remove();
	});
	return memo_remove;
}

function setContent(config) {
	let content = new Content({
		data: config.userInfo,
		element: document.getElementById('content')
	});
	content.render();
}