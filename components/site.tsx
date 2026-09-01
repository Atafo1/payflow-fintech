"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CreditCard,
  Globe2,
  LockKeyhole,
  Menu,
  PiggyBank,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
  X,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

export const links = [
  { label: "Features", href: "/#features" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      ["Personal Banking", "/solutions"],
      ["Business Banking", "/solutions"],
      ["Global Payments", "/solutions"],
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Company",
    href: "/about",
    children: [
      ["About Payflow", "/about"],
      ["Security", "/security"],
      ["Contact", "/contact"],
    ],
  },
  {
    label: "Resources",
    href: "/help",
    children: [
      ["Help Center", "/help"],
      ["Contact Support", "/contact"],
    ],
  },
];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 text-[15px] font-bold tracking-tight ${light ? "text-white" : "text-[#10152e]"}`}
    >
      <span className="grid h-6 w-6 place-items-center rounded-lg bg-[#6435f4] text-white">
        <Sparkles size={14} fill="currentColor" />
      </span>
      Payflow
    </Link>
  );
}

export function Navbar({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 lg:px-10">
        <Logo light={dark} />
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1 text-[11px] font-medium transition ${dark ? "text-white/70 hover:text-white" : "text-[#5d6379] hover:text-[#10152e]"}`}
              >
                {item.label}
                {item.children && <ChevronDown size={11} />}
              </Link>
              {item.children && (
                <div className="pointer-events-none absolute left-1/2 top-full w-44 -translate-x-1/2  rounded-xl border border-[#ebeaf5] bg-white p-2 opacity-0 shadow-xl transition group-hover:pointer-events-auto  group-hover:opacity-100">
                  {item.children.map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="block rounded-lg px-3 py-2 text-[11px] text-[#5d6379] hover:bg-[#f0edff] hover:text-[#6435f4]"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/contact"
            className={`text-[11px] font-medium ${dark ? "text-white/70 hover:text-white" : "text-[#5d6379]"}`}
          >
            Log in
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-[#6435f4] px-5 py-3 text-[11px] font-semibold text-white shadow-[0_10px_25px_rgba(100,53,244,.3)] transition hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className={`rounded-lg p-2 lg:hidden ${dark ? "text-white" : "text-[#10152e]"}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="mx-4 rounded-2xl border border-white/10 bg-[#11152d] p-4 shadow-2xl lg:hidden">
          {links.map((item) => (
            <Link
              onClick={() => setOpen(false)}
              key={item.label}
              href={item.href}
              className="block border-b border-white/10 px-2 py-3 text-sm text-white/80 last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <Link
            onClick={() => setOpen(false)}
            href="/contact"
            className="mt-3 block rounded-lg bg-[#6435f4] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  return (
    <footer className="bg-[#080b20] px-5 py-14 text-white lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-[210px] text-sm leading-6 text-white/45">
              Modern finance for a brighter, more connected world.
            </p>
            <div className="mt-5 flex gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-xs">
                in
              </span>
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-xs">
                X
              </span>
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-xs">
                ◎
              </span>
            </div>
          </div>
          {[
            ["Product", ["Features", "Solutions", "Pricing", "Security"]],
            ["Company", ["About us", "Careers", "Blog", "Contact"]],
            ["Resources", ["Help Center", "Guides", "API Docs", "Status"]],
            [
              "Legal",
              [
                "Privacy Policy",
                "Terms of Use",
                "Cookie Policy",
                "Disclaimers",
              ],
            ],
          ].map(([title, items]) => (
            <div key={title as string}>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[.2em] text-white/35">
                {title as string}
              </p>
              {(items as string[]).map((item) => (
                <Link
                  key={item}
                  href={
                    item === "Contact"
                      ? "/contact"
                      : item === "Pricing"
                        ? "/pricing"
                        : item === "Security"
                          ? "/security"
                          : item === "Help Center"
                            ? "/help"
                            : "#"
                  }
                  className="block py-1.5 text-sm text-white/60 transition hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="text-xs text-white/35">
            © 2026 Payflow. Fictional demo product.
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setJoined(true);
            }}
            className="w-full max-w-[360px]"
          >
            <p className="mb-3 text-xs font-semibold text-white/80">
              {joined ? "You are on the list." : "Subscribe to our newsletter"}
            </p>
            {!joined && (
              <div className="flex rounded-lg border border-white/10 bg-white/5 p-1">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent px-3 text-xs text-white outline-none placeholder:text-white/30"
                />
                <button
                  aria-label="Subscribe"
                  className="grid h-8 w-8 place-items-center rounded-md bg-[#6435f4] text-white"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </footer>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-[650px]`}>
      <p
        className={`mb-4 text-[10px] font-bold uppercase tracking-[.24em] ${light ? "text-[#b29bff]" : "text-[#6435f4]"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-bold leading-[1.05] tracking-[-.04em] sm:text-5xl ${light ? "text-white" : "text-[#11162b]"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-[550px] text-sm leading-7 ${center ? "mx-auto" : ""} ${light ? "text-white/55" : "text-[#73788b]"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#080b20] px-5 pb-24 pt-36 text-center lg:px-10">
      <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#6435f4]/25 blur-[120px]" />
      <div className="relative mx-auto max-w-[780px]">
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[.24em] text-[#b29bff]">
          {eyebrow}
        </p>
        <h1 className="text-5xl font-bold leading-[1.03] tracking-[-.05em] text-white sm:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-[600px] text-base leading-7 text-white/80">
          {description}
        </p>
      </div>
    </section>
  );
}

export function PhoneMockup() {
  const rows = [
    ["Sarah Johnson", "-$***.**"],
    ["Michael Lee", "+$***.**"],
    ["Netflix Subscription", "-$***.**"],
    ["Spotify Premium", "-$***.**"],
  ];
  return (
    <div className="phone-wrap animate-float">
      <div className="phone">
        <div className="phone-notch" />
        <div className="flex justify-between text-[9px] text-white/60">
          <span>9:41</span>
          <span>WiFi 100%</span>
        </div>
        <div className="mt-7 flex justify-between text-[10px] text-white/65">
          <span>Hello, David ✦</span>
          <span className="rounded-full bg-white/10 px-2 py-1">⌕</span>
        </div>
        <p className="mt-7 text-[8px] text-white/45">Demo Balance</p>
        <p className="mt-1 text-2xl font-semibold">$****.**</p>
        <div className="mt-5 grid grid-cols-4 gap-2 text-center text-[7px] text-white/60">
          {[
            ["↗", "Send"],
            ["↓", "Receive"],
            ["◉", "Top up"],
            ["•••", "More"],
          ].map(([icon, label]) => (
            <div key={label}>
              <span className="mx-auto mb-1 grid h-8 w-8 place-items-center rounded-xl bg-[#24254f] text-sm text-[#b698ff]">
                {icon}
              </span>
              {label}
            </div>
          ))}
        </div>
        <p className="mt-7 text-[9px] font-medium">Recent transactions</p>
        {rows.map(([name, amount], i) => (
          <div key={name} className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`grid h-6 w-6 place-items-center rounded-full text-[8px] font-bold ${i === 1 ? "bg-[#dbedff] text-[#3977b7]" : i === 2 ? "bg-[#e63946] text-white" : "bg-[#f9d3a9] text-[#7d4527]"}`}
              >
                {name[0]}
              </span>
              <p className="text-[8px]">{name}</p>
            </div>
            <span
              className={`text-[8px] font-semibold ${amount[0] === "+" ? "text-[#69e5a4]" : "text-white/80"}`}
            >
              {amount}
            </span>
          </div>
        ))}
        <div className="mt-5 rounded-xl bg-gradient-to-br from-[#623bf1] to-[#33229d] p-3">
          <p className="text-[8px] font-semibold">Get your Payflow Card</p>
          <p className="mt-1 text-[6px] text-white/60">
            Spend anywhere, anytime.
          </p>
        </div>
      </div>
      <div className="card-mockup">
        <div className="flex justify-between">
          <span>Payflow</span>
          <span className="text-xl">⌁</span>
        </div>
        <div className="mt-14 text-[11px] text-white/80">
          ••••　••••　••••　3728
        </div>
        <div className="mt-3 flex justify-between text-[10px] text-white/65">
          <span>DAVID MORGAN</span>
          <strong>VISA-DEM0</strong>
        </div>
      </div>
    </div>
  );
}

export function DashboardMockup() {
  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] text-[#81879c]">Total balance</p>
          <p className="mt-1 text-2xl font-bold text-[#151936]">$24,680.50</p>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#eeeaff] text-[#673af2]">
          <WalletCards size={17} />
        </span>
      </div>
      <div className="mt-6 h-28">
        <div className="flex h-full items-end gap-2">
          {[30, 42, 36, 58, 50, 70, 62, 88, 72, 92, 78, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-gradient-to-t from-[#7350f4] to-[#b09bff]"
              style={{ height: `${h}%`, opacity: i === 11 ? 1 : 0.35 + i / 20 }}
            />
          ))}
        </div>
      </div>
      <div className="mt-5 flex justify-between text-[9px] text-[#9ca1b4]">
        <span>Jan</span>
        <span>Mar</span>
        <span>May</span>
        <span>Jul</span>
        <span>Sep</span>
        <span>Nov</span>
      </div>
    </div>
  );
}

export function Stats() {
  const stats = [
    ["250K+", "Happy users", Users],
    ["$5B+", "Transactions processed", BarChart3],
    ["99.9%", "Uptime & reliability", ShieldCheck],
    ["256-bit", "Bank-level security", LockKeyhole],
  ] as const;
  return (
    <div className="relative z-10 mx-auto -mt-7 grid max-w-[1120px] overflow-hidden rounded-2xl border border-white/10 bg-[#151936] shadow-2xl sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(([value, label, Icon]) => (
        <div
          key={value}
          className="flex items-center gap-3 border-white/10 p-5 sm:border-r lg:p-7"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#2b236e] text-[#aa92ff]">
            <Icon size={17} />
          </span>
          <div>
            <p className="text-lg font-bold text-white">{value}</p>
            <p className="text-[10px] text-white">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export const featureData = [
  [
    "Instant Transfers",
    "Send and receive money instantly to anyone, anywhere.",
    Send,
  ],
  [
    "Spend Anywhere",
    "Use your virtual or physical card online and in-store.",
    CreditCard,
  ],
  [
    "Smart Insights",
    "Track spending, set budgets, and reach your financial goals.",
    BarChart3,
  ],
  [
    "Save & Grow",
    "Automate your savings and earn competitive interest rates.",
    PiggyBank,
  ],
  [
    "Global Access",
    "Multi-currency accounts and low FX fees for global transactions.",
    Globe2,
  ],
  [
    "Top Security",
    "Your money and data are protected with top-tier encryption.",
    ShieldCheck,
  ],
] as const;
export function FeatureGrid() {
  return (
    <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {featureData.map(([title, text, Icon]) => (
        <div
          key={title}
          className="group rounded-2xl border border-[#e7e7f2] bg-white p-6 transition hover:-translate-y-1 hover:border-[#b6a5ff] hover:shadow-[0_18px_40px_rgba(91,65,236,.1)]"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f0edff] text-[#6742ef] transition group-hover:bg-[#6742ef] group-hover:text-white">
            <Icon size={19} />
          </span>
          <h3 className="mt-6 text-sm font-bold text-[#161a35]">{title}</h3>
          <p className="mt-3 text-xs leading-6 text-[#767b8f]">{text}</p>
        </div>
      ))}
    </div>
  );
}

export function CTA({
  light = false,
  title = "Your financial future starts here.",
  description = "Join the smarter way to move, manage, and grow your money.",
}: {
  light?: boolean;
  title?: string;
  description?: string;
}) {
  return (
    <section
      className={`${light ? "bg-[#f4f2ff]" : "bg-[#0b0e24]"} px-5 py-20 lg:px-10`}
    >
      <div className="mx-auto flex max-w-[1060px] flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <div>
          <h2
            className={`max-w-[520px] text-4xl font-bold leading-tight tracking-[-.04em] ${light ? "text-[#11162b]" : "text-white"}`}
          >
            {title}
          </h2>
          <p
            className={`mt-4 text-sm ${light ? "text-[#72778d]" : "text-white/80"}`}
          >
            {description}
          </p>
        </div>
        <Link
          href="/contact"
          className="flex shrink-0 items-center gap-2 rounded-xl bg-[#6435f4] px-6 py-4 text-xs font-semibold text-white shadow-xl shadow-[#6435f4]/20 transition hover:-translate-y-1"
        >
          Get started for free <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
