import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import familyImage1 from "@/assets/family-image-1.png";
import familyImage2 from "@/assets/family-image-2.png";

const familySlides = [
  {
    image: familyImage1,
    quote: "Juntos construímos o futuro através da educação e do amor familiar",
  },
  {
    image: familyImage2,
    quote: "Cada conquista académica é uma vitória de toda a família",
  },
];

const FamilyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full h-full min-h-screen">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {familySlides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-screen">
              <img
                src={slide.image}
                alt={`Família em momento educacional ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-overlay" />
              <div className="relative z-10 flex items-end justify-start h-full p-8 pb-24">
                <p className="text-white text-lg leading-relaxed font-light max-w-xl">
                  {slide.quote}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {familySlides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-secondary" : "w-2 bg-white/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FamilyCarousel;
