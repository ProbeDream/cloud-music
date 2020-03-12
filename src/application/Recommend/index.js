import React from 'react';
import Slider from '../../components/Slider/';

const imageUrl = `http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg`;
const bannerList = [1, 2, 3, 4].map(item => {
  return {
    imageUrl: imageUrl
  };
});
const Recommend = () => (
  <div>
    <Slider bannerList={bannerList}></Slider>
    Hello World!
  </div>
);

export default React.memo(Recommend);
