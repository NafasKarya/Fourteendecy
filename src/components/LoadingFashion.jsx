import React from 'react';

/**
 * Elegant loading screen – kompatibel Tailwind v2.x
 */
export default function LoadingFashion() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center space-y-6 animate-fadein">
        {/* icon jas */}
        <svg
          className="w-20 h-20 text-yellow-400 animate-scaleup"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c-.6 0-1 .4-1 .9l-2 7.6c-.1.5.2 1 .7 1.1l1.4.3v8.1c0 .6.4 1 1 1s1-.4 1-1v-8.1l1.4-.3c.5-.1.8-.6.7-1.1l-2-7.6c0-.5-.4-.9-1-.9zM8 3l-4 2 3 13.5a1 1 0 101.9-.4L8 3zm8 0l-3 15.1a1 1 0 101.9.4L20 5l-4-2z" />
        </svg>

        <p className="text-yellow-400 uppercase tracking-widest text-sm font-serif animate-pulse">
          please wait — elegance is loading
        </p>
      </div>

      {/* custom keyframes */}
      <style jsx>{`
        @keyframes fadein {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes scaleup {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-fadein { animation: fadein 1.2s ease-out forwards; }
        .animate-scaleup { animation: scaleup 2.5s infinite ease-in-out; }
      `}</style>
    </div>
  );
}
