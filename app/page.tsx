import Link from "next/link";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import {
  Navbar,
  Footer,
  PhoneMockup,
  Stats,
  FeatureGrid,
  SectionHeading,
  CTA,
  DashboardMockup,
} from "@/components/site";

export default function Home() {
  return (
    <>
      <Navbar dark />

      <section className="relative overflow-hidden bg-[#080b20] px-5 pt-20 lg:px-10">
        <div className="mx-auto max-w-7xl px-6 pt-4">
          <div className="rounded-lg border border-border bg-muted/50 px-4 text-white/70 py-3 text-center text-sm ">
            <span className="">Portfolio Demo:</span>{" "}
            Payflow is a fictional fintech interface. No real banking, payments,
            or financial services are provided.
          </div>
        </div>

        <div className="hero-glow absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#6435f4]/30 blur-[120px]" />
        <div className="hero-glow absolute right-0 top-40 h-80 w-80 rounded-full bg-[#3416b3]/40 blur-[110px]" />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8d6dff]" /> Fintech
              UI concept for modern digital payments
            </div>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-[-.05em] text-white sm:text-7xl">
              Smart finance.
              <br />
              Seamless payments.
              <br />
              <span className="text-[#b79bff]">Limitless possibilities.</span>
            </h1>
            <p className="mt-7 max-w-[480px] text-base leading-7 text-white/80">
              Payflow brings payments, cards, savings, and global transfers into
              one beautiful app — built for people and businesses who move fast.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-xl bg-[#6435f4] px-6 py-4 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(100,53,244,.4)] transition hover:-translate-y-0.5 hover:bg-[#5125e8]"
              >
                Get Started{" "}
                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/solutions"
                className="rounded-xl border border-white/15 px-6 py-4 text-xs font-semibold text-white transition hover:bg-white/5"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute left-0 top-10 z-10 hidden rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1f6d4a] text-white">
                  <Send size={15} />
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Payment sent
                  </p>
                  <p className="text-[10px] text-white/50">
                    $1,250.00 to Sarah J.
                  </p>
                </div>
              </div>
            </div>
            <PhoneMockup />
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] pb-10">
          <Stats />
        </div>
      </section>

      <section id="features" className="px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            eyebrow="Features"
            title="Everything you need in one powerful platform"
            description="From instant transfers to smart insights, Payflow replaces a wallet of apps with a single, beautifully designed financial home."
            center
          />
          <FeatureGrid />
        </div>
      </section>

      <section className="bg-[#f7f6fc] px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            eyebrow="How it works"
            title="Get started in minutes, not days"
            description="Explore the demo in four simple steps and start moving money the moment you're approved."
            center
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Create Account",
                "Sign up in under 3 minutes with just your email and phone number.",
              ],
              [
                "02",
                "Identy Verification-Demo",
                "Securely verify your identity with a quick photo ID check.",
              ],
              [
                "03",
                "Add Money-Demo",
                "Top up instantly from your bank or another card, for free.",
              ],
              [
                "04",
                "Explore Payflow",
                "Send, spend, save, and grow — all from one dashboard.",
              ],
            ].map(([step, title, desc]) => (
              <div
                key={step}
                className="relative rounded-2xl border border-[#e7e6f3] bg-white p-7"
              >
                <span className="text-3xl font-bold text-[#d9d4f5]">
                  {step}
                </span>
                <h3 className="mt-4 text-base font-bold text-[#161a35]">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#767b8f]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Global Payments"
              title="Send money-Demo across borders with ease"
              description="Transfer funds to 36+ countries at the real exchange rate. No hidden fees, no surprises — just fast, transparent transfers."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Real exchange rate, every time",
                "Transfers arrive in minutes, not days",
                "Zero hidden fees on global payments",
                "Track every transfer in real time",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 text-sm text-[#4b5163]"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#eee9ff] text-[#673af2]">
                    <CheckCircle2 size={14} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <Link
              href="/solutions"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#6435f4] px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-[#5125e8]"
            >
              Discover Global Payments <ArrowRight size={14} />
            </Link>
          </div>
          <div className="rounded-3xl border border-[#e7e6f3] bg-white p-7 shadow-[0_25px_60px_rgba(31,25,87,.07)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-[#161a35]">Send money</p>
              <span className="rounded-full bg-[#f0eeff] px-3 py-1 text-[10px] font-semibold text-[#673af2]">
                Fast transfer
              </span>
            </div>
            <div className="mt-5 rounded-2xl border border-[#eeeaf6] p-4">
              <p className="text-[10px] text-[#8a8fa2]">You send</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-2xl font-bold text-[#161a35]">
                  1,250.00
                </span>
                <span className="rounded-lg bg-[#f5f4fa] px-3 py-1.5 text-xs font-semibold text-[#161a35]">
                  🇺🇸 USD
                </span>
              </div>
            </div>
            <div className="my-2 text-center text-[#9b9fb2]">↓</div>
            <div className="rounded-2xl border border-[#eeeaf6] p-4">
              <p className="text-[10px] text-[#8a8fa2]">They receive</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-2xl font-bold text-[#161a35]">
                  1,168.32
                </span>
                <span className="rounded-lg bg-[#f5f4fa] px-3 py-1.5 text-xs font-semibold text-[#161a35]">
                  🇪🇺 EUR
                </span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl bg-[#f7f6fc] p-3">
                <p className="text-[10px] text-[#8a8fa2]">Exchange rate</p>
                <p className="mt-1 font-semibold text-[#161a35]">
                  1 USD = 0.934 EUR
                </p>
              </div>
              <div className="rounded-xl bg-[#f7f6fc] p-3">
                <p className="text-[10px] text-[#8a8fa2]">Transfer fee</p>
                <p className="mt-1 font-semibold text-[#161a35]">$0.00</p>
              </div>
            </div>
            <div className="mt-5 rounded-xl bg-[#f7f6fc] p-4">
              <p className="text-[10px] text-[#8a8fa2]">Recent transfers</p>
              {[
                ["To Sarah J.", "EUR · 1,168.32"],
                ["To Marco R.", "GBP · 980.40"],
                ["To Aisha K.", "USD · 2,500.00"],
              ].map(([to, val]) => (
                <div key={to} className="mt-2 flex justify-between text-[11px]">
                  <span className="text-[#5b6178]">{to}</span>
                  <span className="font-semibold text-[#161a35]">{val}</span>
                </div>
              ))}
            </div>
            <button className="mt-5 w-full rounded-xl bg-[#6335f4] py-3.5 text-xs font-semibold text-white transition hover:bg-[#5125e8]">
              Send 1,250.00 USD
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6fc] px-5 py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-2">
          <div className="order-2 flex justify-center lg:order-1">
            <DashboardMockup />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Dashboard"
              title="A complete view of your money"
              description="Watch your balance grow, track every transaction, and get smart insights that help you make better financial decisions — all in real time."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Real-time balance",
                  "See your money move the moment it happens.",
                ],
                [
                  "Spending insights",
                  "Auto-categorized transactions and trends.",
                ],
                [
                  "Smart budgets",
                  "Set limits and get alerts before you overspend.",
                ],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-2xl border border-[#e7e6f3] bg-white p-5"
                >
                  <h3 className="text-sm font-bold text-[#161a35]">{t}</h3>
                  <p className="mt-2 text-xs leading-6 text-[#767b8f]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
