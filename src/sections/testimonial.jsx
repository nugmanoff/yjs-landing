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
