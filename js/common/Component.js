import eventUtils from '../event/utils'

class Component {
	constructor({ data, element }) {
		this.data = data;
		this.element = element;
		this.children = [];
	}
	appendComponent(component) {
		this.element.appendChild(component.element);
		this.children.push(component);
	}
	prependComponent(component) {
		this.element.insertBefore(component.element, this.children[0].element);
		this.children.unshift(component);
	}
	removeComponent(component) {
		component.destroy();
		this.element.removeChild(component.element);
		this.children.splice(this.children.indexOf(component), 1);
	}
	destroy() {
		eventUtils.reset(this.element);
	}
}

export default Component;