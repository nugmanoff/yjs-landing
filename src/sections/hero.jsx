import SectionLayout from './layout';

export default function Hero() {
  return (
    <SectionLayout>
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="font-cal-sans text-[72px] leading-[90px] tracking-tight">
          Make your app <span className="text-gradient">collaborative.</span>
        </h1>
        <h2 className="max-w-[600px] text-center text-lg tracking-tighter">
          Yjs is a high-performance CRDT for building collaborative software
          that syncs automatically. Build collaborative apps like Google Docs or
          Figma in no time.
        </h2>
        <div className="flex flex-row gap-x-4">
          <button className="h-[52px] w-[186px] rounded-xl bg-black font-semibold text-white">
            Get started
          </button>
          <button className="card h-[52px] w-[186px] rounded-xl bg-white font-medium text-black">
            npm install yjs
          </button>
        </div>
        <p className="text-sm text-slate-400">Free Forever • MIT License</p>
      </div>
    </SectionLayout>
  );
}
