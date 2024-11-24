"use client";

import * as React from "react";
// import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";

type ContentSlide = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

type ContentSliderProps = {
  slides: ContentSlide[];
  options?: EmblaOptionsType;
};

export function ContentSlider({ slides, options }: ContentSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-1">
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {slides.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  {slide.type === "image" ? (
                    <Image
                      src={slide.src}
                      alt={slide.alt || `Slide ${index + 1}`}
                      className="w-full h-auto object-cover aspect-video"
                      layout="responsive"
                      width={16} // Replace with appropriate aspect ratio dimensions
                      height={9} // Replace with appropriate aspect ratio dimensions
                    />
                  ) : (
                    <video
                      src={slide.src}
                      controls
                      className="w-full h-auto object-cover aspect-video"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-md ",
              prevBtnDisabled && "hidden"
            )}
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-md font-bold",
              nextBtnDisabled && "hidden"
            )}
            onClick={scrollNext}
            disabled={nextBtnDisabled}
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
