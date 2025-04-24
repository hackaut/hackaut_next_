import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
export default function CarouselDemo(props) {
return(
  <>
  <Carousel>
  <CarouselContent>
    <CarouselItem className="basis-1/6 " ><Image className="inline-block rounded-[50%] " src={props.images} alt="person" height={150}  effect="blur"/></CarouselItem>
    <CarouselItem className="basis-1/6 "><Image className="inline-block rounded-[50%]  " src={props.images} alt="person" height={150} effect="blur"/></CarouselItem>
    <CarouselItem className="basis-1/6 "><Image className="inline-block rounded-[50%]  " src={props.images} alt="person" height={150}  effect="blur"/></CarouselItem>
    <CarouselItem className="basis-1/6 "><Image className="inline-block rounded-[50%]  " src={props.images} alt="person" height={150}  effect="blur"/></CarouselItem>
    <CarouselItem className="basis-1/6 "><Image className="inline-block rounded-[50%]  " src={props.images} alt="person" height={150}  effect="blur"/></CarouselItem>
    <CarouselItem className="basis-1/6 "><Image className="inline-block rounded-[50%]  " src={props.images} alt="person" height={150}  effect="blur"/></CarouselItem>
    <CarouselItem className="basis-1/6 "><Image className="inline-block rounded-[50%]  " src={props.images} alt="person" height={150}  effect="blur"/></CarouselItem>
    <CarouselItem className="basis-1/6 "><Image className="inline-block rounded-[50%]  " src={props.images} alt="person" height={150}  effect="blur"/></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  </>
)
}