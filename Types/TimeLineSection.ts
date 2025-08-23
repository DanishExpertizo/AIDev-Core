export type Point = {
    left: number;
    top: number
};

export type HalfArcIconsProps = {
    side: 'left' | 'right';
    angles: number[];
    imagePrefix: string;
    altPrefix: string;
};