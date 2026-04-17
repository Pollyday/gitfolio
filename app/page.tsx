import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/gfbs3-portfolio-demo" : "";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#576A8F] text-[#FFF8DE] font-mono selection:bg-[#FF7444]/30 selection:text-[#FFF8DE] overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(183,189,247,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(183,189,247,0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-[#FF7444]/20 to-transparent opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#576A8F]/85 backdrop-blur-md border-b border-[#B7BDF7]/20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8DE] to-[#FF7444] hover:to-[#B7BDF7] transition-all duration-300"
          >
            Polly Davidson
          </Link>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-[#FFF8DE]/75">
            <Link href="#work" className="hover:text-[#B7BDF7] hover:drop-shadow-[0_0_5px_rgba(183,189,247,0.8)] transition-all">PROJECTS</Link>
            <Link href="#philosophy" className="hover:text-[#FF7444] hover:drop-shadow-[0_0_5px_rgba(255,116,68,0.8)] transition-all">ABOUT</Link>
            <Link href="#contact" className="hover:text-[#FFF8DE] hover:drop-shadow-[0_0_5px_rgba(255,248,222,0.8)] transition-all">CONTACT</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 space-y-8 relative">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B7BDF7]/30 bg-[#576A8F]/30 text-[#FFF8DE] text-xs font-bold tracking-widest uppercase animate-pulse">
              <span className="w-2 h-2 rounded-full bg-[#FF7444] shadow-[0_0_10px_rgba(255,116,68,1)]" />
              READY TO LAUNCH
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#FFF8DE] leading-[1.1] drop-shadow-[0_0_15px_rgba(183,189,247,0.25)]">
              Hi, I&apos;m Polly. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7444] via-[#B7BDF7] to-[#FFF8DE] animate-gradient-x">
                GET TO KNOW ME
              </span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-[#FFF8DE]/80 max-w-2xl leading-relaxed font-light border-l-2 border-[#FF7444]/60 pl-6">
            I&apos;m a senior brand strategist for GitHub. Lover of words, images, and data.
          </p>
          <div className="pt-8 flex gap-6">
            <Link 
              href="#work" 
              className="group relative px-8 py-3 bg-[#576A8F]/40 border border-[#B7BDF7]/40 text-[#FFF8DE] font-bold tracking-widest uppercase text-sm overflow-hidden hover:bg-[#576A8F]/70 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                GET STARTED <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFF8DE]/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </Link>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-20 space-y-12">
          <div className="flex items-end justify-between border-b border-[#B7BDF7]/20 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-[#FF7444] drop-shadow-[0_0_8px_rgba(255,116,68,0.45)]">
              // PROJECTS
            </h2>
            <span className="text-xs font-mono text-[#FFF8DE]/65">A small sample of what I&apos;m building and learning</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Days of Deutsch"
              description="Learning German, day by day, image by image."
              tags={["LANGUAGE", "LEARNING", "STORYTELLING"]}
              color="accent"
              href="https://daysofdeutsch.com"
            />
          </div>
        </section>

        {/* Philosophy / Approach */}
        <section id="philosophy" className="py-20 grid md:grid-cols-12 gap-12 border-t border-[#B7BDF7]/20">
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold tracking-widest text-[#B7BDF7] drop-shadow-[0_0_8px_rgba(183,189,247,0.55)]">
              {"// ABOUT_ME"}
            </h2>
            
            <div className="relative w-full aspect-[4/5] border border-[#B7BDF7]/25 rounded-sm overflow-hidden bg-[#576A8F]/25 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(87,106,143,0.8)_100%)] z-10" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,248,222,0.07)_1px,transparent_1px)] bg-[size:100%_4px] z-20 pointer-events-none" />
              
              <Image 
                src={`${basePath}/me.png`}
                alt="Polly Davidson"
                fill
                className="object-cover z-0 opacity-75 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-8 text-[#FFF8DE]/85 leading-relaxed font-light">
            <p>
              I&apos;m a senior brand strategist for GitHub, where I help shape how the world sees and understands the platform. I love working at the intersection of words, images, and data.
            </p>

            <div className="p-6 bg-[#576A8F]/25 border border-[#B7BDF7]/20 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF7444] via-[#B7BDF7] to-[#FFF8DE]" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-sm">
                <div>
                  <h3 className="text-[#FFF8DE] mb-4 tracking-widest uppercase text-xs border-b border-[#B7BDF7]/20 pb-2">STACK_TRACE</h3>
                  <ul className="space-y-2 text-[#FFF8DE]/75">
                    <li className="flex items-center gap-2"><span className="text-[#FF7444]">›</span> Strategy</li>
                    <li className="flex items-center gap-2"><span className="text-[#FF7444]">›</span> Social media</li>
                    <li className="flex items-center gap-2"><span className="text-[#FF7444]">›</span> Analytics</li>
                    <li className="flex items-center gap-2"><span className="text-[#FF7444]">›</span> Content creation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#FFF8DE] mb-4 tracking-widest uppercase text-xs border-b border-[#B7BDF7]/20 pb-2">PROTOCOLS</h3>
                  <ul className="space-y-2 text-[#FFF8DE]/75">
                    <li className="flex items-center gap-2"><span className="text-[#FF7444]">›</span> Clear, human-first communication</li>
                    <li className="flex items-center gap-2"><span className="text-[#FF7444]">›</span> Creative problem solving</li>
                    <li className="flex items-center gap-2"><span className="text-[#FF7444]">›</span> Data-informed decisions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-[#B7BDF7]/20">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#FFF8DE] drop-shadow-[0_0_10px_rgba(255,248,222,0.4)]">
              READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7444] to-[#B7BDF7]">CONNECT?</span>
            </h2>
            <p className="text-[#FFF8DE]/70 text-lg">
              Want to talk brand, content, or creative strategy? Let&apos;s connect.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="https://github.com/pollyday" 
                className="px-10 py-4 bg-[#FF7444] text-[#FFF8DE] font-bold tracking-widest uppercase text-sm hover:opacity-90 transition-all hover:shadow-[0_0_30px_rgba(255,116,68,0.45)] hover:scale-105"
              >
                VISIT MY GITHUB
              </a>
              <div className="flex items-center gap-8 pt-4">
                <SocialLink href="https://github.com/pollyday" label="GITHUB" />
                <SocialLink href="https://www.linkedin.com/in/polly-davidson/" label="LINKEDIN" />
                <SocialLink href="https://twitter.com" label="TWITTER" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs font-mono text-[#FFF8DE]/55 border-t border-[#B7BDF7]/15">
        <p>Made with ❤️ by <a href="https://github.com/pollyday" target="_blank" rel="noopener noreferrer" className="text-[#B7BDF7] hover:text-[#FFF8DE] transition-all">Polly Davidson</a></p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, tags, color, href }: { title: string, description: string, tags: string[], color: "cyan" | "fuchsia" | "purple" | "yellow" | "accent", href: string }) {
  const validColors = ["cyan", "fuchsia", "purple", "yellow", "accent"] as const;
  const safeColor = validColors.includes(color) ? color : "accent";

  const colorClasses = {
    cyan: "group-hover:border-[#B7BDF7]/50 group-hover:shadow-[0_0_20px_rgba(183,189,247,0.18)]",
    fuchsia: "group-hover:border-[#FF7444]/50 group-hover:shadow-[0_0_20px_rgba(255,116,68,0.18)]",
    purple: "group-hover:border-[#576A8F]/50 group-hover:shadow-[0_0_20px_rgba(87,106,143,0.22)]",
    yellow: "group-hover:border-[#FFF8DE]/50 group-hover:shadow-[0_0_20px_rgba(255,248,222,0.18)]",
    accent: "group-hover:border-[#FF7444]/50 group-hover:shadow-[0_0_20px_rgba(255,116,68,0.2)]",
  };

  const textColors = {
    cyan: "group-hover:text-[#B7BDF7]",
    fuchsia: "group-hover:text-[#FF7444]",
    purple: "group-hover:text-[#576A8F]",
    yellow: "group-hover:text-[#FFF8DE]",
    accent: "group-hover:text-[#FF7444]",
  };

  return (
    <Link href={href} className={`group block space-y-4 p-6 bg-[#4e5f82] border border-[#B7BDF7]/15 transition-all duration-300 ${colorClasses[safeColor]}`}>
      <div className="flex justify-between items-start">
        <h3 className={`text-xl font-bold text-[#FFF8DE] tracking-wider transition-colors ${textColors[safeColor]}`}>
          {title}
        </h3>
        <ArrowUpRightIcon className={`w-5 h-5 text-[#B7BDF7] transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[safeColor]}`} />
      </div>
      <p className="text-sm text-[#FFF8DE]/75 leading-relaxed font-light border-l border-[#B7BDF7]/20 pl-4">
        {description}
      </p>
      <div className="flex gap-2 pt-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-[#B7BDF7] bg-[#576A8F]/40 px-2 py-1 border border-[#B7BDF7]/15 group-hover:border-[#FF7444]/30 group-hover:text-[#FFF8DE] transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function SocialLink({ href, label }: { href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-xs font-bold tracking-widest text-[#B7BDF7] hover:text-[#FFF8DE] hover:drop-shadow-[0_0_5px_rgba(183,189,247,0.7)] transition-all"
    >
      {label}
    </a>
  );
}

// Simple Icons
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}
