class Element {
	
	constructor({ tag, dataset, props }) {
		this.element = document.createElement(tag);
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

	addEvent(event, callback) {
		this.element.addEventListener(event, callback);
	}
}

export default Element;