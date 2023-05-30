import {
  CodeMirrorLogo,
  DatLogo,
  MilkdownLogo,
  MonacoLogo,
  ProseMirrorLogo,
  QuillLogo,
  SlateLogo,
  IndexedDBLogo,
  TipTapLogo,
  WebRTCLogo,
  WebsocketLogo,
  LevelDBLogo
} from '@/components/icons';
import SectionLayout from './layout';

function IntegrationItem({ href, title, Icon = undefined, description }) {
  return (
    <a
      href={href}
      target="_blank"
      className="group flex cursor-pointer flex-col rounded-md p-3 text-sm text-slate-600 transition-all hover:bg-slate-50 md:text-base"
    >
      <div className="flex flex-col items-start gap-x-1">
        {Icon && (
          <Icon
            className={`h-[32px] w-[32px] fill-slate-600 transition-all group-hover:fill-slate-600`}
          />
        )}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="font-medium text-slate-400">{description}</p>
    </a>
  );
}

export default function Integrations() {
  return (
    <div className="relative">
      <SectionLayout>
        <div className="flex flex-col items-start text-start">
          <h2 className="font-cal-sans text-4xl text-black md:text-5xl">
            Integrations.
          </h2>
          <p className="texte-base mt-3 max-w-2xl tracking-tighter text-slate-400 md:text-xl">
            Building collaborative applications takes more than having shared
            types. Thanks to vibrant ecosystem of various text editor
            integrations, connection and database providers – you can focus on
            doing what matters and leave the boring parts to the integrations.
          </p>
        </div>
        <div className="-mx-3 mt-6 grid w-full grid-cols-1 gap-x-10 gap-y-3 sm:mt-12 sm:grid-cols-2 sm:gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          <IntegrationItem
            href="https://docs.yjs.dev/ecosystem/editor-bindings/tiptap2"
            title="TipTap"
            Icon={TipTapLogo}
            description="A ProseMirror based editor that integrates Yjs as the collaborative editing solution. It has a rich ecosystem of extensions and integrates well into web frameworks."
          />
          <IntegrationItem
            href="https://docs.yjs.dev/ecosystem/editor-bindings/prosemirror"
            title="ProseMirror"
            Icon={ProseMirrorLogo}
            description="Fantastic toolkit to build your own richtext editor. This integration enables any ProseMirror-based editor to be collaborative."
          />
          <IntegrationItem
            href="https://docs.yjs.dev/ecosystem/editor-bindings/monaco"
            title="Monaco"
            Icon={MonacoLogo}
            description="Fully-featured code editor that powers VSCode. Becomes collaborative with Yjs integration."
          />
          <IntegrationItem
            href="https://github.com/yjs/y-codemirror/"
            title="CodeMirror"
            Icon={CodeMirrorLogo}
            description="Code editor component for the web. It can be used in websites to implement a text input field with support for many editing features, and has a rich programming interface to allow further extension."
          />
          <IntegrationItem
            href="https://github.com/BitPhinix/slate-yjs/"
            title="Slate"
            Icon={SlateLogo}
            description="Slate-yjs aims to be the goto collaboration solution for slate. Get started in seconds, scale to infinity, customize to your hearts content. "
          />
          <IntegrationItem
            href="https://docs.yjs.dev/ecosystem/editor-bindings/milkdown"
            title="Milkdown"
            Icon={MilkdownLogo}
            description="Milkdown is a ProseMirror based editor that integrates Yjs as the collaborative editing solution. It's a plugin driven WYSIWYG markdown editor."
          />
          <IntegrationItem
            href="https://github.com/yjs/y-quill/"
            title="Quill"
            Icon={QuillLogo}
            description="Free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need."
          />
          <IntegrationItem
            href="https://github.com/yjs/y-webrtc"
            title="WebRTC"
            Icon={WebRTCLogo}
            description="This integration enables propagating document updates peer-to-peer to all users using WebRTC with encryption, authorization and very little server load."
          />
          <IntegrationItem
            href="https://docs.yjs.dev/ecosystem/connection-provider/y-websocket"
            title="WebSocket"
            Icon={WebsocketLogo}
            description="Integration follows conventional client-server model. Clients connect to a single endpoint over Websocket. The server distributes document updates and awareness information among clients."
          />
          <IntegrationItem
            href="https://github.com/yjs/y-dat"
            title="Dat"
            Icon={DatLogo}
            description="Propagates document updates using Dat protocol. Uses hypercore data channels to exchange document updates and awareness information. "
          />
          <IntegrationItem
            href="https://docs.yjs.dev/ecosystem/database-provider/y-indexeddb"
            title="IndexedDB"
            Icon={IndexedDBLogo}
            description="Use the IndexedDB database provider to store your shared data persistently in the browser. The next time you join the session, your changes will be loaded from the local browser database."
          />
          <IntegrationItem
            href="https://github.com/yjs/y-leveldb"
            title="LevelDB"
            Icon={LevelDBLogo}
            description="LevelDB is a fast embedded database. It is the underlying technology of IndexedDB."
          />
        </div>
      </SectionLayout>
    </div>
  );
}
