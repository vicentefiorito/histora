export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-1 overflow-hidden bg-[#f4ece1] bg-[url('https://www.transparenttextures.com/patterns/parchment.png')] relative">
    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(139,115,85,0.2)]"></div>
    {children}
  </div>
)
1
