import { Gift, Shirt } from "lucide-react";

const DetailsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-warm-white">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Důležité informace
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Svatební dary a Dress code
          </h2>
          <div className="section-divider mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Gifts */}
          <div className="bg-card p-8 md:p-10 rounded-lg border border-border/50 text-center">
            <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-6">
              <Gift className="w-8 h-8 text-gold" />
            </div>
            
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              Svatební dary
            </h3>
            
            <p className="font-body text-muted-foreground leading-relaxed">
              Domácnost máme již plně vybavenou, budeme ale rádi, když nám finančně přispějete třeba na svatební cestu.
            </p>
          </div>

          {/* Dress Code */}
          <div className="bg-card p-8 md:p-10 rounded-lg border border-border/50 text-center">
            <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-6">
              <Shirt className="w-8 h-8 text-gold" />
            </div>
            
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              Dress code
            </h3>
            
            <p className="font-body text-muted-foreground leading-relaxed">
              Svatbu nebudeme ladit do konkrétní barvy, proto budeme rádi, když zvolíte oblečení, ve kterém se budete cítit příjemně a elegantně.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
