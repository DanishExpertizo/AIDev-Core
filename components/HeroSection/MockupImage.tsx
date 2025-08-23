import { MockupImageData } from "@/Types/HeroSection";
import Image from "next/image";

const MockupImage = ({ image, position }: { image: MockupImageData; position: 'left' | 'right' }) => (

    <Image
        src={image.src}
        alt="App mockup"
        width={image.width}
        height={image.height}
        className="absolute rounded-[10px] object-cover"
        style={{
            width: `${image.width}px`,
            height: `${image.height}px`,
            top: `${image.top}px`,
            ...(position === 'left'
                ? { left: `${image.left}px` }
                : { right: `${image.right}px` }),
            transform: `rotate(${image.rotation}deg)`,
            opacity: 1,
            boxShadow: position === 'left'
                ? '-8px 4px 5.6px 0px #0000001F'
                : position === 'right' && image.rotation < -8
                    ? '6px 4px 5.6px 0px #0000001F'
                    : '8px 2px 5.6px 0px #0000001F',
            zIndex: image.zIndex
        }}
        priority
        unoptimized
    />
);

export default MockupImage;