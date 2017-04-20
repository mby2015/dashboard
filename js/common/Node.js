class Node {
	
	constructor({ tag, element, dataset = {}, props = {} }) {
		if (element) {
			this.element = element;
		} else {
			this.element = document.createElement(tag);
		}
		this.dataset = dataset;
		this.props = props;
	}

	setData(dataset) {
		const old = this.dataSet || {};
		this.dataset = Object.assign({}, old, dataset);
		this.element.dataset = this.dataset;
	}

	setProps(props) {
		for (let attr in props) {
			// this.element.setAttribute(attr, props[attr]);
			this.element[attr] = props[attr];
		}

	}

	style(cssObject) {
		if (typeof cssObject !== 'object') {
			return this.element.style[cssObject];
		} else {
			Object.keys(cssObject).forEach(css => {
				this.element.style[css] = cssObject[css];
			})
		}
	}

	html(html) {
		this.element.innerHTML = html;
	}

	getElementsByClassName(className) {
		return this.element.getElementsByClassName(className);
	}

	getBounding() {
		return this.element.getBoundingClientRect();
	}

	appendElement(node) {
		this.element.appendChild(node.element);
	}

	unshiftElement(node, first) {
		this.element.insertBefore(node.element, first.element);
	}
	
	removeElement(node) {
		this.element.removeChild(node.element);
	}
	
	addEvent(event, callback) {
		this.element.addEventListener(event, callback);
	}
}

export default Node;