"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const Roles = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: "true,",
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
        WheelGesturesPlugin(),
      ]}
    >
      <CarouselContent>
        <CarouselItem>AI Engineer</CarouselItem>
        <CarouselItem>Full-Stack Developer</CarouselItem>
        <CarouselItem>Agentic AI Engineer</CarouselItem>
        <CarouselItem>ML Engineer</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Roles;
