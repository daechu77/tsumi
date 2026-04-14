import React from 'react';
import { motion } from 'framer-motion';
import { remediaLore } from '../data/lore';

export default function RemediaPage({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden font-sans">
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-4xl pb-64">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 select-none"
        >
          <h1 className="text-7xl md:text-9xl opacity-5 text-black mb-4" style={{ fontFamily: "'Herr Von Muellerhoff', cursive" }}>
            Remedia
          </h1>
          <p className="text-3xl font-bold tracking-widest opacity-5 text-black">레메디아</p>
        </motion.div>

        <div className="space-y-16">
          <Section data={remediaLore.era} delay={0.2} />
          <Section data={remediaLore.projectN} delay={0.3} />
          <Section data={remediaLore.remedia} delay={0.4} />
          <Section data={remediaLore.truth} delay={0.5} />
          <Section data={remediaLore.repentance} delay={0.6} />
          <Section data={remediaLore.erasureZone} delay={0.7} />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-24 p-8 border-2 border-black bg-gray-50"
          >
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">{remediaLore.summary.title}</h2>
            <div className="space-y-4 text-gray-800 leading-relaxed font-medium">
              {remediaLore.summary.content.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-12 p-8 bg-black text-white"
          >
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-white/30 pb-2">{remediaLore.userTruth.title}</h2>
            <div className="space-y-4 leading-relaxed font-medium text-lg">
              {remediaLore.userTruth.content.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-24 flex justify-center">
          <button 
            onClick={onNavigate}
            className="px-8 py-4 bg-white text-black font-bold tracking-widest border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            죄식(罪食)으로 돌아가기
          </button>
        </div>
      </div>

      {/* Cathedral Background SVG at the bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none opacity-40 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 400" className="w-full h-auto" preserveAspectRatio="xMidYMax meet">
          {/* Base */}
          <rect x="0" y="350" width="1000" height="50" fill="#000" />
          
          {/* Main Building */}
          <path d="M 300 350 L 300 200 L 400 150 L 500 100 L 600 150 L 700 200 L 700 350 Z" fill="#000" />
          
          {/* Left Tower */}
          <path d="M 320 200 L 320 80 L 350 20 L 380 80 L 380 200 Z" fill="#000" />
          {/* Right Tower */}
          <path d="M 620 200 L 620 80 L 650 20 L 680 80 L 680 200 Z" fill="#000" />
          
          {/* Center Spire */}
          <path d="M 480 120 L 480 10 L 500 0 L 520 10 L 520 120 Z" fill="#000" />
          
          {/* Flying Buttresses Left */}
          <path d="M 250 350 L 250 250 Q 280 250 300 220 L 300 240 Q 280 270 270 350 Z" fill="#000" />
          <path d="M 200 350 L 200 280 Q 250 280 300 250 L 300 270 Q 250 300 220 350 Z" fill="#000" />
          
          {/* Flying Buttresses Right */}
          <path d="M 750 350 L 750 250 Q 720 250 700 220 L 700 240 Q 720 270 730 350 Z" fill="#000" />
          <path d="M 800 350 L 800 280 Q 750 280 700 250 L 700 270 Q 750 300 780 350 Z" fill="#000" />
          
          {/* Details / Spires */}
          <rect x="348" y="5" width="4" height="15" fill="#000" />
          <rect x="648" y="5" width="4" height="15" fill="#000" />
          <rect x="498" y="-10" width="4" height="20" fill="#000" />
          <rect x="490" y="-5" width="20" height="4" fill="#000" />
          
          <rect x="340" y="10" width="20" height="3" fill="#000" />
          <rect x="640" y="10" width="20" height="3" fill="#000" />
          
          {/* Mini spires */}
          <path d="M 400 150 L 400 100 L 410 80 L 420 100 L 420 150 Z" fill="#000" />
          <path d="M 580 150 L 580 100 L 590 80 L 600 100 L 600 150 Z" fill="#000" />
          
          {/* Rose Window (negative space) */}
          <circle cx="500" cy="200" r="30" fill="#fff" />
          <circle cx="500" cy="200" r="25" fill="#000" />
          <circle cx="500" cy="200" r="10" fill="#fff" />
          <path d="M 500 170 L 500 230 M 470 200 L 530 200 M 478 178 L 522 222 M 478 222 L 522 178" stroke="#fff" strokeWidth="2" />
          
          {/* Arched Windows (negative space) */}
          <path d="M 335 120 L 335 160 A 15 15 0 0 1 365 160 L 365 120 Z" fill="#fff" />
          <path d="M 635 120 L 635 160 A 15 15 0 0 1 665 160 L 665 120 Z" fill="#fff" />
          
          <path d="M 440 250 L 440 320 A 20 20 0 0 1 480 320 L 480 250 Z" fill="#fff" />
          <path d="M 520 250 L 520 320 A 20 20 0 0 1 560 320 L 560 250 Z" fill="#fff" />
          
          {/* Main Door */}
          <path d="M 470 350 L 470 300 A 30 30 0 0 1 530 300 L 530 350 Z" fill="#fff" />
          <path d="M 500 300 L 500 350" stroke="#000" strokeWidth="2" />
          
          {/* Cityscape / smaller buildings around */}
          <path d="M 0 350 L 0 300 L 50 280 L 100 320 L 150 250 L 200 290 L 250 350 Z" fill="#000" />
          <path d="M 750 350 L 800 270 L 850 310 L 900 260 L 950 300 L 1000 280 L 1000 350 Z" fill="#000" />
        </svg>
      </div>
    </div>
  );
}

function Section({ data, delay }: { data: any, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="border-l-4 border-black pl-6"
    >
      <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
      <ul className="space-y-2 text-gray-700">
        {data.content.map((item: string, idx: number) => (
          <li key={idx} className="leading-relaxed">{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
