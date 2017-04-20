import eventUtils from '../event/utils';
import Node from './Node';
import eventEmitter from '../event/emitter';

let componentCreatedCount = 0;

class Component {
	constructor({ data, element, id }) {

		/**
		 * @type {string} id component id
		 */
		this.id = id || (new Date().getTime()) + (++componentCreatedCount);

		/**
		 * @type {Object} data Component data
		 */
		this.data = data;

		/**
		 * @type {Element} element Element instance for component
		 */
		if (element instanceof Node) {
			this.element = element;
		} else {
			if (element) {
				this.element = new Node({element, dataset: data});
			} else {
				this.element = null;
			}
		}

		/**
		 * @type {Array} children component array
		 */
		this.children = [];
	}

	init() {
		this.render();
		this.setEvents();
	}

	render() {

	}

	setEvents() {

	}

	appendComponent(component) {
		this.element.appendElement(component.element);
		this.children.push(component);
	}
	prependComponent(component) {
		if (!this.children.length) {
			return this.appendComponent(component);
		}
		let first = this.children[0].element;
		this.element.unshiftElement(component.element, first);
		this.children.unshift(component);
	}
	removeComponent(component) {
		component.destroy();
		this.element.removeElement(component.element);
		this.children.splice(this.children.indexOf(component), 1);
	}
	notify() {
		this.children.forEach(child => child.notify());
	}
	update({data, element}) {

	}
	destroy() {
		eventUtils.reset(this.element);
	}

	/**
	 * todo mixin 방식으로 변경
	 * @param type
	 */
	on(type, callback) {
		eventEmitter.on(type, callback);
	}

	off(type, callback) {
		eventEmitter.off(type, callback);
	}

	emit(type, params) {
		eventEmitter.emit(type, params);
	}
}

export default Component;