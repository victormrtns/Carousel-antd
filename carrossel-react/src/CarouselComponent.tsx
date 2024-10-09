import React, { useRef } from 'react';
import { Carousel } from 'antd';
import * as S from './CarouselComponent.styles';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import ButtonList from './ButtonList';

interface CarouselComponentProps {
  slides: {
    title: string;
    description: string;
    image: string;
    buttons: string[];
  }[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ slides }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const carouselRef = useRef<any>(null);

  const prevSlide = () => {
    carouselRef.current.prev();
  };

  const nextSlide = () => {
    carouselRef.current.next();
  };

  return (
    <S.Container>
      <S.NavButton className="prev" onClick={prevSlide}>
        <LeftOutlined />
      </S.NavButton>
      <Carousel ref={carouselRef} dots={{ className: 'custom-dots' }} adaptiveHeight>
        {slides.map((slide, index) => (
          <S.Slide key={index}>
            <S.ImageWrapper>
              <img src={slide.image} alt={slide.title} />
            </S.ImageWrapper>
            <S.ContentWrapper>
              <S.Title>{slide.title}</S.Title>
              <S.Description>{slide.description}</S.Description>
              {slide.buttons.map((buttonText, i) => (
                <S.Button key={i}>{buttonText}</S.Button>
              ))}
            </S.ContentWrapper>
          </S.Slide>
        ))}
      </Carousel>
      <S.NavButton className="next" onClick={nextSlide}>
        <RightOutlined />
      </S.NavButton>
    </S.Container>
  );
};

export default CarouselComponent;
