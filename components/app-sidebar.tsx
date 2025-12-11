"use client"

import { LayoutDashboard, ShoppingBag, FolderTree, Package, ShoppingCart, Settings } from "lucide-react"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const params = useParams();
  const pathname = usePathname();

  const items = [
    {
      title: "Dashboard",
      url: `/${params.storeId}`,
      icon: LayoutDashboard,
    },
    {
      title: "Billboards",
      url: `/${params.storeId}/billboards`,
      icon: FolderTree,
    },
    {
      title: "Categories",
      url: `/${params.storeId}/categories`,
      icon: Package,
    },
    {
      title: "Products",
      url: `/${params.storeId}/products`,
      icon: ShoppingBag,
    },
    {
      title: "Orders",
      url: `/${params.storeId}/orders`,
      icon: ShoppingCart,
    },
    {
      title: "Settings",
      url: `/${params.storeId}/settings`,
      icon: Settings,
    },
  ]

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
