import Image from 'next/image';

export default function AlsoSponsoredBy() {
  return (
    <div className="flex flex-col space-y-6 md:space-y-10">
      <p className="text-center text-base text-slate-400 md:text-xl">
        Also proudly supported by{' '}
      </p>
      <a
        href="https://nlnet.nl/project/Yrs/"
        target="_blank"
        className="h-[42px] w-[112px] self-center md:h-[85px] md:w-[225px]"
      >
        <Image
          src="/logos/nlnet.png"
          alt="NLNet logo"
          width="225"
          height="85"
          quality={100}
        />
      </a>
    </div>
  );
}
