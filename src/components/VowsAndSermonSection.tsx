import { Heart, BookOpen, Scroll } from "lucide-react";

const VowsAndSermonSection = () => {
  const handleScrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-32 bg-warm-white border-t border-border/30">
      <div className="container max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Vzpomínka na obřad
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Sliby a kázání
          </h2>
          <div className="section-divider mt-8" />
        </div>

        {/* Vows (Sliby) Header */}
        <div className="text-center mb-10">
          <h3 className="font-heading text-2xl md:text-3xl text-foreground flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-gold fill-gold/20" />
            <span>Svatební sliby</span>
          </h3>
        </div>

        {/* Vows Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-24">
          
          {/* Kryštof's Vow */}
          <div
            id="slib-krystofa"
            className="scroll-mt-24 bg-card p-8 md:p-10 rounded-lg border border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                  <Scroll className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-heading text-2xl text-foreground">Slib Kryštofa</h4>
              </div>

              <div className="font-body text-muted-foreground leading-relaxed space-y-4 text-sm md:text-base">
                <p className="font-semibold text-foreground">Milá Eliško,</p>
                <p>
                  Už je to 7 let od chvíle, kdy jsem tě poprvé uviděl. Bylo to po probdělé noci, kdy jsem si cestou na první cviko angličtiny přál jediné – vrátit se zpátky do postele.
                </p>
                <p>
                  Hodina začala, čte se docházka, očima projíždím třídu a slyším „Sauerová“. Říkám si – jmenovkyně mého kamaráda – je moc hezká – a ještě se na mě usmála. Plný sebevědomí z toho úsměvu jsem si tehdy myslel, že jsem i po dvou hodinách spánku musel zanechat skvělý dojem.
                </p>
                <p>
                  Chyba! Další týden, natěšený na další cviko, Eliška nikde. Angličtinu sis odhlásila. Zas takový dojem jsem asi nezanechal, pomyslel jsem si. Nicméně sebral jsem veškerou svou odvahu a napsal ti.
                </p>
                <p>
                  Od té doby mě každý den přesvědčuješ, že to bylo nejlepší rozhodnutí mého života. Mám rád, jak mě motivuješ být lepším člověkem. Jak jsi na mě hodná. Jak jsi střelená a jak mě nikdo nedokáže rozesmát jako ty. Ve tvé přítomnosti se cítím neuvěřitelně šťastný. A já ti slibuji, že se budu po zbytek našich dní snažit, abys ses vedle mě cítila stejně.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border/30">
              <p className="font-heading text-xl text-gold italic text-right">Moc tě miluju!</p>
            </div>
          </div>

          {/* Eliška's Vow */}
          <div
            id="slib-elisky"
            className="scroll-mt-24 bg-card p-8 md:p-10 rounded-lg border border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                  <Scroll className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-heading text-2xl text-foreground">Slib Elišky</h4>
              </div>

              <div className="font-body text-muted-foreground leading-relaxed space-y-4 text-sm md:text-base">
                <p className="font-semibold text-foreground">Můj milovaný Kryštofe,</p>
                <p>
                  už od začátku našeho vztahu jsem cítila, že jsi pro mě ten pravý. A s každým dalším dnem se mi to jen potvrzuje.
                </p>
                <p>
                  Ze všeho nejraději mám na tobě to, jak jsi starostlivý, pozorný a láskyplný. Vím, že bys pro mě udělal první poslední. Miluji tvůj humor, tvoje pozitivní nastavení a hlavně to, jak se umíš radovat i z těch nejmenších maličkostí. Obdivuji na tobě, jak jsi všestranný a daří se ti vše, na co sáhneš.
                </p>
                <p>
                  Dnes bych ti tady chtěla slíbit, že tě budu navždy milovat. Slibuji, že tu pro tebe vždy budu — v dobrém i ve zlém. Že při tobě budu stát, podporovat tě a budu ti oporou ve všech životních chvílích.
                </p>
                <p>
                  A protože se spolu rádi smějeme, tak ti také slibuji, že tě nechám dívat se na fotbal, aniž bych u toho remcala. A když si to budeš přát, tak si na sebe obleču i dres.
                </p>
                <p>
                  Každý den s tebou mě dělá šťastnou, a proto právě s tebou chci sdílet všechny radosti, výzvy i běžné každodenní chvíle.
                </p>
                <p>
                  Děkuji ti za to, jaký jsi, a za všechnu lásku, kterou mi dáváš a těším se na všechno, co nás společně ještě čeká.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border/30">
              <p className="font-heading text-xl text-gold italic text-right">Moc tě miluji</p>
            </div>
          </div>

        </div>

        {/* Sermon Section */}
        <div className="max-w-3xl mx-auto">
          
          {/* Sermon Header */}
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl md:text-3xl text-foreground flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-gold" />
              <span>Svatební kázání</span>
            </h3>
            <div className="w-12 h-px bg-gold/30 mx-auto" />
          </div>

          {/* Sermon Text Card */}
          <div className="bg-card p-8 md:p-12 rounded-lg border border-border/50 shadow-sm font-body text-sm md:text-base text-muted-foreground leading-relaxed space-y-6">
            
            <p className="font-semibold text-foreground">
              Vážení svatební hosté, Milá Eliško, Kryštofe,
            </p>
            
            <p>
              dnes tu nestojíme na úplném začátku. Eliška a Kryštof už spolu kráčejí nějaký ten čas a mají za sebou kus společné cesty, na které už stihli ledacos prožít a překonat.
            </p>
            
            <p>
              O to vzácnější pro mě bylo, že jsme se před dnešním dnem mohli setkávat při předmanželských rozhovorech.
            </p>
            
            <p>
              Byl to velmi dobrý a obohacující čas. Šli jsme do hloubky. Hledali jsme, co znamená tvořit skutečný domov, jak si být oporou a kde brát sílu.
            </p>
            
            <p>
              Eliško, Kryštofe, vy dva už tušíte, co společný život obnáší. Dnešek je důležitým milníkem, kdy zopakujete a veřejně a nahlas potvrdíte slib, který ve svých srdcích žijete už delší dobu. Přicházíte si pro požehnání, protože – jak oba víte – na dobré manželství nestačí jen láska. Je k němu zapotřebí i velká dávka moudrosti a trpělivosti. A právě o tuto moudrost a požehnání pro vás dnes společně prosíme.
            </p>
            
            <p>
              Když jsem přemýšlel o tom, co vám dnes na prahu vašeho společného života říct, napadlo mě, že manželství je skutečně běh na velmi dlouhou trať. Z rozhovorů s lidmi, kteří už spolu nějaký ten pátek žijí, vnímám, že občas přijdou dny, které člověka vyčerpají. Dny, kdy si večer sednete, jste unavení z práce, z budování domova, z řešení každodenních starostí a ptáte se sami sebe, kde zítra zase vezmete energii na to být milující a trpělivý.
            </p>

            <blockquote className="border-l-4 border-gold pl-6 py-2 my-8 italic font-heading text-lg md:text-xl text-foreground/90 bg-warm-white/50 rounded-r-md">
              „Já jsem vinný kmen, vy jste ratolesti. Kdo zůstává ve mně a já v něm, ten nese hojné ovoce; neboť beze mne nemůžete činit nic.“
            </blockquote>

            <p>
              V dnešní společnosti, která je často založená na tlaku na výkon, na dokonalou prezentaci na sociálních sítích a na viditelném úspěchu, je složité kráčet proti proudu. Učit se spolu žít není něco, co se dá změřit tabulkami.
            </p>
            
            <p>
              Ježíšova metafora ovoce se mi velmi líbí. Úsměv, který věnujete jeden druhému po těžkém dni, trpělivost, se kterou si nasloucháte, schopnost odpustit si a důstojnost, kterou si navzájem přiznáváte – to nejsou položky, které si člověk odškrtá v to-do listu. Je to ovoce vaší lásky. Nenechte se zaplavit frustrací, když váš vztah nebude přinášet vždy jen slunečné dny a pohodu. Dobré ovoce, dobré víno a dobré manželství potřebují čas, aby dozrály.
            </p>
            
            <p>
              Ježíš mluví o hroznech. Zkušení vinaři vědí, že aby réva nesla dobré ovoce, musí se prořezávat. A to nejen ty suché větve, ale občas i ty živé. I vy se v manželství budete muset občas zastavit, přezkoumat svůj život a &quot;odříznout&quot; věci, které váš vztah zbytečně vyčerpávají.
            </p>
            
            <p>
              Může to být přílišná snaha vyhovět všem lidem okolo, přehnané nároky v práci na úkor rodiny, nebo lpění na vlastním egu a představách, které už nefungují. Prořezávání bolí. Znamená to nastavit si hranice směrem ven, vůči světu, abyste ochránili to cenné, co máte uvnitř vašeho domova. Tyto hranice jsou ale nezbytné k tomu, abyste nevyhořeli a mohli dál dávat to nejlepší ze sebe jeden druhému.
            </p>
            
            <p>
              Když odříznete větev od zdroje, usychá. Může se pak svatosvatě snažit ze sebe vymáčknout to nejlepší, ale kde nic není, ani smrt nebere. Větev přináší hrozny jen tím, že zůstává pevně spojená s kmenem. Že z něj čerpá mízu.
            </p>
            
            <p>
              Manželství se nedá dlouhodobě táhnout jen přes sílu nebo vůli. Vůle se časem vyčerpá. Potřebujete zdroj. Potřebujete svůj společný &quot;kmen&quot;. Tím zdrojem je pro vás vaše rodina, přátelé, kteří vás podepírají, vzájemná úcta, a pro nás, kdo věříme, je tím nevyčerpatelným zdrojem Kristus, který je kmenem samotné lásky.
            </p>
            
            <p>
              Hledejte vždy cestu zpátky ke svým zdrojům. Zůstávejte napojeni na životodárnou lásku, ze které jste vzešli. Jen napojení a odpočatí lidé mohou dlouhodobě a s radostí kráčet společným životem.
            </p>
            
            <p>
              Chtěl bych vám tedy do dalších společných let popřát: Mějte odvahu prořezávat ze svého života to, co váš vztah vysává. Radujte se ze společného ovoce, z vašeho domova a z lásky, která mezi vámi roste. A především – nikdy nezapomínejte pečovat o své vlastní zdroje a o spojení s tím, co vám dává sílu a smysl.
            </p>
            
            <p>
              Toho, jenž je sám Láskou, který – protože to ani jinak neumí – odpouští všechny naše špatnosti, slabosti i viny a přijímá nás takové, jací skutečně jsme – Toho, Hospodina Jediného, dnes prosíme, aby vašemu úsilí žehnal.
            </p>
            
            <p>
              Manželství se uzavírá „svobodným a úplným souhlasným projevem vůle muže a ženy, kteří hodlají vstoupit do manželství. Občanský zákoník dále stanoví, že svatební obřad je veřejný a slavnostní a koná se v přítomnosti dvou svědků.
            </p>
            
            <p>
              Milá Eliško, drahý Kryštofe, rozhodli jste se spolu uzavřít manželství a prokázali jste, že vašemu sňatku nic nebrání. Splnili jste tak povinnosti dané zákony České republiky.
            </p>
            
            <p>
              Nyní odpovězte přede mnou i před svědky Anetou a Dominikem, zda vstupujete do manželství dobrovolně. Je-li tomu tak, odpovězte každý sám za sebe: <strong className="text-foreground">Ano.</strong>
            </p>
            
            <p>
              Součástí vašeho souhlasu je také slib, který si dáváte navzájem...
            </p>

            {/* Anchors / Navigation Links to the Vows */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center py-6 border-t border-b border-border/30 my-8 bg-warm-white/30 rounded-md">
              <a
                href="#slib-krystofa"
                onClick={handleScrollTo("slib-krystofa")}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-card border border-gold/30 hover:border-gold text-foreground hover:text-gold font-body text-sm tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Slib Kryštofa
              </a>
              <a
                href="#slib-elisky"
                onClick={handleScrollTo("slib-elisky")}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-card border border-gold/30 hover:border-gold text-foreground hover:text-gold font-body text-sm tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Slib Elišky
              </a>
            </div>

            <p className="italic text-foreground">
              Pán Bůh vám požehnej a buď při vás svou láskou. Co Bůh spojil, člověk nerozlučuj. Amen.
            </p>
            
            <p>
              Milá Eliško, Kryštofe, drazí svědci, nyní nastává moment, kdy tuto slavnostní příležitost musíme také právně uchopit. Prosím vás o vaše podpisy. <span className="text-muted-foreground/60 text-xs italic">/a nůžky a razítko!</span>
            </p>
            
            <p className="font-heading text-xl text-foreground text-center py-2 border-y border-gold/10">
              Nyní vás prohlašuji za muže a ženu!
            </p>

            {/* Modlitba & Požehnání Sub-sections */}
            <div className="pt-8 border-t border-border/30 space-y-8">
              
              <div>
                <h4 className="font-heading text-2xl text-foreground mb-4">Modlitba</h4>
                <p>
                  Hospodine, dobrý Otče – dokonale znáš Elišku a Kryštofa. Víš o jejich silných stránkách a vidíš jim až do morku kostí – ani jejich slabosti ti nejsou skryté. Spojuješ je však v jednu bytost, formuješ z nich nové stvoření, nového člověka. Prosíme, aby s jistotou tvé přítomnosti dokázali své rozdíly přijímat a překonávat, aby se na společné cestě navzájem podepírali. Požehnej jim a buď při nich svou láskou. Co jsi spojil ty, ať nerozdělí ani člověk, ani smrt. Amen.
                </p>
              </div>

              <div className="pt-6 border-t border-border/20">
                <p className="font-semibold text-foreground mb-4">Na závěr společně přijměme požehnání:</p>
                <div className="font-heading text-lg md:text-xl text-foreground italic text-center space-y-2 py-4 bg-warm-white/40 rounded-md">
                  <p>Nakonec, přátelé: žijte v radosti,</p>
                  <p>napravujte své nedostatky,</p>
                  <p>povzbuzujte se,</p>
                  <p>buďte jednomyslní, pokojní,</p>
                  <p>a Bůh lásky a pokoje bude s vámi. Amen.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default VowsAndSermonSection;
