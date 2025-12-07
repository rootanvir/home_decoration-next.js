import InterestingPlaceCard from "../card/InterestingPlaceCard";

export default function HowItWorksSection() {
    return (
        <section className="py-16 lg:py-20 bg-gradient-to-b from-zinc-900 to-zinc-800 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
                    {/* Left Side */}
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            How Our Platform Works
                        </h2>
                        <p className="text-zinc-400 text-sm lg:text-base leading-relaxed mb-6">
                            In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus.
                            Nulla eu mi magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                        <div className="inline-block bg-gradient-to-r from-gray-700 to-gray-900 p-1 rounded-full">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full shadow-xl transition-all duration-300 hover:shadow-orange-500/25 hover:scale-[1.02]">
                                ADD YOUR PROPERTY
                            </button>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                            <div className="h-full">
                                <InterestingPlaceCard
                                    number={1}
                                    title="Find Interesting Place"
                                    description="Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut."
                                    icon="building"
                                />
                            </div>
                            <div className="h-full">
                                <InterestingPlaceCard
                                    number={2}
                                    title="Contact a Few Owners"
                                    description="Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus."
                                    icon="message-circle"
                                />
                            </div>
                            <div className="h-full">
                                <InterestingPlaceCard
                                    number={3}
                                    title="Make a Listing"
                                    description="Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla."
                                    icon="plus-circle"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}