import Image from 'next/image';
import SectionLayout from './layout';

function SponsorCard() {
  return (
    <div className="card slide flex flex-col gap-y-1.5 rounded-lg p-6">
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

//
export default function SponsorsCarousel() {
  return (
    <div className="slider">
      <div className="slide-track">
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
      </div>
    </div>
  );
}
