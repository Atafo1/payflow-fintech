import { Navbar, Footer, PageHero, SectionHeading, CTA } from '@/components/site';
import { Heart, Lightbulb, ShieldCheck, Target } from 'lucide-react';

const values = [
  { icon: Target, title: 'Customer first', desc: 'Every decision starts with what is best for the people who use Payflow.' },
  { icon: ShieldCheck, title: 'Trust & security', desc: 'We protect your money and data as if it were our own, without compromise.' },
  { icon: Lightbulb, title: 'Relentless innovation', desc: 'We ship fast, learn faster, and never settle for the status quo.' },
  { icon: Heart, title: 'Inclusion', desc: 'Great finance should be accessible to everyone, everywhere.' },
];
const team = [['David Morgan','Co-founder & CEO'],['Aisha Khan','Co-founder & CTO'],['Marco Rossi','Head of Product'],['Lena Becker','Head of Design'],['James Carter','VP of Engineering'],['Sofia Alvarez','Head of Operations']];

export default function AboutPage() {
  return (
    <>
      <Navbar dark />
      <PageHero eyebrow="About Payflow" title="Building a brighter financial future" description="Payflow was founded on a simple belief: banking should be effortless, transparent, and built for everyone." />
      <section className="px-5 py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1100px] gap-14 lg:grid-cols-2">
          <SectionHeading eyebrow="Our mission" title="Money should move at the speed of life" description="We are on a mission to remove friction from finance. Payflow replaces slow, expensive, and confusing banking with a single app that puts you in control — whether you're sending money to a friend or scaling a business across borders." />
          <div className="rounded-3xl bg-gradient-to-br from-[#6335f4] to-[#3317a8] p-10 text-white">
            <p className="text-lg font-semibold leading-8">"We built Payflow because we were tired of banks that felt stuck in the past. People deserve better — and better is finally here."</p>
            <p className="mt-6 text-sm text-white/60">David Morgan, Co-founder & CEO</p>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f6fc] px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading eyebrow="Our values" title="What guides us every day" center />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{values.map((v) => <div key={v.title} className="rounded-2xl border border-[#e7e6f3] bg-white p-7"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f0edff] text-[#6742ef]"><v.icon size={19} /></span><h3 className="mt-5 text-sm font-bold text-[#161a35]">{v.title}</h3><p className="mt-2 text-xs leading-6 text-[#767b8f]">{v.desc}</p></div>)}</div>
        </div>
      </section>
      <section className="px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-6 sm:grid-cols-3">{[['250K+','Active users'],['$5B+','Processed yearly'],['36+','Countries served']].map(([v,l]) => <div key={l} className="rounded-2xl border border-[#e7e6f3] bg-white p-8 text-center"><p className="text-4xl font-bold text-[#6335f4]">{v}</p><p className="mt-2 text-xs text-[#767b8f]">{l}</p></div>)}</div>
        </div>
      </section>
      <section className="bg-[#f7f6fc] px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading eyebrow="Our team" title="The people behind Payflow" description="A small, passionate team of designers, engineers, and finance obsessives building the product we always wanted." center />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{team.map(([name,role]) => <div key={name} className="flex items-center gap-5 rounded-2xl border border-[#e7e6f3] bg-white p-6"><div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#eee9ff] to-[#d9cfff] text-xl font-bold text-[#673af2]">{name.split(' ').map((n) => n[0]).join('')}</div><div><h3 className="text-sm font-bold text-[#161a35]">{name}</h3><p className="mt-1 text-xs text-[#767b8f]">{role}</p></div></div>)}</div>
        </div>
      </section>
      <CTA />
      <Footer />
    </>
  );
}
