import Component from "../core/Component.js";
export default class Header extends Component {
  setup() {
    this.state = { title: "Header" };
  }
  getTemplate() {
    return /*html*/ `
    <div class="header">
        <h1>${this.state.title}</h1>
        <div class="searchBar"></div>
        <div class="menu"></div>
    </div>
        `;
  }
  getInheritances() {
    const $searchBar = this.$target.querySelector(".searchBar");
    const $menu = this.$target.querySelector(".menu");
    return {
      searchBar: {
        $target: $searchBar,
        props: {
          changeTitle: this.changeTitle.bind(this),
          test2: "change Props",
        },
        name: "searchBar",
      },
      menu: { $target: $menu, props: {}, name: "menu" },
    };
  }
  changeTitle(newTitle) {
    this.setState({ title: newTitle });
  }
  static changeHeader;
}
