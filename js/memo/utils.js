function getMemos() {
	let memo = localStorage.getItem('memos');
	if (memo) {
		return JSON.parse(memo);
	}
	return {};
}

function saveMemo({ newMemo, id }) {
	let memo = getMemos();
	memo[id] = newMemo;
	localStorage.setItem('memos', JSON.stringify(memo));
}

function addMemo({id}) {
	saveMemo({
		id,
		newMemo:''
	});
}

function removeMemo({ id }) {
	let memo = getMemos();
	delete memo[id]
	localStorage.setItem('memos', JSON.stringify(memo));
}

export default {
	getMemos,
	saveMemo,
	addMemo,
	removeMemo
}