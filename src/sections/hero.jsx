import SectionLayout from './layout';

export default function Hero() {
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
          <button className="h-[48px] w-[186px] rounded-xl bg-black text-base font-semibold text-white md:h-[52px]">
            Get started
          </button>
          <button className="card hidden h-[52px] w-[186px] rounded-xl bg-white font-medium text-black md:block">
            npm install yjs
          </button>
        </div>
        <p className="text-sm text-slate-400">Free Forever • MIT License</p>
      </div>
    </SectionLayout>
  );
}
