
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Card from './card'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container ">
        <div className="embla__slide"><Card/> </div>
        <div className="embla__slide"><Card/> </div>

        <div className="embla__slide"><Card/> </div>
        <div className="embla__slide"><Card/> </div>
        <div className="embla__slide"><Card/> </div>
        <div className="embla__slide"><Card/> </div>
        <div className="embla__slide"><Card/> </div>

        <div className="embla__slide"><Card/> </div>
        <div className="embla__slide"><Card/> </div>
        <div className="embla__slide"><Card/> </div>

       
      </div>
    </div>
  )
}
