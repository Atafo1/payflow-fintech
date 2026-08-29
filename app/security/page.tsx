import { Navbar, Footer, PageHero, SectionHeading, CTA } from '@/components/site';
import { solutionIcons } from '@/components/icon-map';
import { LockKeyhole } from 'lucide-react';

const layers = [
  { key: 'security', title: '256-bit encryption', desc: 'Your data is encrypted in transit and at rest with bank-grade AES-256 encryption.' },
  { key: 'identity', title: 'Two-factor authentication', desc: 'An extra layer of protection that keeps your account safe even if your password leaks.' },
  { key: 'monitoring', title: 'Fraud monitoring', desc: 'Real-time systems scan every transaction for suspicious activity, 24/7.' },
  { key: 'systems', title: 'Secure data centers', desc: 'Your data lives in redundant, physically secured data centers with strict access controls.' },
  { key: 'keys', title: 'Regular security audits', desc: 'Independent audits and penetration tests keep our defenses sharp and up to date.' },
  { key: 'keys', title: 'Security keys & biometrics', desc: 'Hardware security keys and biometric login keep only you in control of your account.' },
];

export default function SecurityPage() {
  return (
    <>
      <Navbar dark />
      <PageHero eyebrow="Security" title="Your money, protected at every layer" description="Security is the foundation of Payflow. We use the same protections trusted by leading fintech platforms worldwide." />
      <section className="px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {layers.map((l, i) => {
              const Icon = solutionIcons[l.key as keyof typeof solutionIcons] ?? LockKeyhole;
              return <div key={l.title + i} className="rounded-2xl border border-[#e7e6f3] bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(91,65,236,.1)]"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f0edff] text-[#6742ef]"><Icon size={19} /></span><h3 className="mt-5 text-sm font-bold text-[#161a35]">{l.title}</h3><p className="mt-2 text-xs leading-6 text-[#767b8f]">{l.desc}</p></div>;
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#f7f6fc] px-5 py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1100px] items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Always on" title="Monitoring that never sleeps" description="Our security team and automated systems work around the clock to detect, block, and respond to threats — so you can bank with total peace of mind." />
            <div className="mt-8 grid grid-cols-3 gap-4">{[['24/7','Monitoring'],['<5m','Incident response'],['100%','Data encrypted']].map(([v,l]) => <div key={l} className="rounded-2xl border border-[#e7e6f3] bg-white p-5 text-center"><p className="text-2xl font-bold text-[#6335f4]">{v}</p><p className="mt-1 text-[10px] text-[#767b8f]">{l}</p></div>)}</div>
          </div>
          <div className="flex justify-center">
            <div className="relative grid h-72 w-72 place-items-center rounded-full bg-gradient-to-br from-[#6335f4] to-[#3317a8] text-white shadow-[0_25px_70px_rgba(100,53,244,.3)]">
              <LockKeyhole size={90} strokeWidth={1.2} />
              <div className="absolute inset-0 rounded-full border border-white/20" />
              <div className="absolute inset-6 rounded-full border border-white/10" />
              <div className="absolute inset-12 rounded-full border border-white/5" />
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </>
  );
}
