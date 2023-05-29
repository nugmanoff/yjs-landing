import { YjsLogo } from '@/components/icons';

export default function Footer() {
  return (
    <footer className="pb-16 text-sm leading-6">
      <div className="mx-auto -mt-[70px] flex max-w-7xl flex-row justify-between">
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
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Resources
              </h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    className="text-medium text-base"
                    href="/docs/installation"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    className="text-medium text-base"
                    href="/docs/installation"
                  >
                    Yjs Explained
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 lg:flex-none">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Ecosystem
              </h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    className="text-medium text-base"
                    href="/docs/installation"
                  >
                    Yrs - Rust port
                  </a>
                </li>
                <li>
                  <a
                    className="text-medium text-base"
                    href="/docs/installation"
                  >
                    Ywasm - WASM port
                  </a>
                </li>
                <li>
                  <a
                    className="text-medium text-base"
                    href="/docs/installation"
                  >
                    Ypy - Python port
                  </a>
                </li>
                <li>
                  <a
                    className="text-medium text-base"
                    href="/docs/installation"
                  >
                    Yrb - Ruby port
                  </a>
                </li>
                <li>
                  <a
                    className="text-medium text-base"
                    href="/docs/installation"
                  >
                    YSwift - Swift port
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2 flex-none space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
            <div className="lg:w-1/2 lg:flex-none">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Community
              </h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    className="text-medium text-base"
                    href="/docs/installation"
                  >
                    Contributing
                  </a>
                </li>
                <li>
                  <a
                    className="text-medium text-base"
                    href="/docs/installation"
                  >
                    Open Collective
                  </a>
                </li>
                <li>
                  <a
                    className="text-medium text-base"
                    href="/docs/installation"
                  >
                    Join our Discord
                  </a>
                </li>
                <li>
                  <a
                    className="text-medium text-base"
                    href="/docs/installation"
                  >
                    Disqus
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 lg:flex-none">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                More links
              </h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    className="text-medium text-base"
                    href="/docs/installation"
                  >
                    Kevin's blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-medium text-base"
                    href="/docs/installation"
                  >
                    Bartosz's blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
