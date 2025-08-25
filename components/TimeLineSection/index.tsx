"use client";

import { LEFT_ARC_ANGLES, RIGHT_ARC_ANGLES } from './Constants';
import ArcWrapper from './ArcWrapper';
import HalfArcIcons from './HalfArcIcons';

const TimeLineSection = () => {

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundImage: "url('/assets/images/TimeLineSection/bg-img.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className='sm:min-h-screen max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative overflow-hidden'>
                <HalfArcIcons
                    side='left'
                    angles={LEFT_ARC_ANGLES}
                    imagePrefix='right-circle-img-'
                    altPrefix='right-circle-img-'
                />

                <ArcWrapper />

                <HalfArcIcons
                    side='right'
                    angles={RIGHT_ARC_ANGLES}
                    imagePrefix='left-circle-img-'
                    altPrefix='left-circle-icon-'
                />
            </div>
        </div>
    )
}

export default TimeLineSection;
