import Image from 'next/image';

function SponsorCard({ sponsor: { imageUrl, name, amount, date } }) {
  return (
    <div className="card slide flex flex-shrink-0 flex-col gap-y-1.5 rounded-lg p-6">
      <Image
        src={imageUrl}
        alt={`${name} Logo`}
        width="64"
        height="64"
        quality={100}
        className="mb-1 rounded-md"
        // placeholder="empty"
      />
      <p className="text-2xl font-semibold">{name}</p>
      <p className="text-2xl font-medium">${amount}</p>
      <p className="text-base font-normal text-slate-400">
        amount contributed <br /> since{' '}
        <span className="font-medium">{date}</span>
      </p>
    </div>
  );
}

export default function SponsorsCarousel({ sponsors }) {
  return (
    <div className="slider">
      <div className="slide-track">
        {sponsors.map((sponsor) => {
          return <SponsorCard sponsor={sponsor} key={sponsor.name} />;
        })}
      </div>
    </div>
  );
}
