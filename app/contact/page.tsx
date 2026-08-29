'use client';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Navbar, Footer, PageHero } from '@/components/site';
import { solutionIcons } from '@/components/icon-map';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const I = solutionIcons;
  return (
    <>
      <Navbar dark />
      <PageHero eyebrow="Contact" title="Let's talk" description="Questions, feedback, or partnership ideas — we'd love to hear from you." />
      <section className="px-5 py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl border border-[#e7e6f3] bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-[#eee9ff] text-[#673af2]"><CheckCircle2 size={28} /></span>
                <h3 className="mt-5 text-xl font-bold text-[#11162b]">Thank you for reaching out</h3>
                <p className="mt-2 max-w-sm text-sm text-[#73788b]">This is a demo form, so no message was actually sent — but in a real deployment our team would reply within one business day.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }} className="mt-6 rounded-xl border border-[#e7e6f3] px-5 py-3 text-xs font-semibold text-[#673af2]">Send another message</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <h2 className="text-xl font-bold text-[#11162b]">Send us a message</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><label className="mb-1.5 block text-xs font-medium text-[#4b5163]">Name</label><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-[#e7e6f3] bg-white px-4 py-3 text-sm outline-none focus:border-[#6435f4]" placeholder="Jane Doe" /></div>
                  <div><label className="mb-1.5 block text-xs font-medium text-[#4b5163]">Email</label><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-[#e7e6f3] bg-white px-4 py-3 text-sm outline-none focus:border-[#6335f4]" placeholder="jane@example.com" /></div>
                </div>
                <div><label className="mb-1.5 block text-xs font-medium text-[#4b5163]">Subject</label><input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full rounded-xl border border-[#e7e6f3] bg-white px-4 py-3 text-sm outline-none focus:border-[#6335f4]" placeholder="How can we help?" /></div>
                <div><label className="mb-1.5 block text-xs font-medium text-[#4b5163]">Message</label><textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-xl border border-[#e7e6f3] bg-white px-4 py-3 text-sm outline-none focus:border-[#6335f4]" placeholder="Tell us more..." /></div>
                <button type="submit" className="rounded-xl bg-[#6335f4] px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-[#5125e8]">Submit message</button>
              </form>
            )}
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl bg-[#0b0e24] p-8 text-white">
              <h3 className="text-base font-bold">Support information</h3>
              <div className="mt-6 space-y-5 text-sm">
                {([[I.mail,'support@payflow.example','Email us'],[I.phone,'+1 (555) 012-3456','Call us'],[I.contact,'Live chat · 24/7','Chat with us'],[I.map,'123 Market St, San Francisco','Visit us']] as const).map(([Icon,val,label]) => (
                  <div key={val as string} className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-[#b79bff]"><Icon size={16} /></span><div><p className="font-semibold">{val as string}</p><p className="text-xs text-white/45">{label as string}</p></div></div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[#e7e6f3] bg-white p-8">
              <h3 className="text-base font-bold text-[#11162b]">Business inquiries</h3>
              <p className="mt-3 text-xs leading-6 text-[#767b8f]">For partnerships, press, or API access, contact our partnerships team directly.</p>
              <p className="mt-4 text-sm font-semibold text-[#6335f4]">partners@payflow.example</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
