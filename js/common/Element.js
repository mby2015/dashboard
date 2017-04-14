class Element {
	
	constructor({ tag, dataset }) {
		this.element = document.createElement(tag);
		this.dataset = dataset;
	}

	setData(dataset) {
		const old = this.dataSet || {};
		this.dataset = Object.assign({}, old, dataset);
		this.element.dataset = this.dataset;
	}

}

export default Element;