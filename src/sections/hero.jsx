import { CopyToClipboardIcon, TerminalPromptIcon } from '@/components/icons';
import SectionLayout from '../components/section-layout';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();
  const [isCopiedVisible, setIsCopiedVisible] = useState(false);

  return (
    <SectionLayout>
      <div className="flex flex-col items-center gap-y-3 md:gap-y-4">
        <h1 className="font-cal-sans text-center text-[52px] leading-[125%] tracking-tight md:text-[72px]">
          Make your app <span className="text-gradient">collaborative.</span>
        </h1>
        <h2 className="max-w-[600px] text-center text-base tracking-tighter md:text-lg">
          Yjs is a high-performance CRDT for building collaborative software
          that syncs automatically. Build collaborative apps like Google Docs or
          Figma in no time.
        </h2>
        <div className="flex flex-row gap-x-4">
          <a
            href="https://docs.yjs.dev/"
            target="_blank"
            className="flex h-12 w-[186px] items-center justify-center rounded-xl bg-black  text-base font-semibold text-white transition-all hover:bg-slate-800 md:h-13"
          >
            Get started
          </a>
          <button
            className="card group hidden items-center rounded-xl hover:bg-slate-50 md:flex"
            onClick={() => {
              navigator.clipboard.writeText('npm install yjs');
              setIsCopiedVisible(true);
              setTimeout(() => {
                setIsCopiedVisible(false);
              }, 1750);
            }}
          >
            <TerminalPromptIcon />
            <code className="code flex-1 text-left leading-none">
              npm install yjs
            </code>

            <div className="relative">
              <div
                className="block p-4 transition active:scale-100 active:transition-none group-hover:rotate-12"
                title="Copy to clipboard"
              >
                <CopyToClipboardIcon />
              </div>

              <p
                className={`absolute left-1/2 top-[calc(100%+8px)] -translate-x-[calc(50%+6px)] whitespace-nowrap rounded-md bg-black p-2 text-sm leading-none text-white transition-all ${
                  isCopiedVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Copied!
              </p>
            </div>
          </button>
        </div>
        <p className="text-sm text-slate-400">Free Forever • MIT License</p>
      </div>
    </SectionLayout>
  );
}
