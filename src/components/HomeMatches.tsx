
import React, { FC } from 'react'
import EmblaCarousel from './carousel/EmblaCarousel'

interface NormalCarouselProps {
  children: React.ReactNode
}
const OPTIONS: any = { dragFree: true }


export const CustomCarousel: FC<NormalCarouselProps> = ({ children }) => {

  return (
    <EmblaCarousel slides={children as any} options={OPTIONS} isBtnHide={true} />
  )
}