import Image from 'next/image';
import SectionLayout from '../components/section-layout';

export default function UsedBy() {
  return (
    <SectionLayout>
      <div className="flex flex-col items-center gap-y-4">
        <p className="text-center text-base text-slate-400 md:text-xl">
          Used by world's leading teams and companies:
        </p>
        <div className="justify-content mt-8 grid grid-cols-2 items-center gap-x-28 gap-y-16 sm:grid-cols-3 xl:flex xl:flex-row ">
          <Image
            alt="Automattic's logo"
            src="/logos/automattic.svg"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[32px] w-full xl:h-5 xl:w-auto 2xl:h-6"
          />
          <Image
            alt="ClickUp's logo"
            src="/logos/clickup.svg"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[32px] w-full"
          />
          <Image
            alt="Meta's logo"
            src="/logos/meta.svg"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[32px] w-full"
          />
          <Image
            alt="Shopify's logo"
            src="/logos/shopify.svg"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[32px] w-full"
          />
          <Image
            alt="Monday's logo"
            src="/logos/monday.svg"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[32px] w-full"
          />
          <Image
            alt="Evernote's logo"
            src="/logos/evernote.svg"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[32px] w-full"
          />
        </div>
      </div>
    </SectionLayout>
  );
}
