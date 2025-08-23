import { DecorativeStarProps } from "@/Types/TimeLineSection";
import Image from "next/image";

const DecorativeStar: React.FC<DecorativeStarProps> = ({ className }) => (
    <Image
        src="/assets/images/TimeLineSection/star-img.png"
        alt="star"
        width={120}
        height={120}
        className={`absolute left-1/2 pointer-events-none ${className}`}
    />
);

export default DecorativeStar;