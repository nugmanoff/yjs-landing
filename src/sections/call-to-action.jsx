import Image from 'next/image';

export default function CallToAction() {
  return (
    <div className="flex w-full flex-col items-center bg-[#1F87FF] py-[36px] md:py-[54px]">
      <p className="container mx-2 mb-9 text-center text-lg font-medium text-white md:text-2xl">
        Support us as we build the foundational tools for creating collaborative
        applications. <br />
        We distribute funding among us and active contributors in this space to
        maintain and <br /> advance our software.
      </p>
      <div className="flex flex-col gap-4 md:flex-row">
        <button className="collective-btn flex h-[48px] flex-row items-center gap-2.5 px-4 text-base font-semibold text-[#1F87FF] md:h-[52px] md:text-lg">
          <Image
            src="/open-collective.svg"
            alt="Open Collective logo"
            width="28"
            height="28"
          />
          Donate to our Collective
        </button>
        <button className="h-[48px] rounded-xl border-[3px] border-white px-7 text-base font-bold text-white md:h-[52px] md:text-lg">
          {'Paid Support ->'}
        </button>
      </div>
    </div>
  );
}
