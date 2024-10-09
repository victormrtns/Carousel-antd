import React, { useState } from 'react';
import * as S from './CarouselComponent.styles';
import LeftIcon from './LeftIcon';
import RightIcon from './RightIcon';

interface CarouselComponentProps {
  slides: {
    title: string;
    description: string;
    image: string;
    buttons: string[];
  }[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <S.Container>
      <S.NavButton className="prev" onClick={prevSlide}>
        <LeftIcon/>
      </S.NavButton>

      <S.Slide>
        <S.ImageWrapper>
          <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        </S.ImageWrapper>
        <S.ContentWrapper>
          <S.Title>{slides[currentSlide].title}</S.Title>
          <S.Description>{slides[currentSlide].description}</S.Description>
          {slides[currentSlide].buttons.map((buttonText, i) => (
            <S.Button key={i}>{buttonText}</S.Button>
          ))}
        </S.ContentWrapper>
      </S.Slide>

      <S.NavButton className="next" onClick={nextSlide}>
        <RightIcon />
      </S.NavButton>

      {/* Indicadores de Dots */}
      <S.DotsContainer>
        {slides.map((_, index) => (
          <S.Dot
            key={index}
            isActive={index === currentSlide}
            onClick={() => goToSlide(index)}
          />
        ))}
      </S.DotsContainer>
    </S.Container>
  );
};

export default CarouselComponent;
