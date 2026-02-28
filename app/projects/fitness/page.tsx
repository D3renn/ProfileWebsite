import CaseStudyLayout from '@/components/CaseStudyLayout';

export const metadata = {
  title: 'Fitness Tracker | Dylan',
};

export default function FitnessPage() {
  return (
    <CaseStudyLayout
      category="Mobile Development"
      title="Fitness Tracker"
      tagline="A cross-platform mobile app that turns vague fitness goals into structured, measurable progress — one workout at a time."
      meta={{
        year: '2025',
        duration: '4 months',
        role: 'Mobile Developer',
      }}
      techStack={[
        'React Native', 'Expo', 'TypeScript', 'Firebase', 'Redux Toolkit', 'React Navigation',
      ]}
      sections={[
        {
          label: 'THE PROBLEM',
          heading: 'Most fitness apps overwhelm users before they ever break a sweat.',
          body: (
            <>
              <p className="mb-4">
                The fitness app market is saturated, yet user dropout rates within the first 30 days
                hover above 70%. The core issue isn&apos;t features — it&apos;s onboarding friction
                and a lack of personalization that makes the app feel generic from day one.
              </p>
              <p>
                Most apps front-load complexity: calorie counters, macro splits, VO2 max estimates.
                Users who just want to &ldquo;get in shape&rdquo; are lost before they finish signing up.
              </p>
            </>
          ),
          alt: false,
        },
        {
          label: 'THE RESEARCH',
          heading: 'Effective habit formation requires immediate feedback loops.',
          body: (
            <>
              <p className="mb-4">
                Research from BJ Fogg&apos;s Behavior Model and James Clear&apos;s Atomic Habits both
                converge on the same insight: small wins compounded over time outperform ambitious
                targets set and abandoned. The app needed to reward consistency over intensity.
              </p>
              <blockquote className="border-l-[3px] border-black pl-6 py-1 my-6">
                <p className="italic text-black text-xl leading-snug">
                  &ldquo;Users don&apos;t quit because they&apos;re unfit. They quit because the app makes them feel unfit.&rdquo;
                </p>
              </blockquote>
              <p>
                Interview sessions with 12 target users confirmed this — the most common complaint
                was &ldquo;I opened it a few times but felt behind, so I stopped.&rdquo;
              </p>
            </>
          ),
          alt: true,
        },
        {
          label: 'THE SOLUTION',
          heading: 'A structured app that adapts to the user, not the other way around.',
          body: (
            <>
              <p className="mb-8">
                The app opens with a three-question onboarding — goal (strength / cardio / flexibility),
                available days per week, and equipment access — and immediately generates a 4-week plan.
                No account required until the user completes their first workout.
              </p>
              <h3 className="text-xl font-bold text-black mb-3">Daily Workout View</h3>
              <p className="mb-8">
                Each session shows the day&apos;s exercises in a scrollable card stack. Sets, reps,
                and rest timers are built in. Completing a set triggers a satisfying micro-animation
                to reinforce the habit loop.
              </p>
              <h3 className="text-xl font-bold text-black mb-3">Progress Tracking</h3>
              <p className="mb-8">
                A persistent streak counter and weekly summary graph give users a concrete sense of
                forward momentum. Volume lifted and cardio minutes are tracked automatically from
                completed workouts — no manual logging.
              </p>
              <h3 className="text-xl font-bold text-black mb-3">Offline-First Architecture</h3>
              <p>
                Workouts are cached locally via Firebase offline persistence. A user with no cell
                signal mid-run still gets their workout, and data syncs automatically when connectivity
                is restored.
              </p>
            </>
          ),
          alt: false,
        },
        {
          label: 'FINAL THOUGHTS',
          heading: 'Simpler is harder to build — and more powerful to use.',
          body: (
            <p>
              The most technically challenging part of this project was deciding what to leave out.
              Every feature request from beta testers had merit, but adding it would have nudged
              the app back toward the bloated experience we were trying to escape. Discipline in
              scope is a form of product design. I&apos;d apply that lesson even more aggressively on the next build.
            </p>
          ),
          alt: true,
        },
      ]}
      results={[
        { value: '68%', label: '30-day retention in beta (vs. 30% industry avg.)' },
        { value: '4.8★', label: 'Average TestFlight rating across 40 beta users' },
        { value: '2.1s', label: 'Median cold start time on mid-range Android devices' },
      ]}
    />
  );
}
