import React from "react";

export default function Console() {
    return (
        <div className="hidden md:flex flex-col w-full h-1/7 bg-gray-900 text-gray-300 text-xs border-gray-800 border-t border-b">
            <div className="flex space-x-4 bg-gray-900 py-2 px-4 text-white">
                <span>Problems</span>
                <span>Exit</span>
                <span>Debug console</span>
                <span>Terminal</span>
                <span>Door</span>
                <span>Comments</span>
            </div>
            <div className="flex flex-col p-4 space-y-2 bg-gray-800">
                <div className="text-gray-500">&gt; portfolio-2.0@0.1.0 dev</div>
                <div className="text-gray-500">&gt; next dev</div>
                <div className="text-purple-900">  ▲ Next.js 14.2.8</div>
                <div className="text-gray-300">  - Local:        http://localhost:3000</div>
                <div className="text-green-400"> ✓ Starting...</div>
                <div className="text-green-400"> ✓ Ready in 4.2s</div>
                <div className="text-yellow-400"> ○ Compiling / ...</div>
                <div className="text-green-400"> ✓ Compiled / in 6.6s (393 modules)</div>
            </div>
        </div>
    );
}
