import dynamic from 'next/dynamic';
import { FC } from 'react';

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




export default NormalCarousel