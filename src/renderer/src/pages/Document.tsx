import { Editor } from '../components/Editor'
import { ToC } from '../components/ToC'
export function Document() {
  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden  lg:block sticky top-0 ">
        <span className="text-rotion-300 font-semibold text-xs">
          TABLES OF CONTENTS
        </span>
        <ToC.Root>
          <ToC.Link>Heading 1</ToC.Link>
          <ToC.Section>
            <ToC.Link>Heading 2</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="">
        <Editor content="das" onContentUpdated={} />
      </section>
    </main>
  )
}
