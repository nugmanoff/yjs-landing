import { Highlight, themes } from 'prism-react-renderer';
import SectionLayout from './layout';
import { ArrayIcon, MapIcon, TextIcon, XMLIcon } from '@/components/icons';
import { useState } from 'react';

export default function ComposablePrimitives() {
  const [selected, setSelected] = useState('Array');

  return (
    <div className="relative">
      <SectionLayout>
        <div className="flex flex-col items-start text-start">
          <h2 className="font-cal-sans text-4xl text-black md:text-5xl">
            Composable primitives.
          </h2>
          <p className="mt-3 max-w-2xl text-base tracking-tighter text-slate-400 md:text-xl">
            Yjs provides primitive building blocks that feel and behave like an
            ordinary data structures. Except for being conflict-free and
            eventually consistent.
          </p>
        </div>
        <div className="-mx-3 mt-8 grid w-full justify-between gap-6 md:mt-12 md:grid-cols-4 md:gap-10">
          <ComposablePrimitiveItem
            title="Array"
            description="Use it as you would use normal array. Insert items, delete items, access them by index."
            Icon={ArrayIcon}
            onClick={() => setSelected('Array')}
            selected={selected}
          />
          <ComposablePrimitiveItem
            title="Text"
            description="Build powerful collaborative text experiences. Range formatting, embedding is supported out of the box."
            Icon={TextIcon}
            onClick={() => setSelected('Text')}
            selected={selected}
          />
          <ComposablePrimitiveItem
            title="Map"
            description="Most powerful and versatile data structure now conflict-free, eventually-consistent and automatically synced."
            Icon={MapIcon}
            onClick={() => setSelected('Map')}
            selected={selected}
          />
          <ComposablePrimitiveItem
            title="XML"
            description="Build your own tree structures. Any level of depth, nestedness and complexity is supported."
            Icon={XMLIcon}
            onClick={() => setSelected('XML')}
            selected={selected}
          />
        </div>
        <div className="card mt-10 h-auto w-full rounded-[20px] bg-slate-50 p-4 transition-all">
          <CodeSnippet content={codeSnippets[selected]} />
        </div>
      </SectionLayout>
    </div>
  );
}

function CodeSnippet({ content }) {
  return (
    <Highlight
      // @ts-ignore
      theme={codeSnippetTheme}
      code={content}
      language="js"
      className="w-full"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className="text-sm md:text-base">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span
                  key={key}
                  {...getTokenProps({ token })}
                  className="whitespace-pre-wrap break-words"
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

function ComposablePrimitiveItem({
  selected,
  title,
  description,
  Icon,
  onClick
}) {
  const isSelected = selected === title;

  return (
    <div
      className={`group flex cursor-pointer flex-col rounded-md p-3 ${
        isSelected ? 'bg-slate-50 text-slate-600' : 'bg-white text-slate-400'
      } transition-all hover:bg-slate-50`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center gap-x-1 text-sm md:text-base">
        <Icon
          className={`${
            isSelected ? 'fill-slate-600' : 'fill-slate-400'
          } h-[17px] w-[17px] transition-all`}
        />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="font-medium">{description}</p>
    </div>
  );
}

const codeSnippets = {
  Array: `const ydoc = new Y.Doc()
const yarray = ydoc.getArray('my array type') 

// Common methods
yarray.insert(0, [1, 2, 3]) // insert three elements
yarray.delete(1, 1) // delete second element 
yarray.toArray() // => [1, 3]`,

  Text: `const ydoc = new Y.Doc()
const ytext = ydoc.getText('my text type') 

// Common methods
ytext.insert(0, 'abc') // insert three elements
ytext.format(1, 2, { bold: true }) // delete second element 
ytext.toString() // => 'abc'
ytext.toDelta() // => [{ insert: 'a' }, { insert: 'bc', attributes: { bold: true }}]`,

  XML: `const ydoc = new Y.Doc()

// Method 1: Define a top-level type
// Note that the nodeName is always "undefined"
// when defining an XmlElement as a top-level type.
const yxmlElement = ydoc.get('prop-name', Y.XmlElement)
// Method 2: Define Y.XmlFragment that can be included into the Yjs document
const yxmlNested = new Y.XmlElement('node-name')

// Common methods
const yxmlText = new Y.XmlText()
yxmlFragment.insert(0, [yxmlText])
yxmlFragment.firstChild === yxmlText
yxmlFragment.insertAfter(yxmlText, [new Y.XmlElement('node-name')])
yxmlFragment.get(0) === yxmlText // => true

//show result in dev console
console.log(yxmlFragment.toDOM())`,

  Map: `const ydoc = new Y.Doc()
const ymap = ydoc.getMap('my map type') 

// Nested types can be included as content into any other shared type
ymap.set('my nested map', ymapNested)

// Common methods
ymap.set('prop-name', 'value') // value can be anything json-encodable
ymap.get('prop-name') // => 'value'
ymap.delete('prop-name')`
};

const codeSnippetTheme = {
  plain: {
    color: '#393A34',
    backgroundColor: '#f8fafc'
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999988',
        fontStyle: 'italic'
      }
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#e3116c'
      }
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#393A34'
      }
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted'
      ],
      style: {
        color: '#36acaa'
      }
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#00a4db'
      }
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#d73a49'
      }
    },
    {
      types: ['function-variable'],
      style: {
        color: '#6f42c1'
      }
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#00009f'
      }
    }
  ]
};
