import Image from 'next/image';

export default function CallToAction() {
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
