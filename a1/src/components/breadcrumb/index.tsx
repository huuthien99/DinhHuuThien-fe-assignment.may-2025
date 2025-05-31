"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import ArrowRight from "../icons/ArrowRight";
import { usePathname } from "next/navigation";

function BreadcrumbCustom() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = decodeURIComponent(segment).replace(/-/g, " ");

    return { href, label };
  });
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="font-medium text-secondary-app" href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.href}>
              <BreadcrumbSeparator>
                <ArrowRight />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                {idx === breadcrumbs.length - 1 ? (
                  <BreadcrumbPage className="text-primary-app">
                    {crumb.label.charAt(0).toUpperCase() + crumb.label.slice(1)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    className="font-medium text-secondary-app"
                    href={crumb.href}
                  >
                    {crumb.label.charAt(0).toUpperCase() + crumb.label.slice(1)}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}

export default BreadcrumbCustom;
