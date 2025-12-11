import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { redirect } from "next/navigation"
import prismadb from "@/lib/prismadb"
import { Separator } from "@/components/ui/separator"

// Mock user ID for development
const MOCK_USER_ID = "user_dev_123";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ storeId: string }>
}) {
  const { storeId } = await params;

  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
      userId: MOCK_USER_ID,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex items-center gap-4 ml-auto w-full justify-between">
             <div className="text-sm font-medium">
                {/* Store Switcher Placeholder */}
                Current Store: <span className="font-bold">{store.name}</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="text-xs text-muted-foreground">Admin User</div>
                <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs">
                  AU
                </div>
             </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
