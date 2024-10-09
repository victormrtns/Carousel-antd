import React from 'react';
import ButtonList from './ButtonList';
import CarouselComponent from './CarouselComponent';

const App: React.FC = () => {
  const buttons = [
    "Exemplo de Botão",
    "Exemplo de Botão",
    "Exemplo de Botão",
    "Exemplo de Botão",
    "Exemplo de Botão",
    "Exemplo de Botão",
    "Exemplo de Botão",
    "Exemplo de Botão",
    "Exemplo de Botão",
    "Exemplo de Botão",
    "Exemplo de Botão",
    "Exemplo de Botão",
    "Exemplo de Botão",
    "Exemplo de Botão",
  ];

  const slides = [
    {
      title: "Serviço de Tech",
      description: "Descrição do carrossel e serviços da empresa.",
      image: "https://via.placeholder.com/300x150", // Imagem para o primeiro slide
      buttons: ["Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão"]
    },
    {
      title: "Portal RH",
      description: "Descrição do carrossel e serviços da empresa.",
      image: "https://via.placeholder.com/300x150", // Imagem para o segundo slide
      buttons: ["Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão"]
    },
    {
      title: "Contabilidade",
      description: "Descrição do carrossel e serviços da empresa.",
      image: "https://via.placeholder.com/300x150", // Imagem para o terceiro slide
      buttons: ["Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão", "Exemplo de Botão"]
    }
  ];

  return (
    <div>
      <CarouselComponent slides={slides} />
    </div>
  );
};

export default App;
