import heroImage from "@/assets/hero-couple.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Eliška a Kryštof"
          className="w-full h-full object-cover object-center md:object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-white/60 via-warm-white/20 to-cream/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <div className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <p className="font-heading text-xl md:text-2xl tracking-[0.2em] text-foreground/80 mb-6">
            Budeme svoji
          </p>
        </div>
        
        <h1 
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-foreground mb-6 animate-fade-in"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Eliška <span className="text-gold italic">&</span> Kryštof
        </h1>

        <div 
          className="animate-fade-in"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <div className="section-divider my-8" />
        </div>

        <p 
          className="font-heading text-xl md:text-2xl lg:text-3xl font-light text-foreground/80 tracking-wider mb-6 animate-fade-in"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          1. července 2026, Zámeček Ostrov u Zbraslavic
        </p>

        <div 
          className="max-w-2xl mx-auto space-y-4 animate-fade-in"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed">
            Srdečně vás zveme na naši svatbu, která se bude konat 1. července 2026 na Zámečku Ostrov u Zbraslavic.
          </p>
          <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed">
            Budeme moc rádi, když u toho budete s námi.
          </p>
          <p className="font-body text-base md:text-lg text-foreground/90 font-medium">
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
