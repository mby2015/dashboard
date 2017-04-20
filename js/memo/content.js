import Component from '../common/Component';
import Node from '../common/Node'
import memoUtils from './utils'

class Content extends Component {

	init({ value }) {
		let id = this.id;
		this.render({id, value});
		this.element.setProps({
			value,
			id,
			className: 'textarea'
		});
		this.setEvents();
	}

	render({ id, value }) {
		this.element = new Node({
			tag: 'textarea',
			dataset: {
				value,
				id: id + '_content'
			}
		});
	}

	setEvents() {
		let id = this.id;
		this.element.addEvent('keyup', e => {
			this.value = e.target.value;
			memoUtils.saveMemo({
				id,
				newMemo: e.target.value
			})
		});
		this.element.addEvent('focus', e => {
			console.log(id);
			this.emit('focus', { bound: this.element.getBounding(), id });
		});
		this.element.addEvent('blur', e => {
			this.emit('blur', { target: e.relatedTarget });
		});
	}
}

export default Content;