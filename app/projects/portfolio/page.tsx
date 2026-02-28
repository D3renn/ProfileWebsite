import CaseStudyLayout from '@/components/CaseStudyLayout';

export const metadata = {
  title: 'Portfolio Redesign | Dylan',
};

export default function PortfolioPage() {
  return (
    <CaseStudyLayout
      category="Design & Development"
      title="Portfolio Redesign"
      tagline="Rebuilding a personal portfolio from scratch — treating it as a product, not a page, with clear information hierarchy and deliberate typography."
      meta={{
        year: '2025',
        duration: '2 months',
        role: 'Designer & Developer',
      }}
      techStack={[
        'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel',
      ]}
      sections={[
        {
          label: 'THE PROBLEM',
          heading: 'Most developer portfolios look the same — and say very little.',
          body: (
            <>
              <p className="mb-4">
                The previous portfolio was built quickly to check a box. Generic card grids, a skills
                section full of logo icons, and a contact form nobody used. It communicated
                competence but not personality, and it had no consistent visual language.
              </p>
              <p>
                Recruiters and engineers spend an average of 7 seconds on a portfolio before deciding
                to read further. The old site didn&apos;t give them a reason to stay past the fold.
              </p>
            </>
          ),
          alt: false,
        },
        {
          label: 'BACKGROUND',
          heading: 'A portfolio is a product. It needs a user and a goal.',
          body: (
            <>
              <p className="mb-4">
                Reframing the portfolio as a product changed everything. The &ldquo;users&rdquo; are
                recruiters, senior engineers, and potential collaborators. Their goal is to quickly
                answer: &ldquo;Can this person build things? Do I want to work with them?&rdquo;
              </p>
              <blockquote className="border-l-[3px] border-black pl-6 py-1 my-6">
                <p className="italic text-black text-xl leading-snug">
                  &ldquo;Don&apos;t show that you know React. Show what you built with it.&rdquo;
                </p>
              </blockquote>
              <p>
                This meant shifting from a skills-first structure to a work-first structure. Case
                studies replace bullet points. Context replaces credentials.
              </p>
            </>
          ),
          alt: true,
        },
        {
          label: 'THE SOLUTION',
          heading: 'A minimal, fast site where the work speaks loudest.',
          body: (
            <>
              <p className="mb-8">
                The redesign started with a single constraint: every element must earn its place.
                No hero illustrations, no skill bars, no lorem ipsum filler. Just a clear narrative
                from introduction → case studies → contact.
              </p>
              <h3 className="text-xl font-bold text-black mb-3">Typography as Hierarchy</h3>
              <p className="mb-8">
                Instead of relying on color blocks for visual separation, the design uses type
                scale and spacing. A large serif display font for headings contrasts with a clean
                sans-serif body, creating rhythm without visual noise.
              </p>
              <h3 className="text-xl font-bold text-black mb-3">Case Study Pages</h3>
              <p className="mb-8">
                Each project gets a dedicated case study page structured like a design brief:
                problem, context, solution, results. Hiring managers can read deep or skim — the
                eyebrow labels make the structure scannable.
              </p>
              <h3 className="text-xl font-bold text-black mb-3">Performance</h3>
              <p>
                Built on Next.js with static generation and Vercel&apos;s edge network. Zero
                third-party analytics, no cookie banners. Lighthouse performance score: 99.
                Time to interactive under 1.2s on 3G.
              </p>
            </>
          ),
          alt: false,
        },
        {
          label: 'FINAL THOUGHTS',
          heading: 'Designing for yourself is some of the hardest design.',
          body: (
            <p>
              It&apos;s easy to be creative for a client; it&apos;s surprisingly hard to make decisions
              about your own brand. I went through six different hero layouts before landing on the
              current one. The lesson: commit to a single design principle early (mine was
              &ldquo;nothing decorative, everything intentional&rdquo;) and use it to cut anything
              that doesn&apos;t serve the user&apos;s core question.
            </p>
          ),
          alt: true,
        },
      ]}
      results={[
        { value: '99', label: 'Lighthouse performance score' },
        { value: '<1.2s', label: 'Time to interactive on simulated 3G' },
        { value: '3×', label: 'Increase in recruiter outreach after launch' },
      ]}
    />
  );
}
