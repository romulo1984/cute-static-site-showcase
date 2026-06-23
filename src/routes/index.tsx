import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Café da Esquina — Café artesanal e momentos especiais" },
      { name: "description", content: "Café da Esquina: grãos selecionados, ambiente acolhedor e o melhor espresso da cidade. Venha fazer uma pausa." },
      { property: "og:title", content: "Café da Esquina — Café artesanal e momentos especiais" },
      { property: "og:description", content: "Grãos selecionados, ambiente acolhedor e o melhor espresso da cidade." },
      { property: "og:image", content: "https://id-preview--06bc115b-cbf4-4e61-8507-97658f2e7ad4.lovable.app/images/cafe-hero.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://id-preview--06bc115b-cbf4-4e61-8507-97658f2e7ad4.lovable.app/images/cafe-hero.jpg" },
    ],
  }),
  component: Index,
});

const menuItems = [
  { name: "Espresso", description: "Intenso, curto e encorpado — o clássico", price: "R$ 8" },
  { name: "Cappuccino", description: "Espresso com leite vaporizado e toque de canela", price: "R$ 12" },
  { name: "Latte Art", description: "Café suave coberto por leite cremoso e arte", price: "R$ 14" },
  { name: "Cold Brew", description: "Extraído a frio por 18 horas, refrescante", price: "R$ 13" },
  { name: "Pão de Queijo", description: "Crocante por fora, macio por dentro", price: "R$ 9" },
  { name: "Bolo de Cenoura", description: "Com cobertura de chocolate meio amargo", price: "R$ 11" },
];

const highlights = [
  { title: "Grãos selecionados", text: "Trabalhamos com torras pequenas e fornecedores locais." },
  { title: "Ambiente acolhedor", text: "Um cantinho tranquilo para trabalhar, ler ou conversar." },
  { title: "Atendimento carinhoso", text: "Quem serve seu café também ama o que faz." },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">☕</span>
            Café da Esquina
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
            <a href="#sobre" className="transition-colors hover:text-foreground">Sobre</a>
            <a href="#cardapio" className="transition-colors hover:text-foreground">Cardápio</a>
            <a href="#contato" className="transition-colors hover:text-foreground">Contato</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/cafe-hero.jpg"
              alt="Xícara de café fumegante sobre balcão de madeira em cafeteria acolhedora"
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          </div>
          <div className="relative mx-auto flex max-w-5xl flex-col justify-center px-6 py-24 sm:py-32 lg:py-40">
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">Desde 2018</p>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                A pausa que você merece
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Café artesanal, aroma de grãos frescos e um cantinho que parece abraço. Venha descobrir seu novo lugar favorito.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#cardapio"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow"
                >
                  Ver cardápio
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-accent"
                >
                  Como chegar
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <div className="grid gap-12 sm:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground">Mais que café, um convite</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                O Café da Esquina nasceu da vontade de criar um espaço onde o tempo desacelera. Aqui cada xícara é preparada com atenção, cada cliente é recebido com um sorriso e cada visita vira um momento.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Usamos grãos de pequenos produtores, torrados semanalmente para garantir frescor e sabor em cada gole.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-1">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="text-lg font-medium text-card-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cardapio" className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-foreground">Nosso cardápio</h2>
              <p className="mt-3 text-muted-foreground">Sabores que acompanham seu dia, do café da manhã à tarde</p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div>
                    <h3 className="text-lg font-medium text-card-foreground">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                  <p className="mt-4 text-lg font-semibold text-primary">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <h2 className="text-3xl font-semibold text-card-foreground">Venha nos visitar</h2>
                <p className="mt-4 text-muted-foreground">
                  Estamos esperando por você de segunda a sábado, das 7h às 19h.
                </p>
                <dl className="mt-8 space-y-4 text-sm">
                  <div>
                    <dt className="font-medium text-card-foreground">Endereço</dt>
                    <dd className="mt-1 text-muted-foreground">Rua dos Cafés, 42 — Centro</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-card-foreground">Horário</dt>
                    <dd className="mt-1 text-muted-foreground">Seg a Sáb: 7h — 19h</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-card-foreground">Contato</dt>
                    <dd className="mt-1 text-muted-foreground">oi@cafedaesquina.com · (11) 98765-4321</dd>
                  </div>
                </dl>
              </div>
              <div className="relative min-h-[16rem] bg-muted lg:min-h-full">
                <div className="absolute inset-0 flex items-center justify-center bg-accent/30">
                  <span className="text-6xl" role="img" aria-label="Mapa decorativo">
                    🗺️
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Café da Esquina. Feito com carinho e café.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="transition-colors hover:text-foreground">Instagram</a>
              <a href="#" className="transition-colors hover:text-foreground">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
