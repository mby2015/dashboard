import Component from '../common/Component';

class UserInfoLayer extends Component {

	render() {
		const {
			data: {
				name,
				hotline,
				email
			}
		} = this;

		this.element.html(
			`<ul>
				<li><span class="label">Name</span> <span class="text">${name}</span></li>
				<li><span class="label">E-mail</span> <span class="text">${email}</span></li>
				<li><span class="label">HotLine</span> <span class="text">${hotline}</span></li>
			</ul>`
		);
		this.toggle();
	}

	toggle() {
		this.element.style({ display: this.element.style('display') ? '' : 'none' });
	}

}

export default UserInfoLayer;