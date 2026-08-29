'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search } from 'lucide-react';
import { Navbar, Footer, PageHero, CTA } from '@/components/site';
import { solutionIcons } from '@/components/icon-map';

const topics = [
  { key: 'help', title: 'Getting Started', desc: 'Create your account and make your first transfer.' },
  { key: 'account', title: 'Account & Security', desc: 'Passwords, 2FA, and keeping your account safe.' },
  { key: 'payments', title: 'Payments', desc: 'Sending and receiving money, fees, and timelines.' },
  { key: 'cards', title: 'Cards', desc: 'Ordering, activating, and managing your Payflow card.' },
  { key: 'fees', title: 'Fees & Limits', desc: 'Transparent pricing and account limits explained.' },
  { key: 'troubleshooting', title: 'Troubleshooting', desc: 'Fix common issues quickly with step-by-step guides.' },
];
const faqs = [
  { q: 'How do I open a Payflow account?', a: 'Download the app or sign up on the website, enter your email and phone number, and complete a quick identity verification. The whole process takes under 3 minutes.' },
  { q: 'Is my money safe with Payflow?', a: 'Yes. Payflow uses 256-bit encryption, two-factor authentication, and real-time fraud monitoring. This is a fictional demo, but our security model mirrors industry best practices.' },
  { q: 'How long do transfers take?', a: 'Most transfers between Payflow users are instant. International transfers typically arrive within minutes, depending on the destination country.' },
  { q: 'Are there hidden fees?', a: 'Never. We show you the exchange rate and any fees before you confirm a transfer. What you see is exactly what you pay.' },
  { q: 'Can I use Payflow for my business?', a: 'Yes. Our Business plan includes multi-user access, automated payouts, and expense management tools designed for teams.' },
  { q: 'How do I activate my card?', a: 'Open the app, go to Cards, and follow the activation flow. You will be spending within a couple of minutes.' },
];

export default function HelpPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <Navbar dark />
      <PageHero eyebrow="Help Center" title="How can we help?" description="Search our knowledge base or browse popular topics to find answers fast." />
      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[680px]">
          <div className="flex items-center gap-3 rounded-2xl border border-[#e7e6f3] bg-white px-5 py-4 shadow-sm"><Search size={18} className="text-[#9ca1b4]" /><input placeholder="Search for help..." className="w-full bg-transparent text-sm outline-none placeholder:text-[#9ca1b4]" /></div>
        </div>
      </section>
      <section className="px-5 pb-24 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-10 text-center text-sm font-bold uppercase tracking-[.2em] text-[#9ca1b4]">Popular topics</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{topics.map((t) => { const Icon = solutionIcons[t.key as keyof typeof solutionIcons]; return (
            <div key={t.title} className="cursor-pointer rounded-2xl border border-[#e7e6f3] bg-white p-7 transition hover:-translate-y-1 hover:border-[#b6a5ff] hover:shadow-[0_18px_40px_rgba(91,65,236,.1)]"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f0edff] text-[#6742ef]"><Icon size={19} /></span><h3 className="mt-5 text-sm font-bold text-[#161a35]">{t.title}</h3><p className="mt-2 text-xs leading-6 text-[#767b8f]">{t.desc}</p></div>
          ); })}</div>
        </div>
      </section>
      <section className="bg-[#f7f6fc] px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[820px]">
          <h2 className="text-center text-3xl font-bold tracking-[-.03em] text-[#11162b] sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-12 divide-y divide-[#e7e6f3] overflow-hidden rounded-2xl border border-[#e7e6f3] bg-white">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left"><span className="text-sm font-semibold text-[#161a35]">{f.q}</span><ChevronDown size={18} className={`shrink-0 text-[#9ca1b4] transition ${open === i ? 'rotate-180' : ''}`} /></button>
                {open === i && <p className="px-6 pb-6 text-sm leading-7 text-[#73788b]">{f.a}</p>}
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#6335f4] to-[#3317a8] p-8 text-center text-white"><h3 className="text-lg font-bold">Still need help?</h3><p className="mt-2 text-sm text-white/70">Our support team is here for you, 24/7.</p><Link href="/contact" className="mt-5 inline-block rounded-xl bg-white px-6 py-3 text-xs font-semibold text-[#6335f4]">Contact Support</Link></div>
        </div>
      </section>
      <CTA light />
      <Footer />
    </>
  );
}
