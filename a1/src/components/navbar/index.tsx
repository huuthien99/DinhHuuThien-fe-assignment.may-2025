"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { MenuItem } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Administrations from "../icons/Administrations";
import Documentation from "../icons/Documentation";
import Share from "../icons/Share";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (url: string) => {
    if (pathname === "/" && url === "/") {
      return true;
    } else if (pathname !== "/" && url !== "/") {
      return pathname.startsWith(url);
    }
    return false;
  };

  const { open, toggleSidebar } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      bgColorSidebar="bg-[#F1F1F1] shadow-[1px_1px_20px_-5px_#00000040] border-0"
      className=" group-data-[side=left]:border-0"
    >
      <SidebarHeader className="pt-6.5 pl-4 mb-10">
        {open ? (
          <div
            onClick={toggleSidebar}
            className="flex items-center gap-4 cursor-pointer"
          >
            <Image src={"/logo-header.png"} alt="logo" width={48} height={48} />
            <SidebarGroupLabel className="flex flex-col items-baseline px-0 ">
              <p className="text-[20px] font-semibold text-primary-app">
                ABC Company
              </p>
              <p className="text-primary-app">Lisa Rose</p>
            </SidebarGroupLabel>
          </div>
        ) : (
          <Image
            onClick={toggleSidebar}
            src={"/logo-header.png"}
            alt="logo"
            width={48}
            height={48}
            className="cursor-pointer"
          />
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="pl-4.5">
          <SidebarGroupContent>
            <SidebarMenu>
              {MenuItem.map((item) => (
                <SidebarMenuItem className="h-10" key={item.title}>
                  <SidebarMenuButton
                    className="h-full group-data-[collapsible=icon]:p-2! font-medium text-[16px] text-secondary-app data-[active=true]:bg-[#D3D3D3] data-[active=true]:text-primary-app gap-6"
                    isActive={isActive(item.url)}
                    asChild
                  >
                    <Link href={item.url}>
                      <item.icon
                        color={isActive(item.url) ? "#005B86" : "#7C7C7C"}
                      />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-0">
        <SidebarGroup className="pl-4.5">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="h-10">
                <SidebarMenuButton
                  className="h-full group-data-[collapsible=icon]:p-2! font-medium text-[16px] text-secondary-app data-[active=true]:bg-[#D3D3D3] data-[active=true]:text-primary-app gap-6"
                  asChild
                >
                  <Link href={""}>
                    <Administrations />
                    <span>Administrations</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem className="h-10">
                <SidebarMenuButton
                  className="h-full group-data-[collapsible=icon]:p-2! font-medium text-[16px] text-secondary-app data-[active=true]:bg-[#D3D3D3] data-[active=true]:text-primary-app gap-6"
                  asChild
                >
                  <Link href={""}>
                    <Documentation />
                    <span>Documentation</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="h-12 pt-[13px] mb-[27px]">
                <SidebarMenuButton
                  className="gap-6
                  group-data-[collapsible=icon]:[&>svg]:sr-only
                  group-data-[collapsible=icon]:[&>img]:size-10
                  pl-0
                  "
                >
                  {open ? (
                    <Image src="/logo.png" alt="logo" width={134} height={32} />
                  ) : (
                    <p>
                      <Image
                        src="/logo-small.png"
                        alt="logo"
                        width={32}
                        height={28}
                      />
                    </p>
                  )}
                  <Share />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
