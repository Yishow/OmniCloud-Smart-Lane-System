import React from 'react';
import { Layers, Activity, Server, Zap, Wind, Thermometer, Cpu, Monitor } from './Icons';
import DashboardSimulator from './DashboardSimulator';

const PreviewSystem: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-slate-800 sm:text-4xl">
            多功能車道預視系統
          </h2>
          <p className="mt-4 max-w-3xl text-xl text-slate-500 mx-auto">
            整合 <span className="text-red-500 font-bold">CCTV</span>、
            <span className="text-red-500 font-bold">溫溼度</span>、
            <span className="text-red-500 font-bold">CO/PM2.5</span>、
            <span className="text-red-500 font-bold">磁簧</span>、
            <span className="text-red-500 font-bold">紅外線</span>、
            <span className="text-red-500 font-bold">紅綠燈系統</span>
          </p>
        </div>

        {/* Dashboard Simulator Section */}
        <div className="mb-20">
           <DashboardSimulator />
        </div>

        {/* System Architecture Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
           <div className="flex items-center mb-8">
             <div className="bg-orange-500 w-1.5 h-8 mr-3 rounded-full"></div>
             <h3 className="text-2xl font-bold text-gray-800">系統架構邏輯</h3>
           </div>
           
           {/* Diagram Recreation */}
           <div className="relative overflow-x-auto">
              <div className="min-w-[800px] bg-slate-50 p-6 rounded-xl border border-slate-200">
                 
                 {/* Top Layer: Cloud/Network */}
                 <div className="flex justify-center mb-8 relative">
                    <div className="border-b-2 border-red-300 w-full absolute top-1/2 left-0 -z-0"></div>
                    <div className="bg-white p-4 rounded-full shadow-md z-10 border border-blue-200">
                       <Server className="text-blue-500 w-8 h-8" />
                       <div className="text-xs font-bold text-center mt-1">Internet</div>
                    </div>
                 </div>

                 {/* Middle Layer: Devices */}
                 <div className="grid grid-cols-6 gap-4 text-center mb-8">
                    {/* Item 1 */}
                    <div className="flex flex-col items-center group">
                       <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center mb-2 group-hover:border-blue-400">
                          <Zap className="text-gray-500 w-6 h-6" />
                       </div>
                       <div className="text-xs font-bold text-gray-700">玄關門<br/>磁簧</div>
                       <div className="text-[10px] text-gray-400 mt-1">DI</div>
                       <div className="h-8 w-0.5 bg-red-200 mx-auto mt-2"></div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col items-center group">
                       <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center mb-2 group-hover:border-blue-400">
                          <Thermometer className="text-gray-500 w-6 h-6" />
                       </div>
                       <div className="text-xs font-bold text-gray-700">溫濕度<br/>傳送器</div>
                       <div className="text-[10px] text-gray-400 mt-1">485</div>
                       <div className="h-8 w-0.5 bg-red-200 mx-auto mt-2"></div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col items-center group">
                       <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center mb-2 group-hover:border-blue-400">
                          <Activity className="text-gray-500 w-6 h-6" />
                       </div>
                       <div className="text-xs font-bold text-gray-700">網路型<br/>攝影機</div>
                       <div className="text-[10px] text-gray-400 mt-1">CAT6</div>
                       <div className="h-8 w-0.5 bg-red-200 mx-auto mt-2"></div>
                    </div>

                     {/* Item 4 */}
                     <div className="flex flex-col items-center group">
                       <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center mb-2 group-hover:border-blue-400">
                          <Wind className="text-gray-500 w-6 h-6" />
                       </div>
                       <div className="text-xs font-bold text-gray-700">對照式<br/>紅外線</div>
                       <div className="text-[10px] text-gray-400 mt-1">DI</div>
                       <div className="h-8 w-0.5 bg-red-200 mx-auto mt-2"></div>
                    </div>

                     {/* Item 5 */}
                     <div className="flex flex-col items-center group">
                       <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center mb-2 group-hover:border-blue-400">
                          <Wind className="text-gray-500 w-6 h-6" />
                       </div>
                       <div className="text-xs font-bold text-gray-700">對照式<br/>紅外線</div>
                       <div className="text-[10px] text-gray-400 mt-1">DI</div>
                       <div className="h-8 w-0.5 bg-red-200 mx-auto mt-2"></div>
                    </div>

                     {/* Item 6 */}
                     <div className="flex flex-col items-center group">
                       <div className="w-12 h-12 bg-slate-800 rounded-lg shadow-sm border border-gray-700 flex items-center justify-center mb-2">
                          <Monitor className="text-cyan-400 w-6 h-6" />
                       </div>
                       <div className="text-xs font-bold text-gray-700">多功能<br/>顯示屏</div>
                       <div className="text-[10px] text-gray-400 mt-1">HDMI</div>
                       <div className="h-8 w-0.5 bg-red-200 mx-auto mt-2"></div>
                    </div>
                 </div>

                 {/* Backbone Bus */}
                 <div className="relative h-6 bg-red-100 rounded-full mb-8 flex items-center px-4 border border-red-200">
                    <span className="text-xs font-bold text-red-500 bg-white px-2 py-0.5 rounded mr-4">B1F</span>
                    <span className="text-xs font-bold text-blue-500 bg-white px-2 py-0.5 rounded">B2F</span>
                    <div className="flex-1 text-center text-xs text-red-400 tracking-widest">INTEGRATED SIGNAL BUS</div>
                 </div>

                 {/* Bottom Layer: Main Unit */}
                 <div className="flex justify-start pl-8 relative">
                    <div className="bg-black text-white p-6 rounded-lg shadow-xl w-32 relative z-10 border border-gray-700">
                       <Cpu className="w-8 h-8 text-blue-400 mb-2" />
                       <div className="text-sm font-bold">車道主機</div>
                       <div className="text-xs text-gray-400">Main Controller</div>
                    </div>
                    {/* Connection lines from Bus to Main Unit */}
                     <div className="absolute top-0 left-24 h-full border-l-2 border-red-300 -z-0"></div>
                 </div>

              </div>
           </div>
        </div>

        {/* Real-world Application Photos (Placeholders) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white p-4 rounded-xl shadow-lg">
             <div className="relative rounded-lg overflow-hidden h-64 mb-4">
               <img src="https://picsum.photos/600/400?random=88" alt="傳統預視系統" className="w-full h-full object-cover" />
               <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-center text-sm">傳統預視系統 + 紅綠燈</div>
             </div>
             <p className="text-gray-600 text-sm">
               傳統系統僅有簡單燈號，資訊量不足，無法整合環境數據。
             </p>
           </div>
           
           <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-blue-500">
             <div className="relative rounded-lg overflow-hidden h-64 mb-4">
               <img src="https://picsum.photos/600/400?random=99" alt="新型多功能顯示屏" className="w-full h-full object-cover" />
               <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">New</div>
               <div className="absolute bottom-0 left-0 right-0 bg-blue-900/80 text-white p-2 text-center text-sm">新型 OmniCloud 多功能顯示屏</div>
             </div>
             <p className="text-gray-600 text-sm">
               新型顯示屏整合影像、數據與警示，提供全方位的車道安全資訊。
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSystem;