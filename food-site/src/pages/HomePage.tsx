import React, { useEffect, useRef } from "react";
import "../styles/HomePage.css";

const HomePage: React.FC = () => {
  const slideIndexRef = useRef(0);

  useEffect(() => {
    const slides =
      document.querySelectorAll<HTMLImageElement>(".event-images img");

    const showSlides = () => {
      slides.forEach((slide) => (slide.style.display = "none")); // Esconde todas as imagens
      slideIndexRef.current = (slideIndexRef.current + 1) % slides.length; // Move para o próximo slide
      slides[slideIndexRef.current].style.display = "block"; // Mostra a imagem atual
    };

    showSlides();
    const intervalId = setInterval(showSlides, 3000); // Muda a imagem automaticamente a cada 3 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []);

  const moveSlide = (n: number) => {
    const slides =
      document.querySelectorAll<HTMLImageElement>(".event-images img");
    slides[slideIndexRef.current].style.display = "none"; // Esconde a imagem atual
    slideIndexRef.current =
      (slideIndexRef.current + n + slides.length) % slides.length; // Move para a próxima ou anterior
    slides[slideIndexRef.current].style.display = "block"; // Mostra a nova imagem
  };

  return (
    <div className="home-page">
      <main className="home-page-content">
        <section id="about" className="about">
          <div className="about-content">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              quis convallis dui, in ullamcorper mi. Vivamus porttitor ante nec
              vehicula scelerisque. Nam at iaculis erat. Nullam dictum augue in
              arcu vulputate iaculis. Praesent eros magna, posuere sed egestas
              ut,
            </h1>
            <img
              src="/images/chef-priscila.jpg"
              alt="Chef Priscila Deus"
              className="chef-image"
            />
          </div>
        </section>
        <section id="events" className="events">
          <h2>Eventos</h2>
          <div className="carousel">
            <div className="event-images">
              <img src="/images/event1.jpg" alt="Evento 1" />
              <img src="/images/event2.jpg" alt="Evento 2" />
              <img src="/images/event3.jpg" alt="Evento 3" />
            </div>
            <button className="prev" onClick={() => moveSlide(-1)}>
              &#10094;
            </button>
            <button className="next" onClick={() => moveSlide(1)}>
              &#10095;
            </button>
          </div>
        </section>
        <section id="midia" className="midia">
          <h2>Mídia</h2>
          <div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
