import { YjsLogo } from '@/components/icons';

function NavItem({ href, title }) {
  return (
    <a href={href} className="font p-[6px] text-lg font-medium text-gray-600">
      {title}
    </a>
  );
}

export default function Header() {
  return (
    <header className="mx-auto max-w-7xl py-6">
      <div className="flex justify-between">
        <YjsLogo />
        <div className="flex flex-row space-x-3">
          <NavItem href="" title="Documentation" />
          <NavItem href="" title="Community" />
          <NavItem href="" title="Pricing" />
        </div>
      </div>
    </header>
  );
}
