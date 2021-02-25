import Component from "../core/Component.js";
export default class Header extends Component {
  setup() {
    this.state = { header: "Header" };
    this.inheritances = {}
  }
  getTemplate() {
    return `
    <div class="header">
        <h1>${this.state.header}</h1>
        <div class="searchBar"></div>
        <div class="menu"></div>
    </div>
        `;
  }
  getInheritances() {
    const $searchBar = this.$target.querySelector(".searchBar");
    const $menu = this.$target.querySelector(".menu");
    return [
      {
        target: $searchBar,
        props: { changeHeader: this.changeHeader.bind(this) },
      },
      { target: $menu, props: {} },
    ];
  }
  changeHeader(newHeader) {
    this.setState({ header: newHeader });
  }
}