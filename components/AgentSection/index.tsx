import Image from 'next/image';
import { FEATURES } from './data';
import FeatureItem from './FeatureItem';
import MainHeading from '../MainHeading';
import SubHeading from '../SubHeading';

export default function Section2() {
    return (
        <section className="min-h-screen bg-[#00010C] text-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
                <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
                    <SubHeading />
                    <MainHeading title1="The fastest way to build" title2="production-ready apps" />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-16 lg:gap-20">
                    <div className="relative flex-2 md:flex-1 pl-10 sm:pl-8">
                        <div className="absolute left-[6.5px] sm:-left-[1px] top-3 bottom-0 w-px bg-white/10" />
                        <div className="space-y-6 sm:space-y-8">
                            {FEATURES.map((feature, idx) => (
                                <FeatureItem key={idx} feature={feature} />
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 bg-[#00010C]">
                        <Image
                            className="w-full max-w-[480px] md:max-w-[600px] lg:max-w-[730px] object-cover mx-auto lg:mx-0"
                            src="/assets/images/AgentSection/side-img.png"
                            alt="AIDEV Agent interface screenshot"
                            loading="lazy"
                            width={730}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
