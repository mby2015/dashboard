import Node from '../common/Node';
import Component from '../common/Component';
import eventUtils from '../event/utils';

class Menu extends Component {
	
	render() {
		const {
			data = [],
			element
		} = this;

		data.forEach(({ label, location }) => {
			var li = new Node({ tag: 'li', dataset: {
				label,
				location
			}});
			li.html(label);
			eventUtils.on(li.element, 'click', (e) => {
				this.moveTo(location)
			});
			element.appendElement(li);
		});
	}

	moveTo(location) {
		console.log(location);
	}
}

export default Menu;