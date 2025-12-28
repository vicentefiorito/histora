import { BookOpen, Clock, MessageCircle, Network } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { useState } from 'react'

export function ProfileTabs() {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'connections', label: 'Connections', icon: Network },
    { id: 'dialogue', label: 'Dialogue', icon: MessageCircle },
  ]

  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="border-b-cream-200 bg-white">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="max-w-7xl mx-auto flex w-full bg-transparent p-0 h-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="
                        flex-1 px-4 py-4 flex items-center justify-center gap-2
                        text-base font-semibold rounded-none
                        border-0 border-b-[3px] border-transparent
                        bg-transparent text-gray-500
                        shadow-none data-[state=active]:shadow-none
                        focus-visible:ring-0 focus-visible:ring-offset-0
                        data-[state=active]:bg-cream-50
                        data-[state=active]:border-maroon
                        data-[state=active]:text-maroon
                        
                      "
              >
                <Icon size={18} />
                {tab.label}
              </TabsTrigger>
            )
          })}
        </TabsList>

        <div className="max-w-7xl mx-auto">
          <TabsContent value="overview">Overview content…</TabsContent>
          <TabsContent value="timeline">Timeline content…</TabsContent>
          <TabsContent value="connections">Connections content…</TabsContent>
          <TabsContent value="dialogue">Dialogue content…</TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
