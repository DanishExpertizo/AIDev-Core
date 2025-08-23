import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import BottomInput from './BottomInput';
import { backgroundLayers } from './data';
import FloatingScreenshots from './FloatingScreenshots';
import QuickActionButtons from './QuickActionButtons';
import MainHeading from '../MainHeading';

export default function HeroSection() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#00010C] pb-4">
            {backgroundLayers.map((layer, index) => (
                <div key={index} className={layer.className} style={layer.style} />
            ))}

            <div className="relative z-10 mt-36 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 sm:px-6">
                <div className="mb-12 max-w-4xl text-center px-2">
                    <MainHeading title1="Revolutionize Your Coding" title2="Experience With AI DEV" />
                    <p className="mx-auto max-w-xl sm:max-w-2xl text-base sm:text-lg md:text-xl text-white/80">
                        Empower your development process with AI-driven efficiency
                        <br className="hidden sm:block" />
                        and seamless code generation
                    </p>
                </div>

                <div className="relative w-full max-w-6xl">
                    <FloatingScreenshots />

                    <Card className="relative w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-[665px] h-auto m-auto border-gray-800 bg-black shadow-2xl rounded-3xl z-50">
                        <CardContent className="px-4 sm:px-6 md:px-8 py-4">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="mb-4 text-lg sm:text-lg md:text-xl lg:text-2xl text-white">
                                        Write a prompt
                                    </h3>
                                    <Textarea
                                        placeholder="Describe your idea in detail, we will build it for you..."
                                        className="w-full h-32 sm:h-32 md:h-[170px] bg-transparent text-white text-sm md:text-lg lg:text-xl placeholder:text-gray-400 resize-none focus-visible:ring-transparent outline-none border-none rounded-lg p-0"
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
