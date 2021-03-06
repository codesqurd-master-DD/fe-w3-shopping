import DD from "./core/DD.js";
import Header from "./components/Header.js";
import SearchBar from "./components/SearchBar.js";
import Menu from "./components/Menu.js";
import Carousel from "./components/Carousel.js";
export default class App extends DD {
  getTemplate() {
    return /*html*/ `
        <header id="header"></header>
        <main></main>
        <div id ="carouselBox"><div>
      `;
  }
  mount() {
    const branch = this.branch.bind(this);
    const carouselBox = this.$target.querySelector("#carouselBox");
    const carouselInheritance = {
      carousel: {
        $target: carouselBox,
        props: {},
        name: "carousel",
      },
    };
    this.setInheritances(carouselInheritance);

    return branch({
      componentName: "carousel",
      Constructor: Carousel,
      props: {},
    });
  }
  didmount() {}
}
