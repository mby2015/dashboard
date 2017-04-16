import Component from '../common/Component';
import Memo from './Memo';
import memoUtils from './utils';
import eventUtils from '../event/utils';

class MemoContainer extends Component {

	render() {
		const data = memoUtils.getMemos();
		Object.keys(data).forEach((key) => {
			const content = data[key];
			const id = key;
			this.buildMemo({id, value: content});
			this.buildRemoveButton({id});
		});
	}

	add() {
		const id = (new Date()).getTime();
		this.buildMemo({id});
		memoUtils.addMemo({
			id
		});
	}

	remove() {
		let child;
		if (this.overId && this.children.length > 1) {
			child = this.children.filter(item => item.mid === this.overId)[0];
			if (confirm(`are you sure remove memo "${child.value}"`)) {
				memoUtils.removeMemo({id: this.overId});
				this.deppend(child);
			}
		}
	}

	fixDeleteButton(button) {
		this.delete = button;
		if (!this.overId) {
			this.delete.style.display = 'none';
		}
	}

	setPosDeleteButton(target) {
		const { top, height } = target.getBoundingClientRect();
		const gap = 20;
		this.delete.style.display = '';
		this.delete.style.left = '200px';
		this.delete.style.top = (top + height + gap - target.parentNode.getBoundingClientRect().top) + 'px';
	}

	buildMemo({ id, value = '' }) {
		let child = new Memo({id, value});
		child.render();
		eventUtils.on(child.element, 'click', (e) => {
			this.overId = id;
			this.setPosDeleteButton(e.target);
		});
		this.append(child);
	}

	buildRemoveButton({id}) {

	}
}

export default MemoContainer;