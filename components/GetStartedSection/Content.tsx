import { Button } from "@/components/ui/button"
import SubHeading from "../SubHeading"
import MainHeading from "../MainHeading"
import MotionWrapper from "@/hooks/useAnimations"

const Content = () => {
    return (
        <div className="relative z-10 flex flex-col items-center gap-4 w-full h-full">
            <SubHeading title="Get Started for Free" />

            <MainHeading
                title1="Ready to launch your"
                title2={<span><span className="text-blue-400">First</span> Project</span>}
            />
            <MotionWrapper delay={0.4} distance={20}>
                <p className="max-w-xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
                    With lots of unique blocks, you can easily build a page without
                    coding. Build your next landing page effortlessly.
                </p>
            </MotionWrapper>

            <MotionWrapper delay={0.5} distance={20}>
                <Button
                    className="px-8 sm:px-16 py-3 sm:py-5 text-sm sm:text-base font-medium bg-slate-900 text-white border-slate-800 hover:bg-slate-800 backdrop-blur-[16.2px]"
                    variant="outline"
                >
                    Launch App
                </Button>
            </MotionWrapper>
        </div>
    )
}

export default Content;