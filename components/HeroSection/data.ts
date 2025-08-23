import { MockupImageData } from "@/Types/HeroSection";

export const mockupImages: { left: MockupImageData[]; right: MockupImageData[] } = {
    left: [
        { src: '/assets/images/HeroSection/app-mockup-1.png', width: 190, height: 288, top: 70, left: 15, rotation: -8.24, zIndex: 10 },
        { src: '/assets/images/HeroSection/app-mockup-2.png', width: 191, height: 254, top: 110, left: 80, rotation: -11.38, zIndex: 20 },
        { src: '/assets/images/HeroSection/app-mockup-3.png', width: 230, height: 324, top: 50, left: 185, rotation: 0.67, zIndex: 30 }
    ],
    right: [
        { src: '/assets/images/HeroSection/app-mockup-4.png', width: 222, height: 305, top: 75, right: 40, rotation: 6.65, zIndex: 50 },
        { src: '/assets/images/HeroSection/app-mockup-5.png', width: 192, height: 254, top: 60, right: 120, rotation: 10.49, zIndex: 50 },
        { src: '/assets/images/HeroSection/app-mockup-6.png', width: 229, height: 234, top: 100, right: 160, rotation: 8.79, zIndex: 50 }
    ]
};

export const backgroundLayers = [
    {
        className: "absolute w-full h-full z-[2]",
        style: {
            background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,1) 100%)",
        } as React.CSSProperties,
    },
    {
        className: "absolute inset-0 opacity-100 z-[1]",
        style: {
            backgroundImage: 'url(/assets/images/HeroSection/noise-texture.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
        } as React.CSSProperties,
    },
    {
        className: "absolute inset-0 opacity-100 z-[1]",
        style: {
            backgroundImage: 'url(/assets/images/HeroSection/bg-image-1.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
        } as React.CSSProperties,
    },
    {
        className: "absolute inset-0 opacity-100 z-[1]",
        style: {
            backgroundImage: 'url(/assets/images/HeroSection/bg-image-2.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
        } as React.CSSProperties,
    },
];

export const quickActions = [
    'Build a Fitness App',
    'Create a WhatsApp Clone',
    'Build an ecommerce site'
];