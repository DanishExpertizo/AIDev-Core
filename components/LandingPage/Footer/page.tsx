export default function Footer() {
    return (
        <footer
            className="text-white h-[525px] flex items-center"
            style={{
                backgroundImage: "url('/assets/images/footer-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-6xl mx-auto w-full ">
                <div className="flex flex-col justify-between items-center lg:flex-row w-full gap-8 lg:gap-12">
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">AI DEV</h2>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
                            AI DEV, we&apos;re redefining software development with the power of AI. Our mission is simple: make coding
                            faster, smarter, and more intuitive.
                        </p>
                    </div>

                    <div className="flex-1 flex items-center gap-8">
                        <div
                            className="flex-1 flex items-center px-6 rounded-3xl min-h-[299px] max-w-[288px] border border-slate-700/50"
                            style={{
                                background:
                                    "linear-gradient(154.62deg, rgba(0, 1, 12, 0.11) 8.02%, rgba(58, 168, 231, 0.11) 73.26%, rgba(58, 168, 231, 0.11) 105.83%)",
                            }}
                        >
                            <div>
                                <h3 className="text-2xl text-white mb-10">About AIDEV</h3>
                                <div className="space-y-3">
                                    <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors text-md">
                                        About us
                                    </a>
                                    <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors text-md">
                                        Solutions
                                    </a>
                                    <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors text-md">
                                        Pricing
                                    </a>
                                    <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors text-md">
                                        Promotions
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex-1 px-6 flex items-center  rounded-3xl min-h-[299px] max-w-[288px] border border-slate-700/50 translate-y-10"
                            style={{
                                background:
                                    "linear-gradient(154.62deg, rgba(0, 1, 12, 0.11) 8.02%, rgba(58, 168, 231, 0.11) 73.26%, rgba(58, 168, 231, 0.11) 105.83%)",
                            }}
                        >
                            <div>
                                <h3 className="text-2xl text-white mb-10">Social Media</h3>
                                <div className="space-y-3">
                                    <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors text-md">
                                        Twitter
                                    </a>
                                    <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors text-md">
                                        Facebook
                                    </a>
                                    <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors text-md">
                                        Instagram
                                    </a>
                                    <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors text-md">
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
