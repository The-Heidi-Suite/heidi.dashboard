import { Upload, X } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// TODO: Do some more test with maxSize Uploading image might be math.floor is culprit
type GeneralProps = {
  name: string;
  value: string | null;
  label: string;
  selectBtnName: string;
  placeholderText: string;
  onChange: (file: File | null) => void;
  accept: string;
  maxFileSize: number;
  supportedExtension: string[];
  formErrMsg: string;
  errorName: {
    maxFileSize: string;
    supportedExtension: string;
    invalidFile: string;
  };
  required: boolean;
};
type ImageUploaderProps = {
  name: string;
} & Partial<GeneralProps>;

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  name,
  label = 'formMessages.uploadField.label',
  onChange,
  placeholderText = 'formMessages.uploadField.placeholder',
  selectBtnName = 'formMessages.uploadField.btnLabel',
  accept = 'image/*',
  value = null,
  //   TODO: Make And Constant and import here
  maxFileSize = 1,
  supportedExtension = ['jpg', 'jpeg', 'png'],
  errorName = {
    maxFileSize: 'formMessages.uploadField.errorName.maxFileSize',
    supportedExtension: 'formMessages.uploadField.errorName.supportedExtension',
    invalidFile: 'formMessages.uploadField.errorName.invalidFile',
  },
  formErrMsg,
  required,
}) => {
  const { t } = useTranslation();
  const [preview, setPreview] = useState<string | null>(value);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = useCallback(
    (selectedFile: File) => {
      if (selectedFile && selectedFile.type.startsWith('image/')) {
        const extension = selectedFile.name.split('.')[1];
        const sizeInMb = Math.floor(selectedFile.size / 1000000);
        if (sizeInMb > maxFileSize) {
          toast.error(`${t(errorName.maxFileSize)} ${maxFileSize} mb`);
        } else if (supportedExtension.includes(extension)) {
          const blobUrl = URL.createObjectURL(selectedFile);
          setPreview(blobUrl);
          onChange?.(selectedFile);
        } else {
          toast.error(
            `${errorName.supportedExtension} : ${supportedExtension.join(',')}`,
            {
              duration: 3000,
            }
          );
        }
      } else {
        toast.error(t(errorName.invalidFile));
      }
    },
    [maxFileSize, onChange, supportedExtension, t, errorName]
  );

  /** Drag & Drop Support */
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const droppedFile = e.dataTransfer.files?.[0];
      if (droppedFile) handleFile(droppedFile);
    },
    [handleFile]
  );

  useEffect(() => {
    return () => {
      if (preview?.startsWith('blob:')) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleRemove = () => {
    setPreview(null);
    onChange?.(null);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium">
          {t(label)}
          {!!required && ' *'}
        </label>
      )}

      <div
        className={cn(
          'border-2 border-dashed rounded-lg p-4 text-center transition-colors border-primary',
          isDragging && 'border-blue-500 bg-white',
          formErrMsg && 'border-red-500'
        )}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        {preview ? (
          <div className="relative">
            <img
              src={preview}
              alt="Preview"
              className="rounded-md object-cover mx-auto aspect-square size-60"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-2 -right-2 bg-white shadow-sm hover:bg-red-50"
              onClick={handleRemove}
            >
              <X className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        ) : (
          <>
            <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">
              {t(placeholderText)}
            </p>

            <input
              type="file"
              accept={accept}
              id={name}
              className="hidden"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) handleFile(selectedFile);
              }}
            />

            <Button
              asChild
              variant="outline"
              size="sm"
              className="mt-2 cursor-pointer dark:bg-primary dark:text-primary-foreground"
            >
              <label htmlFor={name}>{t(selectBtnName)}</label>
            </Button>
          </>
        )}
      </div>

      {formErrMsg && <p className="text-red-500 text-sm">{t(formErrMsg)}</p>}
    </div>
  );
};

type FileUploadFieldProps<FormType extends FieldValues> = {
  name: Path<FormType>;
  control: Control<FormType>;
} & ImageUploaderProps;

export const FileUploadField = <FormType extends FieldValues>({
  control,
  name,
  ...restProps
}: FileUploadFieldProps<FormType>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <ImageUploader
          value={field.value}
          onChange={field.onChange}
          name={name}
          formErrMsg={fieldState?.error?.message}
          {...restProps}
        />
      )}
    />
  );
};
