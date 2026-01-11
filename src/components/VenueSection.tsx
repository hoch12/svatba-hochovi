import { MapPin, Car, Building2, ExternalLink } from "lucide-react";
import venueImage from "@/assets/venue-castle.jpg";
import venueGroundsImage from "@/assets/venue-grounds.jpg";

const VenueSection = () => {
  return (
      <section id="info" className="py-20 md:py-32 bg-warm-white">
        <div className="container max-w-6xl mx-auto px-6">

          {/* --- PŘESUNUTÝ TEXT Z HERO SEKCE (POZVÁNKA) --- */}
          <div className="text-center mb-24 max-w-3xl mx-auto animate-fade-in">
            <div className="space-y-6 text-foreground/80">
              <p className="font-body text-lg md:text-xl leading-relaxed">
                Srdečně vás zveme na naši svatbu, která se bude konat 1. července 2026 na Zámečku Ostrov u Zbraslavic.
              </p>
              <p className="font-body text-lg md:text-xl leading-relaxed">
                Budeme moc rádi, když u toho budete s námi.
              </p>
            </div>
            <div className="section-divider mt-12 opacity-50" />
          </div>
          {/* ----------------------------------------------- */}

          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">
              Kde nás najdete
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
              Místo svatby
            </h2>
            <div className="section-divider mt-8" />
          </div>

          {/* Venue Image 1 */}
          <div className="mb-16 rounded-lg overflow-hidden shadow-lg">
            <img
                src={venueImage}
                alt="Zámeček Ostrov u Zbraslavic"
                // ZMĚNA: Na mobilu (h-64) je to proužek.
                // Na počítači (md:h-auto md:aspect-[16/9]) se to roztáhne podle poměru stran.
                // Uvidíš mnohem víc z fotky.
                className="w-full h-64 md:h-auto md:aspect-[16/9] object-cover"
            />
          </div>

          {/* Location Card */}
          <div className="bg-card p-8 md:p-10 rounded-lg border border-border/50 text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-gold" />
            </div>

            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              Zámeček Ostrov u Zbraslavic
            </h3>

            <p className="font-body text-muted-foreground mb-6">
              Ostrov 1, 285 22 Zbraslavice - Zruč&nbsp;nad&nbsp;Sázavou&nbsp;1
            </p>

            <a
                href="https://www.zamekostrov.cz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-gold hover:text-gold-light transition-colors duration-300"
            >
              <span>www.zamekostrov.cz</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Info Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Parking */}
            <div className="bg-card p-8 rounded-lg border border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-6">
                <Car className="w-6 h-6 text-gold" />
              </div>

              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-4">
                Parkování
              </h3>

              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Při příjezdu zaparkujte auto prosím na parkovišti, které se nachází před budovou Muzea Ostrov lidových krojů mimo areál zámečku. Přesnou lokalitu naleznete v přiložené mapě.
              </p>

              <a
                  href="https://mapy.com/cs/letecka?source=traf&id=50681&ds=1&x=15.1936230&y=49.7681060&z=19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold-light transition-colors duration-300"
              >
                <span>Zobrazit na mapě</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Accommodation */}
            <div className="bg-card p-8 rounded-lg border border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-gold" />
              </div>

              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-4">
                Ubytování
              </h3>

              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Část svatebčanů bude ubytována na Zámečku. Jelikož jsou však ubytovací kapacity Zámečku omezené, bude zbytek svatebčanů ubytován v Hotelu Agnes vzdáleném zhruba 4&nbsp;km od areálu Zámečku.
              </p>

              <a
                  href="https://agneshotel.cz/ubytovani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold-light transition-colors duration-300 mb-4"
              >
                <span>Hotel Agnes - agneshotel.cz</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Venue Grounds Image 2 - ZMĚNA ZDE */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
                src={venueGroundsImage}
                alt="Areál Zámečku Ostrov"
                // ZMĚNA: Použito aspect-[16/9] pro širokoúhlý formát, který ukáže víc trávy i nebe
                className="w-full h-64 md:h-auto md:aspect-[16/9] object-cover"
            />
          </div>
        </div>
      </section>
  );
};

export default VenueSection;