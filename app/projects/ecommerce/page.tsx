import CaseStudyLayout from '@/components/CaseStudyLayout';

export const metadata = {
  title: 'E-Commerce Platform | Dylan',
};

export default function EcommercePage() {
  return (
    <CaseStudyLayout
      category="Full-Stack Development"
      title="E-Commerce Platform"
      tagline="A fast, scalable shopping experience built from the ground up — with a real-time cart, Stripe checkout, and an admin dashboard."
      meta={{
        year: '2024',
        duration: '3 months',
        role: 'Full-Stack Developer',
      }}
      techStack={[
        'Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Prisma', 'Vercel',
      ]}
      sections={[
        {
          label: 'THE PROBLEM',
          heading: 'Existing solutions were too bloated and too expensive.',
          body: (
            <>
              <p className="mb-4">
                Small and mid-sized retailers were forced to choose between expensive SaaS platforms
                (Shopify, BigCommerce) that locked them in, or open-source tools that required significant
                DevOps overhead to self-host and maintain.
              </p>
              <p>
                What they needed was a lean, ownable storefront — one that loaded fast, handled real
                traffic, and didn&apos;t charge per-transaction fees after a certain revenue threshold.
              </p>
            </>
          ),
          alt: false,
        },
        {
          label: 'BACKGROUND',
          heading: 'The technical landscape around e-commerce is crowded — for good reason.',
          body: (
            <>
              <p className="mb-4">
                The global e-commerce market crossed $5T in GMV in 2023. Yet the tooling available
                to independent developers and small agencies remains surprisingly fragmented: headless
                commerce is powerful but complex; monolithic platforms are convenient but constraining.
              </p>
              <blockquote className="border-l-[3px] border-black pl-6 py-1 my-6">
                <p className="italic text-black text-xl leading-snug">
                  &ldquo;Every $100K in GMV shouldn&apos;t cost $3K in platform fees.&rdquo;
                </p>
              </blockquote>
              <p>
                This project was an opportunity to build a modern reference implementation — leveraging
                the Next.js App Router, server actions, and edge-deployed APIs to deliver a sub-second
                storefront without sacrificing developer ergonomics.
              </p>
            </>
          ),
          alt: true,
        },
        {
          label: 'THE SOLUTION',
          heading: 'A composable storefront with first-class Stripe integration.',
          body: (
            <>
              <p className="mb-8">
                The platform was architected as a set of clearly separated concerns: a product catalog
                backed by PostgreSQL (via Prisma), a stateless cart persisted in localStorage, and a
                server-side checkout flow routed through Stripe&apos;s Payment Intents API.
              </p>
              <h3 className="text-xl font-bold text-black mb-3">Real-time Cart &amp; Inventory</h3>
              <p className="mb-8">
                Inventory counts update optimistically in the UI and are confirmed server-side on
                checkout. A lightweight pub/sub layer prevents oversells when multiple users checkout
                simultaneously.
              </p>
              <h3 className="text-xl font-bold text-black mb-3">Admin Dashboard</h3>
              <p className="mb-8">
                A protected admin route powered by Next.js middleware gives store owners live sales
                analytics, product management (CRUD + image upload), and order fulfillment status —
                all without a third-party backend service.
              </p>
              <h3 className="text-xl font-bold text-black mb-3">Performance First</h3>
              <p>
                Product pages are statically generated at build time and revalidated on-demand
                (ISR). Lighthouse scores consistently sit above 95 on mobile, largely by keeping
                the JS bundle under 80 KB compressed.
              </p>
            </>
          ),
          alt: false,
        },
        {
          label: 'FINAL THOUGHTS',
          heading: 'Ownership beats convenience — when the tools are right.',
          body: (
            <p>
              Building this end-to-end reinforced how much performance headroom is left on the table
              when teams over-rely on third-party SDKs. By owning the full stack from the database
              schema to the checkout session, we cut the critical-path request count by 60% compared
              to a comparable Shopify storefront. The biggest lesson: thoughtful schema design early
              pays dividends at every layer above it.
            </p>
          ),
          alt: true,
        },
      ]}
      results={[
        { value: '50%', label: 'Faster page loads vs. previous Shopify setup' },
        { value: '10K+', label: 'Products catalogued in the first deployment' },
        { value: '99.9%', label: 'Uptime across three months of production traffic' },
      ]}
    />
  );
}
