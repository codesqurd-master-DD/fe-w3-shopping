# fe-w3-shopping

## 구현할 기능 목록

### imageLoader.js

- getCarouselImages() 요청이 들어오면 서버내에 미리 설정해둔 캐로셀 이미지 3개의 링크를 배열 형태로 반환

- getHotItemImages() 요청이 들어오면 핫아이템에서 다음 5개의 이미지 링크를 배열 형태로 반환

### Carousel.js

- 첫 생성시 getCarouselImages를 통해 3개의 이미지 링크를 받는다.
- 전달 받은 이미지 링크를 통해 3개의 image DOM을 만든다.
- overflow hidden box에서 두 번째 요소만 보이도록 값을 설정해둔다
- 우측 화살표 클릭시 첫 번째 요소의 width를 0으로 줄이는 class를 추가한다 (animation 적용) 애니메이션 종료시 첫 번째 요소를 꺼내서 해당 class를 삭제하고 우측에 집어 넣는다.
- 반대의 경우도 마찬가지. 이렇게 하면 transform을 쓰지 않고 될듯  