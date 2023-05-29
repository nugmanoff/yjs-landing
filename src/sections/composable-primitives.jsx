import { Highlight, themes } from 'prism-react-renderer';
import SectionLayout from './layout';
import { ArrayIcon, MapIcon, TextIcon, XMLIcon } from '@/components/icons';

function CodeSnippet({ codeBlock }) {
  return (
    <Highlight theme={themes.github} code={codeBlock} language="js">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

function ComposablePrimitiveItem({ title, description, iconFactory }) {
  return (
    <div className="group flex cursor-pointer flex-col text-slate-400 transition-all hover:text-slate-600">
      <div className="flex flex-row items-center gap-x-1">
        {iconFactory()}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="font-medium">{description}</p>
    </div>
  );
}



export default function ComposablePrimitives() {
  const codeBlock = `import * as Y from 'yjs'

// Yjs documents are collections of
// shared objects that sync automatically.
const ydoc = new Y.Doc()
// Define a shared Y.Map instance
const ymap = ydoc.getMap()
ymap.set('keyA', 'valueA')

// Create another Yjs document (simulating a remote user)
// and create some conflicting changes
const ydocRemote = new Y.Doc()
const ymapRemote = ydocRemote.getMap()
ymapRemote.set('keyB', 'valueB')

// Merge changes from remote
const update = Y.encodeStateAsUpdate(ydocRemote)
Y.applyUpdate(ydoc, update)

// Observe that the changes have merged
console.log(ymap.toJSON()) // => { keyA: 'valueA', keyB: 'valueB' }`;

  return (
    <div className="relative">
      <SectionLayout>
        <div className="flex flex-col items-start text-start">
          <h2 className="font-cal-sans text-5xl text-black">
            Composable primitives.
          </h2>
          <p className="mt-3 max-w-2xl text-xl tracking-tighter text-slate-400">
            Yjs provides primitive building blocks that feel and behave like an
            ordinary data structures. Except for being conflict-free and
            eventually consistent.
          </p>
        </div>
        <div className="mt-12 flex w-full flex-row justify-between gap-x-10">
          <ComposablePrimitiveItem
            title="Array"
            description="Create your dream CRM with powerful, flexible templates for every use case."
            iconFactory={() => <ArrayIcon />}
          />
          <ComposablePrimitiveItem
            title="Text"
            description="Create your dream CRM with powerful, flexible templates for every use case."
            iconFactory={() => <TextIcon />}
          />
          <ComposablePrimitiveItem
            title="Map"
            description="Create your dream CRM with powerful, flexible templates for every use case."
            iconFactory={() => <MapIcon />}
          />
          <ComposablePrimitiveItem
            title="XML"
            description="Create your dream CRM with powerful, flexible templates for every use case."
            iconFactory={() => <XMLIcon />}
          />
        </div>
        <div className="card mt-10 h-auto w-full rounded-[20px] bg-slate-50 p-4">
          <CodeSnippet codeBlock={codeBlock} />
        </div>
      </SectionLayout>
    </div>
  );
}
