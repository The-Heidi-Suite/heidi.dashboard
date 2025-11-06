import { CircleUserRound, Pencil } from 'lucide-react';

import { TileListingDataResponse } from '@/api/endpoints/tileListings';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import DeleteAction from '@/pages/Tiles/DeleteAction';

type TableRows = TileListingDataResponse['data'];

type TileTableProps = {
  tableRows: TableRows;
  loading: boolean;
};

function TileTable({ tableRows, loading }: TileTableProps) {
  const { t } = useTypedTranslation();
  return (
    <ShacnTable className="border-2 my-4">
      <TableHeader className="bg-secondary rounded-full">
        <TableRow>
          <TableHead className="text-primary text-bold font-bold text-base text-center">
            {t('tile.table.head.tile')}
          </TableHead>
          <TableHead className="text-bold font-bold text-base text-center">
            {t('tile.table.head.status')}
          </TableHead>
          <TableHead className="text-bold font-bold text-base text-center">
            {t('tile.table.head.description')}
          </TableHead>
          <TableHead className="text-center text-bold font-bold text-base">
            {t('tile.table.head.actions')}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          <TableRow>
            <TableCell colSpan={4}>
              <div className="flex justify-center items-center py-10">
                <Spinner className="size-8 text-primary" />
              </div>
            </TableCell>
          </TableRow>
        ) : !tableRows.length ? (
          <TableRow>
            <TableCell colSpan={4}>
              <span className="flex justify-center items-center py-10 text-lg font-bold">
                {t('tile.table.noData')}
              </span>
            </TableCell>
          </TableRow>
        ) : (
          tableRows.map((rowData) => (
            <TableRow key={rowData.id}>
              <TableCell className="font-medium max-w-40 md:max-w-6">
                <div className="flex flex-row items-center gap-5">
                  <Avatar>
                    <AvatarImage
                      src={rowData.bgImage}
                      alt={rowData.tileName.concat('-bg-image')}
                    />
                    <AvatarFallback>
                      <CircleUserRound className="text-primary" />
                    </AvatarFallback>
                  </Avatar>
                  <strong className="truncate block overflow-hidden text-ellipsis whitespace-nowrap">
                    {rowData.tileName}
                  </strong>
                </div>
              </TableCell>
              <TableCell className="text-center">{rowData.status}</TableCell>
              <TableCell className="text-center max-w-8 ">
                <span
                  className="truncate block overflow-hidden text-ellipsis whitespace-nowrap"
                  dangerouslySetInnerHTML={{ __html: rowData.description }}
                />
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

export default TileTable;
