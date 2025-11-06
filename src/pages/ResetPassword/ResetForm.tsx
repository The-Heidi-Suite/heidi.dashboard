import { SaveAll } from 'lucide-react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { useUpdateUserPassword } from '@/api/queries';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useTypedTranslation } from '@/hooks';
import { PasswordFormType, passwordSchema } from '@/schema/profile';
import { PasswordField } from '@/shared/FormField';

function ResetForm() {
  const { t } = useTypedTranslation();
  const navigate = useNavigate();

  //   TODO: Update here different API this api is for dummy purpose
  const updatePassword = useUpdateUserPassword();

  const form = useForm<PasswordFormType>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: PasswordFormType) => {
    updatePassword.mutate(data, {
      onSuccess: (data) => {
        if (data.success) {
          toast.success(data.message);
          navigate('/login');
        } else {
          toast.error(data.error);
        }
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <PasswordField
          control={form.control}
          name="newPassword"
          label={t('accountSetting.form.newPassword.label')}
          placeholder={t('accountSetting.form.newPassword.placeholder')}
        />
        <PasswordField
          control={form.control}
          name="confirmPassword"
          label={t('accountSetting.form.confirmPassword.label')}
          placeholder={t('accountSetting.form.confirmPassword.placeholder')}
        />
        <Button type="submit" className="">
          <SaveAll className="size-7" />{' '}
          {t('accountSetting.section.password.description')}
        </Button>
      </form>
    </Form>
  );
}

export default ResetForm;
