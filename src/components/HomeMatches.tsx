
import React, { FC } from 'react'
import EmblaCarousel, { EmblaCarousel2 } from './carousel/EmblaCarousel'

interface NormalCarouselProps {
  children: React.ReactNode
}
const OPTIONS: any = { dragFree: true }


export const CustomCarousel: FC<NormalCarouselProps> = ({ children }) => {

  return (
    <EmblaCarousel slides={children as any} options={OPTIONS} isBtnHide={true} />
  )
}
export const CustomCarousel2: FC<NormalCarouselProps> = ({ children }) => {

  return (
    <EmblaCarousel2 slides={children as any} options={OPTIONS} isBtnHide={true} />
  )
}