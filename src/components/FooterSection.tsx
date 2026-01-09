import { Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  const witnesses = [
    {
      name: "Aneta Sauerová",
      role: "Svědkyně",
      phone: "722 043 979"
    },
    {
      name: "Dominik Hoch",
      role: "Svědek",
      phone: "776 720 704"
    }
  ];

  return (
    <footer id="rsvp" className="py-20 md:py-32 bg-gradient-section">
      <div className="container max-w-4xl mx-auto px-6">
        {/* RSVP Section */}
        <div className="text-center mb-20">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Potvrďte účast
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
            Potvrďte nám prosím svou účast
          </h2>
          <p className="font-body text-muted-foreground mb-10 max-w-xl mx-auto">
            Prosíme o vyplnění dotazníku do 15. března 2026.
          </p>
          
          <Button
            asChild
            className="bg-gold hover:bg-gold-light text-foreground font-body text-sm tracking-widest uppercase px-10 py-6 rounded-md transition-all duration-300 hover:shadow-lg"
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              Vyplnit dotazník
            </a>
          </Button>
        </div>

        <div className="section-divider mb-16" />

        {/* Contacts */}
        <div className="text-center mb-16">
          <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-8">
            Kontaktní osoby v den svatby
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {witnesses.map((witness, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border/50">
                <p className="font-heading text-xl text-foreground mb-1">
                  {witness.name}
                </p>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {witness.role}
                </p>
                <a
                  href={`tel:+420${witness.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 font-body text-gold hover:text-gold-light transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>{witness.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center pt-10 border-t border-border/30">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span className="font-heading text-lg">Eliška</span>
            <Heart className="w-4 h-4 text-gold fill-gold" />
            <span className="font-heading text-lg">Kryštof</span>
          </div>
          <p className="font-body text-sm text-muted-foreground/60 mt-4">
            1. července 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
