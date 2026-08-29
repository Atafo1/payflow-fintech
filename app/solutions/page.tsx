import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Navbar, Footer, PageHero, SectionHeading, CTA, DashboardMockup } from '@/components/site';
import { solutionIcons } from '@/components/icon-map';

const solutions = [
  { key: 'personal', title: 'Personal Banking', desc: 'A modern account for everyday life. Instant transfers, smart insights, and a beautiful card that works everywhere.', points: ['Free instant transfers','Smart spending insights','Virtual & physical cards'], cta: 'Open an account' },
  { key: 'business', title: 'Business Banking', desc: 'Run your business finances from one dashboard. Issue cards, automate payouts, and track every dollar.', points: ['Multi-user access','Automated payouts','Expense tracking'], cta: 'Get business account' },
  { key: 'global', title: 'Global Payments', desc: 'Send and receive money across 36+ countries at the real exchange rate, with no hidden fees.', points: ['Real exchange rate','Minute-fast transfers','Multi-currency wallets'], cta: 'Send globally' },
  { key: 'api', title: 'Partner / API Solutions', desc: 'Build Payflow into your product. Robust APIs and webhooks for payments, payouts, and reconciliation.', points: ['REST API & webhooks','Sandbox environment','GDPR compliant'], cta: 'Explore the API' },
] as const;

export default function SolutionsPage() {
  return (
    <>
      <Navbar dark />
      <PageHero eyebrow="Solutions" title="Banking for every way you work" description="Whether you're managing personal finances or scaling a global business, Payflow has a solution built for you." />
      <section className="px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1100px] space-y-20">
          {solutions.map((s, i) => {
            const Icon = solutionIcons[s.key as keyof typeof solutionIcons];
            return (
              <div key={s.title} className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#6435f4]">0{i + 1}</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-[-.03em] text-[#11162b] sm:text-4xl">{s.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#73788b]">{s.desc}</p>
                  <ul className="mt-6 space-y-3">{s.points.map((p) => <li key={p} className="flex items-center gap-2 text-sm text-[#4b5163]"><span className="h-1.5 w-1.5 rounded-full bg-[#6435f4]" />{p}</li>)}</ul>
                  <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#6335f4] px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-[#5125e8]">{s.cta} <ArrowRight size={14} /></Link>
                </div>
                <div className="flex justify-center">
                  {i === 0 ? <DashboardMockup /> : (
                    <div className="w-full max-w-md rounded-3xl border border-[#e7e6f3] bg-white p-7 shadow-[0_25px_60px_rgba(31,25,87,.07)]">
                      <div className="grid h-44 place-items-center rounded-2xl bg-gradient-to-br from-[#f0eeff] to-[#e6e1ff] text-[#673af2]"><Icon size={64} strokeWidth={1.2} /></div>
                      <div className="mt-5 space-y-3">{[1,2,3].map((n) => <div key={n} className="h-3 rounded-full bg-[#f0eefb]" style={{ width: `${100 - n * 12}%` }} />)}</div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CTA light title="Find the right solution for you" description="Talk to our team or explore Payflow in minutes — no commitment required." />
      <Footer />
    </>
  );
}
