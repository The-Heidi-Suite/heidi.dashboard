import { RotateCcw, SaveAll } from 'lucide-react';
import { useCallback } from 'react';

import { useForm, useWatch } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  useCreateTileUpload,
  useEditTileUpload,
} from '@/api/queries/tileUpload';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { useTypedTranslation } from '@/hooks';
import TileUploadPreview from '@/pages/Tiles/TileUploadPreview';
import { TileUploadForm, tileUploadSchema } from '@/schema/tileUpload';
import {
  ColorPickerField,
  FileUploadField,
  RichTextField,
  TextInputField,
} from '@/shared/FormField';

function TileUpload() {
  const { t } = useTypedTranslation();
  const { id } = useParams();
  const { mutate: createTile } = useCreateTileUpload();
  const { mutate: editTile } = useEditTileUpload();
  const form = useForm<TileUploadForm>({
    resolver: zodResolver(tileUploadSchema),
    defaultValues: {
      tileName: '',
      titleColor: '',
      tileIcon: null,
      tileDescription: '',
      tileDescriptionColor: '',
      tileImage: null,
    },
  });
  const tileName = useWatch({ control: form.control, name: 'tileName' });
  const titleColor = useWatch({ control: form.control, name: 'titleColor' });
  const tileIcon = useWatch({ control: form.control, name: 'tileIcon' });
  const tileDescription = useWatch({
    control: form.control,
    name: 'tileDescription',
  });
  const tileDescriptionColor = useWatch({
    control: form.control,
    name: 'tileDescriptionColor',
  });
  const tileImage = useWatch({ control: form.control, name: 'tileImage' });

  // TODO: Fix type
  const onSubmit = useCallback(
    (data: TileUploadForm) => {
      if (id) {
        // Edit API
        editTile({ tileId: id, payload: data });
      } else {
        // Create API
        createTile(data);
      }
    },
    [id, createTile, editTile]
  );

  return (
    <div className="w-full px-1">
      <h1 className="text-2xl font-semibold text-foreground">
        {t('tile.upload.heading')}
      </h1>
      <p className="text-foreground">{t('tile.upload.description')}</p>

      <div className="flex flex-col lg:flex-row gap-4 items-start w-full mt-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{t('tile.upload.heading')}</CardTitle>
            <CardDescription>{t('tile.upload.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <TextInputField
                  name="tileName"
                  control={form.control}
                  label="Tile Name"
                  placeholder="Enter Tile Name"
                />
                <ColorPickerField
                  control={form.control}
                  name="titleColor"
                  label="Tile Color"
                />

                <FileUploadField
                  control={form.control}
                  name="tileIcon"
                  required
                />

                <RichTextField
                  name="tileDescription"
                  control={form.control}
                  label="Description"
                  placeholder="Enter your HTML content"
                  required
                />

                <ColorPickerField
                  control={form.control}
                  name="tileDescriptionColor"
                  required
                  label="Tile Description Color"
                />

                <FileUploadField
                  control={form.control}
                  name="tileImage"
                  required
                  maxFileSize={6}
                />

                <div className="flex space-x-2">
                  <Button type="submit" className="flex-1">
                    <SaveAll className="size-7" /> Save
                  </Button>
                  {/* TODO: Fix hovering */}
                  <Button
                    variant="outline"
                    type="reset"
                    className="flex-1 border-red-500 text-red-500"
                    onClick={() => {
                      form.reset();
                      // window.location.reload();
                    }}
                  >
                    <RotateCcw /> Reset
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <TileUploadPreview
          {...{
            tileName,
            titleColor,
            tileIcon,
            tileDescription,
            tileDescriptionColor,
            tileImage,
          }}
        />
      </div>
    </div>
  );
}

export default TileUpload;
