import Node from '../common/Node'
import Component from '../common/Component'
import Content from './content'

class Memo extends Component {
	constructor({ value, id }) {
		super({value, id});
		this.value = value;
		this.mid = id;
	}
	
	render() {
		let value = this.value;
		let id = this.mid;
		this.element = new Node({
			tag: 'div',
			dataset: {
				value,
				id
			}
		});
		let content = new Content({
			id
		});
		content.init({
			value,
			className: 'textarea'
		});
		this.appendComponent(content);
	}
	
}

export default Memo;