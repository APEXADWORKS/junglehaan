/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  MoreVertical, 
  Star, 
  Download, 
  Info, 
  ChevronRight,
  LayoutGrid,
  Search,
  ArrowDownToLine,
  Check
} from 'lucide-react';

const TARGET_URL = "https://www.junglehaan.vip/share/9GQ5nxy";

const StatItem = ({ label, value, sub }: { label: string | React.ReactNode, value: string, sub?: string }) => (
  <div className="flex flex-col items-center flex-1 px-1 border-r border-white/5 last:border-0 hover:bg-white/5 transition-colors py-2 rounded-xl">
    <div className="flex items-center gap-1 text-sm font-bold text-white">
      {value} {label}
    </div>
    <div className="text-[10px] text-gray-500 font-medium whitespace-nowrap mt-1">{sub}</div>
  </div>
);

const Tag = ({ text }: { text: string }) => (
  <div className="px-4 py-2 border border-zinc-800 rounded-full text-sm font-medium text-gray-300 hover:bg-zinc-800 transition-colors cursor-pointer">
    {text}
  </div>
);

const ScreenshotCard = ({ title, color, subtitle }: { title: string, color: string, subtitle?: string }) => (
  <div className={`min-w-[180px] h-[320px] rounded-2xl bg-zinc-950 flex flex-col relative overflow-hidden shadow-2xl border border-white/10 group transition-transform hover:scale-[1.05] hover:z-10`}>
    <div className={`absolute inset-0 ${color} opacity-80 group-hover:opacity-100 transition-opacity`} />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-0" />
    <div className="z-10 p-4 text-center mt-4">
      <div className="text-[10px] uppercase font-black tracking-[0.2em] text-white opacity-60 mb-2">{subtitle || 'Loved by'}</div>
      <div className="text-md font-black text-white leading-none uppercase italic drop-shadow-lg tracking-tighter">{title}</div>
    </div>
    <div className="mt-auto relative h-40 w-full flex items-end justify-center z-10">
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/90 to-transparent" />
        <div className="w-24 h-36 bg-zinc-900/80 rounded-t-full border-t border-x border-white/10 relative overflow-hidden flex items-end justify-center">
            <div className="w-12 h-12 rounded-full bg-white/5 mb-20" />
            <div className="w-20 h-24 bg-white/5 rounded-full" />
            <div className="absolute bottom-2 flex gap-1">
               <div className="w-6 h-9 bg-white rounded-[2px] shadow-lg -rotate-12 border border-zinc-400" />
               <div className="w-6 h-9 bg-white rounded-[2px] shadow-lg rotate-12 border border-zinc-400" />
            </div>
        </div>
    </div>
    <div className="absolute top-2 right-2 flex gap-1 z-20">
       <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
    </div>
  </div>
);

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-[#0E1012] text-white flex flex-col font-sans max-w-[500px] mx-auto shadow-2xl border-x border-white/5">
    {children}
    <style>{`
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>
  </div>
);

const HomePage = () => (
  <Layout>
    <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
      {/* Branding */}
      <header className="px-6 py-8 border-b border-white/5 bg-zinc-900/20">
        <h1 className="text-3xl font-black italic tracking-tighter text-white uppercase italic">
          Apex<span className="text-emerald-500">Analytics</span>
        </h1>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">
          Precision Sports Intelligence & Metric Verification
        </p>
      </header>

      {/* Hero Article */}
      <section className="px-6 py-8">
        <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 relative group transition-all hover:border-emerald-500/50">
          <div className="h-48 bg-gradient-to-br from-emerald-950 via-zinc-900 to-black p-6 flex flex-col justify-end">
             <div className="inline-block px-2 py-1 bg-emerald-500 text-black text-[8px] font-black uppercase rounded mb-3">Pitch Report</div>
             <h2 className="text-xl font-bold text-white leading-tight">Quantifying Vertical Deviation on Red-Soil Tracks</h2>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-400 leading-relaxed">
              Our latest longitudinal study examines the correlation between surface temperature and the rate of seam movement across three major venues.
            </p>
            <div className="mt-4 flex items-center gap-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              <span>May 17, 2026</span>
              <span className="w-1 h-1 bg-emerald-500 rounded-full" />
              <span>12 Min Read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Data Visuals Mockup */}
      <section className="px-6 py-4 grid grid-cols-2 gap-4">
        <div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5">
          <div className="text-emerald-500 text-xs font-black uppercase mb-1">Batting Impact</div>
          <div className="text-2xl font-bold">142.8</div>
          <div className="text-[9px] text-gray-500 mt-1">Average True SR across T20 Powerplays</div>
        </div>
        <div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5">
          <div className="text-blue-500 text-xs font-black uppercase mb-1">Bowling ER</div>
          <div className="text-2xl font-bold">7.14</div>
          <div className="text-[9px] text-gray-500 mt-1">Optimized Economy in Death Over Scenarios</div>
        </div>
      </section>

      {/* Journalistic Content */}
      <section className="px-6 py-8">
        <h3 className="text-lg font-bold text-white mb-4">The Evolution of Stadium Intelligence</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          In the modern era of cricket, information parity has made the study of stadium-specific variables essential. From air density at high-altitude venues like Dharamsala to the hygroscopic properties of the soil in Mumbai, professional analysts are moving beyond simple win-loss ratios. 
        </p>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          According to verified data from the <a href="https://www.icc-cricket.com" target="_blank" rel="noopener noreferrer" className="text-emerald-500 underline underline-offset-4 decoration-emerald-500/30">International Cricket Council (ICC)</a>, player workload management is now heavily driven by biometric data collection during live play.
        </p>
        
        <div className="bg-zinc-900/30 p-6 rounded-3xl border-l-4 border-emerald-500 mb-8">
           <p className="text-sm italic text-gray-300">
             "The integration of sub-surface moisture sensors has allowed us to predict pitch behavior with up to 88% accuracy across 50 overs."
           </p>
           <p className="text-[10px] text-gray-500 mt-2 font-bold uppercase">— Dr. Aris Mehta, Sports Biomechanist</p>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed">
          Comprehensive statistics and live match updates can be further explored through industry-leading archives at <a href="https://www.cricbuzz.com" target="_blank" rel="noopener noreferrer" className="text-emerald-500 underline underline-offset-4 decoration-emerald-500/30">Cricbuzz</a>, providing a wealth of raw data for independent research.
        </p>
      </section>

      {/* Footer / Legal */}
      <footer className="px-6 py-12 mt-12 bg-black/40 border-t border-white/5">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4">Platform</h4>
            <ul className="flex flex-col gap-2 text-xs text-gray-500">
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">Methodology</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4">Contact</h4>
            <a href="mailto:support@apexbhai.site" className="text-xs text-emerald-500 font-medium">support@apexbhai.site</a>
          </div>
        </div>
        
        <div className="p-4 bg-zinc-900/50 rounded-xl border border-white/5 text-[10px] text-gray-500 leading-normal">
          <strong className="text-gray-400 block mb-1 uppercase">Legal Disclaimer:</strong>
          This portal is strictly for educational, academic, and journalistic research purposes. ApexAnalytics provides statistical modeling and historical performance verification only. We do not facilitate, promote, or encourage any form of real-money gaming, wagering, or financial speculation. All analytical findings are based on publicly available data and are provided for informational consumption by sports enthusiasts and researchers.
        </div>
        
        <div className="mt-8 text-center text-[9px] text-gray-600 font-bold uppercase tracking-widest">
          © 2026 ApexAnalytics. Academic Distribution Only.
        </div>
      </footer>
    </div>
  </Layout>
);

const JoinPage = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <header className="flex justify-between items-center px-4 py-4 sticky top-0 bg-[#0E1012]/80 backdrop-blur-xl z-50">
        <div className="flex items-center gap-6">
          <ArrowLeft className="w-6 h-6 text-gray-300 cursor-pointer hover:text-white transition-colors" onClick={() => navigate(-1)} />
        </div>
        <div className="flex items-center gap-4">
          <Search className="w-6 h-6 text-gray-300" />
          <MoreVertical className="w-6 h-6 text-gray-300 cursor-pointer hover:text-white transition-colors" />
        </div>
      </header>

      <section className="px-6 pt-4 flex gap-5 mb-8">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-zinc-950 rounded-[1.8rem] flex items-center justify-center shadow-2xl shrink-0 group relative overflow-hidden border-2 border-yellow-600/30 p-1"
        >
           <div className="relative flex flex-col items-center w-full">
              <div className="absolute -top-4 z-20">
                <Star className="w-6 h-6 text-red-600 fill-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,1)]" />
              </div>
              <div className="z-10 mt-2 relative">
                 <h2 className="text-[14px] font-black italic text-yellow-500 tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-none uppercase">JUNGLE</h2>
                 <span className="absolute -right-3 top-0 text-[6px] font-bold text-gray-400 opacity-60">TM</span>
              </div>
              <div className="mt-1 flex gap-0.5 bg-zinc-800 p-0.5 rounded-sm border border-zinc-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                 {['H', 'A', 'A', 'N'].map((char, i) => (
                    <div key={i} className="w-4 h-6 bg-gradient-to-b from-white via-zinc-100 to-zinc-300 rounded-[1px] flex items-center justify-center shadow-sm">
                       <span className="text-[11px] font-black text-emerald-600 italic tracking-tighter">{char}</span>
                    </div>
                 ))}
              </div>
              <div className="absolute bottom-[-10px] w-16 h-4 bg-yellow-600/80 rounded-full blur-[8px] -z-10" />
               <div className="absolute -top-4 -left-3 opacity-40 -z-10 transform -rotate-15">
                  <div className="w-5 h-7 bg-white rounded-sm shadow-sm border border-zinc-300" />
               </div>
               <div className="absolute -top-4 -right-3 opacity-40 -z-10 transform rotate-15">
                  <div className="w-5 h-7 bg-white rounded-sm shadow-sm border border-zinc-300" />
               </div>
           </div>
           <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-gradient-to-b from-yellow-400 via-yellow-600 to-yellow-400 rounded-r-full shadow-lg" />
           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-gradient-to-b from-yellow-400 via-yellow-600 to-yellow-400 rounded-l-full shadow-lg" />
        </motion.div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-white tracking-tight leading-7">Jungle Haan™</h1>
          <h2 className="text-sm font-medium text-emerald-500 mt-0.5">JungleHaan VIP Ltd.</h2>
          <div className="text-[10px] text-gray-400 font-medium mt-1 flex items-center gap-1">
             <LayoutGrid className="w-2.5 h-2.5" /> Contains ads · In-app purchases
          </div>
        </div>
      </section>

      <div className="px-4 mb-8">
        <div className="flex justify-between bg-zinc-900/40 rounded-2xl p-1 border border-white/5">
            <StatItem value="4.2" label={<Star className="w-3 h-3 text-white fill-white" />} sub="4L reviews" />
            <StatItem value="18+" label={<div className="px-1 border border-white/50 text-[8px] leading-none rounded-[2px] ml-1">Rated</div>} sub="Rated for 18+" />
            <StatItem value="69" label="MB" sub="Download Size" />
            <StatItem value="1Cr+" label={<Download className="w-3 h-3" />} sub="Downloads" />
        </div>
      </div>

      <div className="px-6 mb-10">
        <motion.a 
          whileHover={{ brightness: 1.2 }}
          whileTap={{ scale: 0.98 }}
          href={TARGET_URL}
          className="w-full py-2.5 bg-blue-500 hover:bg-blue-400 text-[#0E1012] font-semibold text-center rounded-full transition-all shadow-lg block"
        >
          Install
        </motion.a>
      </div>

      <section className="mb-10 overflow-hidden">
        <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar pb-4 scroll-smooth">
          <ScreenshotCard title="10 CRORE+ REAL PLAYERS" color="bg-red-800" subtitle="Loved by" />
          <ScreenshotCard title="PLAY JUNGLE HAAN ONLINE" color="bg-red-900" subtitle="Experience" />
          <ScreenshotCard title="MULTIPLE VARIANTS" color="bg-zinc-900" subtitle="Unlock" />
          <ScreenshotCard title="WIN EXCLUSIVE REWARDS" color="bg-emerald-950" subtitle="Earn" />
        </div>
      </section>

      <section className="px-6 mb-10 group cursor-pointer">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white tracking-tight">About this game</h3>
          <ChevronRight className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
        </div>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
          Jungle Haan App - Play Indian Games Anytime, Anywhere. Experience the thrill of real-time multiplayer with secure transactions and professional signals.
        </p>
      </section>

      <section className="px-6 mb-12">
        <div className="flex gap-3 flex-wrap">
          <Tag text="Card" />
          <Tag text="Skill Games" />
          <Tag text="Competitive multiplayer" />
          <Tag text="Realistic" />
        </div>
      </section>

      <section className="px-6 mb-12">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-3xl p-6 shadow-xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
           <h3 className="text-xl font-black italic text-[#0E1012] mb-2 uppercase tracking-tighter">CLAIM ₹500 BONUS</h3>
           <p className="text-[#0E1012]/70 text-sm font-bold mb-4 uppercase italic">Register now and get exclusive VIP signals for free.</p>
           <a 
             href={TARGET_URL}
             className="inline-block px-6 py-2 bg-[#0E1012] text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-all cursor-pointer text-center"
           >
              Claim Now
           </a>
        </div>
      </section>

      <section className="px-6 mb-20 border-t border-white/5 pt-8">
        <div className="flex items-center justify-between mb-8">
           <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">Developer Contact</h3>
           <ChevronRight className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex flex-col gap-6 opacity-40 grayscale">
            <div className="flex items-center gap-4">
               <Info className="w-5 h-5" />
               <span className="text-xs font-bold">Privacy Policy</span>
            </div>
            <div className="flex items-center gap-4">
               <ArrowDownToLine className="w-5 h-5" />
               <span className="text-xs font-bold">Join Community</span>
            </div>
            <div className="flex items-center gap-4">
               <Check className="w-5 h-5" />
               <span className="text-xs font-bold">Verified by Play Protect</span>
            </div>
        </div>
      </section>
    </Layout>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}
