import SectionLayout from './layout';

export default function Performance() {
  return (
    <div className="relative">
      <SectionLayout>
        <div className="flex flex-col items-start text-start">
          <h2 className="font-cal-sans text-5xl text-black">
            Blazingly fast, where matters.
          </h2>
          <p className="mt-3 max-w-2xl text-xl tracking-tighter text-slate-400">
            Yjs is hand-optimized to the extreme like no other CRDT
            implementation. Leverage its YATA algorithm to build fastest,
            scalable collaborative experiences for your users.
          </p>
          <div className="card mt-10 w-full rounded-[20px]">
            <div className="flex flex-1 flex-col gap-6 px-6 py-6 text-left md:px-14 md:py-10">
              <dl className="relative my-2 flex flex-1 flex-col gap-2">
                <div className="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                  <dt className="heading-4 flex items-center whitespace-nowrap text-sm md:basis-52 md:justify-end md:text-xl">
                    Yjs
                  </dt>
                  <dd className="flex w-full items-center gap-3 rounded-lg border border-[#8693A5] p-1">
                    <div
                      className="bg-gradient relative flex h-8 rounded"
                      style={{ width: '97.01492537313433%' }}
                    ></div>
                    <p className="flex-shrink-0 pr-2 text-xl">
                      <span className="sr-only">Score:</span>
                      98
                    </p>
                  </dd>
                </div>
                <div className="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                  <dt className="heading-4 flex items-center whitespace-nowrap text-sm md:basis-52 md:justify-end md:text-xl">
                    Automerge
                  </dt>
                  <dd className="flex w-full items-center gap-3 rounded-lg border p-1">
                    <div
                      className="relative flex h-8 rounded bg-[#f3f4f7]"
                      style={{ width: '52.01492537313433%' }}
                    ></div>
                    <p className="flex-shrink-0 pr-2 font-mono text-xl">
                      <span className="sr-only">Score:</span>
                      68
                    </p>
                  </dd>
                </div>
                <div className="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                  <dt className="heading-4 grou flex items-center whitespace-nowrap text-sm md:basis-52 md:justify-end md:text-xl">
                    Diamond Types
                  </dt>
                  <dd className="flex w-full items-center gap-3 rounded-lg border p-1">
                    <div
                      className="relative flex h-8 rounded bg-[#f3f4f7]"
                      style={{ width: '44.71492537313433%' }}
                    ></div>
                    <p className="flex-shrink-0 pr-2 font-mono text-xl">
                      <span className="sr-only">Score:</span>
                      63
                    </p>
                  </dd>
                </div>
                <div className="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                  <dt className="heading-4 flex items-center whitespace-nowrap text-sm md:basis-52 md:justify-end md:text-xl">
                    Json Joy
                  </dt>
                  <dd className="flex w-full items-center gap-3 rounded-lg border p-1">
                    <div
                      className="relative flex h-8 rounded bg-[#f3f4f7]"
                      style={{ width: '37.71492537313433%' }}
                    ></div>
                    <p className="flex-shrink-0 pr-2 font-mono text-xl">
                      <span className="sr-only">Score:</span>
                      58
                    </p>
                  </dd>
                </div>
                <div className="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                  <dt className="whitespace-nowrap md:basis-52 md:justify-end"></dt>
                  <p className="mt-8 w-full text-base text-slate-400">
                    Based on&nbsp;
                    <a
                      href="https://github.com/dmonad/crdt-benchmarks"
                      target="_blank"
                      className="text-black underline"
                    >
                      crdt-benchmarks
                    </a>
                    &nbsp;real-world scenarios performance data.
                  </p>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
