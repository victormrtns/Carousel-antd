import React, { useState } from 'react';
import * as S from './ButtonList.styles';

interface ButtonListProps {
  buttons: string[];
}

interface ButtonListProps {
  buttons: string[];
}

const ButtonList: React.FC<ButtonListProps> = ({ buttons }) => {
  const [showMore, setShowMore] = useState(false);
  const visibleButtons = 8;

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.ButtonContainer>
          {buttons.slice(0, visibleButtons).map((buttonText, index) => (
            <S.Button key={index}>{buttonText}</S.Button>
          ))}

          {showMore && (
            buttons.slice(visibleButtons).map((buttonText, index) => (
              <S.Button key={visibleButtons + index}>{buttonText}</S.Button>
            ))
          )}

          {buttons.length > visibleButtons && (
            <S.ShowMoreButton onClick={handleShowMore}>
              {showMore ? 'Mostrar menos' : '...'}
            </S.ShowMoreButton>
          )}
        </S.ButtonContainer>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default ButtonList;

