import { mockupImages } from "./data";
import MockupImage from "./MockupImage";

const FloatingScreenshots = () => (
    <>
        {(['left', 'right'] as const).map((position) => (
            <div key={position} className="relative pointer-events-none hidden sm:block">
                {mockupImages[position].map((image, index) => (
                    <MockupImage key={`${position}-${index}`} index={index} image={image} position={position} />

                ))}
            </div>
        ))}
    </>
);

export default FloatingScreenshots;