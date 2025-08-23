import Image from "next/image";
import { useEffect } from "react";
import Rellax from "rellax";
import ArcContent from "./ArcContent";

const ArcWrapper = () => {
    useEffect(() => {
        const rellax = new Rellax(".rellax", {
            speed: -2,
            center: true,
        });

        return () => rellax.destroy();
    }, []);

    return (
        <div className="relative w-[312px] h-[312px] lg:w-[412px] lg:h-[412px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center rellax" data-rellax-speed="-2">
                <Image
                    src="/assets/images/TimeLineSection/arc-wrapper.png"
                    alt="Arc Wrapper"
                    fill
                    className="object-cover rounded-full scale-125"
                    priority
                />
            </div>

            <div className="relative w-full h-full flex items-center justify-center">
                <ArcContent />
            </div>

            <div className="absolute inset-0 rounded-full p-[3px] pointer-events-none" />
        </div>
    );
};

export default ArcWrapper;
