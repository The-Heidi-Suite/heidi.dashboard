import { Control, FieldValues, Path } from 'react-hook-form';
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnUnderline,
  BtnUndo,
  Editor,
  EditorProvider,
  Toolbar,
} from 'react-simple-wysiwyg';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import FormErrorMessage from '@/shared/FormErrorMessage';

export type RichTextFieldProps<FormType extends FieldValues> = {
  name: Path<FormType>;
  control: Control<FormType>;
  label: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

export function RichTextField<FormType extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  required,
  className,
}: RichTextFieldProps<FormType>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel className="text-primary">
            {label.concat(required ? ' *' : '')}
          </FormLabel>
          <FormControl>
            <EditorProvider>
              <Editor
                value={field.value || ''}
                onChange={field.onChange}
                placeholder={placeholder}
                className={cn(
                  'border p-3 min-h-[150px] rounded-lg shadow-sm focus:border-primary focus:ring-primary',
                  className,
                  fieldState?.error?.message && 'border-red-500'
                )}
              >
                <Toolbar>
                  <BtnBold />
                  <BtnItalic />
                  <BtnUnderline />
                  <BtnStrikeThrough />
                  <BtnBulletList />
                  <BtnClearFormatting />
                  <BtnNumberedList />
                  <BtnUndo />
                  <BtnRedo />
                  <BtnLink />
                </Toolbar>
              </Editor>
            </EditorProvider>
          </FormControl>
          <FormErrorMessage className="text-red-600" />
        </FormItem>
      )}
    />
  );
}
