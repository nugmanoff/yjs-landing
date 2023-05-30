import Image from 'next/image';
import SectionLayout from './layout';

function Platform({ logoSrc, href, title }) {
  return (
    <a href={href} target="_blank">
      <div className="card flex flex-col items-center gap-y-2.5 rounded-lg px-6 py-5 transition-all hover:-translate-y-3">
        <Image src={logoSrc} alt={title} width="64" height="64" quality={100} />
        <p className="text-center text-base font-medium text-slate-400">
          {title}
        </p>
      </div>
    </a>
  );
}

export default function AvailableOnManyPlatforms() {
  return (
    // <div className="relative">
    <SectionLayout>
      <div className="flex flex-col items-start text-start">
        <h2 className="font-cal-sans text-4xl text-black md:text-5xl">
          Available on many platforms.
        </h2>
        <p className="mt-3 max-w-2xl text-base tracking-tighter text-slate-400 md:text-xl">
          Yjs provides primitive building blocks that feel and behave like an
          ordinary data structures. Except for being conflict-free and
          eventually consistent.
        </p>
      </div>
      <div className="platforms-grid-container mt-8 gap-8 md:mt-12 md:gap-14">
        <Platform
          logoSrc={'/wasm.png'}
          title="WASM"
          href="https://github.com/y-crdt/y-crdt/tree/main/ywasm"
        />
        <Platform
          logoSrc={'/rust.png'}
          title="Rust"
          href="https://github.com/y-crdt/y-crdt/tree/main/yrs"
        />
        <Platform
          logoSrc={'/python.png'}
          title="Python"
          href="https://github.com/y-crdt/ypy"
        />
        <Platform
          logoSrc={'/ruby.png'}
          title="Ruby"
          href="https://github.com/y-crdt/yrb"
        />
        <Platform
          logoSrc={'/swift.png'}
          title="Swift"
          href="https://github.com/y-crdt/yswift"
        />
        <Platform
          logoSrc={'/js.png'}
          title="JavaScript"
          href="https://github.com/yjs/yjs"
        />
      </div>
    </SectionLayout>
    // </div>
  );
}
