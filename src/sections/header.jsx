import { YjsLogo } from '@/components/icons';
import Link from 'next/link';

function NavItem({ href, title }) {
  return (
    <a
      href={href}
      className="font rounded-md px-3 py-1.5 text-base font-medium text-gray-600 hover:bg-slate-100 md:px-4 md:text-lg"
      target="_blank"
    >
      {title}
    </a>
  );
}

export default function Header() {
  return (
    <header className="container py-6">
      <div className="flex justify-between">
        <Link href="/">
          <YjsLogo />
        </Link>
        <div className="flex flex-row">
          <NavItem href="https://docs.yjs.dev/" title="Docs" />
          <NavItem href="" title="Pricing" />
          <NavItem href="https://discuss.yjs.dev/" title="Forum" />
          <NavItem
            href="https://discord.com/invite/T3nqMT6qbM"
            title="Discord"
          />
        </div>
      </div>
    </header>
  );
}
