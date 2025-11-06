import { Pencil } from 'lucide-react';

import { format } from 'date-fns';

import { Spinner } from '@/components/ui/spinner';
import {
  Table as ShacnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useTypedTranslation } from '@/hooks';
import { ROLE_USER_MAP, RoleValue, USER_ROLE_MAP } from '@/lib/constant';
import DeleteAction from '@/pages/Tiles/DeleteAction';
type TableRows = {
  id: number;
  email: string;
  role: RoleValue;
  createdAt: string;
  registered: boolean;
  citiesName: string[];
};

const DUMMY_DATA: TableRows[] = [
  {
    id: 1,
    email: 'admin@example.com',
    role: USER_ROLE_MAP.SUPER_ADMIN,
    createdAt: '2022-01-01T00:00:00.000Z',
    registered: true,
    citiesName: ['New York', 'Los Angeles', 'Chicago'],
  },
  {
    id: 2,
    email: 'city-admin@example.com',
    role: USER_ROLE_MAP.CITY_ADMIN,
    createdAt: '2022-01-01T00:00:00.000Z',
    registered: true,
    citiesName: ['New York', 'Los Angeles'],
  },
  {
    id: 3,
    email: 'citizen@example.com',
    role: USER_ROLE_MAP.CITIZEN,
    createdAt: '2022-01-01T00:00:00.000Z',
    registered: true,
    citiesName: ['Chicago', 'Houston'],
  },
  {
    id: 4,
    email: 'citizen2@example.com',
    role: USER_ROLE_MAP.CITIZEN,
    createdAt: '2022-01-01T00:00:00.000Z',
    registered: true,
    citiesName: ['Philadelphia', 'Phoenix'],
  },
  {
    id: 5,
    email: 'citizen3@example.com',
    role: USER_ROLE_MAP.CITIZEN,
    createdAt: '2022-01-01T00:00:00.000Z',
    registered: true,
    citiesName: ['San Antonio', 'San Diego'],
  },
];
type AdminTableProps = {
  tableRows?: TableRows[];
  loading: boolean;
};

function AdminTable({ tableRows = DUMMY_DATA, loading }: AdminTableProps) {
  const { t } = useTypedTranslation();
  return (
    <ShacnTable className="border-2 my-4">
      <TableHeader className="bg-secondary rounded-full">
        <TableRow>
          <TableHead className="text-primary text-bold font-bold text-base ">
            {t('cityAdministration.table.head.email')}
          </TableHead>
          <TableHead className="text-bold font-bold text-base text-center">
            {t('cityAdministration.table.head.role')}
          </TableHead>
          <TableHead className="text-bold font-bold text-base text-center">
            {t('cityAdministration.table.head.cities')}
          </TableHead>
          <TableHead className="text-center text-bold font-bold text-base">
            {t('cityAdministration.table.head.createdAt')}
          </TableHead>
          <TableHead className="text-center text-bold font-bold text-base">
            {t('cityAdministration.table.head.registered')}
          </TableHead>
          <TableHead className="text-center text-bold font-bold text-base">
            {t('cityAdministration.table.head.actions')}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          <TableRow>
            <TableCell colSpan={6}>
              <div className="flex justify-center items-center py-10">
                <Spinner className="size-8 text-primary" />
              </div>
            </TableCell>
          </TableRow>
        ) : !tableRows.length ? (
          <TableRow>
            <TableCell colSpan={6}>
              <span className="flex justify-center items-center py-10 text-lg font-bold">
                {t('tile.table.noData')}
              </span>
            </TableCell>
          </TableRow>
        ) : (
          tableRows.map((rowData) => (
            <TableRow key={rowData.id}>
              <TableCell className="">{rowData.email}</TableCell>
              <TableCell className="text-center">
                {ROLE_USER_MAP[rowData.role]}
              </TableCell>
              <TableCell className="text-center">
                {rowData.citiesName.join(', ')}
              </TableCell>
              {/* TODO: Update performance */}
              <TableCell className="text-center">
                {format(new Date(rowData.createdAt), 'MMMM d, yyyy')}
              </TableCell>
              {/* TODO: Add Switcher Like Terminal Proj */}
              <TableCell className="text-center">
                {rowData.registered ? 'Yes' : 'No'}
              </TableCell>

              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-8">
                  {/* TODO: Add Navigation on Click to Edit */}
                  <Pencil className="cursor-pointer text-green-500 hover:fill-green-500 hover:text-green-500 transition-colors" />
                  <DeleteAction itemId={rowData.id} />
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </ShacnTable>
  );
}

export default AdminTable;
