import React from 'react';

import { Control, FieldValues, Path } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import FormErrorMessage from '@/shared/FormErrorMessage';

type InputProps = React.ComponentProps<typeof Input>;

export type TextInputFieldProps<FormType extends FieldValues> = {
  name: Path<FormType>;
  control: Control<FormType>;
  label: string;
  placeholder: string;
  required?: boolean;
  className?: string;
} & Omit<InputProps, 'name'>;

export function TextInputField<FormType extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  required,
  className,
  ...props
}: TextInputFieldProps<FormType>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="w-full">
          <FormLabel className="text-primary">
            {label.concat(required ? ' *' : '')}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              {...props}
              placeholder={placeholder}
              className={cn(
                'border p-3 h-12 shadow-md duration-300 border-gray-300 rounded-lg focus:border-primary focus:ring-primary',
                className,
                fieldState?.error?.message && 'border-red-500'
              )}
            />
          </FormControl>
          <FormErrorMessage className="text-red-600" />
        </FormItem>
      )}
    />
  );
}
