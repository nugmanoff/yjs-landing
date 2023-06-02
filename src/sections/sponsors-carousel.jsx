import Image from 'next/image';
import { useState } from 'react';

function SponsorCard({ sponsor: { imageUrl, name, amount, date } }) {
  const [src, setSrc] = useState(imageUrl);

  return (
    <div className="card slide flex flex-shrink-0 flex-col gap-y-1.5 rounded-lg p-4 md:p-6">
      <div className="relative h-12 w-12 md:h-16 md:w-16">
        <Image
          src={src}
          alt={`${name} Logo`}
          sizes="(max-width: 768px) 64px, 48px"
          fill
          quality={100}
          className="object-fit mb-1 rounded-md"
          placeholder="blur"
          blurDataURL="/logos/sponsor-placeholder.png"
          onError={() => setSrc('/logos/sponsor-placeholder.png')}
        />
      </div>
      <p className="text-xl font-semibold md:text-2xl">{name}</p>
      <p className="text-xl font-medium md:text-2xl">${amount}</p>
      <p className="text-sm font-normal text-slate-400 md:text-base">
        amount contributed <br /> on <span className="font-medium">{date}</span>
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
