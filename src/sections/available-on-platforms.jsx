import Image from 'next/image';
import SectionLayout from '../components/section-layout';

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
    <SectionLayout>
      <div className="flex flex-col items-start text-start">
        <h2 className="section-title">Available on many platforms.</h2>
        <p className="section-description">
          Yjs is accessible across many platforms, programming languages thanks
          to its vibrant ecosystem of language bindings. Leverage the power of
          Yjs in your favorite language.
        </p>
      </div>
      <div className="platforms-grid-container mt-8 gap-8 md:mt-12 md:gap-14">
        <Platform
          logoSrc={'/logos/wasm.png'}
          title="WASM"
          href="https://github.com/y-crdt/y-crdt/tree/main/ywasm"
        />
        <Platform
          logoSrc={'/logos/rust.png'}
          title="Rust"
          href="https://github.com/y-crdt/y-crdt/tree/main/yrs"
        />
        <Platform
          logoSrc={'/logos/python.png'}
          title="Python"
          href="https://github.com/y-crdt/ypy"
        />
        <Platform
          logoSrc={'/logos/ruby.png'}
          title="Ruby"
          href="https://github.com/y-crdt/yrb"
        />
        <Platform
          logoSrc={'/logos/swift.png'}
          title="Swift"
          href="https://github.com/y-crdt/yswift"
        />
        <Platform
          logoSrc={'/logos/js.png'}
          title="JavaScript"
          href="https://github.com/yjs/yjs"
        />
      </div>
    </SectionLayout>
  );
}
