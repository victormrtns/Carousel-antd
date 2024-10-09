import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .custom-dots li button {
    background-color: #ddd;
    border-radius: 50%;
    width: 8px;
    height: 8px;
  }

  .custom-dots li.slick-active button {
    background-color: #6c5ce7;
  }
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  img {
    width: 300px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  transition: height 0.3s ease-in-out; /* Suaviza a transição da altura */

  /* Altura dinâmica com base no número de botões */
  height: auto;
`;

export const Title = styled.h2`
  margin: 10px 0;
  font-size: 1.5em;
  color: #333;
`;

export const Description = styled.p`
  color: #666;
  margin-bottom: 20px;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 200px;
  padding: 10px;
  margin: 5px 0;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #fff;
  color: #555;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #6c5ce7;
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 20%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: background-color 0.2s;

  &.prev {
    left: -20px;
  }

  &.next {
    right: -20px;
  }

  &:hover {
    background-color: #5a49d1;
  }

  svg {
    font-size: 20px;
  }
`;
