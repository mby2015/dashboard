import Component from '../common/Component';

class Content extends Component {
	render() {
		this.element.innerHTML = 'content ready';
	}
}

export default Content;