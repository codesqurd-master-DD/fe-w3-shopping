import Component from "../core/Component.js";
import { getCarouselImages } from "../api/imageLoader.js";
export default class Carousel extends Component {
  async setup() {
    this.state = {
      images: await getCarouselImages(),
    };
    this.$componentBox.classList.add("carousel");
  }
  getTemplate() {
    const { images } = this.state;
    console.log(images);
    return /*html */ `
        ${images.map((image) => `<div><img src=${image}></div>`)}
        `;
  }
  setEvents() {}
}
