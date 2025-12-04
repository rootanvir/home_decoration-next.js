import InterestingPlaceCard from "../card/InterestingPlaceCard";

export default function HowItWorksSection() {
    return (
        <section className="py-16 lg:py-20 bg-gradient-to-b from-zinc-900 to-zinc-800 w-full">
            <div className="max-w-6xl mx-auto px-6">

                <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">

                    {/* Left Side */}
                    <div className="max-w-md">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            How Our Platform Works
                        </h2>
                        <p className="text-zinc-400 text-sm lg:text-base leading-relaxed mb-6">
                            In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus.
                            Nulla eu mi magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm lg:text-base px-8 py-3.5 rounded-full shadow-xl transition hover:scale-105">
                            ADD YOUR PROPERTY
                        </button>
                    </div>

                    {/* Right Side */}
                    <div className="  grid grid-cols-3 gap-5 lg:gap-7 flex-1 bg-gray-600 rounded-3xl p-5 ">
 
                            <InterestingPlaceCard
                                number={1}
                                title="Find Interesting Place"
                                description="Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut."
                                icon="building"
                            />
                            <InterestingPlaceCard
                                number={2}
                                title="Contact a Few Owners"
                                description="Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus."
                                icon="message-circle"
                            />
                            <InterestingPlaceCard
                                number={3}
                                title="Make a Listing"
                                description="Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla."
                                icon="plus-circle"
                            />
            
                    </div>

                </div>
            </div>
        </section>
    );
}
