import { Building2, LayoutDashboard, List, Upload, Users } from 'lucide-react';

import { AppSideBarConfig } from '@/type';

export const SIDEBAR_CONFIG: AppSideBarConfig[] = [
  {
    name: 'sidebar.tileManagement.title',
    logo: LayoutDashboard,
    link: '/dashboard',
    permittedRole: ['SUPER_ADMIN'],
    active: true,
    children: [
      {
        name: 'sidebar.tileManagement.upload',
        logo: Upload,
        link: '/tiles/upload',
        permittedRole: ['SUPER_ADMIN'],
        active: true,
      },
      {
        name: 'sidebar.tileManagement.listing',
        logo: List,
        link: '/tiles/listing',
        permittedRole: ['SUPER_ADMIN'],
        active: true,
      },
    ],
  },
  {
    name: 'sidebar.accounts.title',
    logo: Users,
    link: '/accounts',
    permittedRole: ['SUPER_ADMIN', 'CITY_ADMIN', 'CITIZEN'],
    active: true,
  },
  {
    name: 'sidebar.cityAdmin.title',
    logo: Building2,
    link: '/city-administrator',
    permittedRole: ['SUPER_ADMIN'],
    active: true,
  },
];
