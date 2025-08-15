import React from "react";
import { motion } from "framer-motion";
import { Coffee, Heart, Newspaper, ArrowRight, Share2 } from "lucide-react";

/**
 * 🔧 Instrucciones rápidas
 * 1) Reemplaza `logoSrc` por la URL de tu logo real (Cachakita Honey).
 * 2) Este componente usa TailwindCSS + Framer Motion (sin dependencias extra).
 * 3) El header usa el color café del logo; el resto es blanco/beige limpio.
 */

const brand = {
  brown: "#4B2E21", // Café principal (puedes ajustar al de tu logo)
  beige: "#F6F1E7", // Fondo suave opcional
};

const logoSrc =
  "https://images.unsplash.com/photo-1612197527762-8cfb55b6183a?q=80&w=800&auto=format&fit=crop"; // ⬅️ Reemplaza por tu logo (PNG/SVG)

// --- Datos de ejemplo (reemplaza por tu API) ---
const stories = [
  {
    id: 1,
    name: "Ana",
    img:
      "https://images.unsplash.com/photo-1601598188143-5783d2b450da?q=80&w=200&auto=format&fit=crop",
    caption: "Moda casual con propósito",
  },
  {
    id: 2,
    name: "Lu",
    img:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    caption: "Ayuda emocional",
  },
  {
    id: 3,
    name: "Sol",
    img:
      "https://images.unsplash.com/photo-1558222217-0e2b1a5d0a9e?q=80&w=200&auto=format&fit=crop",
    caption: "Trips / Turismo",
  },
  {
    id: 4,
    name: "Mar",
    img:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&auto=format&fit=crop",
    caption: "Historias reales",
  },
  {
    id: 5,
    name: "Val",
    img:
      "https://images.unsplash.com/photo-1520975922284-c0d56e6d29b1?q=80&w=200&auto=format&fit=crop",
    caption: "Deporte fit",
  },
];

const projects = [
  {
    id: 101,
    title: "Regalito Coffee – Microbecas",
    img: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1200&auto=format&fit=crop",
    desc: "Becas para cursos cortos (inglés, datos, diseño). Prioridad: mujeres emprendedoras.",
    goal: 1200,
    raised: 540,
  },
  {
    id: 102,
    title: "Moda con causa – Colección Fit",
    img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0b01?q=80&w=1200&auto=format&fit=crop",
    desc: "Línea deportiva; utilidades a talleres de autoestima y salud.",
    goal: 2000,
    raised: 880,
  },
  {
    id: 103,
    title: "Historias que curan",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
    desc: "Mini‑documentales de mujeres que salieron adelante.",
    goal: 1500,
    raised: 300,
  },
];

const posts = [
  {
    id: 201,
    title: "Guía de estilo casual con impacto",
    img: "https://images.unsplash.com/photo-1520975922284-c0d56e6d29b1?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Cómo elegir prendas versátiles y apoyar proyectos sociales al mismo tiempo.",
    date: "Aug 14, 2025",
  },
  {
    id: 202,
    title: "Rutas de cafetales: turismo consciente",
    img: "https://images.unsplash.com/photo-1470137430626-983a37b8ea46?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Itinerarios y tips para viajar con sentido y dejar huella positiva.",
    date: "Aug 08, 2025",
  },
  {
    id: 203,
    title: "Primeros auxilios emocionales",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Herramientas prácticas para acompañar a una amiga en crisis.",
    date: "Aug 01, 2025",
  },
];

const pct = (n: number, d: number) => Math.min(100, Math.round((n / d) * 100));

function Progress({ value }: { value: number }) {
  return (
    <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
      <div className="h-full rounded-full" style={{ width: `${value}%`, background: brand.brown }} />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b" style={{ background: brand.brown }}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4 text-white">
        <img src={logoSrc} alt="Cachakita Honey" className="h-9 w-9 rounded-full object-cover ring-2 ring-white/50" />
        <h1 className="font-extrabold tracking-tight text-lg sm:text-xl">Cachakita Honey</h1>
        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
          <a href="#proyectos" className="hover:opacity-90">Proyectos</a>
          <a href="#historias" className="hover:opacity-90">Historias</a>
          <a href="#blog" className="hover:opacity-90">Blogs</a>
        </nav>
        <a
          href="https://buymeacoffee.com/"
          target="_blank"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl font-semibold text-sm"
          style={{ background: "#8C5A3A" }}
        >
          <Coffee size={16} /> Apoyar (Regalito)
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Empodera <span style={{ color: brand.brown }}>historias</span> y conquista metas.
          </h2>
          <p className="mt-4 text-neutral-600">
            Plataforma tipo Ko‑fi/BuyMeACoffee para <b>Proyectos</b>, <b>Historias</b> y
            <b> Blogs</b> de la comunidad Cachakita.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl text-white font-semibold"
              style={{ background: br