import { Card, CardContent } from '@/components/ui/card';
import MotionWrapper from '@/hooks/useAnimations';
import { Typewriter } from 'react-simple-typewriter';
import MainHeading from '../MainHeading';
import BottomInput from './BottomInput';
import { backgroundLayers } from './data';
import FloatingScreenshots from './FloatingScreenshots';
import QuickActionButtons from './QuickActionButtons';

export default function HeroSection() {

    return (
        <div id="hero-section" className="relative min-h-screen overflow-hidden bg-[#00010C] pb-4">
            {backgroundLayers.map((layer, index) => (
                <div key={index} className={layer.className} style={layer.style} />
            ))}

            <div className="relative z-10 mt-36 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 sm:px-6">
                <div className="mb-12 max-w-4xl text-center px-2">
                    <MainHeading className='!text-2xl sm:!text-3xl md:!text-4xl lg:!text-[65px] font-semibold' title1="Revolutionize Your Coding" title2={<span>Experience with <span className="font-bold text-blue-400">AI DEV</span></span>} />
                    <MotionWrapper delay={0.4} distance={20}>
                        <p className="mx-auto max-w-xl sm:max-w-2xl text-base sm:text-lg md:text-xl text-white/80">
                            Empower your development process with AI-driven efficiency
                            <br className="hidden sm:block" />
                            and seamless code generation
                        </p>
                    </MotionWrapper>
                </div>

                <div className="relative w-full max-w-6xl">
                    <FloatingScreenshots />

                    <MotionWrapper delay={0.2} distance={30}>
                        <Card
                            className="relative w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-[565px] h-auto m-auto border-gray-800 bg-black shadow-2xl rounded-3xl z-50">
                            <CardContent className="px-4 sm:px-6 py-4">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="mb-4 text-base md:text-lg lg:text-xl text-white">
                                            Write a prompt
                                        </h3>

                                        <div className="w-full h-32 sm:h-32 md:h-34 bg-transparent text-gray-500 text-sm md:text-base lg:text-lg placeholder:text-gray-400 resize-none focus-visible:ring-transparent outline-none border-none rounded-lg border border-gray-600">
                                            <Typewriter
                                                words={[
                                                    "Describe your idea in detail, we will build it for you...",
                                                    "Need a mobile app? A dashboard? Just tell us!",
                                                    "Your idea. Our code. One powerful app 🚀"
                                                ]}
                                                loop={true}
                                                cursor
                                                cursorStyle="|"
                                                typeSpeed={50}
                                                deleteSpeed={30}
                                                delaySpeed={2000}
                                            />
                                        </div>
                                    </div>

                                    <QuickActionButtons />
                                    <BottomInput />
                                </div>
                            </CardContent>
                        </Card>
                    </MotionWrapper>
                </div>
            </div>
        </div>
    );
}
