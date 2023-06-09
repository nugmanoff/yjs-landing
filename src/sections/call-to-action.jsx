import Image from 'next/image';

export default function CallToAction() {
  return (
    <div className="flex w-full flex-col items-center bg-collectiveBlue py-9 md:py-14">
      <p className="container mx-2 mb-9 text-center text-lg font-medium text-white md:text-2xl">
        Support us as we build the foundational tools for creating collaborative
        applications. <br />
        We distribute funding among us and active contributors in this space to
        maintain and <br /> advance our software.
      </p>
      <div className="flex flex-col gap-4 md:flex-row">
        <a
          href="https://opencollective.com/y-collective"
          target="_blank"
          className="collective-btn flex h-12 flex-row items-center gap-2.5 px-4 text-base font-semibold text-collectiveBlue md:h-13 md:text-lg"
        >
          <Image
            src="/logos/open-collective.svg"
            alt="Open Collective logo"
            width="28"
            height="28"
          />
          Donate to our Collective
        </a>
        {/* <button className="h-12 rounded-xl border-[3px] border-white px-7 text-base font-bold text-white transition-all hover:bg-white/25 md:h-13 md:text-lg">
          {'Paid Support ->'}
        </button> */}
      </div>
    </div>
  );
}
