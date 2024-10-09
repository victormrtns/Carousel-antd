import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h2`
  margin: 10px 0;
`;

export const Description = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
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

export const ShowMoreButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 8px;
  border: 1px dashed #999;
  background-color: #fff;
  color: #555;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;
