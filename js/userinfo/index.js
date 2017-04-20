import Component from '../common/Component';
import eventUtils from '../event/utils'

class UserInfo extends Component {
	constructor(object) {
		super(object);
		this.isHide = true;
	}

	render() {
		const {
			data: {
				nick,
				email
			}
		} = this;

		this.element.html(`${nick}(${email}) <span class="toggle ${getClass(this.isHide)}"></span>`);
	}

	setEvents() {
		let toggleElement = this.element.getElementsByClassName('toggle')[0];
		eventUtils.on(toggleElement, 'click', this.toggle.bind(this));
		this.toggleElement = toggleElement;
	}

	toggle() {
		let toggleElement = this.toggleElement;
		this.isHide = !this.isHide;
		toggleElement.className = `toggle ${getClass(this.isHide)}`;
		this.toggleChildLayer();
	}

	toggleChildLayer() {
		const {
			children = []
		} = this;
		children.forEach(child => child.toggle());
	}
	
}

function getClass(isHide) {
	return isHide ? 'down' : 'up'
}

export default UserInfo;