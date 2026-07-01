import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaArrowRight,
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiMongodb, SiJira, SiN8N } from "react-icons/si";
import { HiMenu, HiX, HiSparkles, HiCode, HiBriefcase, HiAcademicCap } from "react-icons/hi";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nimra Tanveer — Software Engineer & Project Manager" },
      { name: "description", content: "Portfolio of Nimra Tanveer — Software Engineering, Project Management, Business Development, Frontend Development and AI Automation (n8n)." },
    ],
  }),
  component: Portfolio,
});

const CV_URL = "/Nimra_Tanveer_CV.pdf";
const GITHUB = "https://github.com/nimratanveer440";
const LINKEDIN = "https://www.linkedin.com/in/nimra-tanveer-7276303b7/";
const EMAIL = "nimratanveer044@gmail.com";
const PHONE = "+92 325 8687981";

const nav = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- Navbar ---------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`glass-strong flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${scrolled ? "shadow-2xl shadow-primary/10" : ""}`}>
          <a href="#home" className="flex items-center gap-2 group">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow font-display font-bold text-primary-foreground glow-purple group-hover:scale-110 transition-transform">
              NT
            </div>
            <span className="hidden sm:block font-display font-semibold text-foreground">Nimra Tanveer</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href={CV_URL} download className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-glow px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity glow-purple">
              <FaDownload className="h-3.5 w-3.5" /> Download CV
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden grid h-10 w-10 place-items-center rounded-xl glass text-foreground" aria-label="Menu">
              {open ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-3"
            >
              {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5">
                  {n.label}
                </a>
              ))}
              <a href={CV_URL} download className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow px-4 py-3 text-sm font-medium text-primary-foreground">
                <FaDownload className="h-3.5 w-3.5" /> Download CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

/* ---------- Hero ---------- */
const ROLES = [
  "Software Engineering Student",
  "Business Development Intern @ Digital Soft",
  "Software Project Management Intern",
  "Frontend Developer",
  "AI Automation Enthusiast (n8n)",
];

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = deleting ? 30 : 70;
    const t = setTimeout(() => {
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === current) setTimeout(() => setDeleting(true), 1600);
      else if (deleting && next === "") { setDeleting(false); setI(i + 1); }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return text;
}

function Hero() {
  const typed = useTyping(ROLES);
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl w-full grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 md:order-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for opportunities
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Hello, I'm <span className="text-gradient">Nimra Tanveer</span>
          </h1>

          <div className="mt-6 h-8 sm:h-10">
            <p className="text-lg sm:text-2xl text-muted-foreground font-display">
              {typed}
              <span className="inline-block w-[2px] h-6 sm:h-7 bg-primary ml-1 animate-pulse align-middle" />
            </p>
          </div>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground/90 leading-relaxed">
            3rd-year Software Engineering student at NTU Faisalabad. I bridge
            business and technology through project management, frontend
            development, and AI automation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={CV_URL} download className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-glow px-5 py-3 text-sm font-medium text-primary-foreground hover:scale-105 transition-transform glow-purple">
              <FaDownload className="h-4 w-4" /> Download CV
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-medium text-foreground hover:bg-white/10 transition-colors">
              View Projects <FaArrowRight className="h-3.5 w-3.5" />
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-xl glass-strong text-foreground hover:text-primary hover:scale-110 transition-all">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-xl glass-strong text-foreground hover:text-primary hover:scale-110 transition-all">
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 md:order-2 justify-self-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary via-primary-glow to-accent opacity-40 blur-2xl"
            />
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full p-1.5 bg-gradient-to-tr from-primary via-primary-glow to-accent glow-purple">
              <div className="h-full w-full rounded-full overflow-hidden bg-background">
                <img
  src="/profile.jpeg"
  alt="Nimra Tanveer"
  className="h-full w-full object-cover"
/>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-strong rounded-2xl px-3 py-2 text-xs font-medium text-foreground flex items-center gap-1.5"
            >
              <HiSparkles className="h-4 w-4 text-primary-glow" /> Open to work
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Section heading ---------- */
function SectionHead({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary-glow font-semibold mb-3">{kicker}</span>
      <h2 className="text-3xl sm:text-5xl font-bold">{title}</h2>
      {sub && <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker="About me" title="Bridging business & technology" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-6 sm:p-10 grid md:grid-cols-[260px_1fr] gap-8 items-center"
        >
          <div className="justify-self-center md:justify-self-start">
            <div className="relative h-56 w-56 rounded-2xl overflow-hidden glow-purple ring-1 ring-white/10">
              <img
  src="/profile.jpeg"
  alt="Nimra Tanveer"
  className="h-full w-full object-cover"
/>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Nimra Tanveer</h3>
            <p className="text-primary-glow font-medium mb-4">Software Engineer · PM · AI Automation</p>
            <p className="text-muted-foreground leading-relaxed">
              I'm a motivated 3rd-year Software Engineering student at National
              Textile University Faisalabad with hands-on experience in business
              analysis, software project management, frontend development, and
              digital solutions. My major interests lie in <span className="text-foreground font-medium">Project Management</span>,
              <span className="text-foreground font-medium"> Business Development</span>, and building
              <span className="text-foreground font-medium"> AI automations with n8n</span>. I love
              shipping user-focused experiences that connect real business value with technology.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { k: "10+", v: "Projects" },
                { k: "3+", v: "Years studying" },
                { k: "1+", v: "Internship" },
                { k: "∞", v: "Curiosity" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-gradient">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */
const experiences = [
  {
    role: "Business Development · Software Project Manager · Frontend Developer",
    company: "Digital Soft",
    period: "Jun 2026 — Present",
    points: [
      "Contributed to business development activities and client communication.",
      "Assisted in software project planning, coordination, and task management.",
      "Built responsive web applications using HTML, CSS, and JavaScript.",
      "Developed interactive UIs and optimized user experience end-to-end.",
    ],
  },
  {
    role: "BS Software Engineering",
    company: "National Textile University, Faisalabad",
    period: "Sep 2023 — Present",
    points: [
      "Core curriculum in software design, data structures, and project management.",
      "Active in building real-world projects across web, mobile, and AI.",
    ],
  },
  {
    role: "Advanced Python Programming & Applications",
    company: "NAVTTC Certification",
    period: "May 2026",
    points: ["Hands-on certification in advanced Python applications and tooling."],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHead kicker="Journey" title="Experience & Education" />
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent -translate-x-1/2" />
          <div className="space-y-10">
            {experiences.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative grid sm:grid-cols-2 gap-6 items-start ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:pl-12" : "sm:pr-12 sm:text-right"}`}>
                  <div className="glass-strong rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    <div className="text-xs text-primary-glow font-semibold uppercase tracking-wider">{e.period}</div>
                    <h3 className="mt-1 text-lg font-bold">{e.role}</h3>
                    <div className="text-sm text-muted-foreground mt-0.5">{e.company}</div>
                    <ul className={`mt-3 space-y-1.5 text-sm text-muted-foreground ${i % 2 ? "" : "sm:text-right"}`}>
                      {e.points.map((p) => <li key={p}>• {p}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-4 sm:left-1/2 top-5 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow glow-purple ring-4 ring-background">
                  {i === 0 ? <HiBriefcase className="h-4 w-4 text-primary-foreground" /> : i === 1 ? <HiAcademicCap className="h-4 w-4 text-primary-foreground" /> : <HiSparkles className="h-4 w-4 text-primary-foreground" />}
                </div>
                <div className="hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */
const skills = [
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Python", icon: FaPython, color: "text-emerald-400" },
  { name: "n8n Automation", icon: SiN8N, color: "text-rose-400" },
  { name: "Jira", icon: SiJira, color: "text-blue-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Git & GitHub", icon: FaGitAlt, color: "text-orange-400" },
  { name: "VS Code", icon: HiCode, color: "text-sky-400" },
  { name: "Project Management", icon: HiBriefcase, color: "text-primary-glow" },
];

const softSkills = ["Business Development", "Software Project Management", "Leadership", "Communication", "Multi-tasking", "Time Management"];

function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker="Toolbox" title="Skills & Technologies" sub="Tools and disciplines I use to ship products." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass-strong rounded-2xl p-5 flex flex-col items-center gap-3 hover:bg-white/10 transition-colors group cursor-default"
            >
              <s.icon className={`h-10 w-10 ${s.color} group-hover:scale-110 transition-transform`} />
              <span className="text-sm font-medium text-foreground text-center">{s.name}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {softSkills.map((s) => (
            <span key={s} className="glass rounded-full px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">{s}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
const projects = [
  {
    title: "Hair Treatment Assistant",
    desc: "Web app providing personalized hair treatment recommendations using ML, with auth, progress tracking, reminders and a community forum.",
    tags: ["Python", "ML", "MongoDB", "Web"],
  },
  {
    title: "Airline Booking System",
    desc: "C++ application to manage flight bookings, passenger records and reservations through an efficient user-friendly platform.",
    tags: ["C++", "OOP", "Systems"],
  },
  {
    title: "Scholarship Portal",
    desc: "AI-powered portal that helps students identify suitable scholarships based on eligibility, with profile analysis and application management.",
    tags: ["Python", "AI", "Web"],
  },
  {
    title: "Sales Dashboard",
    desc: "Interactive data-science dashboard for sales performance — EDA, visualizations, KPIs and trend analysis to drive decisions.",
    tags: ["Data Science", "EDA", "Viz"],
  },
  {
    title: "Agentic AI · Video Automation",
    desc: "AI automation that generates and manages video creation workflows — content generation, processing and production using agentic AI.",
    tags: ["AI", "n8n", "Automation"],
  },
  {
    title: "Rental Pro App",
    desc: "Mobile app for property rental management — tenant info, rental activity and communication built with Dart & Firebase.",
    tags: ["Dart", "Firebase", "Mobile"],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker="Work" title="Selected Projects" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              className="glass-strong rounded-2xl p-6 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-primary-glow/20 ring-1 ring-white/10 mb-4">
                  <HiCode className="h-6 w-6 text-primary-glow" />
                </div>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] rounded-full glass px-2.5 py-0.5 text-muted-foreground">{t}</span>
                  ))}
                </div>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary-glow hover:text-foreground transition-colors"
                >
                  <FaGithub className="h-4 w-4" /> View on GitHub <FaArrowRight className="h-3 w-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const message = fd.get("message");
    const body = encodeURIComponent(`From: ${name}\n\n${message}`);
    window.location.href = `mailto:${EMAIL}?subject=Portfolio%20Contact&body=${body}`;
    setSent(true);
    formRef.current?.reset();
  };

  const items = [
    { icon: FaEnvelope, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: FaPhone, label: "Phone", value: PHONE, href: `tel:+923258687981` },
    { icon: FaLinkedin, label: "LinkedIn", value: "nimra-tanveer", href: LINKEDIN },
    { icon: FaGithub, label: "GitHub", value: "nimratanveer440", href: GITHUB },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker="Contact" title="Let's build something together" sub="Open to internships, freelance projects, and collaboration." />
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {items.map((it) => (
              <a
                key={it.label}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass-strong rounded-2xl p-5 flex items-center gap-4 hover:bg-white/10 transition-colors group"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground glow-purple group-hover:scale-110 transition-transform">
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{it.label}</div>
                  <div className="truncate font-medium text-foreground">{it.value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-6 space-y-4"
          >
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" placeholder="you@email.com" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea name="message" required rows={5} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-glow px-5 py-3 text-sm font-medium text-primary-foreground hover:scale-[1.02] transition-transform glow-purple">
              {sent ? "Opening your email..." : "Send Message"} <FaArrowRight className="h-3.5 w-3.5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 border-t border-white/5">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow font-display font-bold text-primary-foreground text-sm">NT</div>
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Nimra Tanveer. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-2">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground hover:text-primary-glow hover:scale-110 transition-all"><FaGithub className="h-4 w-4" /></a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground hover:text-primary-glow hover:scale-110 transition-all"><FaLinkedin className="h-4 w-4" /></a>
          <a href={`mailto:${EMAIL}`} className="grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground hover:text-primary-glow hover:scale-110 transition-all"><FaEnvelope className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
