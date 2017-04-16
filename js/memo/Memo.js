import Element from '../common/Element'
import memoUtils from './utils'

class Memo {
	constructor({ value, id }) {
		this.value = value;
		this.mid = id;
	}
	
	render() {
		let value = this.value;
		let id = this.mid;
		let memo = new Element({
			tag: 'textarea',
			dataset: {
				value,
				id
			}
		});
		memo.setProps({
			value,
			id,
			className: 'textarea'
		});
		memo.addEvent('keyup', e => {
			this.value = e.target.value;
			memoUtils.saveMemo({
				id,
				newMemo: e.target.value
			})
		});
		this.element = memo.element;
	}
	
}

export default Memo;