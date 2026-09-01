'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Navbar, Footer, PageHero, CTA } from '@/components/site';

const plans = [
  { name: 'Starter', monthly: 0, yearly: 0, desc: 'Perfect for getting started with everyday banking.', features: ['Free instant transfer-Demos','Virtual card included','Basic spending insights','24/7 chat support'], highlight: false },
  { name: 'Pro', monthly: 9.99, yearly: 95.90, desc: 'For individuals who want more from their money.', features: ['Everything in Starter','Physical metal card','Advanced insights & budgets','Unlimited global transfer-Demos','Priority support'], highlight: true },
  { name: 'Business', monthly: 29.99, yearly: 287.90, desc: 'Built for teams and growing businesses.', features: ['Everything in Pro','Multi-user access','Automated payouts','Expense management','Dedicated account manager'], highlight: false },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  return (
    <>
      <Navbar dark />
      <PageHero eyebrow="Pricing" title="Simple, transparent pricing" description="Choose a plan that grows with you. No hidden fees, no surprises — cancel anytime." />
      <section className="px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-12 flex items-center justify-center gap-3 text-sm">
            <span className={!yearly ? 'font-semibold text-[#11162b]' : 'text-[#9ca1b4]'}>Monthly</span>
            <button onClick={() => setYearly(!yearly)} className={`relative h-7 w-12 rounded-full transition ${yearly ? 'bg-[#6435f4]' : 'bg-[#d8d6e4]'}`} aria-label="Toggle billing period"><span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${yearly ? 'left-6' : 'left-1'}`} /></button>
            <span className={yearly ? 'font-semibold text-[#11162b]' : 'text-[#9ca1b4]'}>Yearly <span className="ml-1 rounded-full bg-[#eee9ff] px-2 py-0.5 text-[10px] font-semibold text-[#673af2]">Save 20%</span></span>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className={`relative rounded-3xl border p-8 ${p.highlight ? 'border-[#6435f4] bg-[#0b0e24] text-white shadow-[0_25px_60px_rgba(100,53,244,.25)]' : 'border-[#e7e6f3] bg-white'}`}>
                {p.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#6435f4] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Most popular</span>}
                <h3 className={`text-lg font-bold ${p.highlight ? 'text-white' : 'text-[#11162b]'}`}>{p.name}</h3>
                <p className={`mt-2 text-xs leading-6 ${p.highlight ? 'text-white/55' : 'text-[#767b8f]'}`}>{p.desc}</p>
                <div className="mt-6 flex items-end gap-1"><span className={`text-4xl font-bold ${p.highlight ? 'text-white' : 'text-[#11162b]'}`}>${yearly ? p.yearly : p.monthly}</span><span className={`mb-1 text-xs ${p.highlight ? 'text-white/50' : 'text-[#9ca1b4]'}`}>{yearly ? '/year' : '/month'}</span></div>
                <Link href="/contact" className={`mt-6 block rounded-xl py-3.5 text-center text-xs font-semibold transition ${p.highlight ? 'bg-[#6435f4] text-white hover:bg-[#5125e8]' : 'bg-[#f0eeff] text-[#673af2] hover:bg-[#e6e1ff]'}`}>Choose {p.name}</Link>
                <ul className="mt-7 space-y-3">{p.features.map((f) => <li key={f} className={`flex items-center gap-2 text-xs ${p.highlight ? 'text-white/75' : 'text-[#5b6178]'}`}><span className={`grid h-4 w-4 place-items-center rounded-full ${p.highlight ? 'bg-white/15 text-[#b79bff]' : 'bg-[#eee9ff] text-[#673af2]'}`}><Check size={11} /></span>{f}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-[11px] text-[#9ca1b4]">Fictional demo pricing. Payflow is not a real financial institution.</p>

          <div className="mt-20 overflow-hidden rounded-2xl border border-[#e7e6f3]">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#f7f6fc] text-left text-xs text-[#767b8f]"><tr><th className="p-4 font-semibold">Feature</th><th className="p-4 text-center font-semibold">Starter</th><th className="p-4 text-center font-semibold">Pro</th><th className="p-4 text-center font-semibold">Business</th></tr></thead>
                <tbody className="divide-y divide-[#e7e6f3]">
                  {[['Instant transfer-Demos','✓','✓','✓'],['Virtual card','✓','✓','✓'],['Physical card','—','✓','✓'],['Spending insights','Basic','Advanced','Advanced'],['Global transfer-Demos','—','Unlimited','Unlimited'],['Multi-user access','—','—','✓'],['Automated payouts','—','—','✓'],['Dedicated manager','—','—','✓']].map(([f,a,b,c]) => (
                    <tr key={f}><td className="p-4 text-[#4b5163]">{f}</td><td className="p-4 text-center text-[#4b5163]">{a}</td><td className="p-4 text-center text-[#4b5163]">{b}</td><td className="p-4 text-center text-[#4b5163]">{c}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <CTA light title="Still not sure which plan fits?" description="Start free and upgrade whenever you're ready. No credit card required." />
      <Footer />
    </>
  );
}
