class Component {
	constructor({ data, element }) {
		this.data = data;
		this.element = element;
		this.children = [];
	}
	append(component) {
		this.element.appendChild(component.element);
		this.children.push(component);
	}
	deppend(component) {
		this.element.removeChild(component.element);
		this.children.splice(this.children.indexOf(component), 1);
	}
}

export default Component;