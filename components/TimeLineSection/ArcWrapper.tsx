import ArcContent from "./ArcContent";
import DecorativeStar from "./DecorativeStar";

const ArcWrapper = () => {
    return (
        <div className="relative w-[312px] h-[312px] lg:w-[412px] lg:h-[412px] flex items-center justify-center">
            <div
                className="absolute inset-0 rounded-full p-[3px] flex items-center justify-center"
                style={{
                    background:
                        "linear-gradient(144.28deg, #3AA8E7 3.88%, #010002 34.44%, #00010C 68.64%, #3AA8E7 98.74%)",
                }}
            >
                <div className="relative w-full h-full rounded-full bg-[#00010C] flex items-center justify-center">
                    <ArcContent />
                </div>
            </div>

            <div className="absolute inset-0 rounded-full p-[3px] pointer-events-none" />

            <DecorativeStar className="top-0 translate-x-[25%] -translate-y-[35%]" />
            <DecorativeStar className="bottom-0 -translate-x-[120%] translate-y-[35%]" />
        </div>
    );
};

export default ArcWrapper;
