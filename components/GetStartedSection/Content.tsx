import { Button } from "@/components/ui/button"
import SubHeading from "../SubHeading"
import MainHeading from "../MainHeading"

const Content = () => {
    return (
        <div className="relative z-10 flex flex-col items-center gap-4 w-full h-full">
            <SubHeading title="Get Started for Free" className="sr-sub-heading" />

            <MainHeading
                title1="Ready to launch your"
                title2={<span className="text-blue-400">First</span>}
            />

            <p className="max-w-xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 sr-text">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page effortlessly.
            </p>

            <Button
                className="px-8 sm:px-16 py-3 sm:py-5 text-sm sm:text-base font-medium bg-slate-900 text-white border-slate-800 hover:bg-slate-800 backdrop-blur-[16.2px] sr-button"
                variant="outline"
            >
                Launch App
            </Button>
        </div>
    )
}

export default Content;