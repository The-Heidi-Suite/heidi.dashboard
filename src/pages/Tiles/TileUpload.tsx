import { RotateCcw, SaveAll } from 'lucide-react';
import { useCallback, useEffect } from 'react';

import { useForm, useWatch } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { useUploadImage } from '@/api/queries/imageUpload';
import {
  useCreateTileUpload,
  useEditTileUpload,
  useGetTile,
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
  const createTile = useCreateTileUpload();
  const uploadImage = useUploadImage();
  const { data: tileData } = useGetTile(id ?? '');
  const editTile = useEditTileUpload();
  const form = useForm<TileUploadForm>({
    resolver: zodResolver(tileUploadSchema),
    defaultValues: {
      header: '',
      websiteUrl: '',
      headerBackgroundColor: '',
      iconImageUrl: null,
      subheader: '',
      description: '',
      contentBackgroundColor: '',
      backgroundImageUrl: null,
    },
  });
  const tileName = useWatch({ control: form.control, name: 'header' });
  const titleColor = useWatch({
    control: form.control,
    name: 'headerBackgroundColor',
  });
  const tileIcon = useWatch({ control: form.control, name: 'iconImageUrl' });
  const subHeader = useWatch({ control: form.control, name: 'subheader' });
  const tileDescription = useWatch({
    control: form.control,
    name: 'description',
  });
  const tileDescriptionColor = useWatch({
    control: form.control,
    name: 'contentBackgroundColor',
  });
  const tileImage = useWatch({
    control: form.control,
    name: 'backgroundImageUrl',
  });
  useEffect(() => {
    async function load() {
      if (tileData?.success) {
        const { cities, isActive, opnInExternalBrowser, ...remTileData } =
          tileData.data;
        form.reset({ ...remTileData });
        void cities;
        void isActive;
        void opnInExternalBrowser;
      }
    }
    load();
  }, [tileData]);
  // TODO: Fix type
  const onSubmit = useCallback(
    (data: TileUploadForm) => {
      if (id) {
        // Edit API
        editTile.mutate(
          { tileId: id, payload: data },
          {
            onSuccess: (resp) => {
              if (resp.success) {
                toast.success(resp.message);
              } else {
                toast.error(resp.error);
              }
            },
          }
        );
        return;
      }

      // Create API
      createTile.mutate(data, {
        onSuccess: async (resp) => {
          if (!resp.success) {
            toast.error(resp.error);
            return;
          }
          toast.success(resp.message);
          // id returned from create response
          //ToDO: fix response
          // const Id = await resp.data?.id;
          // // get the raw value from the form — could be string | File | null
          // const raw = form.getValues('backgroundImageUrl');

          // // convert raw -> File | null
          // let fileToUpload: File | null = null;

          // try {
          //   if (typeof raw === 'string' && raw) {
          //     // convert url -> File (requires CORS on the remote URL)
          //     const response = await fetch(raw);
          //     if (response.ok) {
          //       const blob = await response.blob();
          //       const ext = (blob.type.split('/')[1] ?? 'jpg').split('+')[0];
          //       fileToUpload = new File([blob], `background.${ext}`, {
          //         type: blob.type,
          //       });
          //     } else {
          //       console.error(
          //         'Failed to fetch image URL:',
          //         response.status,
          //         response.statusText
          //       );
          //     }
          //   } else if (raw instanceof File) {
          //     fileToUpload = raw;
          //   }
          // } catch (err) {
          //   console.error(
          //     'Error converting background image URL to File:',
          //     err
          //   );
          // }

          // // Upload image only if we have both Id and a File
          // if (Id && fileToUpload) {
          //   uploadImage.mutate(
          //     {
          //       payload: { file: fileToUpload },
          //       id: Id,
          //     },
          //     {
          //       onSuccess: (uploadResp) => {
          //         if (uploadResp.success) {
          //           toast.success(uploadResp.message);
          //         } else {
          //           toast.error(uploadResp.error ?? 'Upload failed');
          //         }
          //       },
          //       onError: (err) => {
          //         console.error('Upload error', err);
          //         toast.error('Image upload failed');
          //       },
          //     }
          //   );
          // } else {
          //   // still show create success even if no file to upload
          //   toast.success(resp.message);
          // }
        },
      });
    },
    // include all external references used inside the callback
    [id, createTile, editTile, form, uploadImage]
  );

  return (
    <div className="w-full px-1">
      <h1 className="text-2xl font-semibold text-foreground">
        {t('tile.upload.heading')}
      </h1>
      <p className="text-foreground">{t('tile.upload.description')}</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full mt-8">
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
                  name="header"
                  control={form.control}
                  label={t('tile.upload.form.tileName.label')}
                  placeholder={t('tile.upload.form.tileName.placeholder')}
                />

                <TextInputField
                  name="websiteUrl"
                  control={form.control}
                  label={t('tile.upload.form.redirectURL.label')}
                  placeholder={t('tile.upload.form.redirectURL.placeholder')}
                />

                <ColorPickerField
                  control={form.control}
                  name="headerBackgroundColor"
                  label={t('tile.upload.form.titleColor.label')}
                />

                <FileUploadField
                  control={form.control}
                  name="iconImageUrl"
                  required
                />

                <TextInputField
                  name="subheader"
                  control={form.control}
                  label={t('tile.upload.form.subHeader.label')}
                  placeholder={t('tile.upload.form.subHeader.label')}
                />

                <RichTextField
                  name="description"
                  control={form.control}
                  label={t('tile.upload.form.tileDescription.label')}
                  className="h-32 overflow-y-auto"
                  placeholder={t(
                    'tile.upload.form.tileDescription.placeholder'
                  )}
                  required
                />

                <ColorPickerField
                  control={form.control}
                  name="contentBackgroundColor"
                  required
                  label={t('tile.upload.form.titleDescriptionColor.label')}
                />

                <FileUploadField
                  control={form.control}
                  name="backgroundImageUrl"
                  required
                  maxFileSize={6}
                />

                <div className="flex space-x-2">
                  <Button type="submit" className="flex-1">
                    <SaveAll className="size-7" />{' '}
                    {t('accountSetting.form.saveBtn')}
                  </Button>
                  {/* TODO: Fix hovering */}
                  <Button
                    variant="outline"
                    type="reset"
                    className="flex-1 border-red-500 text-red-500"
                    onClick={() => {
                      form.reset();
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
            subHeader,
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
