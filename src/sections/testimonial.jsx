import Image from 'next/image';
import SectionLayout from './layout';

export default function Testimonial({
  logoSrc,
  avatarSrc,
  text,
  fullname,
  position
}) {
  return (
    <SectionLayout>
      <div className="grid md:grid-cols-7">
        <div className="md:col-span-3">
          <Image
            src={logoSrc}
            alt="Evernote logo"
            width="155"
            height="96"
            quality={100}
            className="-mt-[28px]"
          />
        </div>
        <div className="flex flex-col md:col-span-4">
          <p className="mb-[60px] text-lg font-medium tracking-tighter text-slate-600 md:text-2xl md:font-semibold">
            {text}
          </p>
          <div className=" flex flex-row items-center">
            <div className="relative mr-4 h-[48px] w-[48px] md:h-[64px] md:w-[64px]">
              <Image
                src={avatarSrc}
                alt={`${fullname}'s Profile Picture`}
                sizes="(max-width: 768px) 64px, 48px"
                fill
                quality={100}
                className="object-fit rounded-md md:rounded-lg"
              />
            </div>
            <div className="flex flex-col text-base md:text-lg">
              <p className="font-semibold text-black">{fullname}</p>
              <p className="font-medium text-slate-600">{position}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
