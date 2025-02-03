import dynamic from 'next/dynamic';
import { FC } from 'react';
import { EmblaCarouselForHomePage } from './EmblaCarousel';

const EmblaCarousel = dynamic(() => import('./EmblaCarousel'), { ssr: false });

interface NormalCarouselProps {
    children: React.ReactNode
}

const OPTIONS: any = { dragFree: true }
export const NormalCarousel: FC<NormalCarouselProps> = ({ children }: any) => {

    return (
        <EmblaCarousel slides={children as any} options={OPTIONS} isBtnHide={true} />
    )
}





export const FullPageCarousel = ({ children, isBtn = true }: any) => {
    return (
        <EmblaCarouselForHomePage slides={children as any} options={OPTIONS} isBtnHide={isBtn} />
    )
}



export default NormalCarousel