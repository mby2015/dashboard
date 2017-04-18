import Component from '../common/Component';
import Memo from './Memo';
import memoUtils from './utils';
import eventUtils from '../event/utils';

/**
 * 메모 컨테이너영역 -> 추후 드래그앤 드롭, 최소화 추가
 */
class MemoContainer extends Component {

	/**
	 * 메모그리기
	 */
	render() {
		const data = memoUtils.getMemos();
		Object.keys(data).forEach((key) => {
			const content = data[key];
			const id = key;
			const child =this.buildMemo({id, value: content});
			this.appendComponent(child);
		});
	}

	/**
	 * 메모 추가
	 */
	add() {
		const id = (new Date()).getTime();
		const child = this.buildMemo({id});
		this.prependComponent(child);
		memoUtils.addMemo({
			id
		});
	}

	/**
	 * 메모제거
	 */
	remove() {
		let child;
		if (this.overId && this.children.length > 1) {
			child = this.children.filter(item => item.mid === this.overId)[0];
			if (confirm(`are you sure remove memo "${child.value}"`)) {
				memoUtils.removeMemo({id: this.overId});
				this.overId = '';
				this.removeComponent(child);
			}
		}
	}

	/**
	 * 최초 삭제버튼 변수 할당 및 감춤
	 * @param button
	 */
	fixDeleteButton(button) {
		this.delete = button;
		if (!this.overId) {
			this.hideDeleteButton();
		}
	}

	/**
	 * 삭제버튼 감추기
	 */
	hideDeleteButton() {
		this.delete.style.display = 'none';
	}

	/**
	 * 삭제버튼 위치 조정
	 * @param target {HTMLElement} 선택한 Memo 엘리먼트
	 */
	setPosDeleteButton(target) {
		const { top, height } = target.getBoundingClientRect();
		const gap = 20;
		this.delete.style.display = '';
		this.delete.style.left = '200px';
		this.delete.style.top = (top + height + gap - target.parentNode.getBoundingClientRect().top) + 'px';
	}

	/**
	 * 메모를 만듬
	 * @param id {string} 메모아이디
	 * @param value {string} 메모내용
	 * @returns {Memo}
	 */
	buildMemo({ id, value = '' }) {
		let child = new Memo({id, value});
		child.render();
		eventUtils.addEvent(child.element, 'focus', (e) => {
			this.overId = id;
			this.setPosDeleteButton(e.target);
		});
		eventUtils.addEvent(child.element, 'blur', (e) => {
			if (e.relatedTarget && e.relatedTarget === this.delete) {
				this.remove();
			} else {
				this.overId = '';
			}
			this.hideDeleteButton();
		});
		return child;
	}

}

export default MemoContainer;