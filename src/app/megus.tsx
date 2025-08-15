function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Empodera <span style={{ color: brand.brown }}>historias</span> y conquista metas.
          </h2>
          <p className="mt-4 text-neutral-600">
            Plataforma tipo Ko‑fi/BuyMeACoffee para <b>Proyectos</b>, <b>Historias</b> y <b>Blogs</b> de la comunidad Cachakita.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl text-white font-semibold"
              style={{ background: brand.brown }}
            >
              Ver proyectos <ArrowRight size={16} />
            </a>
            <a
              href="#historias"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl border font-semibold"
            >
              Leer historias <Share2 size={16} />
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1612197527762-8cfb55b6183a?q=80&w=800&auto=format&fit=crop"
            alt="Hero"
            className="w-full rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
