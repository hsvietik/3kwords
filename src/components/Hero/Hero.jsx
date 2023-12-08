// import heroPicture from "../../assets/words-have-power.jpg";
import { carouselData } from "../../data/carousel";
import { Slide } from "./Hero.styled";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Hero = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
    >
      {carouselData.map(({ src, alt }, idx) => {
        return <Slide src={src} alt={alt} key={idx} />;
      })}
    </Carousel>
  );
};
