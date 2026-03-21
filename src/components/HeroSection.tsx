import heroImage from "@/assets/hero-couple.jpg";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center overflow-hidden">
            {/* 1. BACKGROUND & PŮVODNÍ EFEKT */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Eliška a Kryštof"
                    className="w-full h-full object-cover object-center md:object-[center_30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-warm-white/60 via-warm-white/20 to-cream/80" />
            </div>

            {/* 2. HORNÍ TEXT - V NEBI */}
            <div className="relative z-10 text-center px-6 pt-32 md:pt-40">
                <div className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
                    <p className="font-heading text-xl md:text-2xl tracking-[0.2em] text-foreground/80 mb-6">
                        Budeme svoji
                    </p>
                </div>

                <h1
                    className="font-heading text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-foreground animate-fade-in"
                    style={{ animationDelay: "0.4s", opacity: 0 }}
                >
                    Eliška <span className="text-gold italic">&</span> Kryštof
                </h1>
            </div>

            {/* 3. NEVIDITELNÁ MEZERA (SPACER) */}
            <div className="flex-grow" />

            {/* 4. TEXT O DOTAZNÍKU/MÍSTĚ - U NOHOU/ZÍDKY */}
            <div
                className="relative z-10 text-center px-6 pb-28 md:pb-36 animate-fade-in"
                style={{ animationDelay: "0.8s", opacity: 0 }}
            >
                <p className="font-heading text-xl md:text-2xl text-foreground mb-8 tracking-wide font-bold">
                    1. července 2026, Zámeček Ostrov u&nbsp;Zbraslavic
                </p>
            </div>

            {/* 5. TLAČÍTKO A ŠIPKA - ÚPLNĚ DOLE */}
            <div
                className="absolute bottom-8 left-0 right-0 z-20 text-center animate-fade-in"
                style={{ animationDelay: "1.2s", opacity: 0 }}
            >
                <a
                    href="#rsvp"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    // ZMĚNA ZDE: 'text-foreground/60' změněno na 'text-foreground' (bez průhlednosti)
                    className="inline-flex flex-col items-center gap-2 font-body text-sm tracking-widest uppercase text-foreground hover:text-gold transition-colors duration-300 cursor-pointer font-bold"
                >
                    <span>Potvrďte nám prosím svou účast</span>
                    <svg
                        className="w-4 h-4 animate-float"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;