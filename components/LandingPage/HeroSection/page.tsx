'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Send } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';

interface MockupImageData {
    src: string;
    width: number;
    height: number;
    top: number;
    left?: number;
    right?: number;
    rotation: number;
    zIndex: number;
}

const mockupImages: { left: MockupImageData[]; right: MockupImageData[] } = {
    left: [
        { src: '/assets/images/app-mockup-1.png', width: 190, height: 288, top: 70, left: 15, rotation: -8.24, zIndex: 10 },
        { src: '/assets/images/app-mockup-2.png', width: 191, height: 254, top: 110, left: 80, rotation: -11.38, zIndex: 20 },
        { src: '/assets/images/app-mockup-3.png', width: 230, height: 324, top: 50, left: 185, rotation: 0.67, zIndex: 30 }
    ],
    right: [
        { src: '/assets/images/app-mockup-4.png', width: 222, height: 305, top: 75, right: 40, rotation: 6.65, zIndex: 50 },
        { src: '/assets/images/app-mockup-5.png', width: 192, height: 254, top: 60, right: 120, rotation: 10.49, zIndex: 50 },
        { src: '/assets/images/app-mockup-6.png', width: 229, height: 234, top: 100, right: 160, rotation: 8.79, zIndex: 50 }
    ]
};

const quickActions = [
    'Build a Fitness App',
    'Create a WhatsApp Clone',
    'Build an ecommerce site'
];

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

const FloatingScreenshots = () => (
    <>
        <div className="relative pointer-events-none">
            {mockupImages.left.map((image, index) => (
                <MockupImage key={`left-${index}`} image={image} position="left" />
            ))}
        </div>
        <div className="relative pointer-events-none">
            {mockupImages.right.map((image, index) => (
                <MockupImage key={`right-${index}`} image={image} position="right" />
            ))}
        </div>
    </>
);

const QuickActionButtons = () => (
    <div
        className="flex max-w-full overflow-x-scroll gap-3"
        style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
        }}
    >
        <style jsx>{`
      div::-webkit-scrollbar {
        display: none;
      }
    `}</style>
        {quickActions.map((action, index) => (
            <Button
                key={index}
                variant="outline"
                className="border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-600 whitespace-nowrap"
            >
                {action}
            </Button>
        ))}
    </div>
);

const BottomInput = () => (
    <div className="relative">
        <div className="w-full h-16 rounded-lg flex items-center px-4"
            style={{ background: "linear-gradient(123.49deg, rgba(58, 168, 231, 0.94) 30.09%, rgba(4, 61, 93, 0.94) 85.07%)" }}
        >
            <input
                type="text"
                placeholder="Give a tosk to work on.."
                className="flex-1 bg-transparent text-white placeholder:text-white/80 outline-none border-none text-lg"
            />
            <Send className="w-6 h-6 text-white cursor-pointer hover:scale-110 transition-transform" />
        </div>
    </div>
);

export default function HeroSection() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#00010C]">

            <div
                className="absolute w-full h-full z-[2]"
                style={{
                    background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,1) 100%)"
                }}
            />

            <div
                className="absolute inset-0 opacity-100 z-[1]"
                style={{
                    backgroundImage: 'url(/assets/images/noise-texture.png)',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '200px 200px',
                }}
            />
            <div
                className="absolute inset-0 opacity-100 z-[1]"
                style={{
                    backgroundImage: 'url(/assets/images/bg-image-1.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '100%',
                }}
            />
            <div
                className="absolute inset-0 opacity-100 z-[1]"
                style={{
                    backgroundImage: 'url(/assets/images/bg-image-2.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '100%',
                }}
            />

            <div className="relative z-10 mt-[206px] flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6">
                <div className="mb-12 max-w-4xl text-center">
                    <h1 className="mb-6 text-[56px] font-semibold leading-tight text-white md:text-6xl">
                        Revolutionize Your Coding
                        <br />
                        Experience With AI DEV
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-white/80">
                        Empower your development process with AI-driven efficiency
                        <br />
                        and seamless code generation
                    </p>
                </div>

                <div className="relative w-full max-w-6xl">
                    <FloatingScreenshots />

                    <Card className="relative w-[665px] h-[454px] m-auto border-gray-800 bg-black shadow-2xl rounded-4xl z-50">
                        <CardContent className="px-8 py-4">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="mb-4 text-[22px] text-white">
                                        Write a prompt
                                    </h3>
                                    <Textarea
                                        placeholder="Describe you idea in detail we will built it for you..."
                                        className="w-full h-[170px] bg-none text-white md:text-lg placeholder:text-gray-400 resize-none focus-visible:ring-transparent outline-none border-none rounded-lg p-0"
                                    />
                                </div>

                                <QuickActionButtons />

                                <BottomInput />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
