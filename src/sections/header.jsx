import { GitHubLogo, StarIcon, YjsLogo } from '@/components/icons';
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

function GitHubStars() {
  return (
    <a
      href="https://github.com/yjs/yjs"
      target="_blank"
      className="card flex flex-row items-center gap-x-1 rounded-full px-3 md:ml-2"
    >
      <StarIcon className="stroke-none" />
      <p className="text-sm font-semibold leading-none text-slate-600">11.8K</p>
      <GitHubLogo className="stroke-none" />
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
          {/* <NavItem href="" title="Pricing" /> */}
          <NavItem href="https://discuss.yjs.dev/" title="Forum" />
          <NavItem
            href="https://discord.com/invite/T3nqMT6qbM"
            title="Discord"
          />
          <GitHubStars />
        </div>
      </div>
    </header>
  );
}
