import Background from "./Background";
import Content from "./Content";

const Section7 = () => {
    return (
        <section
            className="relative min-h-screen flex items-center px-4 sm:px-8 bg-[#00010C]"
            style={{
                backgroundImage: "url('/assets/images/GetStartedSection/bg-img.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-6xl mx-auto w-full">
                <div className="relative flex flex-col items-center justify-center text-center px-4 sm:px-8 py-12 sm:h-[454px] rounded-2xl overflow-hidden">
                    <Background />
                    <Content />
                </div>
            </div>
        </section>
    )
}

export default Section7;