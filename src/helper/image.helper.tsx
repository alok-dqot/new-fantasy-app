import Image from "next/image";

export interface CustomImg {
    src: string;
    alt?: string;
    className?: string;
    onclick?: () => void
}

export const CustomImg = (props: CustomImg) => {
    return (
        <img
            src={props?.src || '/no-image.jpg'
            }
            alt={props.alt || 'sportswiz-img'}
            onError={(e: any) => {
                e.target.src = '/noImage.jpg';
            }}
            className={props?.className}
            onClick={props.onclick}
        // loading="lazy"
        />
    );
}


export const CustomBlogImg = (props: CustomImg) => {
    return (
        <Image
            src={props?.src || '/noImage.jpg'
            }
            alt={props.alt || 'sportswiz-img'}
            onError={(e: any) => {
                e.target.src = '/noImage.jpg';
            }}
            className={props?.className}
            width={'100'}
            height={'100'}
            priority={true}
            placeholder="blur"
            layout="intrinsic"
        />
    );
}
