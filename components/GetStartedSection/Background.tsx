const Background = () => {
    return (
        <>
            <img
                src="/assets/images/GetStartedSection/container-bg-img.png"
                alt="background"
                className="absolute inset-0 w-full h-full object-cover sr-general"
            />
            <div
                className="absolute inset-0 rounded-full opacity-20 z-0 sr-general"
                style={{
                    background:
                        "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0.1) 50%, transparent 100%)",
                    filter: "blur(40px)",
                    transform: "translate(30%, 30%)",
                }}
            />
        </>
    )
}

export default Background;