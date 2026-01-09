import { Users, Heart, Camera, UtensilsCrossed, Cake, Music, PartyPopper } from "lucide-react";

const TimelineSection = () => {
  const events = [
    {
      time: "11:00 - 11:30",
      title: "Příjezd hostů",
      description: "Welcome drink a drobné občerstvení",
      icon: Users
    },
    {
      time: "12:00 - 13:00",
      title: "Svatební obřad",
      description: "",
      icon: Heart
    },
    {
      time: "13:00 - 14:00",
      title: "Focení",
      description: "",
      icon: Camera
    },
    {
      time: "14:00 - 16:00",
      title: "Přípitek a hostina",
      description: "",
      icon: UtensilsCrossed
    },
    {
      time: "16:00",
      title: "Krájení dortu",
      description: "",
      icon: Cake
    },
    {
      time: "18:00 - 22:00",
      title: "První tanec",
      description: "",
      icon: Music
    },
    {
      time: "22:00",
      title: "DJ a party",
      description: "",
      icon: PartyPopper
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-section">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Harmonogram
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Orientační program
          </h2>
          <div className="section-divider mt-8" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold to-gold/20 transform md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon bubble */}
                <div className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-cream border-2 border-gold flex items-center justify-center z-10 shadow-md">
                  <event.icon className="w-5 h-5 text-gold" />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <div className="bg-card p-6 rounded-lg border border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-lg">
                    <p className="font-body text-sm tracking-wide text-gold mb-2">
                      {event.time}
                    </p>
                    <h3 className="font-heading text-xl md:text-2xl text-foreground mb-1">
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="font-body text-sm text-muted-foreground">
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
