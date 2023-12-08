// import heroPicture from "../../assets/words-have-power.jpg";
import { carouselData } from "../../data/carousel";
import { Carousel, Slide } from "./Hero.styled";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

export const Hero = () => {
  return (
    <Carousel>
      {carouselData.map(({ src, alt }, idx) => {
        return <Slide src={src} alt={alt} key={idx} />;
      })}
    </Carousel>
  );
};
