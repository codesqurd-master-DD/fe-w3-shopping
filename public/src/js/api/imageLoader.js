const request = (url, option = {}) => {
  return fetch(url)
    .then((res) => {
      if (!res.ok) return new Error(res.status);
      return res.json().then((data) => data);
    })
    .catch((err) => console.error(err));
};

export const getCarouselImages = () => {
  return request("/server_img/carousel");
};

export const getHotItemImage = (itemId) => {
  return request(`/server_img/carousel/${itemId}`);
};
