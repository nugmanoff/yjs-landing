import { YjsLogo } from '@/components/icons';

function FooterSection({ title, children }) {
  return (
    <>
      <h2 className="text-[12px] font-semibold uppercase tracking-wide text-slate-400 md:text-sm">
        {title}
      </h2>
      <ul className="text-medium mt-3 space-y-2 text-sm md:text-base">
        {children}
      </ul>
    </>
  );
}

export default function Footer() {
  return (
    <footer className="pb-16 text-sm leading-6">
      <div className="container mx-auto -mt-[70px] flex flex-col justify-between gap-y-10 sm:flex-row ">
        <div className="flex basis-9/12 flex-row items-center gap-x-3 self-start">
          <YjsLogo />
          <p className="text-sm font-medium">
            Make your app
            <br />
            collaborative.
          </p>
        </div>
        <div className="flex w-full justify-between">
          <div className="w-1/2 flex-none space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
            <div className="lg:w-1/2 lg:flex-none">
              <FooterSection title="Resources">
                <li>
                  <a href="/docs/installation">Documentation</a>
                </li>
                <li>
                  <a href="/docs/installation">Yjs Explained</a>
                </li>
              </FooterSection>
            </div>
            <div className="lg:w-1/2 lg:flex-none">
              <FooterSection title="Ecosystem">
                <li>
                  <a href="/docs/installation">Yrs - Rust port</a>
                </li>
                <li>
                  <a href="/docs/installation">Ywasm - WASM port</a>
                </li>
                <li>
                  <a href="/docs/installation">Ypy - Python port</a>
                </li>
                <li>
                  <a href="/docs/installation">Yrb - Ruby port</a>
                </li>
                <li>
                  <a href="/docs/installation">Yswift - Swift port</a>
                </li>
              </FooterSection>
            </div>
          </div>
          <div className="w-1/2 flex-none space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
            <div className="lg:w-1/2 lg:flex-none">
              <FooterSection title="Community">
                <li>
                  <a href="/docs/installation">Contributing</a>
                </li>
                <li>
                  <a href="/docs/installation">Open Collective</a>
                </li>
                <li>
                  <a href="/docs/installation">Join our Discord</a>
                </li>
                <li>
                  <a href="/docs/installation">Disqus</a>
                </li>
              </FooterSection>
            </div>
            <div className="lg:w-1/2 lg:flex-none">
              <FooterSection title="More links">
                <li>
                  <a href="/docs/installation">Kevin's blog</a>
                </li>
                <li>
                  <a href="/docs/installation">Bartos'z blog</a>
                </li>
              </FooterSection>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
