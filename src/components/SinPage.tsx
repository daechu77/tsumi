import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sinLore } from '../data/lore';
import { ChevronDown, ChevronUp, Eye } from 'lucide-react';

export default function SinPage({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-[#4a0000]">
      {/* Background with Real Desert Image */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#87CEEB]">
        <img 
          src="https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2000&auto=format&fit=crop" 
          alt="desert" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Red tint overlay for the sand */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#8A0303] via-[#8A0303] to-transparent mix-blend-color opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4a0000] via-[#660000]/60 to-transparent opacity-90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 relative"
        >
          {/* Subtle background glow behind title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-red-900/20 blur-[80px] rounded-full pointer-events-none"></div>
          
          <motion.h1 
            animate={{ 
              textShadow: [
                "0px 0px 20px rgba(185,28,28,0.5)", 
                "0px 0px 40px rgba(185,28,28,0.8)", 
                "0px 0px 20px rgba(185,28,28,0.5)"
              ] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-[6rem] md:text-[10rem] font-bold text-red-700 mb-2 leading-none relative z-10 drop-shadow-2xl" 
            style={{ fontFamily: "'SeoulHangangM', serif", WebkitTextStroke: "2px currentColor" }}
          >
            罪食走光
          </motion.h1>
          
          <div className="flex items-center justify-center gap-4 relative z-10">
            <div className="h-[1px] w-12 md:w-24 bg-red-800/50"></div>
            <p className="text-3xl text-red-500 font-bold tracking-[0.3em] ml-2" style={{ fontFamily: "'SeoulHangangM', serif" }}>죄식주광</p>
            <div className="h-[1px] w-12 md:w-24 bg-red-800/50"></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-black/60 backdrop-blur-sm border border-red-900/50 p-8 rounded-xl mb-16 shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-red-500 mb-6 border-b border-red-900/50 pb-2" style={{ fontFamily: "'SeoulHangangM', serif" }}>죄식(罪食)</h2>
          <div className="space-y-4 text-red-200/90 leading-relaxed">
            {sinLore.description.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
        </motion.div>

        <div className="space-y-8 mb-24">
          <h2 className="text-3xl font-bold text-red-600 text-center mb-12 drop-shadow-md">등장인물</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sinLore.characters.map((char, idx) => (
              <CharacterCard key={char.id} character={char} index={idx} />
            ))}
          </div>
        </div>

        <div className="flex justify-center pb-12">
          <button 
            onClick={onNavigate}
            className="group relative px-8 py-4 bg-red-950/80 hover:bg-black text-red-500 font-bold tracking-widest border border-red-900 rounded-lg transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-red-600/20 group-hover:bg-red-600/40 transition-colors duration-300"></div>
            <span className="relative z-10 flex items-center gap-3 text-lg">
              <Eye size={24} />
              진실을 마주하러 가기
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function CharacterCard({ character, index }: { character: any, index: number }) {
  const [showSin, setShowSin] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className={`p-6 rounded-xl border backdrop-blur-md ${character.bgColor} ${character.borderColor} shadow-lg`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className={`text-2xl font-bold ${character.color} mb-1 drop-shadow-sm`}>{character.name}</h3>
          <p className="text-sm text-red-300/80">{character.role} | {character.gender} | {character.age}</p>
        </div>
      </div>

      {character.imageUrl && (
        <div className="mb-6 overflow-hidden rounded-lg border border-red-900/30">
          <a href={character.imageLink || character.imageUrl} target="_blank" rel="noopener noreferrer">
            <img 
              src={character.imageUrl} 
              alt={character.name} 
              className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" 
              referrerPolicy="no-referrer"
            />
          </a>
        </div>
      )}

      <div className="space-y-3 text-sm mb-6">
        <div>
          <span className={`font-bold ${character.color} opacity-80`}>외형:</span>
          <p className="text-red-100/90 mt-1">{character.appearance}</p>
        </div>
        <div>
          <span className={`font-bold ${character.color} opacity-80`}>성격:</span>
          <p className="text-red-100/90 mt-1">{character.personality}</p>
        </div>
        <div className="flex gap-4">
          <div>
            <span className={`font-bold ${character.color} opacity-80`}>무기:</span>
            <span className="text-red-100/90 ml-2">{character.weapon}</span>
          </div>
          <div>
            <span className={`font-bold ${character.color} opacity-80`}>신체:</span>
            <span className="text-red-100/90 ml-2">{character.physical}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-red-900/30">
        <button 
          onClick={() => setShowSin(!showSin)}
          className={`flex items-center justify-between w-full p-2 rounded-md transition-colors hover:bg-black/20 ${character.color}`}
        >
          <span className="text-xl tracking-widest" style={{ fontFamily: "'SeoulHangangM', serif" }}>죄 (罪) 열람</span>
          {showSin ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        <AnimatePresence>
          {showSin && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="p-4 mt-2 bg-black/40 rounded-lg text-red-200/90 text-sm leading-relaxed border border-red-900/50">
                {character.sin}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
