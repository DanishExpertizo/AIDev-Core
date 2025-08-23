import SubHeading from "../SubHeading";

const ArcContent = () => {
    return (
        <div className="text-center flex flex-col justify-center px-2 md:px-8 absolute top-0 h-full w-[400px] md:w-[500px] lg:w-[600px] -translate-y-9">
            <SubHeading className="lg:!text-xl md:!text-lg mt-10 md:mt-5 lg:mt-0" />

            <h1 className="lg:text-5xl md:text-4xl text-[32px] overflow-visible text-white mb-3 leading-tight">
                Get you AI DEV for free in your favorite IDE
            </h1>

            <p className="text-gray-400 text-[13px] md:text-[15px] lg:text-[17px] leading-relaxed max-w-lg mx-auto">
                With lots of unique block, you can easily build a page without coding.
                Build your next landing page.
            </p>
        </div>
    );
};

export default ArcContent;
