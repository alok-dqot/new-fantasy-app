import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'

import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons, PrevButton, NextButton } from './EmblaCarouselArrowButtons'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
    isBtnHide: boolean
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options, isBtnHide } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)


    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides}
                </div>
                {
                    !isBtnHide &&
                    <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} name='previous-btn' aria-label='prev-btn' />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} name='next-btn' aria-label='next-btn' />
                    </div>
                }

            </div>
        </section>
    )
}

export default EmblaCarousel

export const EmblaCarousel2: React.FC<PropType> = (props) => {
    const { slides, options, isBtnHide } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)


    return (
        <section className="embla2">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides}
                </div>
                {
                    !isBtnHide &&
                    <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} name='previous-btn' aria-label='prev-btn' />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} name='next-btn' aria-label='next-btn' />
                    </div>
                }

            </div>


        </section>
    )
}





export const EmblaCarouselForHomePage: React.FC<PropType> = (props) => {
    const { slides, options, isBtnHide } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)


    return (
        <section className="embla">
            <div className="embla__viewport_1" ref={emblaRef}>
                <div className="embla__container-1">
                    {slides}
                </div>
                {
                    !isBtnHide &&
                    <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} name='previous-btn' aria-label='prev-btn' />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} name='next-btn' aria-label='next-btn' />
                    </div>
                }

            </div>

        </section>
    )
}

