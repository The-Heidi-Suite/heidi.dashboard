import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useTypedTranslation } from '@/hooks';

type TileUploadPreviewProps = {
  tileName?: string | undefined;
  titleColor?: string | undefined;
  tileIcon?: null | File;
  tileDescription?: string | undefined;
  tileDescriptionColor?: string | undefined;
  tileImage?: null | File;
};

const TileUploadPreview = ({
  tileName = 'Dummy Text',
  titleColor,
  tileIcon,
  tileDescription,
  tileDescriptionColor,
  tileImage,
}: TileUploadPreviewProps) => {
  const { t } = useTypedTranslation();
  return (
    <Card className="w-full max-h-max">
      <CardHeader>
        <CardTitle>{t('tile.upload.previewHeading')}</CardTitle>
        <CardDescription>{t('tile.upload.previewDescription')}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-muted/30 p-4 rounded-lg">
          <div
            className="bg-background border border-border rounded-lg max-w-sm mx-auto shadow-lg overflow-hidden max-h-72 bg-center bg-cover flex flex-col justify-between pl-4"
            style={{
              backgroundImage: `url(${tileImage ? URL.createObjectURL(tileImage) : 'https://picsum.photos/800'})`,
            }}
          >
            <div
              className="bg-lime-500 mt-12 max-w-52 p-2 rounded-lg flex items-center gap-4"
              style={{ backgroundColor: titleColor }}
            >
              {tileIcon && (
                <img
                  src={URL.createObjectURL(tileIcon)}
                  alt="tileIcon"
                  className="size-8"
                />
              )}
              {tileName || 'Dummy Text'}
            </div>
            {/* TODO: Fix this Description CSS */}
            <div
              className="bg-blue-500 mb-24 max-w-52 p-2 rounded-lg overflow-hidden text-ellipsis whitespace-nowrap"
              dangerouslySetInnerHTML={{
                __html:
                  tileDescription ||
                  `
                  BBsdadssadasdasdasdasdasdasdas BBsdadssadasdasdasdasdasdasdas
                  BBsdadssadasdasdasdasdasdasdas BBsdadssadasdasdasdasdasdasdas
                  `,
              }}
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 6, // Number of visible lines before truncation
                lineHeight: '1.5em',
                maxHeight: '9.5em', // ensures 6 lines fit
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                backgroundColor: tileDescriptionColor,
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default React.memo(TileUploadPreview);
