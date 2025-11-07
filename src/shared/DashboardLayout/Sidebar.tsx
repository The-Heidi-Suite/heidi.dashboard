import { ChevronDown } from 'lucide-react';
import React from 'react';

import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Sidebar as ShadCnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu as ShadCnSidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { SideBarConfig } from '@/shared/type';
import { Role } from '@/type';

type SideBarProps<
  TranslationKey extends string,
  TRole extends Role,
  TDataConfig extends SideBarConfig<TranslationKey, TRole>,
> = {
  sidebarData: TDataConfig[];
  sidebarHeader: React.ReactNode;
  footerChildren?: React.ReactNode;
};

function Sidebar<
  TranslationKey extends string,
  TRole extends Role,
  TDataConfig extends SideBarConfig<TranslationKey, TRole>,
>({
  sidebarData,
  sidebarHeader,
  footerChildren,
}: SideBarProps<TranslationKey, TRole, TDataConfig>) {
  return (
    <ShadCnSidebar
      role="navigation"
      aria-label="Sidebar menu"
      variant="sidebar"
    >
      <SidebarContent className="custom-scrollbar">
        <SidebarGroup>
          <SidebarGroupLabel asChild>{sidebarHeader}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu sidebarData={sidebarData} />
          </SidebarGroupContent>
          {footerChildren && (
            <>
              <SidebarSeparator />
              <SidebarFooter className="fixed bottom-0 rounded-lg">
                <ShadCnSidebarMenu>{footerChildren}</ShadCnSidebarMenu>
              </SidebarFooter>
            </>
          )}
        </SidebarGroup>
      </SidebarContent>
    </ShadCnSidebar>
  );
}

Sidebar.displayName = 'Sidebar';

type SidebarMenuProps<
  TranslationKey extends string,
  TRole extends Role,
  TDataConfig extends SideBarConfig<TranslationKey, TRole>,
> = {
  sidebarData: TDataConfig[];
};
const SidebarMenu = <
  TranslationKey extends string,
  TRole extends Role,
  TDataConfig extends SideBarConfig<TranslationKey, TRole>,
>({
  sidebarData,
}: SidebarMenuProps<TranslationKey, TRole, TDataConfig>) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <ShadCnSidebarMenu className="w-full p-2">
      {sidebarData?.map((item) =>
        item.children?.length ? (
          <li key={item.name}>
            <Collapsible defaultOpen className="group/collapsible">
              <ul>
                <SidebarMenuItem>
                  <CollapsibleTrigger className="flex w-full gap-4">
                    <div className="p-2">
                      <item.logo size={28} />
                    </div>
                    <span className="p-2 text-lg">{t(item.name)}</span>
                    <ChevronDown className="mt-2 ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.children.map((subitem) => (
                        <SidebarMenuSubItem
                          key={`${t(subitem.name)}-${subitem.link}`}
                          onClick={() => {
                            navigate(subitem.link);
                          }}
                          className={cn(
                            pathname.startsWith(subitem.link)
                              ? 'bg-primary text-primary-foreground border rounded-md cursor-pointer'
                              : 'hover:bg-gray-200 hover:text-gray-800 cursor-pointer rounded-md'
                          )}
                        >
                          <MenuContent item={subitem} />
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </ul>
            </Collapsible>
          </li>
        ) : (
          <SidebarMenuItem
            key={item.name}
            onClick={() => {
              navigate(item.link);
            }}
            className={cn(
              pathname.startsWith(item.link)
                ? 'bg-primary text-primary-foreground border rounded-md cursor-pointer'
                : 'hover:bg-gray-200 hover:text-gray-800 cursor-pointer rounded-md'
            )}
          >
            <MenuContent
              item={item}
              containerClassName="gap-4"
              contentClassName="text-lg"
            />
          </SidebarMenuItem>
        )
      )}
    </ShadCnSidebarMenu>
  );
};

SidebarMenu.displayName = 'SidebarMenu';

type MenuContentProps<
  TranslationKey extends string,
  TRole extends Role,
  TDataConfig extends SideBarConfig<TranslationKey, TRole>,
> = {
  item: TDataConfig;
  containerClassName?: string;
  contentClassName?: string;
};
const MenuContent = <
  TranslationKey extends string,
  TRole extends Role,
  TDataConfig extends SideBarConfig<TranslationKey, TRole>,
>({
  item: { name, logo: Icon },
  contentClassName,
  containerClassName,
}: MenuContentProps<TranslationKey, TRole, TDataConfig>) => {
  const { t } = useTranslation();
  return (
    <div className={cn('flex', containerClassName)}>
      <div className="p-2">
        <Icon size={20} className="mt-0" />
      </div>
      <span className={cn('p-2', contentClassName)}>{t(name)}</span>
    </div>
  );
};

MenuContent.displayName = 'MenuContent';

export { MenuContent, Sidebar, SidebarMenu };
