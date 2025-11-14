import { Building2, LayoutDashboard, List, Upload, Users } from 'lucide-react';

import ROUTES from '@/route/routesConstant';
import { AppSideBarConfig } from '@/type';

export const SIDEBAR_CONFIG: AppSideBarConfig[] = [
  {
    name: 'sidebar.tileManagement.title',
    logo: LayoutDashboard,
    link: ROUTES.Dashboard,
    permittedRole: ['SUPER_ADMIN'],
    active: true,
    children: [
      {
        name: 'sidebar.tileManagement.upload',
        logo: Upload,
        link: `${ROUTES.Tiles}/${ROUTES.UploadTile}`,
        permittedRole: ['SUPER_ADMIN'],
        active: true,
      },
      {
        name: 'sidebar.tileManagement.listing',
        logo: List,
        link: `${ROUTES.Tiles}/${ROUTES.TileListing}`,
        permittedRole: ['SUPER_ADMIN'],
        active: true,
      },
    ],
  },
  {
    name: 'sidebar.accounts.title',
    logo: Users,
    link: ROUTES.Accounts,
    permittedRole: ['SUPER_ADMIN', 'CITY_ADMIN', 'CITIZEN'],
    active: true,
  },
  {
    name: 'sidebar.cityAdmin.title',
    logo: Building2,
    link: ROUTES.CityAdmin,
    permittedRole: ['SUPER_ADMIN'],
    active: true,
  },
];
