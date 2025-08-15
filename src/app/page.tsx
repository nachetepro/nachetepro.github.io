"use client";

import React, { CSSProperties } from "react";
import Image from "next/image";
import { motion, MotionStyle } from "framer-motion";
import { Coffee, Heart, Newspaper, ArrowRight, Share2, Home, User, Settings } from "lucide-react";

const brand = {
  camel: "#EEE7DE",
  darkBrown: "#3E251B",
  beige: "#FFFEFB",
  green: "#6BBF59",
};

const texturePattern =
  "repeating-radial-gradient(circle at 10% 20%, rgba(120,90,60,0.08) 0px, rgba(120,90,60,0.08) 1px, transparent 1px, transparent 3px)";

const makeBarStyle = (darken = 0.14) => ({
  backgroundColor: brand.camel,
  backgroundImage: `linear-gradient(rgba(0,0,0,${darken}), rgba(0,0,0,${darken})), ${texturePattern}`,
  backgroundBlendMode: "multiply, normal",
});

const asMotionStyle = (s: CSSProperties): MotionStyle => s;

const logoSrc = "https://images.unsplash.com/photo-1612197527762-8cfb55b6183a?q=80&w=800&auto=format&fit=crop";

const stories = [
  { id: 1, name: "Ana", img: "https://loveme.es/images/p220113-1.jpg", caption: "Moda casual con propósito" },
  { id: 2, name: "Luz", img: "https://loveme.es/images/p222565-1.jpg", caption: "Ayuda emocional" },
  { id: 3, name: "Sol", img: "https://loveme.es/images/p222852-1.jpg", caption: "Historias reales" },
  { id: 4, name: "Val", img: "https://loveme.es/images/p200404-1.jpg", caption: "Deporte fit" },
];

const projects = [
  { id: 101, title: "Regalito Coffee – Microbecas", img: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1200&auto=format&fit=crop", desc: "Becas para cursos cortos...", goal: 1200, raised: 540 },
  { id: 102, title: "Moda con causa – Colección Fit", img: "https://www.dynamicgc.es/wp-content/uploads/2020/06/mujeres-emprendedoras.jpg", desc: "Línea deportiva...", goal: 2000, raised: 880 },
  { id: 103, title: "Historias que curan", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop", desc: "Mini-documentales...", goal: 1500, raised: 300 },
];

const posts = [
  { id: 201, title: "Guía de estilo casual con impacto", img: "https://www.bbva.com/wp-content/uploads/2023/05/mujeres-emprendedoras-apertura.jpg", excerpt: "Cómo elegir prendas versátiles...", date: "Aug 14, 2025" },
  { id: 202, title: "Rutas de cafetales: turismo consciente", img: "https://images.unsplash.com/photo-1470137430626-983a37b8ea46?q=80&w=1200&auto=format&fit=crop", excerpt: "Itinerarios y tips para viajar...", date: "Aug 08, 2025" },
  { id: 203, title: "Primeros auxilios emocionales", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop", excerpt: "Herramientas prácticas...", date: "Aug 01, 2025" },
];

const pct = (n: number, d: number) => Math.min(100, Math.round((n / d) * 100));

function Progress({ value }: { value: number }) {
  return (
    <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
      <motion.div 
        className="h-full rounded-full" 
        style={asMotionStyle({ backgroundColor: brand.darkBrown })}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}

function Sidebar() {
  return (
    <aside
      className="hidden sm:flex fixed top-0 left-0 h-full w-20 flex-col items-center py-6 gap-8 text-neutral-100 shadow-lg"
      style={{ ...makeBarStyle(0.16), opacity: 0.95 }}
    >
      <motion.div
        animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <Image src={logoSrc} alt="logo" width={64} height={64} className="rounded-2xl object-cover ring-3 ring-white/60 shadow-lg"/>
      </motion.div>
      <Home size={24} className="hover:scale-110 transition-transform" />
      <User size={24} className="hover:scale-110 transition-transform" />
      <Heart size={24} className="hover:scale-110 transition-transform" />
      <Settings size={24} className="hover:scale-110 transition-transform" />
    </aside>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 shadow-lg" style={{ ...makeBarStyle(0.14), opacity: 0.97 }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4 sm:gap-6 text-neutral-50">
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [0, 2, -2, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Image src="/logo.png" alt="Logo" width={56} height={56} className="object-contain rounded-xl shadow-md"/>
        </motion.div>
        <h1 className="font-black tracking-tight text-xl sm:text-2xl md:text-3xl" style={{ 
          fontFamily: 'system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu", "Cantarell", sans-serif',
          letterSpacing: '-1px',
          background: 'linear-gradient(45deg, #ffffff, #f0f0f0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 1px 2px rgba(0,0,0,0.2)'
        } as CSSProperties}>
          Cachakita Honey
        </h1>
        <nav className="ml-auto hidden md:flex items-center gap-4 md:gap-8 text-sm font-medium">
          <a href="#proyectos" className="hover:opacity-90 transition-opacity">Proyectos</a>
          <a href="#historias" className="hover:opacity-90 transition-opacity">Historias</a>
          <a href="#blog" className="hover:opacity-90 transition-opacity">Blogs</a>
        </nav>
        <motion.a
          href="https://buymeacoffee.com/"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base text-white shadow-lg transition-all"
          style={asMotionStyle({
            backgroundImage: `linear-gradient(135deg, ${brand.darkBrown}, #2d1a11)`,
            fontFamily: 'system-ui, sans-serif'
          })}
        >
          <Coffee size={16} /> Apoyar
        </motion.a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-6" style={{ 
            color: brand.darkBrown,
            fontFamily: 'system-ui, -apple-system, "Segoe UI", "Roboto", sans-serif',
            letterSpacing: '-2px'
          }}>
            Empodera <span className="underline decoration-4" style={{ textDecorationColor: brand.green }}>historias</span> y conquista metas.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-700 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Plataforma tipo Ko-fi/BuyMeACoffee para <b>Proyectos</b>, <b>Historias</b> y <b>Blogs</b> de la comunidad Cachakita.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#proyectos"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-white font-bold text-lg shadow-lg w-full sm:w-auto"
              style={asMotionStyle({
                backgroundImage: `linear-gradient(135deg, ${brand.darkBrown}, #2d1a11)`,
                fontFamily: 'system-ui, sans-serif'
              })}
            >
              Ver proyectos <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="https://ko-fi.com/feed"
              target="_blank"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-white font-bold text-lg shadow-lg w-full sm:w-auto"
              style={asMotionStyle({
                backgroundImage: `linear-gradient(135deg, ${brand.green}, #5aa849)`,
                fontFamily: 'system-ui, sans-serif'
              })}
            >
              Donar ahora <Coffee size={20} />
            </motion.a>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
            {stories.slice(0, 6).map((s) => (
              <Image key={s.id} src={s.img} alt={s.name} width={120} height={120} className="rounded-2xl object-cover shadow-md"/>
            ))}
          </div>
          <p className="text-sm text-neutral-500 mt-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
            *Mosaico de historias (demo).
          </p>
        </div>
      </div>
    </section>
  );
}

// StoriesRail
function StoriesRail() {
  return (
    <section id="historias" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h3 className="text-2xl font-black mb-6" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '-1px' }}>
        Historias
      </h3>
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
        {stories.map((s) => (
          <motion.div key={s.id} whileHover={{ y: -4, scale: 1.05 }} className="flex flex-col items-center gap-3 snap-start">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-3 shadow-lg" style={{ borderColor: brand.green }}>
              <Image src={s.img} alt={s.name} width={112} height={112} className="w-full h-full object-cover"/>
            </div>
            <p className="text-sm font-bold" style={{ fontFamily: 'system-ui, sans-serif' }}>{s.name}</p>
            <p className="text-xs text-neutral-500 text-center max-w-20" style={{ fontFamily: 'system-ui, sans-serif' }}>{s.caption}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ProjectCard
function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  const progress = pct(p.raised, p.goal);
  return (
    <motion.article whileHover={{ y: -6, scale: 1.02 }} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <Image src={p.img} alt={p.title} width={400} height={240} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h4 className="font-black text-xl mb-2" style={{ color: brand.darkBrown, fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.5px' }}>{p.title}</h4>
        <p className="text-sm text-neutral-600 mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>{p.desc}</p>
        <div className="mb-3 flex items-center justify-between text-sm font-medium">
          <span>Recaudado: ${p.raised}</span>
          <span className="text-neutral-500">Meta: ${p.goal}</span>
        </div>
        <Progress value={progress} />
        <div className="mt-2 text-xs text-neutral-600 text-center">{progress}% completado</div>
        <div className="mt-4 flex items-center gap-3">
          <motion.a href="https://buymeacoffee.com/" target="_blank" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-white text-sm font-bold shadow-md" style={asMotionStyle({ backgroundImage: `linear-gradient(135deg, ${brand.darkBrown}, #2d1a11)`, fontFamily: 'system-ui, sans-serif' })}>
            <Coffee size={16}/> Apoyar
          </motion.a>
          <a href="#" className="ml-auto text-sm text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-1 font-medium">
            Compartir <Share2 size={14}/>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

// Projects
function Projects() {
  return (
    <section id="proyectos" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h3 className="text-2xl font-black mb-6" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '-1px' }}>Proyectos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => <ProjectCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}

// BlogCard
function BlogCard({ b }: { b: (typeof posts)[number] }) {
  return (
    <motion.article whileHover={{ y: -6, scale: 1.02 }} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <Image src={b.img} alt={b.title} width={400} height={240} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <div className="text-xs text-neutral-500 mb-2 font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>{b.date}</div>
        <h4 className="font-black text-xl mb-2" style={{ color: brand.darkBrown, fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.5px' }}>{b.title}</h4>
        <p className="text-sm text-neutral-600 mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>{b.excerpt}</p>
        <a href="#" className="inline-flex items-center gap-2 text-sm font-bold hover:opacity-80 transition-opacity" style={{ color: brand.darkBrown, fontFamily: 'system-ui, sans-serif' }}>
          Leer más <Newspaper size={16}/>
        </a>
      </div>
    </motion.article>
  );
}

// Blog
function Blog() {
  return (
    <section id="blog" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-end justify-between mb-6">
        <h3 className="text-2xl font-black" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '-1px' }}>Blogs</h3>
        <a href="#" className="text-sm font-bold hover:opacity-80" style={{ color: brand.darkBrown, fontFamily: 'system-ui, sans-serif' }}>Ver todos</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((b) => <BlogCard key={b.id} b={b} />)}
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="mt-16" style={{ ...makeBarStyle(0.14), opacity: 0.95 }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-100 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <p style={{ fontFamily: 'system-ui, sans-serif' }}>© {new Date().getFullYear()} Cachakita Honey • Hecho con cariño</p>
        <div className="flex gap-6">
          <a href="https://ko-fi.com/feed" target="_blank" className="hover:text-white transition-colors font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>Ko-fi</a>
          <a href="https://buymeacoffee.com/" target="_blank" className="hover:text-white transition-colors font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>BuyMeACoffee</a>
          <a href="https://ollama.com/" target="_blank" className="hover:text-white transition-colors font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>Ollama</a>
        </div>
      </div>
    </footer>
  );
}

// App principal
export default function App() {
  return (
    <div className="min-h-screen" style={{ background: brand.beige, color: brand.darkBrown }}>
      <Sidebar />
      <Header />
      <Hero />
      <StoriesRail />
      <Projects />
      <Blog />
      <Footer />
    </div>
  );
}
// Aquí se repetiría el patrón para StoriesRail, ProjectCard, Projects, BlogCard, Blog y Footer
// Todos usando <Image /> y types explícitos
// Por limitaciones de espacio, puedo generar el resto completo en la siguiente respuesta para que tengas todo listo.

