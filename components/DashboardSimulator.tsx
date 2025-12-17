import React, { useState, useEffect } from 'react';
import { LaneStatus, SensorData } from '../types';

const DashboardSimulator: React.FC = () => {
  const [status, setStatus] = useState<LaneStatus>('STOP');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Simulating sensor data fluctuation
  const [sensors, setSensors] = useState<SensorData>({
    temperature: 25,
    humidity: 65,
    co: 5,
    pm25: 12
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleStatus = () => {
    setStatus(prev => prev === 'STOP' ? 'GO' : 'STOP');
  };

  return (
    <div className="bg-gray-100 p-4 md:p-8 rounded-xl shadow-inner">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Dashboard UI Frame (Simulating the screen in the image) */}
          <div className="flex-1 w-full bg-slate-900 p-4 rounded-lg shadow-2xl border-4 border-slate-700 aspect-[9/16] md:aspect-[3/4] max-w-md mx-auto relative overflow-hidden">
            
            {/* Screen Header */}
            <div className="text-center mb-4 border-b border-slate-600 pb-2">
              <h3 className="text-white text-xl font-bold tracking-wider">車道顯示看板</h3>
              <p className="text-cyan-400 text-sm">B2 車道口</p>
            </div>

            {/* CCTV Feed Simulation */}
            <div className="relative bg-black rounded-lg overflow-hidden h-48 mb-4 border border-slate-600">
               <img 
                 src="https://picsum.photos/800/600?grayscale" 
                 alt="CCTV Feed" 
                 className="w-full h-full object-cover opacity-80"
               />
               <div className="absolute top-2 left-2 text-green-500 text-xs font-mono">REC ●</div>
               <div className="absolute bottom-2 right-2 text-white text-xs font-mono">{currentTime.toLocaleTimeString()}</div>
            </div>

            {/* Traffic Light & Status */}
            <div className="flex flex-col items-center justify-center py-6 bg-slate-800 rounded-lg mb-4 border border-slate-600">
              <div className="text-gray-400 text-sm mb-2">紅綠燈號</div>
              <div className={`w-24 h-24 rounded-full border-4 transition-all duration-300 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] ${
                status === 'STOP' 
                  ? 'bg-red-600 border-red-800 shadow-[0_0_50px_rgba(220,38,38,0.6)]' 
                  : 'bg-green-500 border-green-700 shadow-[0_0_50px_rgba(34,197,94,0.6)]'
              }`}>
                 <div className="text-white font-bold text-2xl">
                    {status === 'STOP' ? 'STOP' : 'GO'}
                 </div>
              </div>
            </div>

            {/* Message Display */}
            <div className="bg-blue-900/50 border border-blue-500/30 rounded-lg p-3 text-center mb-4">
              <p className={`text-xl font-bold ${status === 'STOP' ? 'text-red-400' : 'text-green-400'}`}>
                {status === 'STOP' ? '入口中 請勿通行' : '請通行，時速低於10公里'}
              </p>
            </div>

            {/* Sensor Footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-slate-800 p-3 border-t border-slate-600">
              <div className="flex justify-between items-center text-cyan-400 text-sm font-mono">
                <span>多雲</span>
                <span>溫度 {sensors.temperature}°C</span>
                <span>濕度 {sensors.humidity}%</span>
              </div>
            </div>
          </div>

          {/* Controls / Explanation Side */}
          <div className="flex-1 space-y-6">
             <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Web版遠端管理介面模擬</h2>
                <p className="text-slate-600 mb-6">
                  此互動區域模擬了「多功能車道預視系統」的即時監控畫面。管理者可透過網頁介面即時查看車道狀況、感測器數值，並控制燈號與訊息。
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div>
                      <h4 className="font-bold text-slate-700">車道燈號控制</h4>
                      <p className="text-sm text-slate-500">手動切換紅綠燈狀態</p>
                    </div>
                    <button 
                      onClick={toggleStatus}
                      className={`px-6 py-2 rounded-full font-bold text-white transition-colors ${
                        status === 'STOP' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
                      }`}
                    >
                      切換為 {status === 'STOP' ? '綠燈' : '紅燈'}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-bold text-blue-800 text-sm">溫度監測</h4>
                      <p className="text-2xl font-mono text-blue-600">{sensors.temperature}°C</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-bold text-blue-800 text-sm">濕度監測</h4>
                      <p className="text-2xl font-mono text-blue-600">{sensors.humidity}%</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                      <h4 className="font-bold text-orange-800 text-sm">CO 濃度</h4>
                      <p className="text-2xl font-mono text-orange-600">{sensors.co} ppm</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                      <h4 className="font-bold text-purple-800 text-sm">PM2.5</h4>
                      <p className="text-2xl font-mono text-purple-600">{sensors.pm25}</p>
                    </div>
                  </div>
                </div>
             </div>

             <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
               <h3 className="text-lg font-bold mb-3">系統特色</h3>
               <ul className="space-y-2 text-blue-100">
                 <li className="flex items-center gap-2">✓ 下方車道即時影像傳輸</li>
                 <li className="flex items-center gap-2">✓ 蜂鳴器警示連動</li>
                 <li className="flex items-center gap-2">✓ 紅綠燈狀態同步顯示</li>
                 <li className="flex items-center gap-2">✓ 自訂文字訊息廣播</li>
                 <li className="flex items-center gap-2">✓ 整合環境感測器數值</li>
               </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSimulator;