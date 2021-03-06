import Component from "../core/Component.js";
export default class SearchBar extends Component {
  getTemplate() {
    return `
    <div class="searchBar">
        <input class="searchBox" type="text"></input>
    </div>
    `;
  }
  setEvents() {
    const { changeTitle } = this.state;
    this.addEvent("keyup", ".searchBox", ({ key, target }) => {
      if (key !== "Enter") return;
      changeTitle(target.value);
    });
  }
}
