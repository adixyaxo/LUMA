import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="h-screen bg-paper text-obsidian font-roobert m-0 p-0 overflow-hidden flex w-full">

      {/* <!-- Left Column: Chats --> */}
      <aside className="w-70 h-full flex flex-col border-r border-obsidian/10 shrink-0 bg-paper">
          <div className="h-16.5lex items-center px-6 border-b border-obsidian/10">
              <Link to="/" className="text-body-sm font-normal tracking-wide hover:opacity-70 transition-opacity">LUMA</Link>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
              <div className="mb-6">
                  <input type="text" placeholder="Search..." aria-label="Search channels" className="w-full bg-transparent border border-obsidian/10 py-2 px-3 text-caption focus:outline-none focus:border-obsidian/30 transition-colors rounded-xl" />
              </div>

              <div className="flex flex-col gap-2">
                  <h3 className="text-[10px] text-felt-gray uppercase tracking-wide mb-2 font-mono-tech">Channels</h3>

                  <button className="w-full flex flex-col text-left p-3 rounded-lg bg-obsidian/5 transition-colors focus:outline-none focus:ring-2 focus:ring-obsidian/20">
                      <span className="text-body-sm font-normal">#engineering-core</span>
                      <span className="text-caption text-felt-gray truncate mt-1">Are we good to merge PR #422?</span>
                  </button>

                  <button className="w-full flex flex-col text-left p-3 rounded-lg hover:bg-obsidian/5 transition-colors focus:outline-none focus:bg-obsidian/5">
                      <span className="text-body-sm font-normal">#design-system</span>
                      <span className="text-caption text-felt-gray truncate mt-1">The new gradients look sick.</span>
                  </button>
              </div>
          </div>
      </aside>

      {/* <!-- Center Column: Conversation --> */}
      <main className="flex-1 h-full flex flex-col bg-paper">
          <div className="h-16.5 flex items-center justify-between px-8 border-b border-obsidian/10 shrink-0">
              <h2 className="text-body font-normal">#engineering-core</h2>
              <button className="text-caption text-felt-gray hover:text-obsidian transition-colors focus:outline-none focus:text-obsidian" aria-label="Channel Options">Options</button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 flex flex-col justify-end gap-6">
              {/* <!-- System Message --> */}
              <div className="flex flex-col items-center w-full my-4">
                  <span className="text-[10px] text-felt-gray uppercase tracking-widest font-mono-tech bg-paper px-2">Yesterday</span>
              </div>

              {/* <!-- Message 1 --> */}
              <div className="flex flex-col items-start max-w-[70%] group">
                  <span className="text-[10px] text-felt-gray mb-1 flex items-center gap-2 font-mono-tech">
                     ALEX · 10:24 AM
                     <button className="opacity-0 group-hover:opacity-100 transition-opacity text-obsidian hover:bg-obsidian/10 px-1 rounded-sm focus:outline-none focus:opacity-100" aria-label="Message Options">⋮</button>
                  </span>
                  <div className="bg-obsidian/5 px-5 py-4 rounded-xl rounded-tl-sm border border-obsidian/5">
                      <p className="text-body-sm leading-body-sm">Are we good to merge PR #422 for websocket scaling?</p>
                  </div>
              </div>

              {/* <!-- Message 2 --> */}
              <div className="flex flex-col items-end max-w-[70%] self-end group">
                  <span className="text-[10px] text-felt-gray mb-1 flex items-center gap-2 flex-row-reverse font-mono-tech">
                     YOU · 10:26 AM
                     <button className="opacity-0 group-hover:opacity-100 transition-opacity text-obsidian hover:bg-obsidian/10 px-1 rounded-sm focus:outline-none focus:opacity-100" aria-label="Message Options">⋮</button>
                  </span>
                  <div className="bg-obsidian text-paper px-5 py-4 rounded-xl rounded-tr-sm">
                      <p className="text-body-sm leading-body-sm">Yes, CI is green. I'll merge and trigger the deployment now.</p>
                  </div>
              </div>
          </div>

          <div className="p-6 border-t border-obsidian/10 shrink-0">
              <form className="flex gap-4">
                  <input type="text" placeholder="Message #engineering-core..." aria-label="Message input" className="flex-1 bg-transparent border border-obsidian/10 py-3 px-4 text-body-sm focus:outline-none focus:border-obsidian/30 transition-colors rounded-xl" />
                  <button type="submit" className="text-caption uppercase tracking-wide hover:opacity-70 transition-opacity focus:outline-none focus:opacity-70 font-mono-tech">Send</button>
              </form>
          </div>
      </main>

      {/* <!-- Right Column: Context --> */}
      <aside className="w-[320px] h-full flex flex-col border-l border-obsidian/10 shrink-0 bg-paper lg:flex">
          <div className="h-16.5 flex items-center px-6 border-b border-obsidian/10 shrink-0">
              <span className="text-caption uppercase tracking-wide font-mono-tech">Context</span>
          </div>
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
              <div>
                  <h3 className="text-body-sm font-normal mb-1">#engineering-core</h3>
                  <p className="text-caption text-felt-gray">Platform Engineering & Ops</p>
              </div>

              <div>
                  <h4 className="text-[10px] text-felt-gray uppercase tracking-wide mb-3 font-mono-tech">Members</h4>
                  <div className="flex flex-col gap-3 text-body-sm">
                      <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span><span>Alex Rivera</span></div>
                      <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span><span>You</span></div>
                      <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full border border-felt-gray"></span><span className="text-felt-gray">Sam Taylor</span></div>
                  </div>
              </div>

              <div>
                  <h4 className="text-[10px] text-felt-gray uppercase tracking-wide mb-3 font-mono-tech">Shared Files</h4>
                  <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-square rounded-xl bg-obsidian/5 border border-obsidian/10 flex flex-col items-center justify-center text-center p-2 hover:bg-obsidian/10 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-obsidian/30" tabIndex={0} aria-label="Architecture Diagram PDF">
                          <svg className="w-6 h-6 text-obsidian/50 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                          <span className="font-mono-tech text-[8px] uppercase">arch.pdf</span>
                      </div>
                      <div className="aspect-square rounded-xl bg-obsidian/5 border border-obsidian/10 flex flex-col items-center justify-center text-center p-2 hover:bg-obsidian/10 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-obsidian/30" tabIndex={0} aria-label="Server Logs Text File">
                          <svg className="w-6 h-6 text-obsidian/50 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                          <span className="font-mono-tech text-[8px] uppercase">logs.txt</span>
                      </div>
                  </div>
              </div>
          </div>
      </aside>

    </div>
  );
}
