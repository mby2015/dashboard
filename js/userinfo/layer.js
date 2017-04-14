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

		this.element.innerHTML =
			`<ul>
				<li><span class="label">이름</span> ${name}</li>
				<li><span class="label">이메일</span> ${email}</li>
				<li><span class="label">내선</span> ${hotline}</li>
			</ul>`;
		this.toggle();
	}

	toggle() {
		this.element.style.display = this.element.style.display ? '' : 'none';
	}

}

export default UserInfoLayer;