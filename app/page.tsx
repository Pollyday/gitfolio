import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/gfbs3-portfolio-demo" : "";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#576A8F] text-[#FFF8DE] font-sans selection:bg-[#D91656]/30 selection:text-[#FFF8DE] overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(183,189,247,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(183,189,247,0.12)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute inset-0 bg-[#576A8F]/20" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-[#D91656]/15 opacity-40" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#576A8F]/90 backdrop-blur-md border-b border-[#B7BDF7]/20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold tracking-widest text-[#FFF8DE] hover:text-[#D91656] transition-all duration-300"
          >
            Polly Davidson
          </Link>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-[#FFF8DE]/75">
            <Link href="#work" className="hover:text-[#B7BDF7] transition-all">
              PROJECTS
            </Link>
            <Link href="#philosophy" className="hover:text-[#D91656] transition-all">
              ABOUT
            </Link>
            <Link href="#contact" className="hover:text-[#FFF8DE] transition-all">
              CONTACT
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 space-y-8 relative">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B7BDF7]/30 bg-[#576A8F]/40 text-[#FFF8DE] text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D91656]" />
              READY TO LAUNCH
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#FFF8DE] leading-[1.1]">
              Hi, I&apos;m Polly. <br />
              <span className="text-[#D91656]">
                GET TO KNOW ME
              </span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-[#FFF8DE]/80 max-w-2xl leading-relaxed font-light border-l-2 border-[#D91656] pl-6">
            I&apos;m a senior brand strategist for GitHub. Lover of words, images, and data.
          </p>
          <div className="pt-8 flex gap-6">
            <Link
              href="#work"
              className="group relative px-8 py-3 bg-[#D91656] border border-[#D91656] text-[#FFF8DE] font-bold tracking-widest uppercase text-sm overflow-hidden transition-all hover:opacity-90"
            >
              <span className="relative z-10 flex items-center gap-2">
                GET STARTED <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-20 space-y-12">
          <div className="flex items-end justify-between border-b border-[#B7BDF7]/20 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-[#D91656]">
              // PROJECTS
            </h2>
            <span className="text-xs text-[#FFF8DE]/65">A small sample of what I&apos;m building and learning</span>
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
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold tracking-widest text-[#B7BDF7]">
                {"// ABOUT_ME"}
              </h2>
              <SquiggleLine />
            </div>

            <div className="relative w-full aspect-[4/5] border border-[#B7BDF7]/25 rounded-sm overflow-hidden bg-[#576A8F]/25 group">
              <div className="absolute inset-0 bg-[#576A8F]/20 z-10" />
              <Image
                src={`${basePath}/me.png`}
                alt="Polly Davidson"
                fill
                className="object-cover z-0 opacity-80 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-8 text-[#FFF8DE]/85 leading-relaxed font-light">
            <p>
              I&apos;m a senior brand strategist for GitHub, where I help shape how the world sees and understands the platform. I love working at the intersection of words, images, and data.
            </p>

            <div className="p-6 bg-[#576A8F]/25 border border-[#B7BDF7]/20 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D91656]" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div>
                  <h3 className="text-[#FFF8DE] mb-4 tracking-widest uppercase text-xs border-b border-[#B7BDF7]/20 pb-2">STACK_TRACE</h3>
                  <ul className="space-y-2 text-[#FFF8DE]/75">
                    <li className="flex items-center gap-2"><span className="text-[#D91656]">›</span> Strategy</li>
                    <li className="flex items-center gap-2"><span className="text-[#D91656]">›</span> Social media</li>
                    <li className="flex items-center gap-2"><span className="text-[#D91656]">›</span> Analytics</li>
                    <li className="flex items-center gap-2"><span className="text-[#D91656]">›</span> Content creation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#FFF8DE] mb-4 tracking-widest uppercase text-xs border-b border-[#B7BDF7]/20 pb-2">PROTOCOLS</h3>
                  <ul className="space-y-2 text-[#FFF8DE]/75">
                    <li className="flex items-center gap-2"><span className="text-[#D91656]">›</span> Clear, human-first communication</li>
                    <li className="flex items-center gap-2"><span className="text-[#D91656]">›</span> Creative problem solving</li>
                    <*
