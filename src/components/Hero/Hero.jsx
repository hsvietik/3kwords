import { carouselData } from "../../data/carousel";
import { Slide } from "./Hero.styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Hero = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      width={800}
    >
      {carouselData.map(({ src, alt }, idx) => {
        return <Slide src={src} alt={alt} key={idx} />;
      })}
    </Carousel>
  );
};
