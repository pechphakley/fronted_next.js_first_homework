import React from "react";

export default function SchoolLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 text-white overflow-hidden">
        {/* Background Decorative Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              Admissions Open 2026 - 2027
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Shaping Leaders, <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Inspiring Futures
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
              Welcome to Bright Academy, where academic excellence meets holistic development. We empower students to innovate, excel, and lead in a global society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-200">
                Apply Now
              </button>
              <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200">
                Explore Programs
              </button>
            </div>
          </div>

          {/* Hero Image / Graphic Wrapper */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-md lg:max-w-none aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="https://cstad.edu.kh/api/v1/medias/view/0828598e-3137-499b-9498-ba335828a1e3.png " 
              alt="Students on modern campus" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. STATS QUICK-RIBBON */}
      <section className="bg-white dark:bg-slate-800 border-y border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">98%</p>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">University Placement</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">12:1</p>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Student-Teacher Ratio</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">45+</p>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Co-curricular Clubs</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">15+ </p>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Acre Smart Campus</p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ACADEMIC CURRICULUMS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Academic Pillars</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">
            We provide world-class paths tailored to nurture critical thinking, foundational mastery, and creative problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
              🔬
            </div>
            <h3 className="text-xl font-bold mb-3">STEM Excellence</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Advanced robotics labs, specialized coding tracks, and immersive biotechnology modules prepare students for tomorrow's technology frontiers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
              🎨
            </div>
            <h3 className="text-xl font-bold mb-3">Arts & Humanities</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Comprehensive fine arts, digital media, creative writing, and global history programs designed to inspire creative self-expression.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
              🌍
            </div>
            <h3 className="text-xl font-bold mb-3">Global Citizenship</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Multilingual training, international exchange configurations, and model United Nations clubs building culturally aware leaders.
            </p>
          </div>
        </div>
      </section>

      {/* 4. ADMISSIONS CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to join the Bright Academy family?</h2>
            <p className="text-indigo-100 text-lg">
              Take the first step toward securing your child's educational future. Schedule a campus tour or apply entirely online today.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-indigo-600 hover:bg-slate-100 font-semibold rounded-xl transition-colors shadow-md">
                Book a Campus Tour
              </button>
              <button className="px-6 py-3 bg-indigo-900/40 text-white border border-indigo-400/30 hover:bg-indigo-900/60 font-semibold rounded-xl transition-colors">
                Contact Admissions
              </button>
            </div>
          </div>
          {/* Decorative design circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-black/10 rounded-full blur-xl"></div>
        </div>
      </section>

    </div>
  );
}