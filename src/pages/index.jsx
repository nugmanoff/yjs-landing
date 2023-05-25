import Image from 'next/image';

function NavItem({ href, title }) {
  return (
    <a href={href} className="font p-[6px] text-lg font-medium text-gray-600">
      {title}
    </a>
  );
}

function Header() {
  return (
    <header className="mx-auto max-w-7xl py-6">
      <div className="flex justify-between">
        <YjsLogo />
        <div className="flex flex-row space-x-3">
          <NavItem href="" title="Documentation" />
          <NavItem href="" title="Community" />
          <NavItem href="" title="Pricing" />
        </div>
      </div>
    </header>
  );
}

function SectionLayout({ children }) {
  return <section className="mx-auto max-w-7xl">{children}</section>;
}

function Hero() {
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

function UsedIn() {
  return (
    <SectionLayout>
      <div className="flex flex-col items-center gap-y-4">
        <p className="text-xl text-slate-400">
          Used in world's leading collaborative software
        </p>
        <div className="mt-7 flex flex-row gap-x-[100px]">
          <Image
            src="/evernote.png"
            alt="Evernote logo"
            width="155"
            height="96"
            quality={100}
          />
          <Image
            src="/jupyter.png"
            alt="Jupyter logo"
            width="77"
            height="96"
            quality={100}
          />
          <Image
            src="/ably.png"
            alt="Ably logo"
            width="128"
            height="96"
            quality={100}
          />
          <Image
            src="/saga.png"
            alt="Saga logo"
            width="95"
            height="96"
            quality={100}
          />
        </div>
      </div>
    </SectionLayout>
  );
}

function Performance() {
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
            <div class="flex flex-1 flex-col gap-6 px-6 py-6 text-left md:px-14 md:py-10">
              <dl class="relative my-2 flex flex-1 flex-col gap-2">
                <div class="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                  <dt class="heading-4 flex items-center whitespace-nowrap text-sm md:basis-52 md:justify-end md:text-xl">
                    Yjs
                  </dt>
                  <dd class="flex w-full items-center gap-3 rounded-lg border border-[#8693A5] p-1">
                    <div
                      class="bg-gradient relative flex h-8 rounded"
                      style={{ width: '97.01492537313433%' }}
                    ></div>
                    <p class="flex-shrink-0 pr-2 text-xl">
                      <span class="sr-only">Score:</span>
                      98
                    </p>
                  </dd>
                </div>
                <div class="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                  <dt class="heading-4 flex items-center whitespace-nowrap text-sm md:basis-52 md:justify-end md:text-xl">
                    Automerge
                  </dt>
                  <dd class="flex w-full items-center gap-3 rounded-lg border p-1">
                    <div
                      class="relative flex h-8 rounded bg-[#f3f4f7]"
                      style={{ width: '52.01492537313433%' }}
                    ></div>
                    <p class="flex-shrink-0 pr-2 font-mono text-xl">
                      <span class="sr-only">Score:</span>
                      68
                    </p>
                  </dd>
                </div>
                <div class="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                  <dt class="heading-4 grou flex items-center whitespace-nowrap text-sm md:basis-52 md:justify-end md:text-xl">
                    Diamond Types
                  </dt>
                  <dd class="flex w-full items-center gap-3 rounded-lg border p-1">
                    <div
                      class="relative flex h-8 rounded bg-[#f3f4f7]"
                      style={{ width: '44.71492537313433%' }}
                    ></div>
                    <p class="flex-shrink-0 pr-2 font-mono text-xl">
                      <span class="sr-only">Score:</span>
                      63
                    </p>
                  </dd>
                </div>
                <div class="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                  <dt class="heading-4 flex items-center whitespace-nowrap text-sm md:basis-52 md:justify-end md:text-xl">
                    Json Joy
                  </dt>
                  <dd class="flex w-full items-center gap-3 rounded-lg border p-1">
                    <div
                      class="relative flex h-8 rounded bg-[#f3f4f7]"
                      style={{ width: '37.71492537313433%' }}
                    ></div>
                    <p class="flex-shrink-0 pr-2 font-mono text-xl">
                      <span class="sr-only">Score:</span>
                      58
                    </p>
                  </dd>
                </div>
                <div class="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                  <dt class="whitespace-nowrap md:basis-52 md:justify-end"></dt>
                  <p class="mt-8 w-full text-base text-slate-400">
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

function Testimonial({ logoSrc, avatarSrc, text, fullname, position }) {
  return (
    <SectionLayout>
      <div className="grid grid-cols-7">
        <div className="col-span-3">
          <Image
            src="/evernote.png"
            alt="Evernote logo"
            width="155"
            height="96"
            quality={100}
            className="-mt-[28px]"
          />
        </div>
        <div className="col-span-4 flex flex-col">
          <p className="mb-[60px] text-2xl font-semibold tracking-tighter text-slate-600">
            “Yjs allowed us to add collaborative features to our application in
            no time. The API is extremely well-designed, which makes it easy to
            integrate with the existing part of the system. Kevin and the team
            also provided us first-class support.”
          </p>
          <div className="flex flex-row">
            <Image
              src="/bartosz.jpg"
              alt="Bartosz's Headshot"
              width="64"
              height="64"
              quality={100}
              className="mr-4 rounded-lg"
            />
            <div className="flex flex-col text-lg">
              <p className="font-semibold text-black">Bartosz Sypytkowski</p>
              <p className="font-medium text-slate-600">
                Co-founder, CTO @ Evernote
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

const ArrayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    className="fill-slate-400 transition-all group-hover:fill-slate-600"
  >
    <path d="M2.606 15.298h10.07c1.742 0 2.606-.863 2.606-2.573V2.59c0-1.71-.864-2.573-2.607-2.573H2.606C.872.017 0 .872 0 2.59v10.135c0 1.718.872 2.573 2.606 2.573Zm.017-1.336c-.83 0-1.287-.44-1.287-1.303V2.656c0-.863.457-1.303 1.287-1.303H12.66c.821 0 1.286.44 1.286 1.303V12.66c0 .863-.465 1.303-1.286 1.303H2.623Zm3.378-1.785c.499 0 .772-.232.772-.572 0-.332-.24-.548-.572-.548-.565 0-.772-.241-.772-.93V8.99c0-.739-.457-1.279-1.212-1.42v.158c.755-.133 1.212-.672 1.212-1.411V5.188c0-.689.207-.938.772-.938.332 0 .572-.208.572-.54 0-.34-.273-.58-.772-.58-1.12 0-1.784.655-1.784 1.942v1.037c0 .598-.141.74-.565.847-.697.183-.689 1.212 0 1.395.424.116.565.257.565.855v1.037c0 1.287.664 1.934 1.784 1.934Zm3.304 0c1.113 0 1.785-.647 1.785-1.934V9.206c0-.598.141-.74.556-.855.697-.175.697-1.22 0-1.395-.415-.108-.556-.249-.556-.847V5.072c0-1.287-.672-1.943-1.785-1.943-.498 0-.78.241-.78.581 0 .332.249.54.581.54.556 0 .772.249.772.938v1.129c0 .739.457 1.278 1.204 1.411V7.57c-.748.141-1.204.681-1.204 1.42v1.137c0 .689-.216.93-.772.93-.332 0-.581.216-.581.547 0 .34.282.573.78.573Z" />
  </svg>
);

const TextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={8}
    className="fill-slate-400 transition-all group-hover:fill-slate-600"
  >
    <path d="M1.954 7.995c.84 0 1.625-.45 1.96-1.143h.016v.704c0 .265.187.444.445.444.269 0 .45-.179.45-.466V3.948c0-1.175-.873-1.928-2.25-1.928-1.033 0-1.878.444-2.196 1.138a.926.926 0 0 0-.1.373c0 .239.177.396.413.396.17 0 .302-.065.384-.217.302-.617.768-.91 1.471-.91.85 0 1.35.466 1.35 1.219v.46l-1.75.098C.767 4.653 0 5.28 0 6.277c0 1.035.801 1.718 1.954 1.718Zm.225-.753c-.735 0-1.23-.396-1.23-.98 0-.57.462-.949 1.313-1.003l1.635-.103v.564c0 .855-.763 1.522-1.718 1.522Zm4.177.753a.434.434 0 0 0 .456-.455v-.78h.017C7.185 7.523 7.904 8 8.81 8c1.499 0 2.487-1.175 2.487-2.99 0-1.814-.994-2.99-2.476-2.99-.89 0-1.614.482-1.954 1.235H6.84V.487c0-.292-.187-.482-.462-.482-.28 0-.466.19-.466.482V7.54c0 .281.181.455.444.455Zm2.251-.786c-1.037 0-1.767-.872-1.767-2.193 0-1.328.735-2.2 1.767-2.2 1.065 0 1.735.85 1.735 2.194 0 1.354-.676 2.2-1.735 2.2ZM14.634 8c1.076 0 2.004-.585 2.317-1.414A.943.943 0 0 0 17 6.332a.384.384 0 0 0-.4-.396c-.21 0-.314.082-.44.32-.285.617-.78.953-1.52.953-1.076 0-1.779-.84-1.779-2.193 0-1.344.708-2.205 1.779-2.205.708 0 1.218.33 1.51.964.12.228.23.309.433.309.236 0 .4-.152.4-.39 0-.065-.021-.146-.038-.217-.274-.828-1.213-1.457-2.327-1.457-1.636 0-2.707 1.186-2.707 3 0 1.826 1.082 2.98 2.723 2.98Z" />
  </svg>
);

const MapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    className="fill-slate-400 transition-all group-hover:fill-slate-600"
  >
    <path d="M0 8.904v1.198c0 1.572.786 2.365 2.374 2.365h1.913V11.24H2.39c-.756 0-1.172-.412-1.172-1.206V8.904H0Zm1.217-1.045V4.395H0v3.464h1.217Zm0-4.502V2.45c0-.793.416-1.205 1.172-1.205h1.097V.015H2.374C.786.015 0 .81 0 2.38v.977h1.217ZM7.947.015H4.514v1.229h3.433V.015Zm1.028 1.229h.968c.749 0 1.172.412 1.172 1.205V4.12h1.218V2.38c0-1.571-.794-2.365-2.367-2.365h-.99v1.229ZM6.042 16h7.591C15.206 16 16 15.206 16 13.635V5.913c0-1.572-.794-2.365-2.367-2.365H6.042c-1.588 0-2.375.786-2.375 2.365v7.722c0 1.571.787 2.365 2.375 2.365Zm.015-1.229c-.749 0-1.172-.412-1.172-1.205V5.982c0-.794.423-1.206 1.172-1.206h7.553c.75 0 1.173.412 1.173 1.206v7.584c0 .793-.424 1.205-1.172 1.205H6.056Z" />
  </svg>
);

const XMLIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    className="fill-slate-400 transition-all group-hover:fill-slate-600"
  >
    <path d="M2.606 15.298h10.07c1.742 0 2.606-.863 2.606-2.573V2.59c0-1.71-.864-2.573-2.607-2.573H2.606C.872.017 0 .872 0 2.59v10.135c0 1.718.872 2.573 2.606 2.573Zm.017-1.336c-.83 0-1.287-.44-1.287-1.303V2.656c0-.863.457-1.303 1.287-1.303H12.66c.821 0 1.286.44 1.286 1.303V12.66c0 .863-.465 1.303-1.286 1.303H2.623Zm7.164-2.922c.398 0 .689-.282.689-.664 0-.316-.133-.498-.482-.664L5.786 7.645v-.05L9.994 5.48c.34-.167.482-.366.482-.673 0-.373-.283-.656-.673-.656a.83.83 0 0 0-.415.1L4.441 6.915c-.332.182-.49.415-.49.73 0 .34.141.548.49.73l4.947 2.574a.88.88 0 0 0 .399.091Z" />
  </svg>
);

function ComposablePrimitiveItem({ title, description, iconFactory }) {
  return (
    <div className="group flex cursor-pointer flex-col text-slate-400 transition-all hover:text-slate-600">
      <div className="flex flex-row items-center gap-x-1">
        {iconFactory()}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="font-medium">{description}</p>
    </div>
  );
}

function ComposablePrimitives() {
  return (
    <div className="relative">
      <SectionLayout>
        <div className="flex flex-col items-start text-start">
          <h2 className="font-cal-sans text-5xl text-black">
            Composable primitives.
          </h2>
          <p className="mt-3 max-w-2xl text-xl tracking-tighter text-slate-400">
            Yjs provides primitive building blocks that feel and behave like an
            ordinary data structures. Except for being conflict-free and
            eventually consistent.
          </p>
        </div>
        <div className="mt-12 flex w-full flex-row justify-between gap-x-10">
          <ComposablePrimitiveItem
            title="Array"
            description="Create your dream CRM with powerful, flexible templates for every use case."
            iconFactory={() => <ArrayIcon />}
          />
          <ComposablePrimitiveItem
            title="Text"
            description="Create your dream CRM with powerful, flexible templates for every use case."
            iconFactory={() => <TextIcon />}
          />
          <ComposablePrimitiveItem
            title="Map"
            description="Create your dream CRM with powerful, flexible templates for every use case."
            iconFactory={() => <MapIcon />}
          />
          <ComposablePrimitiveItem
            title="XML"
            description="Create your dream CRM with powerful, flexible templates for every use case."
            iconFactory={() => <XMLIcon />}
          />
        </div>
        <div className="card mt-10 h-[300px] w-full rounded-[20px] bg-slate-50"></div>
      </SectionLayout>
    </div>
  );
}

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

function AvailableOnManyPlatforms() {
  return (
    <div className="relative">
      <SectionLayout>
        <div className="flex flex-col items-start text-start">
          <h2 className="font-cal-sans text-5xl text-black">
            Available on many platforms.
          </h2>
          <p className="mt-3 max-w-2xl text-xl tracking-tighter text-slate-400">
            Yjs provides primitive building blocks that feel and behave like an
            ordinary data structures. Except for being conflict-free and
            eventually consistent.
          </p>
        </div>
        <div className="mt-12 flex flex-row gap-x-14">
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
    </div>
  );
}

function IntegrationItem({ title, description }) {
  return (
    <div className="group flex cursor-pointer flex-col text-slate-400 transition-all hover:text-slate-600">
      <div className="flex flex-row items-center gap-x-1">
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="font-medium">{description}</p>
    </div>
  );
}

function Integrations() {
  return (
    <div className="relative">
      <SectionLayout>
        <div className="flex flex-col items-start text-start">
          <h2 className="font-cal-sans text-5xl text-black">Integrations.</h2>
          <p className="mt-3 max-w-2xl text-xl tracking-tighter text-slate-400">
            Yjs provides primitive building blocks that feel and behave like an
            ordinary data structures. Except for being conflict-free and
            eventually consistent.
          </p>
        </div>
        <div className="mt-12 grid w-full grid-cols-4 gap-x-10 gap-y-12">
          <IntegrationItem
            title="TipTap"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="ProseMirror"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="Monaco"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="CodeMirror"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="Slate"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="Milkdown"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="Quill"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="WebRTC"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="WebSocket"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="DAT"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="IndexedDB"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="LevelDB"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
        </div>
      </SectionLayout>
    </div>
  );
}

function SupporterCard() {
  return (
    <div className="card flex w-[248px] shrink-0 flex-col gap-y-1.5 rounded-lg p-6">
      <Image
        src="/saga-icon.png"
        alt="Saga Icon"
        width="64"
        height="64"
        quality={100}
        className="mb-1 rounded-md"
      />
      <p className="text-2xl font-semibold">Saga</p>
      <p className="text-2xl font-medium">$12,000</p>
      <p className="text-base font-normal text-slate-400">
        amount contributed <br /> since{' '}
        <span className="font-medium">May 2021</span>
      </p>
    </div>
  );
}

function HelpUs() {
  return (
    <div className="flex flex-col items-center gap-y-[64px]">
      <h1 className="font-cal-sans mx-auto max-w-7xl text-center text-[72px] leading-[90px] tracking-tight">
        Help us make software
        <br /> more <span className="text-gradient">collaborative.</span>
      </h1>
    </div>
  );
}

function SupportersCarousel() {
  return (
    <div className="no-scrollbar overflow-x-scroll">
      <div className="flex flex-row gap-x-[56px] px-4 py-2">
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
      </div>
    </div>
  );
}

function CallToAction() {
  return (
    <div className="flex w-full flex-col items-center bg-[#1F87FF] py-[54px]">
      <p className="mx-auto mb-9 max-w-7xl text-center text-2xl font-medium text-white">
        Support us as we build the foundational tools for creating collaborative
        applications. <br />
        We distribute funding among us and active contributors in this space to
        maintain and <br /> advance our software.
      </p>
      <div className="flex flex-row gap-x-4">
        <button className="collective-btn flex h-[52px] flex-row items-center gap-2.5 px-4 text-lg font-semibold text-[#1F87FF]">
          <Image
            src="/open-collective.svg"
            alt="Open Collective logo"
            width="28"
            height="28"
          />
          Donate to our Collective
        </button>
        <button className="h-[52px] rounded-xl border-[3px] border-white px-7 text-lg font-bold text-white">
          {'Paid Support ->'}
        </button>
      </div>
    </div>
  );
}

function YjsLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 15.024 17.796"
    >
      <path
        d="M195.297 184.537c-.77.008-1.319.388-1.65 1.14l-2.379 5.54v.022l1.727 2.592 3.914-6.715c.323-.554.306-1.124-.05-1.711-.355-.579-.868-.868-1.537-.868z"
        style={{
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '10.58333302px',
          lineHeight: 1.25,
          fontFamily: 'sans-serif',
          letterSpacing: 0,
          wordSpacing: 0,
          opacity: 1,
          fill: '#6eeb83',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.26458332
        }}
        transform="translate(-185.256 -184.537)"
      />
      <path
        d="m191.268 191.225-2.014 2.721.015.029v4.415c0 .612.182 1.1.546 1.464a1.74 1.74 0 0 0 1.29.545h.05c.04 0 .073-.02.113-.022zm1.727 2.606-1.727-2.592v9.138a1.76 1.76 0 0 0 1.176-.523c.364-.356.546-.844.546-1.464v-4.552z"
        style={{
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '10.58333302px',
          lineHeight: 1.25,
          fontFamily: 'sans-serif',
          letterSpacing: 0,
          wordSpacing: 0,
          opacity: 1,
          fill: '#30bced',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.26458332
        }}
        transform="translate(-185.256 -184.537)"
      />
      <path
        d="M187.062 184.537c-.645.008-1.15.297-1.513.868-.364.57-.389 1.137-.075 1.699l3.78 6.842 2.014-2.721v-.008l-.002.005a128.445 128.445 0 0 1-2.356-5.544c-.298-.76-.848-1.141-1.65-1.141z"
        style={{
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '10.58333302px',
          lineHeight: 1.25,
          fontFamily: 'sans-serif',
          letterSpacing: 0,
          wordSpacing: 0,
          opacity: 1,
          fill: '#ffbc42',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.26458332
        }}
        transform="translate(-185.256 -184.537)"
      />
      <g
        style={{
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '10.58333302px',
          lineHeight: 1.25,
          fontFamily: 'sans-serif',
          letterSpacing: 0,
          wordSpacing: 0,
          fill: '#313330',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.26458332
        }}
      >
        <path
          d="M143.41 262.009q0 1.095-.543 1.793-.635.8-1.72.584-.093-.016-.233-.083-.33-.16-.33-.522 0-.232.15-.398.154-.165.371-.165t.403-.098q.455-.212.45-1.008v-3.431q0-.3.212-.512.201-.207.506-.207h.02q.306 0 .507.207.207.212.207.512zm-.227-4.744q-.228.243-.564.243-.32 0-.558-.238-.237-.238-.237-.563 0-.33.227-.563.227-.238.568-.238.336 0 .564.238.227.237.227.563-.005.31-.227.558zm.894 4.445q.046-.197.253-.321.186-.114.501-.01.315.103.64.092.621-.01.621-.387 0-.17-.134-.28-.135-.108-.543-.252-1.344-.466-1.333-1.406.01-.677.527-1.1.511-.425 1.37-.425.402-.005.831.114.191.052.305.228.109.175.052.377v.005q-.036.196-.228.315-.19.114-.434.047-.248-.068-.48-.078-.553-.01-.553.367 0 .155.16.279.16.119.594.269 1.246.439 1.25 1.426.011.677-.5 1.1-.512.42-1.504.42-.522 0-1.039-.14-.18-.047-.3-.248-.113-.186-.056-.378z"
          aria-label="js"
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 400,
            fontStretch: 'normal',
            fontFamily: 'Dyuthi',
            InkscapeFontSpecification: 'Dyuthi',
            fill: '#313330',
            fillOpacity: 1,
            strokeWidth: 0.26458332
          }}
          transform="translate(-132.453 -246.636)"
        />
      </g>
    </svg>
  );
}

function Footer() {
  return (
    <footer class="pb-16 text-sm leading-6">
      <div class="mx-auto -mt-[70px] flex max-w-7xl flex-row justify-between">
        <div class="flex basis-9/12 flex-row items-center gap-x-3 self-start">
          <YjsLogo />
          <p className="text-sm font-medium">
            Make your app
            <br />
            collaborative.
          </p>
        </div>
        <div class="flex w-full justify-between">
          <div class="w-1/2 flex-none space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
            <div class="lg:w-1/2 lg:flex-none">
              <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Resources
              </h2>
              <ul class="mt-3 space-y-2">
                <li>
                  <a class="text-medium text-base" href="/docs/installation">
                    Documentation
                  </a>
                </li>
                <li>
                  <a class="text-medium text-base" href="/docs/installation">
                    Yjs Explained
                  </a>
                </li>
              </ul>
            </div>
            <div class="lg:w-1/2 lg:flex-none">
              <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Ecosystem
              </h2>
              <ul class="mt-3 space-y-2">
                <li>
                  <a class="text-medium text-base" href="/docs/installation">
                    Yrs - Rust port
                  </a>
                </li>
                <li>
                  <a class="text-medium text-base" href="/docs/installation">
                    Ywasm - WASM port
                  </a>
                </li>
                <li>
                  <a class="text-medium text-base" href="/docs/installation">
                    Ypy - Python port
                  </a>
                </li>
                <li>
                  <a class="text-medium text-base" href="/docs/installation">
                    Yrb - Ruby port
                  </a>
                </li>
                <li>
                  <a class="text-medium text-base" href="/docs/installation">
                    YSwift - Swift port
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-1/2 flex-none space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
            <div class="lg:w-1/2 lg:flex-none">
              <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Community
              </h2>
              <ul class="mt-3 space-y-2">
                <li>
                  <a class="text-medium text-base" href="/docs/installation">
                    Contributing
                  </a>
                </li>
                <li>
                  <a class="text-medium text-base" href="/docs/installation">
                    Open Collective
                  </a>
                </li>
                <li>
                  <a class="text-medium text-base" href="/docs/installation">
                    Join our Discord
                  </a>
                </li>
                <li>
                  <a class="text-medium text-base" href="/docs/installation">
                    Disqus
                  </a>
                </li>
              </ul>
            </div>
            <div class="lg:w-1/2 lg:flex-none">
              <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-400">
                More links
              </h2>
              <ul class="mt-3 space-y-2">
                <li>
                  <a class="text-medium text-base" href="/docs/installation">
                    Kevin's blog
                  </a>
                </li>
                <li>
                  <a class="text-medium text-base" href="/docs/installation">
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

export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-[130px] flex flex-col space-y-[150px]">
        <Hero />
        <UsedIn />
        <Performance />
        <Testimonial />
        <ComposablePrimitives />
        <AvailableOnManyPlatforms />
        <Integrations />
        <div className="flex flex-col space-y-[65px]">
          <HelpUs />
          <SupportersCarousel />
          <CallToAction />
        </div>
        <Footer />
      </div>
    </>
  );
}
