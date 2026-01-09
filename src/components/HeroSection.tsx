import heroImage from "@/assets/hero-couple.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-warm-white">
      {/* Header text */}
      <div className="text-center pt-16 pb-8 px-6">
        <p 
          className="font-heading text-2xl md:text-3xl font-light text-foreground/70 animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Budeme svoji
        </p>
      </div>

      {/* Main Image */}
      <div className="relative w-full max-w-5xl mx-auto px-4 md:px-8 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
        <div className="relative overflow-hidden rounded-sm shadow-2xl">
          <img
            src={heroImage}
            alt="Eliška a Kryštof"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Content below image */}
      <div className="text-center px-6 py-12 md:py-16 flex-1 flex flex-col justify-center">
        <h1 
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-4 animate-fade-in"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          Eliška a Kryštof
        </h1>

        <p 
          className="font-body text-lg md:text-xl text-foreground/70 mb-8 animate-fade-in"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          1. července 2026, Zámeček Ostrov u Zbraslavic
        </p>

        <div 
          className="max-w-2xl mx-auto space-y-6 animate-fade-in"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            Srdečně vás zveme na naši svatbu, která se bude konat 1. července 2026 na Zámečku Ostrov u Zbraslavic.
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            Budeme moc rádi, když u toho budete s námi.
          </p>
          <p className="font-body text-base md:text-lg text-foreground/80 font-medium">
            Prosíme o vyplnění dotazníku do 15. března 2026.
          </p>
        </div>

        <div 
          className="mt-12 animate-fade-in"
          style={{ animationDelay: "1.2s", opacity: 0 }}
        >
          <a
            href="#rsvp"
            className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-foreground/60 hover:text-gold transition-colors duration-300"
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
      </div>
    </section>
  );
};

export default HeroSection;
