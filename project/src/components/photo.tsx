import Image from "next/image"

type Props = {
    src: string,
    width: number,
    height: number,
    alt: string
}

export const Photo = ({ src, width, height, alt }: Props) => {
    return(
        <Image 
            src={src}
            width={width}
            height={height}
            alt={alt}
            quality={100}
        />
    )
}