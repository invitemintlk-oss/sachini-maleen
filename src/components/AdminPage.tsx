import React, { useState } from 'react';

const prefixes = [
  "Mr.",
  "Mrs.",
  "Miss",
  "Mr. & Mrs.",
  "Family",
  "Dear"
];

export const AdminPage: React.FC = () => {
  const [prefix, setPrefix] = useState(prefixes[0]);
  const [name, setName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const getDisplayName = (selectedPrefix: string, guestName: string) => {
    const trimmed = guestName.trim();
    if (selectedPrefix === 'Family') {
      return `${trimmed} and Family`;
    } else if (selectedPrefix === 'Dear') {
      return trimmed;
    } else if (selectedPrefix === 'Mr. & Mrs.') {
      return `Mr. & Mrs. ${trimmed}`;
    } else {
      return `${selectedPrefix} ${trimmed}`;
    }
  };

  const handleGenerate = () => {
    if (!name.trim()) return;
    
    const displayName = getDisplayName(prefix, name);
    // Use the combined displayName in the URL so the landing page can read it directly
    const url = `${window.location.origin}/${encodeURIComponent(displayName)}`;
    
    const message = `Dear ${displayName} ❤️\n\nWith joyful hearts, we warmly invite you to celebrate one of the most special days of our lives as we begin our journey together.\n\nPlease view our wedding invitation and all the event details through the link below 🌐:\n\n${url}\n\nYour presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.\n\nWith love,\n❤️ Sachini & Maleen`;
    
    setGeneratedLink(url);
    setGeneratedMessage(message);
    setCopiedLink(false);
    setCopiedMessage(false);
  };

  const copyToClipboard = async (text: string, isMessage: boolean) => {
    try {
      await navigator.clipboard.writeText(text);
      if (isMessage) {
        setCopiedMessage(true);
        setTimeout(() => setCopiedMessage(false), 2000);
      } else {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center p-6 font-sans">
      <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-2xl w-full max-w-2xl border border-[#A68846]/30 relative z-10">
        <h1 className="text-3xl font-serif text-[#A68846] mb-8 text-center" style={{ textShadow: "0 0 20px rgba(166,136,70,0.5)" }}>Generate Invitation</h1>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2 font-bold">Select Prefix</label>
              <select 
                value={prefix} 
                onChange={(e) => setPrefix(e.target.value)}
                className="w-full bg-black/50 border border-[#A68846]/50 text-[#A68846] rounded-lg p-3 focus:outline-none focus:border-[#A68846] transition-colors cursor-pointer"
              >
                {prefixes.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2 font-bold">Guest Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sanjaya"
                className="w-full bg-black/50 border border-[#A68846]/50 text-[#A68846] rounded-lg p-3 focus:outline-none focus:border-[#A68846] transition-colors placeholder:text-[#A68846]/30"
              />
            </div>
          </div>

          <button 
            onClick={handleGenerate}
            disabled={!name.trim()}
            className="w-full py-3 bg-gradient-to-r from-[#A68846] to-[#91763A] text-[#111111] font-extrabold uppercase tracking-[0.2em] text-sm rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity mt-4 shadow-[0_0_15px_rgba(166,136,70,0.3)]"
          >
            Generate Link
          </button>

          {generatedLink && (
            <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="p-5 bg-black/60 border border-[#A68846]/30 rounded-lg">
                <p className="text-[#A0A0A0] text-xs uppercase tracking-widest mb-3 font-bold">Generated Message Preview</p>
                <div className="text-[#E0E0E0] text-sm whitespace-pre-wrap leading-relaxed mb-6 p-4 bg-black/40 rounded border border-white/5">
                  {generatedMessage}
                </div>
                
                <p className="text-[#A0A0A0] text-xs uppercase tracking-widest mb-2 font-bold">Invitation Link</p>
                <div className="text-[#A68846] text-sm break-all bg-black/40 p-3 rounded border border-white/5 mb-6 selection:bg-[#A68846] selection:text-[#111111]">
                  {generatedLink}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={() => copyToClipboard(generatedLink, false)}
                    className="py-3 border border-[#A68846] text-[#A68846] font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-[#A68846]/10 transition-colors flex items-center justify-center gap-2"
                  >
                    {copiedLink ? '✓ Link Copied!' : 'Copy Link Only'}
                  </button>
                  <button 
                    onClick={() => copyToClipboard(generatedMessage, true)}
                    className="py-3 bg-[#A68846] text-[#111111] font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-[#91763A] transition-colors flex items-center justify-center gap-2"
                  >
                    {copiedMessage ? '✓ Message Copied!' : 'Copy Full Message'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Background aesthetics */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "radial-gradient(circle at center, #A68846 0%, transparent 70%)" }} />
    </div>
  );
};
