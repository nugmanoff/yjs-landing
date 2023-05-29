import Image from 'next/image';
import SectionLayout from './layout';

export default function UsedIn() {
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
