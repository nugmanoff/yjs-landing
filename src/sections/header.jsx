import { YjsLogo } from '@/components/icons';

function NavItem({ href, title }) {
  return (
    <a
      href={href}
      className="font p-[6px] text-base font-medium text-gray-600 md:text-lg"
    >
      {title}
    </a>
  );
}

export default function Header() {
  return (
    <header className="container py-6">
      <div className="flex justify-between">
        <YjsLogo />
        <div className="flex flex-row space-x-3">
          <NavItem href="" title="Docs" />
          <NavItem href="" title="Community" />
          <NavItem href="" title="Pricing" />
        </div>
      </div>
    </header>
  );
}
