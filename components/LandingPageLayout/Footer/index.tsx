import { sections } from "./data";
import FooterBrand from "./FooterBrand";
import FooterSection from "./FooterSection";

export default function Footer() {

    return (
        <footer
            className="text-white flex items-center py-12 sm:py-16 lg:py-20"
            style={{
                backgroundImage: "url('/assets/images/Footer/footer-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">
                    <FooterBrand />

                    <div className="flex-1 flex flex-col sm:flex-row justify-center lg:justify-end items-center gap-6 sm:gap-8 w-full">
                        {sections.map((section, index) => (
                            <FooterSection
                                key={index}
                                title={section.title}
                                items={section.items}
                                className={section.className}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}