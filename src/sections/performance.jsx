import SectionLayout from '../components/section-layout';

export default function Performance() {
  return (
    <div className="relative">
      <SectionLayout>
        <div className="flex flex-col items-start text-start">
          <h2 className="section-title">Blazingly fast, where matters.</h2>
          <p className="section-description">
            Yjs is hand-optimized to the extreme like no other CRDT
            implementation. Leverage its YATA algorithm to build fastest,
            scalable collaborative experiences for your users.
          </p>
          <div className="card mt-10 w-full rounded-3xl">
            <div className="flex flex-1 flex-col gap-6 px-6 py-6 text-left md:px-14 md:py-10">
              <dl className="relative my-2 flex flex-1 flex-col gap-2">
                <PerformanceRow title="Yjs" score="97" isWinner />
                <PerformanceRow title="Automerge" score="68" />
                <PerformanceRow title="Diamond Types" score="53" />
                <PerformanceRow title="Json Joy" score="48" />
                <div className="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                  <dt className="whitespace-nowrap md:basis-52 md:justify-end"></dt>
                  <p className="mt-8 w-full text-sm text-slate-400 md:text-base">
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

function PerformanceRow({ title, score, isWinner = false }) {
  return (
    <div className="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
      <dt className="heading-4 flex items-center whitespace-nowrap text-sm md:basis-52 md:justify-end md:text-xl">
        {title}
      </dt>
      <dd
        className={`flex w-full items-center gap-3 rounded-lg border p-1 ${
          isWinner ? 'border-slate-400' : 'border-slate-200'
        } `}
      >
        <div
          className={`relative flex h-8 rounded ${
            isWinner ? 'bg-gradient' : 'bg-slate-100'
          }`}
          style={{ width: `${score}%` }}
        ></div>
        <p className="flex-shrink-0 pr-2 text-base md:text-xl">
          <span className="sr-only">Score:</span>
          {score}
        </p>
      </dd>
    </div>
  );
}
