import React, { useState } from 'react';
import BarrierSystem from './components/BarrierSystem';
import PreviewSystem from './components/PreviewSystem';
import { Layers, ShieldCheck, ArrowRight, Monitor, Camera, Zap } from './components/Icons';

type ViewState = 'home' | 'barrier' | 'preview';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const renderContent = () => {
    switch (currentView) {
      case 'barrier':
        return <BarrierSystem />;
      case 'preview':
        return <PreviewSystem />;
      default:
        return <LandingPage onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-slate-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentView('home')}>
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center transform rotate-45">
                   <div className="w-4 h-4 bg-white rounded-sm transform -rotate-45"></div>
                </div>
                <span className="text-white font-bold text-xl tracking-wider">OmniCloud</span>
              </div>
            </div>
            <div className="hidden sm:flex sm:space-x-8 items-center">
              <button
                onClick={() => setCurrentView('barrier')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                  currentView === 'barrier'
                    ? 'border-blue-500 text-white'
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
                }`}
              >
                <ShieldCheck className="w-4 h-4 mr-2" />
                柵欄一體機
              </button>
              <button
                onClick={() => setCurrentView('preview')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                  currentView === 'preview'
                    ? 'border-blue-500 text-white'
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
                }`}
              >
                <Layers className="w-4 h-4 mr-2" />
                車道預視系統
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                聯絡我們
              </button>
            </div>
            
            {/* Mobile Menu Button (simplified) */}
            <div className="flex items-center sm:hidden">
               <button onClick={() => setCurrentView('home')} className="text-gray-400 hover:text-white p-2">
                 <span className="sr-only">Home</span>
                 <ArrowRight className="h-6 w-6 transform rotate-180" />
               </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col">
        {renderContent()}
      </main>

      {/* Footer (Only show on sub-pages to keep landing clean, or keep consistent. Let's keep consistent) */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                 <span className="text-white text-lg font-bold">OmniCloud</span>
                 <span className="ml-4 text-sm text-gray-500">智慧車道管理解決方案</span>
              </div>
              <div className="text-sm text-gray-500">
                &copy; 2024 OmniCloud System. All rights reserved.
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}

const LandingPage = ({ onNavigate }: { onNavigate: (view: 'barrier' | 'preview') => void }) => {
  return (
    <div className="flex-grow flex flex-col md:flex-row h-full min-h-[calc(100vh-64px-80px)]">
      {/* Left Side: Barrier System */}
      <div 
        className="flex-1 bg-white relative group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-gray-200 transition-all duration-500 hover:bg-blue-50"
        onClick={() => onNavigate('barrier')}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="h-full flex flex-col justify-center items-center p-12 text-center relative z-10">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-blue-200">
            <Camera className="w-10 h-10 text-blue-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">智慧車道管制系統</h2>
          <p className="text-lg text-slate-500 max-w-md mb-8">
            柵欄一體機整合解決方案。內建車牌辨識、E-Tag 讀取與多功能 LED 顯示，打造極致通關體驗。
          </p>
          
          <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform duration-300">
            查看硬體規格 <ArrowRight className="ml-2 w-5 h-5" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      </div>

      {/* Right Side: Preview System */}
      <div 
        className="flex-1 bg-slate-900 relative group cursor-pointer overflow-hidden transition-all duration-500 hover:bg-slate-800"
        onClick={() => onNavigate('preview')}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="h-full flex flex-col justify-center items-center p-12 text-center relative z-10">
          <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-slate-700 shadow-lg group-hover:shadow-cyan-900/50">
            <Monitor className="w-10 h-10 text-cyan-400" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">多功能車道預視系統</h2>
          <p className="text-lg text-slate-400 max-w-md mb-8">
            全方位軟體監控儀表板。即時整合 CCTV 影像、環境數據與燈號控制，實現遠端智慧管理。
          </p>
          
          <div className="flex items-center text-cyan-400 font-bold group-hover:translate-x-2 transition-transform duration-300">
            進入監控儀表 <ArrowRight className="ml-2 w-5 h-5" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-cyan-600 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
        </div>
      </div>
    </div>
  );
}

export default App;