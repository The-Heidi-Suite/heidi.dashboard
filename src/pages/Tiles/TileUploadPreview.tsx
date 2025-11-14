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
  subHeader?: string | undefined;
  tileDescription?: string | undefined;
  tileDescriptionColor?: string | undefined;
  tileImage?: null | File;
};

const TileUploadPreview = ({
  tileName,
  titleColor,
  tileIcon,
  subHeader,
  tileDescription,
  tileDescriptionColor,
  tileImage,
}: TileUploadPreviewProps) => {
  const { t } = useTypedTranslation();
  const displayTileName = tileName || t('tile.upload.dummyText');
  const displaySubHeader = subHeader || t('tile.upload.defaultHeader');
  const displayDescription =
    tileDescription || t('tile.upload.tilePreviewDescription');
  return (
    <Card className="w-full max-h-max">
      <CardHeader>
        <CardTitle>{t('tile.upload.previewHeading')}</CardTitle>
        <CardDescription>{t('tile.upload.previewDescription')}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-muted/30 p-4 rounded-lg">
          <div
            className="bg-background border border-border rounded-lg max-w-sm mx-auto shadow-lg overflow-hidden max-h-72 bg-center bg-cover flex flex-col justify-between"
            style={{
              backgroundImage: `url(${
                tileImage
                  ? typeof tileImage === 'string'
                    ? tileImage
                    : tileImage
                      ? URL.createObjectURL(tileImage)
                      : undefined
                  : 'https://picsum.photos/800'
              })`,
            }}
          >
            <div
              className="bg-lime-500 mt-8 max-w-52 p-1 rounded-lg flex items-center gap-2 font-semibold"
              style={{ backgroundColor: titleColor }}
            >
              {tileIcon && (
                <img
                  src={
                    typeof tileIcon === 'string'
                      ? tileIcon
                      : tileIcon
                        ? URL.createObjectURL(tileIcon)
                        : undefined
                  }
                  alt="tileIcon"
                  className="size-5 object-cover"
                />
              )}
              <p
                className="text-sm"
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2, // number of visible lines before truncation
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                  lineHeight: '1.5em',
                  maxHeight: '3em',
                }}
              >
                {displayTileName}
              </p>
            </div>
            {/* TODO: Fix this Description CSS */}
            <div
              className="mb-24 max-w-52 p-2 rounded-tr-lg rounded-br-lg text-white mt-16"
              style={{
                backgroundColor: tileDescriptionColor || '#3B82F6',
              }}
            >
              <h5 className="font-semibold text-base">{displaySubHeader}</h5>
              <p
                className="text-sm"
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 4, // number of visible lines before truncation
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                  lineHeight: '1.5em',
                  maxHeight: '9em',
                }}
                dangerouslySetInnerHTML={{
                  __html: displayDescription,
                }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default React.memo(TileUploadPreview);
