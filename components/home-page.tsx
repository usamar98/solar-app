"use client";

import {
  Activity,
  BatteryCharging,
  Building2,
  Check,
  ChevronDown,
  ClipboardCheck,
  Factory,
  Gauge,
  GraduationCap,
  Home,
  Hotel,
  HousePlug,
  Landmark,
  Layers3,
  Leaf,
  Mail,
  MapPin,
  MapPinned,
  Menu,
  MonitorSmartphone,
  Moon,
  Mountain,
  Phone,
  PlugZap,
  RadioTower,
  RotateCw,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  SunMedium,
  TrendingDown,
  X,
  Zap,
  type LucideIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";
import {
  batteryFeatures,
  faqs,
  heroMetrics,
  industries,
  navigation,
  problems,
  processSteps,
  projects,
  services,
  siteConfig,
  stats,
  testimonials,
  trustLabels,
  trustPoints
} from "@/data/site";

const iconMap: Record<string, LucideIcon> = {
  Activity,
  BatteryCharging,
  Building2,
  ClipboardCheck,
  Factory,
  Gauge,
  GraduationCap,
  Home,
  Hotel,
  HousePlug,
  Landmark,
  Layers3,
  Leaf,
  MapPinned,
  MonitorSmartphone,
  Moon,
  Mountain,
  PlugZap,
  RadioTower,
  RotateCw,
  ShieldCheck,
  Sprout,
  TrendingDown
};

const filters = ["All", "Residential", "Commercial", "Battery", "Off-Grid"];

function IconFor({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Zap;
  return <Icon className={className} aria-hidden="true" />;
}

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Section({
  id,
  className,
  children
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24", className)}
    >
      {children}
    </motion.section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue/25 bg-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-base leading-8 text-white/68 sm:text-lg">{text}</p> : null}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  className
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber to-blue px-5 py-3 text-sm font-bold text-ink shadow-amber transition hover:-translate-y-0.5 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-ink",
        className
      )}
    >
      <Zap className="h-4 w-4 transition group-hover:rotate-12" aria-hidden="true" />
      {children}
    </a>
  );
}

function SecondaryButton({
  href,
  children,
  className
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/7 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-blue/50 hover:bg-blue/10 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-ink",
        className
      )}
    >
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-ink/82 shadow-2xl backdrop-blur-2xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={`${siteConfig.companyName} home`}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber/30 bg-amber/12 shadow-amber">
            <SunMedium className="h-6 w-6 text-amber" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-base font-bold tracking-wide text-white">{siteConfig.companyName}</span>
            <span className="hidden text-xs text-white/55 sm:block">{siteConfig.tagline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-white/68 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SecondaryButton href={siteConfig.whatsappHref} className="min-h-10 px-4 py-2">
            WhatsApp
          </SecondaryButton>
          <PrimaryButton href="#estimate" className="min-h-10 px-4 py-2">
            Request Energy Audit
          </PrimaryButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mb-4 rounded-3xl border border-white/12 bg-ink/96 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
        >
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <PrimaryButton href="#estimate" className="w-full" >
              Request Energy Audit
            </PrimaryButton>
            <SecondaryButton href={siteConfig.whatsappHref} className="w-full">
              Chat on WhatsApp
            </SecondaryButton>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.15 }}
      className="relative min-h-[560px] lg:min-h-[640px]"
      aria-label="Animated solar energy dashboard visual"
    >
      <div className="absolute inset-3 rounded-[2rem] bg-radial-energy opacity-90 blur-3xl" />
      <div className="glass absolute inset-x-0 top-12 overflow-hidden rounded-[2rem] p-5 sm:p-6">
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-blue/20" />
        <div className="absolute -left-20 bottom-10 h-56 w-56 rounded-full border border-amber/20" />
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blue">Live Energy Grid</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">HelioCore OS</h3>
          </div>
          <div className="rounded-full border border-emerald-300/30 bg-emerald-300/12 px-3 py-1 text-xs font-semibold text-emerald-200">
            Online
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 rounded-3xl border border-white/10 bg-white/5 p-3">
          {Array.from({ length: 40 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.35 }}
              animate={{ opacity: [0.35, 1, 0.55] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: (index % 8) * 0.13 }}
              className={cn(
                "aspect-[1.2] rounded-xl border",
                index % 7 === 0
                  ? "border-amber/45 bg-amber/20 shadow-amber"
                  : index % 5 === 0
                    ? "border-blue/45 bg-blue/18 shadow-glow"
                    : "border-white/10 bg-white/6"
              )}
            />
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Solar input", value: "38.2kW", color: "bg-amber" },
            { label: "Storage flow", value: "18.6kW", color: "bg-blue" },
            { label: "Load served", value: "31.4kW", color: "bg-emerald-300" }
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/7 p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-white/52">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className={cn("h-full rounded-full", item.color)}
                  initial={{ width: "20%" }}
                  animate={{ width: ["40%", "86%", "62%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="glass float-slow absolute right-0 top-0 w-48 rounded-3xl p-4"
        initial={{ x: 24, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.55 }}
      >
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-amber/15 p-3 text-amber">
            <SunMedium className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs text-white/50">Solar array</p>
            <p className="text-xl font-semibold text-white">97%</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="glass absolute bottom-8 left-0 w-56 rounded-3xl p-4"
        initial={{ x: -24, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs text-white/50">Backup reserve</span>
          <BatteryCharging className="h-4 w-4 text-blue" aria-hidden="true" />
        </div>
        <p className="text-3xl font-semibold text-white">14h</p>
        <div className="mt-3 h-2 rounded-full bg-white/10">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue to-amber" />
        </div>
      </motion.div>

      <div className="orbit absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue/10" />
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-12 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <div className="absolute inset-0 -z-10 bg-radial-energy opacity-70" />
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/12 bg-white/7 px-3 py-2 text-xs font-semibold text-white/72 backdrop-blur">
            <span className="rounded-full bg-blue/20 px-2 py-1 text-blue">Premium Energy Partner</span>
            {siteConfig.tagline}
          </div>
          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Build a Smarter Energy Future With Solar & Battery Storage
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-xl">
            Premium solar panel installation, battery backup, and energy infrastructure solutions for homes,
            businesses, resorts, farms, and commercial properties.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="#estimate">Request Free Energy Audit</PrimaryButton>
            <SecondaryButton href="#solutions">Explore Solutions</SecondaryButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {trustLabels.map((label) => (
              <span key={label} className="rounded-full border border-white/12 bg-white/7 px-3 py-2 text-xs font-semibold text-white/68">
                {label}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
            {heroMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.08 }}
                className="glass-soft rounded-3xl p-4"
              >
                <p className="text-sm text-white/52">{metric.label}</p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">{metric.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <Section className="pt-8">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <SectionHeading
          eyebrow="Lead clarity"
          title="Your Customers Are Searching for Energy Savings Before They Call"
          text="Solar buyers compare companies online before making a decision. A premium website helps show trust, project proof, savings potential, and a clear quote process before the first conversation."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {problems.map((problem) => (
            <div key={problem.title} className="glass rounded-[1.75rem] p-5 transition hover:-translate-y-1 hover:border-blue/35">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue/12 text-blue">
                <IconFor name={problem.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function SolutionsSection() {
  return (
    <Section id="solutions">
      <SectionHeading
        eyebrow="Solutions"
        title="Solar, Storage, and Energy Infrastructure Built Around the Property"
        text="Each solution can be localized by market, incentive structure, utility tariff, climate, and customer segment from the configuration file."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            className="glass group flex min-h-[330px] flex-col rounded-[1.75rem] p-5 transition hover:-translate-y-1 hover:border-amber/35"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber/13 text-amber">
                <IconFor name={service.icon} className="h-6 w-6" />
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                {service.bestFor}
              </span>
            </div>
            <h3 className="text-xl font-semibold leading-tight text-white">{service.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-white/62">{service.description}</p>
            <a
              href="#estimate"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue transition group-hover:text-amber"
            >
              Get Quote
              <Zap className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function EstimateForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  const inputClass =
    "min-h-12 w-full rounded-2xl border border-white/10 bg-white/7 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/38 focus:border-blue/60 focus:bg-white/10";

  return (
    <Section id="estimate" className="py-12 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div className="glass rounded-[2rem] p-6 sm:p-8">
          <SectionHeading
            eyebrow="Solar estimate"
            title="Estimate Your Solar Potential"
            text="Share a few details and the frontend will show a confirmation message. Connect the form to your CRM later when you are ready."
          />
          <div className="mt-8 rounded-3xl border border-amber/20 bg-amber/10 p-5">
            <p className="text-sm font-semibold text-amber">Need faster help?</p>
            <p className="mt-2 text-sm leading-7 text-white/68">
              Chat with our solar consultant on WhatsApp for a faster response.
            </p>
            <SecondaryButton href={siteConfig.whatsappHref} className="mt-5">
              Chat on WhatsApp
            </SecondaryButton>
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-[2rem] p-5 sm:p-6" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-white/72">
              Full Name
              <input className={inputClass} name="name" placeholder="Alex Morgan" required />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white/72">
              Phone Number
              <input className={inputClass} name="phone" placeholder="+1 234 567 890" required />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white/72">
              Email
              <input className={inputClass} name="email" placeholder="alex@example.com" type="email" required />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white/72">
              Country / City
              <input className={inputClass} name="location" placeholder="United States / Your City" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white/72">
              Property Type
              <select className={inputClass} name="propertyType" defaultValue="">
                <option value="" disabled>
                  Select property type
                </option>
                {["Home", "Business", "Hotel / Resort", "Farm", "Factory", "Other"].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white/72">
              Average Monthly Electricity Bill
              <select className={inputClass} name="bill" defaultValue="">
                <option value="" disabled>
                  Select bill range
                </option>
                {["Under $100", "$100-$300", "$300-$700", "$700-$1500", "$1500+"].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white/72 sm:col-span-2">
              Interested Solution
              <select className={inputClass} name="solution" defaultValue="">
                <option value="" disabled>
                  Select solution
                </option>
                {["Solar Panels", "Battery Storage", "Solar + Battery", "EV Charger", "Maintenance"].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white/72 sm:col-span-2">
              Message
              <textarea
                className={cn(inputClass, "min-h-32 resize-y")}
                name="message"
                placeholder="Tell us about your roof, property, outage concerns, or savings goals."
              />
            </label>
          </div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-2xl border border-emerald-300/25 bg-emerald-300/10 p-4 text-sm leading-7 text-emerald-100"
            >
              Thank you. Your solar estimate request has been received. Our team will contact you shortly.
            </motion.div>
          ) : null}

          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber to-blue px-5 py-3 text-sm font-bold text-ink shadow-amber transition hover:-translate-y-0.5 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-ink sm:w-auto"
          >
            <Zap className="h-4 w-4" aria-hidden="true" />
            Get My Solar Estimate
          </button>
        </form>
      </div>
    </Section>
  );
}

function BatterySection() {
  return (
    <Section id="battery">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Battery storage"
            title="Energy Storage That Keeps You Running"
            text="Store excess solar energy, reduce grid dependence, and protect your property during outages."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {batteryFeatures.map((feature) => (
              <div key={feature.title} className="glass-soft flex items-center gap-3 rounded-2xl p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue/12 text-blue">
                  <IconFor name={feature.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold leading-6 text-white/78">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass relative overflow-hidden rounded-[2rem] p-6">
          <div className="absolute right-8 top-8 h-44 w-44 rounded-full bg-blue/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-amber/15 blur-3xl" />
          <div className="relative">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-blue">Battery dashboard</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Storage Status</h3>
              </div>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-300/12 px-3 py-1 text-xs font-bold text-emerald-100">
                Online
              </span>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm text-white/58">Battery level</span>
                <span className="text-3xl font-semibold text-white">92%</span>
              </div>
              <div className="h-5 overflow-hidden rounded-full bg-white/10 p-1">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-amber via-blue to-emerald-300"
                  initial={{ width: "55%" }}
                  whileInView={{ width: "92%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                />
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["Solar input", "8.4kW", "text-amber"],
                ["Home usage", "4.8kW", "text-blue"],
                ["Grid backup", "Standby", "text-emerald-200"],
                ["Status", "Online", "text-white"]
              ].map(([label, value, color]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/7 p-4">
                  <p className="text-xs text-white/46">{label}</p>
                  <p className={cn("mt-2 text-xl font-semibold", color)}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function IndustriesSection() {
  return (
    <Section id="industries">
      <SectionHeading
        eyebrow="Industries"
        title="Energy Solutions for Properties That Need More Than Panels"
        text="HelioGrid can be adapted for homeowners, commercial operators, resorts, agricultural sites, factories, developers, institutions, and remote properties."
        align="center"
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => (
          <article key={industry.title} className="glass rounded-[1.75rem] p-5 transition hover:-translate-y-1 hover:border-blue/35">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue/12 text-blue">
              <IconFor name={industry.icon} className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">{industry.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/62">{industry.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ProjectVisual({ index }: { index: number }) {
  return (
    <div className="relative mb-5 h-44 overflow-hidden rounded-[1.5rem] border border-white/10 bg-midnight">
      <div className={cn("absolute inset-0", index % 2 === 0 ? "bg-radial-energy" : "bg-gradient-to-br from-blue/20 via-white/5 to-amber/20")} />
      <div className="absolute inset-x-5 bottom-5 grid grid-cols-6 gap-1.5">
        {Array.from({ length: 18 }).map((_, cell) => (
          <div
            key={cell}
            className={cn(
              "h-8 rounded-md border",
              cell % 4 === 0 ? "border-amber/35 bg-amber/18" : "border-blue/25 bg-blue/12"
            )}
          />
        ))}
      </div>
      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/12 bg-ink/60 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
        <SunMedium className="h-4 w-4 text-amber" aria-hidden="true" />
        Project proof
      </div>
    </div>
  );
}

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(
    () => projects.filter((project) => activeFilter === "All" || project.category === activeFilter),
    [activeFilter]
  );

  return (
    <Section id="projects">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Project showcase"
          title="Premium Case Studies With Clear System Proof"
          text="Use these cards as a flexible project library for local installations, commercial proof, battery upgrades, and off-grid wins."
        />
        <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition",
                activeFilter === filter
                  ? "border-blue/55 bg-blue/15 text-blue shadow-glow"
                  : "border-white/12 bg-white/7 text-white/64 hover:border-white/25 hover:text-white"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-[2rem] p-4"
          >
            <ProjectVisual index={index} />
            <div className="px-1 pb-2">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full border border-amber/25 bg-amber/10 px-3 py-1 text-xs font-bold text-amber">
                  {project.category}
                </span>
                <span className="text-xs text-white/45">{project.location}</span>
              </div>
              <h3 className="text-xl font-semibold leading-tight text-white">{project.title}</h3>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  ["Size", project.size],
                  ["Battery", project.battery],
                  ["Savings", project.savings]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/6 p-3">
                    <p className="text-[11px] text-white/42">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-white/62">{project.result}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function TrustSection() {
  return (
    <Section>
      <div className="glass overflow-hidden rounded-[2.25rem] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Why choose HelioGrid"
            title="Designed for Performance. Built for Long-Term Savings."
            text="A premium energy partner should feel transparent, technical, responsive, and serious about lifecycle value."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-300/12 text-emerald-200">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-white/76">{point}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-ink/45 p-5 text-center">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/46">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProcessSection() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="Process"
        title="A Clear Path From Energy Audit to Long-Term Monitoring"
        text="A premium quote process should remove uncertainty, explain the numbers, and make the installation feel controlled from day one."
        align="center"
      />
      <div className="relative mt-12">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-blue via-amber to-transparent md:block lg:left-1/2" />
        <div className="grid gap-5">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={cn(
                "relative grid gap-4 md:grid-cols-[5rem_1fr] lg:grid-cols-2",
                index % 2 === 1 && "lg:[&>article]:col-start-2"
              )}
            >
              <div className="hidden md:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue/35 bg-blue/14 text-sm font-bold text-blue shadow-glow">
                  {index + 1}
                </div>
              </div>
              <article className="glass rounded-[1.75rem] p-5 md:ml-16 lg:ml-0">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue/35 bg-blue/12 text-sm font-bold text-blue md:hidden">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{step.description}</p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ReviewsSection() {
  return (
    <Section id="reviews">
      <SectionHeading
        eyebrow="Reviews"
        title="Trusted by Properties Where Energy Reliability Matters"
        text="Use these testimonials as realistic placeholders for homeowners, resorts, commercial managers, and agriculture clients."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="glass flex min-h-[310px] flex-col rounded-[1.75rem] p-5">
            <div className="mb-5 flex gap-1 text-amber">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </div>
            <p className="flex-1 text-sm leading-7 text-white/70">"{testimonial.review}"</p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="mt-1 text-sm text-blue">{testimonial.propertyType}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers That Help Buyers Move With Confidence"
          text="These common questions can be adjusted for any country, utility market, incentive program, or solar company's exact offer."
        />
        <div className="grid gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="glass overflow-hidden rounded-3xl">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white">{faq.question}</span>
                  <ChevronDown className={cn("h-5 w-5 shrink-0 text-blue transition", isOpen && "rotate-180")} aria-hidden="true" />
                </button>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-sm leading-7 text-white/62">{faq.answer}</p>
                  </motion.div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section className="py-10 lg:py-16">
      <div className="relative overflow-hidden rounded-[2.25rem] border border-white/12 bg-gradient-to-br from-blue/16 via-white/7 to-amber/18 p-6 shadow-glow backdrop-blur sm:p-10 lg:p-14">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue/20 blur-3xl" />
        <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-amber/20 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber">Free consultation</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Ready to Turn Sunlight Into Long-Term Savings?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Book a free energy consultation and discover the right solar and battery solution for your property.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <PrimaryButton href="#estimate">Request Free Energy Audit</PrimaryButton>
            <SecondaryButton href={siteConfig.whatsappHref}>Chat on WhatsApp</SecondaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  const inputClass =
    "min-h-12 w-full rounded-2xl border border-white/10 bg-white/7 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/38 focus:border-blue/60 focus:bg-white/10";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <Section id="contact">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Start With a Conversation About Your Energy Goals"
            text="Use this section for phone calls, WhatsApp, email, business hours, service area, and office location. All details are controlled in one site configuration object."
          />
          <div className="mt-8 grid gap-3">
            {[
              { label: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref, icon: Phone },
              { label: "WhatsApp", value: siteConfig.whatsapp, href: siteConfig.whatsappHref, icon: MonitorSmartphone },
              { label: "Email", value: siteConfig.email, href: siteConfig.emailHref, icon: Mail },
              { label: "Business Hours", value: siteConfig.businessHours, href: "#", icon: Activity },
              { label: "Service Area", value: siteConfig.serviceAreas.join(" & "), href: "#", icon: MapPin },
              { label: "Office Location", value: siteConfig.officeLocation, href: "#", icon: Building2 }
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue/12 text-blue">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/42">{item.label}</span>
                    <span className="mt-1 block text-sm font-semibold text-white/82">{item.value}</span>
                  </span>
                </>
              );

              return item.href === "#" ? (
                <div key={item.label} className="glass-soft flex items-center gap-4 rounded-2xl p-4">
                  {content}
                </div>
              ) : (
                <a key={item.label} href={item.href} className="glass-soft flex items-center gap-4 rounded-2xl p-4 transition hover:border-blue/40">
                  {content}
                </a>
              );
            })}
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-[2rem] p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-white/72">
              Name
              <input className={inputClass} name="contactName" placeholder="Your name" required />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white/72">
              Phone
              <input className={inputClass} name="contactPhone" placeholder="+1 234 567 890" required />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white/72 sm:col-span-2">
              Email
              <input className={inputClass} name="contactEmail" placeholder="you@example.com" type="email" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white/72 sm:col-span-2">
              Project Type
              <select className={inputClass} name="contactProject" defaultValue="">
                <option value="" disabled>
                  Choose project type
                </option>
                {["Home Solar", "Commercial Solar", "Battery Storage", "Off-Grid System", "Maintenance", "Energy Audit"].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white/72 sm:col-span-2">
              Message
              <textarea className={cn(inputClass, "min-h-36 resize-y")} name="contactMessage" placeholder="Tell us what you want to power." />
            </label>
          </div>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-2xl border border-emerald-300/25 bg-emerald-300/10 p-4 text-sm leading-7 text-emerald-100"
            >
              Thank you. Your message has been received. Our team will contact you shortly.
            </motion.div>
          ) : null}
          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber to-blue px-5 py-3 text-sm font-bold text-ink shadow-amber transition hover:-translate-y-0.5 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-ink"
          >
            Request Consultation
          </button>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr]">
        <div>
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber/30 bg-amber/12">
              <SunMedium className="h-6 w-6 text-amber" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-base font-bold text-white">{siteConfig.companyName}</span>
              <span className="text-xs text-white/52">{siteConfig.tagline}</span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
            Premium solar, battery storage, EV charging, and energy infrastructure website template for companies that need stronger lead generation.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {siteConfig.socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="rounded-full border border-white/12 px-3 py-2 text-xs font-semibold text-white/58 transition hover:border-blue/35 hover:text-blue">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <FooterColumn title="Quick Links" links={navigation} />
        <FooterColumn
          title="Solar Solutions"
          links={services.slice(0, 6).map((service) => ({ label: service.title, href: "#solutions" }))}
        />
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Contact</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/58">
            <a href={siteConfig.phoneHref} className="hover:text-blue">{siteConfig.phone}</a>
            <a href={siteConfig.whatsappHref} className="hover:text-blue">{siteConfig.whatsapp}</a>
            <a href={siteConfig.emailHref} className="hover:text-blue">{siteConfig.email}</a>
            <p>{siteConfig.city}, {siteConfig.country}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
        <p>Frontend-only website. Forms show demo confirmation messages.</p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">{title}</h3>
      <div className="mt-5 grid gap-3">
        {links.map((link) => (
          <a key={`${title}-${link.label}`} href={link.href} className="text-sm text-white/58 transition hover:text-blue">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionsSection />
      <EstimateForm />
      <BatterySection />
      <IndustriesSection />
      <ProjectsSection />
      <TrustSection />
      <ProcessSection />
      <ReviewsSection />
      <FAQSection />
      <FinalCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
