import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-toys.jpg";
import latheImg from "@/assets/craft-lathe.jpg";
import dyesImg from "@/assets/lac-dyes.jpg";
import dollsImg from "@/assets/toy-dolls.jpg";
import cartImg from "@/assets/toy-cart.jpg";
import fruitsImg from "@/assets/toy-fruits.jpg";
import dasaImg from "@/assets/toy-dasavataram.jpg";
import utilityImg from "@/assets/toy-utility.jpg";
import ganeshaImg from "@/assets/toy-ganesha.png";
import krishnaImg from "@/assets/toy-krishna.png";
import decorImg from "@/assets/toy-decor.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Etikoppaka Bommalu — Handcrafted Wooden Toys from Andhra Pradesh" },
      {
        name: "description",
        content:
          "Etikoppaka Bommalu by Sunil — GI-tagged handcrafted wooden toys, figurines and utility ware turned from Ankudu ivory wood and finished with natural lac dyes.",
      },
      { property: "og:title", content: "Etikoppaka Bommalu — Handcrafted Wooden Toys" },
      {
        property: "og:description",
        content: "Lathe-turned Ankudu wood toys finished with natural lac dyes. A 400-year living craft from Etikoppaka, Andhra Pradesh.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const WA_NUMBER = "917993109881";
function waUrl(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
const WA_GENERIC = waUrl("Hi Sunil, I'd like to place an order with Etikoppaka Bommalu. Please share your catalogue.");

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.521.074-.794.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const products = [
  { img: dollsImg, name: "Dancing Dolls", tag: "Figurines", desc: "Festive couple sets and traditional dancers in lac red and ochre." },
  { img: cartImg, name: "Bullock Cart", tag: "Heritage", desc: "The iconic Etikoppaka bullock cart — a childhood classic." },
  { img: dasaImg, name: "Dasavataram Set", tag: "Devotional", desc: "The ten avatars of Vishnu, carved and painted by hand." },
  { img: ganeshaImg, name: "Lord Ganesha", tag: "Devotional", desc: "A beautifully hand-carved Ganesha idol finished in vibrant terracotta lac." },
  { img: krishnaImg, name: "Lord Krishna", tag: "Devotional", desc: "Traditional Venugopala (Krishna with flute) idol with glossy lacquer details." },
  { img: fruitsImg, name: "Fruits & Veg", tag: "Play Set", desc: "Smooth, child-safe play food sealed with natural lac." },
  { img: utilityImg, name: "Utility Vessels", tag: "Home", desc: "Small bowls, kumkum boxes and spinning tops for daily use." },
  { img: decorImg, name: "Decor Pieces", tag: "Decor", desc: "Sculptural accents that bring warmth to any shelf." },
];

function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Nav />
        <Hero />
        <Marquee />
        <Story />
        <Process />
        <Collection />
        <Heritage />
        <Contact />
        <Footer />
      </main>
      <a
        href={WA_GENERIC}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3 text-sm font-medium shadow-xl hover:bg-[#128C7E] transition-all hover:scale-105"
        aria-label="Order on WhatsApp"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="hidden sm:inline">Order on WhatsApp</span>
      </a>
    </>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-full bg-primary grid place-items-center text-primary-foreground font-display text-lg">E</span>
          <span className="font-display text-lg leading-tight">
            Etikoppaka<br/><span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Bommalu</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#story" className="hover:text-primary transition-colors">Story</a>
          <a href="#process" className="hover:text-primary transition-colors">Craft</a>
          <a href="#collection" className="hover:text-primary transition-colors">Collection</a>
          <a href="#heritage" className="hover:text-primary transition-colors">Heritage</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <a href={WA_GENERIC} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-2 text-sm font-medium hover:bg-[#128C7E] transition-colors">
          <WhatsAppIcon className="h-4 w-4" /> Order Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest uppercase text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> GI Tagged · Since 17th Century
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Wood that <em className="text-primary not-italic">remembers</em> the hands that shaped it.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            From the soft Ankudu ivory wood of coastal Andhra, turned on a hand-lathe and washed in lac-based natural dyes — toys, figurines and vessels born of a 400-year-old village craft.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#collection" className="rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
              Browse the Collection
            </a>
            <a href="#story" className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium hover:bg-muted transition-colors">
              Meet the Maker
            </a>
          </div>
          <div className="flex items-center gap-8 pt-6">
            <Stat n="400+" l="Years of craft" />
            <Stat n="100%" l="Natural lac dye" />
            <Stat n="Ankudu" l="Soft ivory wood" />
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-accent/30 via-primary/10 to-leaf/20 blur-3xl rounded-full" />
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
            <img src={heroImg} alt="Hand-painted Etikoppaka wooden toys" width={1600} height={1200} className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl max-w-[200px] hidden md:block">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Made by</p>
            <p className="font-display text-lg">Sunil & artisans</p>
            <p className="text-xs text-muted-foreground">Etikoppaka village, AP</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl text-primary">{n}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">{l}</div>
    </div>
  );
}

function Marquee() {
  const items = ["Lac-Dyed", "Lathe-Turned", "Child-Safe", "Hand-Painted", "GI Tagged", "Eco-Friendly", "Heirloom Quality"];
  return (
    <div className="border-y border-border bg-card/50 py-5 overflow-hidden">
      <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-2xl text-muted-foreground flex items-center gap-12">
            {t} <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { to { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
}

function Story() {
  return (
    <section id="story" className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <img src={latheImg} alt="Artisan turning wood on a lathe" width={1200} height={900} loading="lazy" className="rounded-2xl border border-border shadow-xl w-full" />
        <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground rounded-2xl p-6 max-w-[240px] hidden md:block">
          <p className="font-display text-3xl leading-tight">A craft of patience.</p>
        </div>
      </div>
      <div className="space-y-6">
        <span className="text-xs tracking-[0.3em] uppercase text-primary">The Story</span>
        <h2 className="font-display text-4xl md:text-5xl leading-tight">
          A village on the banks of the Varaha, still turning toys by hand.
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Etikoppaka is a small village in Andhra Pradesh where wooden toymaking has been a way of life since the 17th century. The craft uses <em>Ankudu</em> (Wrightia tinctoria) — a soft, lightweight ivory-coloured wood that takes a lathe like butter and a brush like silk.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Sunil leads a small workshop carrying this tradition forward — making toys, figurines, kitchen miniatures and decorative vessels finished entirely with natural lac dyes from seed lac, vegetables and minerals. No chemicals. No plastic. Just wood, colour, and care.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {["Wrightia tinctoria", "Lac resin", "Vegetable dyes", "Hand lathe", "Geographical Indication"].map((t) => (
            <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Seasoning the wood", d: "Ankudu logs are cut and seasoned for weeks until they take the lathe cleanly." },
    { n: "02", t: "Turning on the lathe", d: "Each piece is shaped on a traditional lathe — no two pieces are exactly alike." },
    { n: "03", t: "Lac & natural dyes", d: "Sticks of lac mixed with vegetable colour are pressed against the spinning piece to coat it." },
    { n: "04", t: "Hand-painted detail", d: "Faces, borders and motifs are added with fine brushes, then sealed with a final polish." },
  ];
  return (
    <section id="process" className="bg-card/60 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-6">
          <span className="text-xs tracking-[0.3em] uppercase text-primary">The Craft</span>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">Four steps. Countless hours.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Every Etikoppaka toy passes through the same patient sequence — the way it has for generations.
          </p>
          <img src={dyesImg} alt="Bowls of natural lac dyes" width={1200} height={900} loading="lazy" className="rounded-2xl border border-border w-full mt-6" />
        </div>
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl bg-background border border-border p-7 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group">
              <div className="font-display text-5xl text-primary/30 group-hover:text-primary transition-colors">{s.n}</div>
              <h3 className="font-display text-2xl mt-3">{s.t}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Collection() {
  return (
    <section id="collection" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-primary">The Collection</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 leading-tight max-w-xl">
            Toys, figurines &amp; vessels for everyday wonder.
          </h2>
        </div>
        <a href="#contact" className="text-sm font-medium text-primary hover:underline underline-offset-4">
          Enquire for the full catalogue →
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <article key={i} className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500">
            <div className="aspect-square overflow-hidden bg-secondary">
              <img src={p.img} alt={p.name} width={900} height={900} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-xl">{p.name}</h3>
                <span className="text-[10px] tracking-widest uppercase text-muted-foreground border border-border rounded-full px-2 py-0.5">{p.tag}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <a
                href={waUrl(`Hi Sunil, I'm interested in ordering ${p.name} from Etikoppaka Bommalu. Please share details and price.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2 text-xs font-medium hover:bg-[#128C7E] transition-colors"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" /> Order on WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Heritage() {
  return (
    <section id="heritage" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="rounded-3xl bg-gradient-to-br from-primary via-primary to-[oklch(0.42_0.16_25)] text-primary-foreground p-10 md:p-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="text-xs tracking-[0.3em] uppercase opacity-80">GI Tagged Craft</span>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              A 17th-century craft, protected for the centuries to come.
            </h2>
            <p className="opacity-90 leading-relaxed">
              Etikoppaka toys hold a Geographical Indication, recognising the village's distinctive lac-turnery as an irreplaceable cultural heritage of India. Every piece you take home keeps a working artisan at the lathe tomorrow.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {[
              ["100%", "Natural materials"],
              ["0", "Plastic or chemicals"],
              ["12+", "Artisan families"],
              ["GI", "Protected origin"],
            ].map(([n, l]) => (
              <li key={l} className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-5">
                <div className="font-display text-4xl">{n}</div>
                <div className="text-xs uppercase tracking-wider opacity-80 mt-1">{l}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <span className="text-xs tracking-[0.3em] uppercase text-primary">Get in Touch</span>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Order a piece, or commission a custom set.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We make to order for boutiques, gift stores, schools and collectors across India and abroad. Reach out and we'll share the catalogue, prices and lead times.
          </p>
        </div>
        <div className="rounded-2xl bg-card border border-border p-8 space-y-5">
          <ContactRow label="Owner" value="Sunil" />
          <ContactRow label="Phone" value="+91 79931 09881" href="tel:+917993109881" />
          <ContactRow label="WhatsApp" value="+91 79931 09881" href="https://wa.me/917993109881" />
          <ContactRow label="Workshop" value="Etikoppaka Village, Anakapalle District, Andhra Pradesh" />
          <a href={WA_GENERIC} target="_blank" rel="noopener noreferrer" className="block text-center rounded-full bg-[#25D366] text-white px-6 py-4 text-sm font-medium hover:bg-[#128C7E] transition-colors mt-2">
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div className="flex justify-between items-baseline gap-4 border-b border-border pb-4">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="font-display text-lg text-right">{value}</span>
    </div>
  );
  return href ? <a href={href} className="block hover:text-primary transition-colors">{content}</a> : content;
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Etikoppaka Bommalu · Handcrafted by Sunil & artisans</p>
        <p className="font-display italic">"Made slowly, to last long."</p>
      </div>
    </footer>
  );
}
