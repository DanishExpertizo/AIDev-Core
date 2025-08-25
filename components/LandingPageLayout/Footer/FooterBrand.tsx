import MotionWrapper from "@/hooks/useAnimations";

const FooterBrand = () => {
    return (
        <MotionWrapper delay={0.4} distance={40}>
            <div className="flex-1 text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-cyan-400 mb-4">
                    AI DEV
                </h2>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-sm mx-auto lg:mx-0">
                    At AI DEV, we&apos;re redefining software development with the
                    power of AI. Our mission is simple: make coding faster, smarter,
                    and more intuitive.
                </p>
            </div>
        </MotionWrapper>
    );
}

export default FooterBrand;