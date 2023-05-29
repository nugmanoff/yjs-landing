import SectionLayout from './layout';

function IntegrationItem({ title, description }) {
  return (
    <div className="group flex cursor-pointer flex-col text-slate-400 transition-all hover:text-slate-600">
      <div className="flex flex-row items-center gap-x-1">
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="font-medium">{description}</p>
    </div>
  );
}

export default function Integrations() {
  return (
    <div className="relative">
      <SectionLayout>
        <div className="flex flex-col items-start text-start">
          <h2 className="font-cal-sans text-5xl text-black">Integrations.</h2>
          <p className="mt-3 max-w-2xl text-xl tracking-tighter text-slate-400">
            Yjs provides primitive building blocks that feel and behave like an
            ordinary data structures. Except for being conflict-free and
            eventually consistent.
          </p>
        </div>
        <div className="mt-12 grid w-full grid-cols-4 gap-x-10 gap-y-12">
          <IntegrationItem
            title="TipTap"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="ProseMirror"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="Monaco"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="CodeMirror"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="Slate"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="Milkdown"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="Quill"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="WebRTC"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="WebSocket"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="DAT"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="IndexedDB"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
          <IntegrationItem
            title="LevelDB"
            description="Create your dream CRM with powerful, flexible templates for every use case."
          />
        </div>
      </SectionLayout>
    </div>
  );
}
