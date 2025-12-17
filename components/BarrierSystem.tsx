import React from 'react';
import { Camera, Monitor, Wifi, ShieldCheck, ArrowRight, Zap } from './Icons';

const BarrierSystem: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Smart Lane Control</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            智慧車道管制系統 柵欄一體機
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            採用車牌辨識攝影機與 E-tag 雙辨識功能，因應各種場域需求。整合多功能顯示器，打造更直覺、更安全的車道管理體驗。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Feature List */}
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Camera className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">雙重辨識技術</h3>
                <p className="mt-2 text-base text-gray-500">
                  結合車牌辨識與 E-tag 讀取，確保高準確率與快速通關，適應各種複雜場域與天候。
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Monitor className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">多功能顯示器</h3>
                <p className="mt-2 text-base text-gray-500">
                  有效節省傳統佈置紅外線燈號與讀秒顯示器。直接於機身顯示歡迎詞、車牌號碼、倒數讀秒與狀態燈號。
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Wifi className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Web版遠端管理</h3>
                <p className="mt-2 text-base text-gray-500">
                  透過瀏覽器即可隨時查閱進出紀錄、更新數據，無需安裝專用軟體，管理更彈性。
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">車道預警連動</h3>
                <p className="mt-2 text-base text-gray-500">
                  連動【車道預警提示系統】，出車「更直覺」、「更安全」，大幅降低事故風險。
                </p>
              </div>
            </div>
          </div>

          {/* Product Visualization */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200 shadow-xl relative overflow-hidden">
               {/* Decorative background elements */}
               <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
               <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-indigo-100 opacity-50 blur-3xl"></div>
               
               <div className="relative z-10 flex flex-col items-center">
                  {/* Abstract representation of the hardware tower */}
                  <div className="w-32 h-96 bg-gray-800 rounded-lg shadow-2xl flex flex-col items-center justify-between py-4 relative">
                    {/* Camera arm */}
                    <div className="absolute -right-12 top-8 w-16 h-4 bg-gray-600 rounded-r-lg"></div>
                    <div className="absolute -right-20 top-6 w-12 h-8 bg-white rounded-lg border-2 border-gray-800 shadow-lg flex items-center justify-center">
                       <div className="w-4 h-4 bg-black rounded-full border-2 border-gray-500"></div>
                    </div>

                    {/* Antenna/Reader */}
                    <div className="absolute -right-16 top-24 w-12 h-12 bg-gray-200 rounded-lg transform rotate-12 border border-gray-300 shadow-md"></div>

                    {/* LED Display Area */}
                    <div className="w-24 h-16 bg-black border border-gray-700 mt-12 flex flex-col items-center justify-center overflow-hidden">
                       <span className="text-red-500 font-mono text-xs animate-pulse">10:21:34</span>
                       <span className="text-green-500 font-mono text-xl font-bold">歡迎</span>
                    </div>

                    {/* Traffic Light Signal */}
                    <div className="w-20 h-20 bg-black rounded-full border-4 border-gray-700 flex items-center justify-center mt-4">
                       <div className="w-16 h-16 rounded-full bg-green-500 animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.8)]"></div>
                    </div>
                    
                    {/* Bottom Housing */}
                    <div className="w-full px-4 mt-auto">
                       <div className="w-full h-1 bg-gray-700 rounded mb-2"></div>
                       <div className="w-full h-1 bg-gray-700 rounded"></div>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                     <div className="bg-white p-3 rounded shadow text-center border border-gray-200">
                        <div className="text-red-500 font-bold text-2xl lcd-font">75</div>
                        <div className="text-xs text-gray-500">讀秒顯示</div>
                     </div>
                     <div className="bg-white p-3 rounded shadow text-center border border-gray-200 flex flex-col items-center justify-center">
                        <div className="w-16 h-8 bg-green-500 grid grid-cols-10 gap-0.5 p-0.5 rounded">
                           {Array.from({length: 40}).map((_, i) => (
                             <div key={i} className="bg-green-200 rounded-full w-full h-full"></div>
                           ))}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">LED 矩陣</div>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Callout Arrow */}
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 md:block hidden">
               <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold rotate-12 shadow-sm border border-red-200">
                  UPGRADE!!
               </div>
            </div>
          </div>
        </div>

        {/* Use Case Scenarios */}
        <div className="mt-20">
           <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-blue-500 pl-4">實際應用案例</h3>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg aspect-video cursor-pointer">
                  <img 
                    src={`https://picsum.photos/400/300?random=${i+10}`} 
                    alt={`Case Study ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <span className="text-white font-medium">企業總部地下停車場 B{i}</span>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default BarrierSystem;