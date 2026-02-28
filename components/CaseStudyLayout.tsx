import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Meta {
  year: string;
  duration: string;
  role: string;
}

interface Section {
  label: string;
  heading: string;
  body: React.ReactNode;
  alt?: boolean; // slightly different bg
}

interface CaseStudyLayoutProps {
  category: string;
  title: string;
  tagline: string;
  meta: Meta;
  techStack: string[];
  sections: Section[];
  results?: { value: string; label: string }[];
}

export default function CaseStudyLayout({
  category,
  title,
  tagline,
  meta,
  techStack,
  sections,
  results,
}: CaseStudyLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">

        {/* ── Hero ─────────────────────────────────────── */}
        <section className="px-6 pt-16 pb-12 max-w-4xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-neutral-400 hover:text-black transition-colors mb-12"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            All Projects
          </Link>

          <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-4">{category}</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">{title}</h1>
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl">{tagline}</p>

          {/* Metadata strip */}
          <div className="mt-12 pt-8 border-t border-neutral-200 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { label: 'YEAR', value: meta.year },
              { label: 'DURATION', value: meta.duration },
              { label: 'ROLE', value: meta.role },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-1">{label}</p>
                <p className="text-base font-medium text-black">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Sections ─────────────────────────────────── */}
        {sections.map((s, i) => (
          <section
            key={i}
            className={`px-6 py-16 ${s.alt ? 'bg-[#f8f8f8]' : 'bg-white'}`}
          >
            <div className="max-w-4xl mx-auto">
              <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-6">{s.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">{s.heading}</h2>
              <div className="text-lg text-neutral-600 leading-relaxed">{s.body}</div>
            </div>
          </section>
        ))}

        {/* ── Results ──────────────────────────────────── */}
        {results && results.length > 0 && (
          <section className="px-6 py-16 bg-[#f8f8f8]">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-6">RESULTS</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-snug">Impact & Outcomes</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {results.map(({ value, label }) => (
                  <div key={label} className="bg-white rounded-2xl p-8 border border-neutral-100">
                    <p className="text-5xl font-bold mb-2">{value}</p>
                    <p className="text-neutral-500 text-sm">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Tech Stack ───────────────────────────────── */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-6">TECH STACK</p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-neutral-100 text-neutral-700 border border-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
